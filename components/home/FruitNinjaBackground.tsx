"use client"

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"

export type FruitNinjaBackgroundHandle = {
  unlockAudio: () => void
  resetScore: () => void
  clearFruit: () => void
}

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
  countedMiss: boolean
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

type Splat = {
  x: number
  y: number
  size: number
  rotation: number
  life: number
  imageKey: string
}

type Callout = {
  id: number
  text: string
  x: number
  y: number
  life: number
  color: string
  rotation: number
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

  splatPink1: "/assets/fruit-ninja/splat-pink-1.png",
  splatPink2: "/assets/fruit-ninja/splat-pink-2.png",
  splatYellow1: "/assets/fruit-ninja/splat-yellow-1.png",
  splatYellow2: "/assets/fruit-ninja/splat-yellow-2.png",
  splatGreen1: "/assets/fruit-ninja/splat-green-1.png",
  splatGreen2: "/assets/fruit-ninja/splat-green-2.png",
}

const SLICE_SOUNDS = [
  "/sounds/slice1.mp3",
  "/sounds/slice2.mp3",
  "/sounds/slice3.mp3",
  "/sounds/slice4.mp3",
  "/sounds/slice5.mp3",
  "/sounds/slice6.mp3",
  "/sounds/slice7.mp3",
  "/sounds/slice8.mp3",
]

const SPLAT_SOUNDS = [
  "/sounds/splat1.mp3",
  "/sounds/splat2.mp3",
  "/sounds/splat3.mp3",
  "/sounds/splat4.mp3",
  "/sounds/splat5.mp3",
]

const CALLOUTS = [
  "JUICYYY!",
  "BANG ON!",
  "バンオン!",
  "DELICIOUS!",
  "THAT'S TART!",
  "SMOOTH HIT!",
  "99 PROOF!",
  "KILLING IT!",
]

const RARE_CALLOUTS = [
  "WANNA BANG?",
  "CONCENTRATED!",
  "HIGH PROOF!",
  "CANADA'S 99!",
  "BORN IN BC!",
]

export const FruitNinjaBackground = forwardRef<
  FruitNinjaBackgroundHandle,
  {
    muted: boolean
    gameActive?: boolean
    gamePaused?: boolean
    onScoreChange?: (score: number) => void
    onMissChange?: (misses: number) => void
    onFrenzyChange?: (active: boolean) => void
    onMayhemChange?: (active: boolean) => void
    onGameOver?: (finalScore: number) => void
  }
>(function FruitNinjaBackground(
  {
    muted,
    gameActive = false,
    gamePaused = false,
    onScoreChange,
    onMissChange,
    onFrenzyChange,
    onMayhemChange,
    onGameOver,
  },
  ref
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const swordRef = useRef<HTMLImageElement | null>(null)

  const sliceSoundRefs = useRef<HTMLAudioElement[]>([])
  const splatSoundRefs = useRef<HTMLAudioElement[]>([])

  const audioReadyRef = useRef(false)
  const mutedRef = useRef(muted)
  const gameActiveRef = useRef(gameActive)
  const gamePausedRef = useRef(gamePaused)

  const scoreRef = useRef(0)
  const missesRef = useRef(0)
  const gameOverRef = useRef(false)

  const onScoreChangeRef = useRef(onScoreChange)
  const onMissChangeRef = useRef(onMissChange)
  const onFrenzyChangeRef = useRef(onFrenzyChange)
  const onMayhemChangeRef = useRef(onMayhemChange)
  const onGameOverRef = useRef(onGameOver)

  const clearFruitRef = useRef<() => void>(() => {})

  useEffect(() => {
    mutedRef.current = muted
  }, [muted])

  useEffect(() => {
    gameActiveRef.current = gameActive
    if (gameActive) gameOverRef.current = false
  }, [gameActive])

  useEffect(() => {
    gamePausedRef.current = gamePaused
  }, [gamePaused])

  useEffect(() => {
    onScoreChangeRef.current = onScoreChange
  }, [onScoreChange])

  useEffect(() => {
    onMissChangeRef.current = onMissChange
  }, [onMissChange])

  useEffect(() => {
    onFrenzyChangeRef.current = onFrenzyChange
  }, [onFrenzyChange])

  useEffect(() => {
    onMayhemChangeRef.current = onMayhemChange
  }, [onMayhemChange])

  useEffect(() => {
    onGameOverRef.current = onGameOver
  }, [onGameOver])

  function randomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
  }

  function unlockAudio() {
    audioReadyRef.current = true

    ;[...sliceSoundRefs.current, ...splatSoundRefs.current].forEach((audio) => {
      audio
        .play()
        .then(() => {
          audio.pause()
          audio.currentTime = 0
        })
        .catch(() => {})
    })
  }

  function resetScoreAndMisses() {
    scoreRef.current = 0
    missesRef.current = 0
    gameOverRef.current = false
    onScoreChangeRef.current?.(0)
    onMissChangeRef.current?.(0)
  }

  useImperativeHandle(ref, () => ({
    unlockAudio,
    resetScore: resetScoreAndMisses,
    clearFruit: () => clearFruitRef.current(),
  }))

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
    let calloutId = 0
    let successfulCuts = 0

    let waveTimer = 0
    let waveIndex = 0
    let waveSpawnQueue = 0
    let waveSpawnTimer = 0

    let frenzyTriggered = false
    let frenzyActive = false
    let mayhemTriggered = false
    let mayhemActive = false
    let internalPaused = false
    let frenzyTimeout: number | null = null
    let mayhemTimeout: number | null = null

    let lastTime = performance.now()
    let isPointerInside = false

    let pointer = { x: 0, y: 0 }
    let previousPointer = { x: 0, y: 0 }
    let slashTrail: { x: number; y: number; life: number }[] = []
    let slashPowerHistory: number[] = []

    const fruits: Fruit[] = []
    const particles: Particle[] = []
    const splats: Splat[] = []
    const callouts: Callout[] = []
    const images: Record<string, HTMLImageElement> = {}

    clearFruitRef.current = () => {
      fruits.length = 0
      particles.length = 0
      splats.length = 0
      callouts.length = 0
      slashTrail = []
      slashPowerHistory = []
      waveTimer = 0
      waveSpawnQueue = 0
      waveSpawnTimer = 0
    }

    Object.entries(IMAGE_PATHS).forEach(([key, src]) => {
      const img = new Image()
      img.src = src
      images[key] = img

      if (key === "sword") swordRef.current = img
    })

    sliceSoundRefs.current = SLICE_SOUNDS.map((src) => {
      const audio = new Audio(src)
      audio.volume = 0.25
      return audio
    })

    splatSoundRefs.current = SPLAT_SOUNDS.map((src) => {
      const audio = new Audio(src)
      audio.volume = 0.12
      return audio
    })

    function resize() {
      const rect = canvas.getBoundingClientRect()

      width = rect.width
      height = rect.height
      dpr =
  window.innerWidth < 768
    ? Math.min(window.devicePixelRatio || 1, 1.25)
    : Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function getFruitColor(type: FruitType) {
      return type === "banana"
        ? "#f3db03"
        : type === "apple"
          ? "#9be33f"
          : "#ff3672"
    }

    function getSplatKey(type: FruitType) {
      if (type === "banana") {
        return Math.random() > 0.5 ? "splatYellow1" : "splatYellow2"
      }

      if (type === "apple") {
        return Math.random() > 0.5 ? "splatGreen1" : "splatGreen2"
      }

      return Math.random() > 0.5 ? "splatPink1" : "splatPink2"
    }

    function randomFruitType(): FruitType {
      return randomItem(["banana", "raspberry", "apple"])
    }

    function spawnFruit() {
      const mobile = window.innerWidth < 768
      const maxFruit = mobile ? 6 : mayhemActive ? 18 : 14
    
      if (fruits.length >= maxFruit) return
    
      const type = randomFruitType()
      const mobileScale = mobile ? 0.62 : 1
    
      const size =
        (type === "banana"
          ? 250 + Math.random() * 70
          : type === "apple"
            ? 210 + Math.random() * 65
            : 180 + Math.random() * 60) * mobileScale
    
      const useSideLaunch = mayhemActive && Math.random() < 0.45
    
      if (useSideLaunch) {
        const launchFromLeft = Math.random() > 0.5
        const x = launchFromLeft ? -size * 0.35 : width + size * 0.35
        const y = height * (0.22 + Math.random() * 0.56)
    
        const speed = 8.8 + Math.random() * 3.3
    
        fruits.push({
          id: fruitId++,
          type,
          x,
          y,
          vx: launchFromLeft ? speed : -speed,
          vy: -1.4 + Math.random() * 2.8,
          size,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.09,
          sliced: false,
          life: 1,
          countedMiss: false,
        })
    
        return
      }
    
      const launchFromLeft = Math.random() > 0.5
    
      const x = launchFromLeft
        ? width * (0.08 + Math.random() * 0.1)
        : width * (0.82 + Math.random() * 0.1)
    
      const y = height + size * 0.2
    
      const landingX = width * (0.44 + Math.random() * 0.12)
      const flightTime = frenzyActive
        ? 130 + Math.random() * 25
        : 165 + Math.random() * 35
    
      fruits.push({
        id: fruitId++,
        type,
        x,
        y,
        vx: (landingX - x) / flightTime,
        vy: frenzyActive
          ? -12.6 - Math.random() * 1.9
          : -12.2 - Math.random() * 1.8,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.07,
        sliced: false,
        life: 1,
        countedMiss: false,
      })
    }

    function queueWave() {
      const mobile = window.innerWidth < 768
    
      const idlePattern = mobile ? [1, 2, 2] : [2, 3, 3]
      const gamePattern = mobile ? [2, 2, 3] : [3, 4, 4, 5]
      const frenzyPattern = mobile ? [4, 5, 5] : [9, 11, 13]
    
      const pattern = frenzyActive
        ? frenzyPattern
        : gameActiveRef.current
          ? gamePattern
          : idlePattern
    
      waveSpawnQueue = pattern[waveIndex % pattern.length]
      waveIndex++
      waveTimer = 0
    }

    function updateWaves(delta: number) {
      if (gamePausedRef.current || internalPaused || gameOverRef.current) return
    
      const mobile = window.innerWidth < 768
    
      waveTimer += delta
      waveSpawnTimer += delta
    
      const pauseBetweenWaves = mobile
        ? mayhemActive
          ? 52
          : frenzyActive
            ? 62
            : gameActiveRef.current
              ? 95
              : 115
        : mayhemActive
          ? 34
          : frenzyActive
            ? 42
            : gameActiveRef.current
              ? 80
              : 95
    
      const spawnGap = mobile
        ? mayhemActive
          ? 8
          : frenzyActive
            ? 10
            : 15
        : mayhemActive
          ? 3
          : frenzyActive
            ? 4
            : 11
    
      if (waveSpawnQueue <= 0 && waveTimer > pauseBetweenWaves) {
        queueWave()
      }
    
      if (waveSpawnQueue > 0 && waveSpawnTimer > spawnGap) {
        spawnFruit()
        waveSpawnQueue--
        waveSpawnTimer = 0
      }
    }

    function playSound(type: "slice" | "splat") {
      if (!audioReadyRef.current || mutedRef.current) return

      const pool =
        type === "slice" ? sliceSoundRefs.current : splatSoundRefs.current

      const sound = randomItem(pool)
      if (!sound) return

      sound.currentTime = 0
      sound.play().catch(() => {})
    }

    function createCallout(
      x: number,
      y: number,
      fruitType: FruitType,
      overrideText?: string
    ) {
      const useRare = Math.random() < 0.12
      const text =
        overrideText ??
        (useRare ? randomItem(RARE_CALLOUTS) : randomItem(CALLOUTS))

      callouts.push({
        id: calloutId++,
        text,
        x,
        y,
        life: 1,
        color: getFruitColor(fruitType),
        rotation: (Math.random() - 0.5) * 0.22,
      })
    }

    function createJuice(x: number, y: number, type: FruitType) {
      const color = getFruitColor(type)

      splats.push({
        x: x + (Math.random() - 0.5) * 34,
        y: y + (Math.random() - 0.5) * 34,
        size: 105 + Math.random() * 65,
        rotation: Math.random() * Math.PI * 2,
        life: 1,
        imageKey: getSplatKey(type),
      })

      const mobile = window.innerWidth < 768

      if (splats.length > (mobile ? 3 : 6)) splats.shift()
      
      const dropletCount = mobile
        ? 10 + Math.floor(Math.random() * 8)
        : 30 + Math.floor(Math.random() * 18)

      for (let i = 0; i < dropletCount; i++) {
        const speed = 5 + Math.random() * 11
        const angle = Math.random() * Math.PI * 2

        particles.push({
          x: x + (Math.random() - 0.5) * 18,
          y: y + (Math.random() - 0.5) * 18,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1 + Math.random() * 1.8,
          life: 1,
          color,
        })
      }
    }

    function triggerFrenzyIfNeeded() {
      if (frenzyTriggered || scoreRef.current < 150 || gameOverRef.current) {
        return
      }

      frenzyTriggered = true
      internalPaused = true
      onFrenzyChangeRef.current?.(true)
      clearFruitRef.current()

      frenzyTimeout = window.setTimeout(() => {
        if (gameOverRef.current) return

        frenzyActive = true
        internalPaused = false
        onFrenzyChangeRef.current?.(false)
        queueWave()
      }, 2600)
    }

    function triggerMayhemIfNeeded() {
      if (mayhemTriggered || scoreRef.current < 250 || gameOverRef.current) {
        return
      }

      mayhemTriggered = true
      internalPaused = true
      onMayhemChangeRef.current?.(true)
      clearFruitRef.current()

      mayhemTimeout = window.setTimeout(() => {
        if (gameOverRef.current) return

        mayhemActive = true
        internalPaused = false
        onMayhemChangeRef.current?.(false)
        queueWave()
      }, 2600)
    }

    function awardScore(cutCount: number, x: number, y: number, type: FruitType) {
      if (cutCount <= 0 || gameOverRef.current) return

      let points = cutCount

      if (cutCount === 2) {
        points = 3
        createCallout(x, y - 50, type, "DOUBLE BANG!")
      }

      if (cutCount >= 3) {
        points = cutCount * 2
        createCallout(x, y - 50, type, "TRIPLE BANG!")
      }

      scoreRef.current += points
      onScoreChangeRef.current?.(scoreRef.current)
      triggerFrenzyIfNeeded()
      triggerMayhemIfNeeded()
    }

    function sliceFruit(fruit: Fruit) {
      if (fruit.sliced || !gameActiveRef.current || gameOverRef.current) {
        return false
      }

      fruit.sliced = true
      successfulCuts++

      createJuice(fruit.x, fruit.y, fruit.type)

      if (successfulCuts % 5 === 0 || Math.random() < 0.08) {
        createCallout(fruit.x, fruit.y - 40, fruit.type)
      }

      playSound("slice")
      setTimeout(() => playSound("splat"), 70)

      return true
    }

    function triggerGameOver() {
      if (gameOverRef.current) return

      gameOverRef.current = true
      internalPaused = false
      frenzyActive = false
      frenzyTriggered = false
      mayhemActive = false
      mayhemTriggered = false

      if (frenzyTimeout) {
        window.clearTimeout(frenzyTimeout)
        frenzyTimeout = null
      }

      if (mayhemTimeout) {
        window.clearTimeout(mayhemTimeout)
        mayhemTimeout = null
      }

      onFrenzyChangeRef.current?.(false)
      onMayhemChangeRef.current?.(false)
      onGameOverRef.current?.(scoreRef.current)

      missesRef.current = 0
      scoreRef.current = 0

      clearFruitRef.current()
      onMissChangeRef.current?.(0)
    }

    function registerMiss(fruit: Fruit) {
      if (
        !gameActiveRef.current ||
        gameOverRef.current ||
        fruit.sliced ||
        fruit.countedMiss
      ) {
        return
      }

      fruit.countedMiss = true
      missesRef.current += 1
      onMissChangeRef.current?.(missesRef.current)

      if (missesRef.current >= 3) {
        triggerGameOver()
      }
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

    function drawSplat(splat: Splat, delta: number) {
      const img = images[splat.imageKey]
      if (!img || !img.complete) return

      splat.life -= 0.008 * delta

      const alpha = Math.max(splat.life, 0)

      ctx.save()
      ctx.globalAlpha = alpha * 0.42
      ctx.translate(splat.x, splat.y)
      ctx.rotate(splat.rotation)
      ctx.drawImage(
        img,
        -splat.size / 2,
        -splat.size / 2,
        splat.size,
        splat.size
      )
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
      const split = 42 * (1 - fruit.life + 0.35)

      if (fruit.type === "banana") {
        drawImageCentered(
          images.bananaLeft,
          fruit.x - split,
          fruit.y,
          halfSize,
          fruit.rotation - 0.45
        )
        drawImageCentered(
          images.bananaRight,
          fruit.x + split,
          fruit.y,
          halfSize,
          fruit.rotation + 0.45
        )
      }

      if (fruit.type === "raspberry") {
        drawImageCentered(
          images.raspberryHalf,
          fruit.x - split,
          fruit.y,
          halfSize,
          fruit.rotation - 0.45
        )

        ctx.save()
        ctx.scale(-1, 1)
        drawImageCentered(
          images.raspberryHalf,
          -fruit.x - split,
          fruit.y,
          halfSize,
          -fruit.rotation + 0.45
        )
        ctx.restore()
      }

      if (fruit.type === "apple") {
        drawImageCentered(
          images.appleHalf,
          fruit.x - split,
          fruit.y,
          halfSize,
          fruit.rotation - 0.4
        )

        ctx.save()
        ctx.scale(-1, 1)
        drawImageCentered(
          images.appleHalf,
          -fruit.x - split,
          fruit.y,
          halfSize,
          -fruit.rotation + 0.4
        )
        ctx.restore()
      }
    }

    function drawSlashTrail() {
      if (!gameActiveRef.current || gameOverRef.current || slashTrail.length < 2) {
        return
      }

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

    function drawCallouts(delta: number) {
      ctx.save()

      callouts.forEach((callout) => {
        callout.y -= 0.65 * delta
        callout.life -= 0.018 * delta

        const alpha = Math.max(callout.life, 0)

        ctx.save()
        ctx.translate(callout.x, callout.y)
        ctx.rotate(callout.rotation)

        ctx.globalAlpha = alpha
        ctx.textAlign = "center"
        ctx.font = "300 36px 'Arial Narrow', Arial, sans-serif"

        ctx.strokeStyle = "rgba(0,0,0,0.45)"
        ctx.lineWidth = 3
        ctx.strokeText(callout.text, 0, 0)

        ctx.fillStyle = callout.color
        ctx.fillText(callout.text, 0, 0)

        ctx.restore()
      })

      ctx.restore()

      for (let i = callouts.length - 1; i >= 0; i--) {
        if (!callouts[i] || callouts[i].life <= 0) callouts.splice(i, 1)
      }
    }

    function drawSword() {
      if (!gameActiveRef.current || gameOverRef.current || window.innerWidth < 768) {
        return
      }

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

      splats.forEach((splat) => drawSplat(splat, delta))

      for (let i = splats.length - 1; i >= 0; i--) {
        if (!splats[i] || splats[i].life <= 0) splats.splice(i, 1)
      }

      updateWaves(delta)

      fruits.forEach((fruit) => {
        if (!fruit) return

        fruit.x += fruit.vx * delta
        fruit.y += fruit.vy * delta
        fruit.vy += 0.115 * delta
        fruit.rotation += fruit.rotationSpeed * delta

        if (fruit.sliced) fruit.life -= 0.018 * delta

        drawFruit(fruit)
      })

      for (let i = fruits.length - 1; i >= 0; i--) {
        const fruit = fruits[i]

        if (!fruit) continue

        if (!fruit.sliced && fruit.y > height + fruit.size * 0.25) {
          registerMiss(fruit)
        }

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
        if (!p) return

        p.x += p.vx * delta
        p.y += p.vy * delta
        p.vy += 0.08 * delta
        p.life -= 0.045 * delta

        const alpha = Math.max(p.life, 0)

        ctx.save()
        ctx.globalAlpha = alpha * 0.85
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i] || particles[i].life <= 0) particles.splice(i, 1)
      }

      slashTrail.forEach((p) => {
        p.life -= 0.08 * delta
      })

      slashTrail = slashTrail.filter((p) => p.life > 0)

      drawSlashTrail()
      drawCallouts(delta)
      drawSword()

      raf = requestAnimationFrame(animate)
    }

    function handlePointerMove(e: PointerEvent) {
      if (!gameActiveRef.current || gameOverRef.current) return
    
      e.preventDefault()
    
      const rect = canvas.getBoundingClientRect()
    
      const next = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    
      const prev = pointer
      previousPointer = prev
      pointer = next
      isPointerInside = true
    
      const movement = Math.hypot(next.x - prev.x, next.y - prev.y)
    
      if (movement > 1.5) {
        slashTrail.push({ x: next.x, y: next.y, life: 1 })
    
        slashPowerHistory.push(movement)
    
        if (slashPowerHistory.length > 5) {
          slashPowerHistory.shift()
        }
    
        const slashPower = slashPowerHistory.reduce(
          (sum, value) => sum + value,
          0
        )
    
        const mobile = window.innerWidth < 768
    
        const minSlashPower = mobile ? 58 : 82
        const currentSegmentPower = mobile ? 11 : 16
    
        const isRealSlash =
          slashPower >= minSlashPower && movement >= currentSegmentPower
    
        if (!isRealSlash) return
    
        let cutCount = 0
        let comboX = 0
        let comboY = 0
        let comboType: FruitType = "raspberry"
    
        fruits.forEach((fruit) => {
          if (!fruit || fruit.sliced) return
    
          const hitRadius = fruit.size * 0.43
    
          const distance = distanceToSegment(
            fruit.x,
            fruit.y,
            prev.x,
            prev.y,
            next.x,
            next.y
          )
    
          if (distance < hitRadius) {
            const didSlice = sliceFruit(fruit)
    
            if (didSlice) {
              cutCount++
              comboX += fruit.x
              comboY += fruit.y
              comboType = fruit.type
            }
          }
        })
    
        if (cutCount > 0) {
          awardScore(cutCount, comboX / cutCount, comboY / cutCount, comboType)
          slashPowerHistory = []
        }
      }
    }

    function handlePointerEnter() {
      if (!gameActiveRef.current || gameOverRef.current) return
      isPointerInside = true
    }

    function handlePointerLeave() {
      isPointerInside = false
      slashTrail = []
      slashPowerHistory = []
    }

    function handlePointerDown() {
      if (!gameActiveRef.current || gameOverRef.current) return
      unlockAudio()
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
    queueWave()

    raf = requestAnimationFrame(animate)

    window.addEventListener("resize", resize)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    canvas.addEventListener("pointermove", handlePointerMove)
    canvas.addEventListener("pointerenter", handlePointerEnter)
    canvas.addEventListener("pointerleave", handlePointerLeave)
    canvas.addEventListener("pointerdown", handlePointerDown)
    return () => {
      cancelAnimationFrame(raf)

      if (frenzyTimeout) {
        window.clearTimeout(frenzyTimeout)
      }

      if (mayhemTimeout) {
        window.clearTimeout(mayhemTimeout)
      }

      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)

      canvas.removeEventListener("pointermove", handlePointerMove)
      canvas.removeEventListener("pointerenter", handlePointerEnter)
      canvas.removeEventListener("pointerleave", handlePointerLeave)
      canvas.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      <canvas
        ref={canvasRef}
        className={`
          absolute inset-0 z-0
          h-full w-full
          ${gameActive ? "cursor-none touch-none pointer-events-auto" : "cursor-default pointer-events-none"}
        `}
        aria-hidden="true"
      />
    </div>
  )
})