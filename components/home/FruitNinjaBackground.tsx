"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

type FruitType = "banana" | "raspberry" | "apple"

type Fruit = {
  id: number
  type: FruitType
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
  sliced: boolean
  life: number
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  life: number
  color: string
}

const IMAGE_PATHS = {
  banana: "/assets/fruit-ninja/banana-01.png",
  bananaLeft: "/assets/fruit-ninja/cut-banana1-04.png",
  bananaRight: "/assets/fruit-ninja/cut-banana2-05.png",
  raspberry: "/assets/fruit-ninja/raspberry.png",
  raspberryHalf: "/assets/fruit-ninja/cut-raspberry-01.png",
  apple: "/assets/fruit-ninja/green-apple-02.png",
  appleHalf: "/assets/fruit-ninja/slice-green-apple-03.png",
  sword: "/assets/fruit-ninja/sword.png",
}

const SOUND_PATHS = {
  slice: "/sounds/slice.mp3",
  splat: "/sounds/splat.mp3",
}

export function FruitNinjaBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const swordRef = useRef<HTMLImageElement | null>(null)

  const sliceSoundRef = useRef<HTMLAudioElement | null>(null)
  const splatSoundRef = useRef<HTMLAudioElement | null>(null)

  const audioReadyRef = useRef(false)
  const mutedRef = useRef(false)

  const [muted, setMuted] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)

  const enableAudio = () => {
    audioReadyRef.current = true
    setSoundEnabled(true)

    const slice = sliceSoundRef.current
    const splat = splatSoundRef.current

    if (slice) {
      slice.volume = mutedRef.current ? 0 : 0.35
      slice.play().then(() => {
        slice.pause()
        slice.currentTime = 0
      }).catch(() => {})
    }

    if (splat) {
      splat.volume = mutedRef.current ? 0 : 0.22
      splat.play().then(() => {
        splat.pause()
        splat.currentTime = 0
      }).catch(() => {})
    }
  }

  useEffect(() => {
    const canvasEl = canvasRef.current
    if (!canvasEl) return
    
    const context = canvasEl.getContext("2d", { alpha: true })
    if (!context) return
    
    const canvas: HTMLCanvasElement = canvasEl
    const ctx: CanvasRenderingContext2D = context

    let raf = 0
    let width = 0
    let height = 0
    let dpr = 1
    let fruitId = 0
    let spawnTimer = 0
    let lastTime = performance.now()
    let isPointerInside = false

    let pointer = { x: 0, y: 0 }
    let previousPointer = { x: 0, y: 0 }
    let slashTrail: { x: number; y: number; life: number }[] = []

    const fruits: Fruit[] = []
    const particles: Particle[] = []
    const images: Record<string, HTMLImageElement> = {}

    Object.entries(IMAGE_PATHS).forEach(([key, src]) => {
      const img = new Image()
      img.src = src
      images[key] = img

      if (key === "sword") {
        swordRef.current = img
      }
    })

    sliceSoundRef.current = new Audio(SOUND_PATHS.slice)
    splatSoundRef.current = new Audio(SOUND_PATHS.splat)

    sliceSoundRef.current.volume = 0.35
    splatSoundRef.current.volume = 0.22

    function resize() {
      const rect = canvas.getBoundingClientRect()

      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function randomFruitType(): FruitType {
      const types: FruitType[] = ["banana", "raspberry", "apple"]
      return types[Math.floor(Math.random() * types.length)]
    }

    function spawnFruit() {
        const maxFruit = window.innerWidth < 768 ? 7 : 12
if (fruits.length >= maxFruit) return
      if (fruits.length >= 12) return

      const type = randomFruitType()

      const mobileScale = window.innerWidth < 768 ? 0.72 : 1

      const size =
        (
          type === "banana"
            ? 260 + Math.random() * 90
            : type === "apple"
              ? 220 + Math.random() * 80
              : 190 + Math.random() * 70
        ) * mobileScale

      const fromLeft = Math.random() > 0.5

      const startX = fromLeft
        ? Math.random() * width * 0.25
        : width - Math.random() * width * 0.25

      fruits.push({
        id: fruitId++,
        type,
        x: startX,
        y: height + size * 0.8,
        vx: (Math.random() - 0.5) * 5,
        vy: -13 - Math.random() * 5,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
        sliced: false,
        life: 1,
      })
    }

    function playSound(type: "slice" | "splat") {
      if (!audioReadyRef.current || mutedRef.current) return

      const sound =
        type === "slice" ? sliceSoundRef.current : splatSoundRef.current

      if (!sound) return

      sound.currentTime = 0
      sound.play().catch(() => {})
    }

    function createJuice(x: number, y: number, type: FruitType) {
      const color =
        type === "banana"
          ? "#f3db03"
          : type === "apple"
            ? "#9be33f"
            : "#ff3672"

      for (let i = 0; i < 28; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          radius: 2 + Math.random() * 5,
          life: 1,
          color,
        })
      }
    }

    function sliceFruit(fruit: Fruit) {
      if (fruit.sliced) return

      fruit.sliced = true
      createJuice(fruit.x, fruit.y, fruit.type)

      playSound("slice")
      setTimeout(() => playSound("splat"), 70)
    }

    function distanceToSegment(
      px: number,
      py: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) {
      const dx = x2 - x1
      const dy = y2 - y1

      if (dx === 0 && dy === 0) return Math.hypot(px - x1, py - y1)

      const t = Math.max(
        0,
        Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy))
      )

      const cx = x1 + t * dx
      const cy = y1 + t * dy

      return Math.hypot(px - cx, py - cy)
    }

    function drawImageCentered(
      img: HTMLImageElement | undefined,
      x: number,
      y: number,
      size: number,
      rotation: number
    ) {
      if (!img || !img.complete) return

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      const ratio = img.width / img.height
      const drawW = ratio >= 1 ? size : size * ratio
      const drawH = ratio >= 1 ? size / ratio : size

      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH)
      ctx.restore()
    }

    function drawFruit(fruit: Fruit) {
      if (!fruit.sliced) {
        drawImageCentered(
          images[fruit.type],
          fruit.x,
          fruit.y,
          fruit.size,
          fruit.rotation
        )
        return
      }

      const halfSize = fruit.size * 0.72
      const split = 34 * (1 - fruit.life + 0.35)

      if (fruit.type === "banana") {
        drawImageCentered(images.bananaLeft, fruit.x - split, fruit.y, halfSize, fruit.rotation - 0.35)
        drawImageCentered(images.bananaRight, fruit.x + split, fruit.y, halfSize, fruit.rotation + 0.35)
      }

      if (fruit.type === "raspberry") {
        drawImageCentered(images.raspberryHalf, fruit.x - split, fruit.y, halfSize, fruit.rotation - 0.35)

        ctx.save()
        ctx.scale(-1, 1)
        drawImageCentered(images.raspberryHalf, -fruit.x - split, fruit.y, halfSize, -fruit.rotation + 0.35)
        ctx.restore()
      }

      if (fruit.type === "apple") {
        drawImageCentered(images.appleHalf, fruit.x - split, fruit.y, halfSize, fruit.rotation - 0.3)

        ctx.save()
        ctx.scale(-1, 1)
        drawImageCentered(images.appleHalf, -fruit.x - split, fruit.y, halfSize, -fruit.rotation + 0.3)
        ctx.restore()
      }
    }

    function drawSlashTrail() {
      if (slashTrail.length < 2) return

      ctx.save()
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      for (let i = 1; i < slashTrail.length; i++) {
        const a = slashTrail[i - 1]
        const b = slashTrail[i]
        const alpha = Math.min(a.life, b.life)

        ctx.strokeStyle = `rgba(255,255,255,${alpha})`
        ctx.lineWidth = 7 * alpha
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()

        ctx.strokeStyle = `rgba(255,54,114,${alpha * 0.5})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      ctx.restore()
    }

    function drawSword() {
        if (window.innerWidth < 768) return; // Hide sword on mobile
      const sword = swordRef.current
      if (!isPointerInside || !sword || !sword.complete) return

      const dx = pointer.x - previousPointer.x
      const dy = pointer.y - previousPointer.y
      const angle = Math.atan2(dy, dx) || -0.8

      ctx.save()
      ctx.translate(pointer.x, pointer.y)
      ctx.rotate(angle + Math.PI * 0.12)
      ctx.drawImage(sword, -14, -120, 120, 240)
      ctx.restore()
    }

    function animate(now: number) {
      const delta = Math.min((now - lastTime) / 16.67, 2)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      spawnTimer += delta
      if (spawnTimer > 18) {
        spawnFruit()
        spawnTimer = 0
      }

      fruits.forEach((fruit) => {
        fruit.x += fruit.vx * delta
        fruit.y += fruit.vy * delta
        fruit.vy += 0.12 * delta
        fruit.rotation += fruit.rotationSpeed * delta

        if (fruit.sliced) fruit.life -= 0.018 * delta

        drawFruit(fruit)
      })

      for (let i = fruits.length - 1; i >= 0; i--) {
        const fruit = fruits[i]
        if (
          fruit.y > height + fruit.size * 2 ||
          fruit.x < -fruit.size * 2 ||
          fruit.x > width + fruit.size * 2 ||
          fruit.life <= 0
        ) {
          fruits.splice(i, 1)
        }
      }

      particles.forEach((p) => {
        p.x += p.vx * delta
        p.y += p.vy * delta
        p.vy += 0.08 * delta
        p.life -= 0.025 * delta

        ctx.globalAlpha = Math.max(p.life, 0)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })

      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) particles.splice(i, 1)
      }

      slashTrail.forEach((p) => {
        p.life -= 0.08 * delta
      })

      slashTrail = slashTrail.filter((p) => p.life > 0)

      drawSlashTrail()
      drawSword()

      raf = requestAnimationFrame(animate)
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect()

      const next = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }

      const prev = pointer
      previousPointer = prev
      pointer = next
      isPointerInside = true

      const speed = Math.hypot(next.x - prev.x, next.y - prev.y)

      if (speed > 4) {
        slashTrail.push({ x: next.x, y: next.y, life: 1 })

        fruits.forEach((fruit) => {
          if (fruit.sliced) return

          const hitRadius = fruit.size * 0.42

          const distance = distanceToSegment(
            fruit.x,
            fruit.y,
            prev.x,
            prev.y,
            next.x,
            next.y
          )

          if (distance < hitRadius && speed > 12) {
            sliceFruit(fruit)
          }
        })
      }
    }

    function handlePointerEnter() {
      isPointerInside = true
    }

    function handlePointerLeave() {
      isPointerInside = false
      slashTrail = []
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else {
        lastTime = performance.now()
        raf = requestAnimationFrame(animate)
      }
    }

    resize()

    for (let i = 0; i < 6; i++) {
      setTimeout(() => spawnFruit(), i * 180)
    }

    raf = requestAnimationFrame(animate)

    window.addEventListener("resize", resize)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerenter", handlePointerEnter)
    canvas.addEventListener("pointerleave", handlePointerLeave)
    canvas.addEventListener("pointerdown", enableAudio, { once: true })
    canvas.addEventListener("touchstart", enableAudio, { once: true })

    return () => {
      cancelAnimationFrame(raf)

      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerenter", handlePointerEnter)
      canvas.removeEventListener("pointerleave", handlePointerLeave)
      canvas.removeEventListener("pointerdown", enableAudio)
      canvas.removeEventListener("touchstart", enableAudio)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      {/* MUTE / SOUND BUTTON */}
      <button
        onClick={() => {
          // Unlock audio on first interaction
          if (!audioReadyRef.current) {
            audioReadyRef.current = true
  
            sliceSoundRef.current?.play().catch(() => {})
            sliceSoundRef.current?.pause()
  
            if (sliceSoundRef.current) {
              sliceSoundRef.current.currentTime = 0
            }
  
            splatSoundRef.current?.play().catch(() => {})
            splatSoundRef.current?.pause()
  
            if (splatSoundRef.current) {
              splatSoundRef.current.currentTime = 0
            }
          }
  
          mutedRef.current = !mutedRef.current
          setMuted(mutedRef.current)
        }}
        className="
          fixed top-[140px] md:top-[96px] right-6 z-[9999]
          w-11 h-11
          rounded-full
          bg-black/50
          backdrop-blur-md
          border border-white/20
          flex items-center justify-center
          text-white
          hover:bg-black/70
          transition
          pointer-events-auto
        "
        aria-label="Toggle sound"
        type="button"
      >
        {muted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
  
      {/* CANVAS */}
      <canvas
  ref={canvasRef}
  className="
    absolute inset-0 z-0
    h-full w-full
    cursor-none
    touch-pan-y md:touch-none
    pointer-events-auto
  "
  aria-hidden="true"
/>
    </div>
  )
}