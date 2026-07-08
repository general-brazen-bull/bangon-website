"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { Volume2, VolumeX, Music, Music2 } from "lucide-react"
import {
  FruitNinjaBackground,
  FruitNinjaBackgroundHandle,
} from "@/components/home/FruitNinjaBackground"

import { trackEvent } from "@/lib/analytics"

type LeaderboardEntry = {
  name: string
  score: number
}

type GameState = "idle" | "rules" | "countdown" | "playing" | "gameover"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const fruitRef = useRef<FruitNinjaBackgroundHandle>(null)
  const musicRef = useRef<HTMLAudioElement | null>(null)

  const [fxMuted, setFxMuted] = useState(false)
  const [musicEnabled, setMusicEnabled] = useState(true)

  const [mobileGameNoticeOpen, setMobileGameNoticeOpen] = useState(false)

  const [gameState, setGameState] = useState<GameState>("idle")
  const [countdown, setCountdown] = useState(5)
  const [frenzyActive, setFrenzyActive] = useState(false)
  const [mayhemActive, setMayhemActive] = useState(false)

  const [score, setScore] = useState(0)
  const [finalScore, setFinalScore] = useState(0)
  const [misses, setMisses] = useState(0)
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [name, setName] = useState("")
  const [activeName, setActiveName] = useState("")
  const [scoreSaved, setScoreSaved] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const isIdle = gameState === "idle"
  const isRules = gameState === "rules"
  const isPlaying = gameState === "playing"
  const isGameOver = gameState === "gameover"

  const loadLeaderboard = useCallback(async () => {
    try {
      const response = await fetch("/api/leaderboard", {
        cache: "no-store",
      })

      if (!response.ok) return

      const data = (await response.json()) as {
        leaderboard?: LeaderboardEntry[]
      }

      if (Array.isArray(data.leaderboard)) {
        setLeaderboard(data.leaderboard)
      }
    } catch {
      setLeaderboard([])
    }
  }, [])

  const updateLeaderboard = useCallback(
    async (playerName: string, nextScore: number) => {
      if (!playerName || nextScore <= 0) return

      try {
        const response = await fetch("/api/leaderboard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: playerName,
            score: nextScore,
          }),
        })

        if (!response.ok) return

        const data = (await response.json()) as {
          leaderboard?: LeaderboardEntry[]
        }

        if (Array.isArray(data.leaderboard)) {
          setLeaderboard(data.leaderboard)
        }
      } catch {
        await loadLeaderboard()
      }
    },
    [loadLeaderboard]
  )

  useEffect(() => {
    loadLeaderboard()
  }, [loadLeaderboard])

  useEffect(() => {
    const musicAudio = musicRef.current
    if (!musicAudio) return

    musicAudio.volume = 0.5
    musicAudio.loop = true

    musicAudio
      .play()
      .then(() => {
        setMusicEnabled(true)
      })
      .catch(() => {
        setMusicEnabled(true)
      })
  }, [])

  useEffect(() => {
    document.body.classList.toggle("mobile-game-active", gameState !== "idle")

    return () => {
      document.body.classList.remove("mobile-game-active")
    }
  }, [gameState])

  useEffect(() => {
    if (gameState !== "countdown") return

    setCountdown(5)
    fruitRef.current?.clearFruit()

    const interval = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          window.clearInterval(interval)
          fruitRef.current?.clearFruit()
          setGameState("playing")
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [gameState])

  const prepareMobileRules = () => {
    setScore(0)
    setFinalScore(0)
    setMisses(0)
    setFrenzyActive(false)
    setMayhemActive(false)
    setScoreSaved(false)
    fruitRef.current?.resetScore()
    fruitRef.current?.clearFruit()
    setGameState("rules")
  }

  const startGame = () => {
    const cleanName = name.trim() || "Player"

    setActiveName(cleanName)
    setScore(0)
    setFinalScore(0)
    setMisses(0)
    setFrenzyActive(false)
    setMayhemActive(false)
    setScoreSaved(false)

    fruitRef.current?.resetScore()
    fruitRef.current?.clearFruit()
    fruitRef.current?.unlockAudio()

    const musicAudio = musicRef.current
    if (musicAudio && musicEnabled) {
      musicAudio.volume = 0.5
      musicAudio.loop = true
      musicAudio.play().catch(() => {})
    }

    setGameState("countdown")
  }

  const handleGameOver = (finishedScore: number) => {
    setFinalScore(finishedScore)
    setScore(finishedScore)
    setMisses(3)
    setFrenzyActive(false)
    setMayhemActive(false)
    setScoreSaved(false)
    setGameState("gameover")
  }

  const resetToIdle = () => {
    setScore(0)
    setFinalScore(0)
    setMisses(0)
    setFrenzyActive(false)
    setMayhemActive(false)
    setScoreSaved(false)
    fruitRef.current?.resetScore()
    fruitRef.current?.clearFruit()
    setGameState("idle")
  }

  const saveFinalScore = async () => {
    if (scoreSaved || finalScore <= 0) return

    const cleanName = name.trim() || activeName || "Player"
    setName(cleanName)
    setActiveName(cleanName)

    await updateLeaderboard(cleanName, finalScore)
    setScoreSaved(true)
  }

  const playAgainFromGameOver = async () => {
    await saveFinalScore()
    startGame()
  }

  const continueFromGameOver = async () => {
    await saveFinalScore()
    resetToIdle()
    handleContinue()
  }

  const toggleMusic = async () => {
    const musicAudio = musicRef.current
    if (!musicAudio) return

    musicAudio.volume = 0.5
    musicAudio.loop = true

    if (musicEnabled) {
      musicAudio.pause()
      setMusicEnabled(false)
      return
    }

    try {
      await musicAudio.play()
      setMusicEnabled(true)
    } catch {
      setMusicEnabled(true)
    }
  }

  const toggleFx = () => {
    fruitRef.current?.unlockAudio()
    setFxMuted((current) => !current)
  }

  const handleContinue = () => {
    const nextSection = document.getElementById("after-hero")

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
      return
    }

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-black md:h-screen"
      style={{ touchAction: isPlaying ? "none" : "pan-y" }}
    >
      <audio ref={musicRef} src="/sounds/music.mp3" preload="auto" loop />

      <FruitNinjaBackground
        ref={fruitRef}
        muted={fxMuted || !isPlaying}
        gameActive={isPlaying}
        gamePaused={
          gameState === "countdown" ||
          isRules ||
          frenzyActive ||
          mayhemActive ||
          isGameOver
        }
        onGameOver={handleGameOver}
        onFrenzyChange={(active) => {
          setFrenzyActive(active)
        }}
        onMayhemChange={(active) => {
          setMayhemActive(active)
        }}
        onScoreChange={(nextScore) => {
          setScore(nextScore)
        }}
        onMissChange={(nextMisses) => {
          setMisses(nextMisses)
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(255,54,114,0.18),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.85))]" />

      {/* DESKTOP SCORE / PLAY PANEL */}
      <div
        className="
          pointer-events-auto
          absolute left-4 top-28 z-30
          hidden w-[240px]
          border-2 border-[#2596be]
          bg-black/80
          p-4
          text-white
          shadow-[0_0_20px_rgba(37,150,190,0.5)]
          backdrop-blur-md
          md:left-8 md:top-24 md:block
        "
      >
        {isIdle ? (
          <div className="space-y-3">
            <p className="text-xl font-black uppercase tracking-[0.04em] text-[#95cb00]">
              Player 1
            </p>

            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#2596be]">
              Enter Name
            </p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              maxLength={16}
              className="
                w-full
                border border-[#2596be]/80
                bg-white/10
                px-3 py-2
                text-xs
                uppercase
                tracking-[0.08em]
                text-white
                outline-none
                placeholder:text-white/35
                focus:border-[#2596be]
              "
            />

            <button
              type="button"
              onClick={startGame}
              className="
                w-full
                bg-[#2596be]
                px-3 py-2
                text-xs
                font-black
                uppercase
                tracking-[0.16em]
                text-black
                transition
                hover:bg-[#ff3672]
              "
            >
              Play
            </button>

            <p className="text-xs font-semibold uppercase leading-snug tracking-[0.12em] text-white">
              Slice all fruits. Score resets at 3 misses.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-[#2596be]">
              {isGameOver ? "Final Score" : "Fruits Cut"}
            </p>

            <p
              className="text-5xl leading-none text-[#ff3672]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              {isGameOver ? finalScore : score}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/70">
              Player: {activeName}
            </p>

            <div className="mt-3 flex gap-1">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={`h-2 flex-1 ${
                    index < misses ? "bg-[#2596be]" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <p className="mt-2 text-xs font-semibold uppercase leading-snug tracking-[0.12em] text-white">
              {isGameOver
                ? "Game over"
                : mayhemActive
                  ? "Absolute mayhem incoming..."
                  : frenzyActive
                    ? "Juice storm incoming..."
                    : "Miss 3 fruits and score resets"}
            </p>
          </>
        )}

        <div className="mt-5 border-t border-[#2596be]/45 pt-4">
          <p className="mb-2 text-[12px] uppercase tracking-[0.22em] text-[#2596be]">
            = Global High Scores =
          </p>

          <div className="space-y-1">
            {leaderboard.length > 0 ? (
              leaderboard.map((entry, index) => (
                <div
                  key={`${entry.name}-${entry.score}-${index}`}
                  className="flex justify-between gap-3 text-xs uppercase tracking-[0.08em] text-white/85"
                >
                  <span className="truncate">
                    {String(index + 1).padStart(2, "0")}. {entry.name}
                  </span>
                  <span className="shrink-0 text-[#f3db03]">
                    {entry.score}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs uppercase tracking-[0.08em] text-white/45">
                No scores yet
              </p>
            )}
          </div>
        </div>
      </div>

      {/* COUNTDOWN */}
      {gameState === "countdown" && (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          <div className="relative z-10 px-6 text-center">
            <p
              className="mb-5 text-2xl font-black uppercase tracking-[0.08em] text-[#95cb00] md:text-4xl"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                textShadow:
                  "0 0 14px rgba(149,203,0,0.65), 0 0 2px #000000",
              }}
            >
              Slice all fruits. Score resets at 3 misses.
            </p>

            <p
              className="text-[26vw] leading-none text-[#ff3672] md:text-[13vw]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                textShadow:
                  "0 0 20px rgba(255,54,114,0.65), 0 0 2px #ffffff",
              }}
            >
              {countdown}
            </p>
          </div>
        </div>
      )}

      {/* DESKTOP GAME OVER */}
      {isGameOver && (
        <div className="pointer-events-none absolute inset-0 z-40 hidden items-center justify-center md:flex">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          />

          <motion.div
            className="pointer-events-auto relative z-10 px-6 text-center"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p
              className="text-[8vw] leading-[0.85] text-[#ff3672]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                textShadow:
                  "0 0 24px rgba(255,54,114,0.85), 0 0 2px #ffffff",
              }}
            >
              GAME OVER
            </p>

            <p
              className="mt-5 text-4xl font-black uppercase tracking-[0.16em] text-[#95cb00]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              FINAL SCORE: {finalScore}
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                onClick={playAgainFromGameOver}
                className="bg-[#ff3672] px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-black"
              >
                Play Again
              </button>

              <button
                type="button"
                onClick={continueFromGameOver}
                className="bg-[#95cb00] px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-black"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* FRENZY */}
      {frenzyActive && (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/65 backdrop-blur-md" />

          <div className="relative z-10 px-6 text-center">
            <p
              className="text-[14vw] leading-[0.85] text-[#95cb00] md:text-[7vw]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                textShadow:
                  "0 0 22px rgba(149,203,0,0.8), 0 0 2px #ffffff",
              }}
            >
              JUICE STORM
              <br />
              INCOMING
            </p>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#f3db03] md:text-lg">
              The next wave hits harder.
            </p>
          </div>
        </div>
      )}

      {/* ABSOLUTE MAYHEM */}
      {mayhemActive && (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <div className="relative z-10 px-6 text-center">
            <p
              className="text-[13vw] leading-[0.85] text-[#ff3672] md:text-[6.8vw]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                textShadow:
                  "0 0 24px rgba(255,54,114,0.85), 0 0 2px #ffffff",
              }}
            >
              ABSOLUTE
              <br />
              MAYHEM
            </p>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#95cb00] md:text-lg">
              Incoming from every side.
            </p>
          </div>
        </div>
      )}

      {/* DESKTOP AUDIO CONTROLS */}
      <div
        className="
          pointer-events-auto
          absolute right-4 top-28 z-50
          hidden flex-col gap-2
          md:right-8 md:top-24 md:flex md:flex-row
        "
      >
        <button
          type="button"
          onClick={toggleMusic}
          className="
            flex h-10 items-center gap-2
            border border-[#f3db03]/50
            bg-black/70
            px-4
            text-[11px]
            uppercase
            tracking-[0.14em]
            text-white
            backdrop-blur-md
            transition
            hover:bg-[#f3db03]
            hover:text-black
          "
        >
          {musicEnabled ? (
            <Music2 className="h-4 w-4" />
          ) : (
            <Music className="h-4 w-4" />
          )}
          {musicEnabled ? "Disable Music" : "Enable Music"}
        </button>

        <button
          type="button"
          onClick={toggleFx}
          className="
            flex h-10 items-center gap-2
            border border-[#95cb00]/50
            bg-black/70
            px-4
            text-[11px]
            uppercase
            tracking-[0.14em]
            text-white
            backdrop-blur-md
            transition
            hover:bg-[#ff3672]
            hover:text-black
          "
        >
          {fxMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
          {fxMuted ? "Enable FX" : "Disable FX"}
        </button>
      </div>

      {/* MOBILE MUSIC BUTTON OUTSIDE GAMEPLAY */}
      {(isIdle || isRules || isGameOver) && (
        <button
          type="button"
          onClick={toggleMusic}
          className="
            absolute right-4 top-24 z-50
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-[#f3db03]/50
            bg-black/70
            text-white
            backdrop-blur-md
            transition
            active:scale-95
            md:hidden
          "
          aria-label={musicEnabled ? "Disable music" : "Enable music"}
        >
          {musicEnabled ? (
            <Music2 className="h-5 w-5" />
          ) : (
            <Music className="h-5 w-5" />
          )}
        </button>
      )}

   

      {/* MOBILE IDLE SCREEN */}
      {isIdle && (
        <motion.div
          className="
            pointer-events-none
            relative z-10 flex min-h-[100svh] flex-col items-center justify-center
            px-5 pb-24 pt-24 text-center
            md:hidden
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative w-[112vw] max-w-none"
            initial={{ y: 24, opacity: 0, scale: 0.94 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/assets/herologo.png"
              alt="Wanna Bang? Bang On!"
              width={1600}
              height={900}
              priority
              className="
                h-auto w-full select-none
                drop-shadow-[0_0_32px_rgba(255,54,114,0.45)]
              "
            />
          </motion.div>

          <motion.div
            className="pointer-events-auto relative z-10 mt-2 flex w-full max-w-[340px] flex-col gap-4 pb-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <button
              type="button"
              onClick={() => setMobileGameNoticeOpen(true)}
                            className="
                w-full
                bg-[#ff3672]
                px-6 py-4
                text-base
                font-black
                uppercase
                tracking-[0.16em]
                text-black
                shadow-[0_0_24px_rgba(255,54,114,0.55)]
                transition
                active:scale-95
              "
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              Play the Game
            </button>

            <a
  href="https://deepbluedistilleries.ca/product-tag/bang-on/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() =>
    trackEvent("shop_now_click", {
      location: "hero_mobile",
    })
  }
  className="
    w-full
    bg-[#95cb00]
    px-6 py-4
    text-base
    font-black
    uppercase
    tracking-[0.16em]
    text-black
    shadow-[0_0_24px_rgba(149,203,0,0.45)]
    transition
    active:scale-95
  "
  style={{
    fontFamily:
      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  }}
>
  Shop Now
</a>
          </motion.div>
        </motion.div>
      )}

{mobileGameNoticeOpen && (
  <motion.div
    className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-6 md:hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="relative w-full max-w-sm rounded-xl border-2 border-[#2596be] bg-black p-6 text-center">

      <button
        onClick={() => setMobileGameNoticeOpen(false)}
        className="absolute right-4 top-3 text-2xl text-white"
      >
        ×
      </button>

      <h2
        className="text-4xl text-[#ff3672] uppercase"
        style={{
          fontFamily:
            "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        }}
      >
        Bang On Arcade
      </h2>

      <p className="mt-5 text-white uppercase text-sm leading-relaxed">
        The full fruit slicing game is available on desktop.
      </p>

      <p className="mt-2 text-[#95cb00] uppercase text-xs tracking-[0.15em]">
        Visit on a computer for the complete experience.
      </p>

      <button
        onClick={() => {
          setMobileGameNoticeOpen(false)
          handleContinue()
        }}
        className="mt-8 w-full bg-[#95cb00] py-4 font-black uppercase text-black"
      >
        Continue to Site
      </button>

      <a
  href="https://deepbluedistilleries.ca/product-tag/bang-on/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() =>
    trackEvent("shop_now_click", {
      location: "mobile_game_popup",
    })
  }
  className="mt-3 block w-full bg-[#ff3672] py-4 font-black uppercase text-black"
>
  Shop Now
</a>
    </div>
  </motion.div>
)}


      {/* DESKTOP CONTENT */}
      <motion.div
        className="pointer-events-none relative z-10 hidden min-h-screen flex-col items-center justify-center px-6 text-center md:flex"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="
            relative
            mb-0
            w-[94vw]
            max-w-[1150px]
            md:w-[76vw]
            lg:w-[68vw]
            xl:w-[62vw]
          "
          initial={{ y: 36, opacity: 0, scale: 0.96 }}
          animate={{
            y: isIdle ? 0 : -20,
            opacity: isIdle ? 1 : 0,
            scale: isIdle ? 1 : 0.94,
            filter: isIdle ? "blur(0px)" : "blur(10px)",
          }}
          transition={{
            duration: isIdle ? 0.9 : 0.45,
            ease: "easeOut",
          }}
        >
          <Image
            src="/assets/herologo.png"
            alt="Wanna Bang? Bang On!"
            width={1600}
            height={900}
            priority
            className="h-auto w-full select-none drop-shadow-[0_0_28px_rgba(255,54,114,0.35)]"
          />
        </motion.div>

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[42vw]
            w-[70vw]
            max-w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#ff3672]/10
            blur-[90px]
          "
          animate={{
            opacity: isIdle ? 0.45 : 0.28,
            scale: isIdle ? 1 : 0.8,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <motion.div
          className="
            relative
            z-10
            -mt-4
            mb-5
            text-center
            md:-mt-6
            md:mb-6
          "
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: isIdle ? 1 : 0,
            y: isIdle ? 0 : 12,
          }}
          transition={{ duration: 0.45, delay: isIdle ? 0.15 : 0 }}
        >
          <p
            className="
              text-xs
              font-black
              uppercase
              tracking-[0.28em]
              text-white
              md:text-lg
              lg:text-3xl
            "
            style={{
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            CANADA&apos;S 99 PROOF • BORN IN BC
          </p>

          <p className="mt-2 text-sm font-black tracking-[0.08em] text-[#95cb00] md:text-xl">
            カナダ発 • 99プルーフ • BC生まれ
          </p>
        </motion.div>

        <motion.a
  href="https://deepbluedistilleries.ca/product-tag/bang-on/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() =>
    trackEvent("shop_now_click", {
      location: "hero_desktop",
    })
  }
  className="
    pointer-events-auto
    relative
    z-10
    inline-block
    bg-[#95cb00]
    px-8
    py-3
    text-sm
    font-black
    uppercase
    tracking-[0.14em]
    text-black
    shadow-[0_0_20px_rgba(149,203,0,0.5)]
    transition-colors
    duration-300
    hover:bg-[#ff3672]
    md:px-10
    md:py-4
    md:text-base
  "
  style={{
    fontFamily:
      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  }}
  initial={{ opacity: 0, y: 12 }}
  animate={{
    opacity: isIdle ? 1 : 0,
    y: isIdle ? 0 : 12,
    pointerEvents: isIdle ? "auto" : "none",
  }}
  transition={{ duration: 0.4, delay: isIdle ? 0.25 : 0 }}
>
  SHOP NOW
</motion.a>
      </motion.div>
    </section>
  )
}