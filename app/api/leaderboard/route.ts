import { NextResponse } from "next/server"
import { redis } from "@/lib/redis"

type LeaderboardEntry = {
  name: string
  score: number
}

const LEADERBOARD_KEY = "bang-on-global-leaderboard"

function cleanName(name: unknown) {
  if (typeof name !== "string") return "PLAYER"

  const cleaned = name
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9 ]/g, "")
    .slice(0, 12)

  return cleaned || "PLAYER"
}

function cleanScore(score: unknown) {
  const numberScore = Number(score)

  if (!Number.isFinite(numberScore)) return 0
  if (numberScore < 0) return 0

  return Math.floor(numberScore)
}

async function getLeaderboard() {
  const leaderboard =
    (await redis.get<LeaderboardEntry[]>(LEADERBOARD_KEY)) || []

  return leaderboard
    .filter((entry) => entry.name && Number.isFinite(entry.score))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

export async function GET() {
  const leaderboard = await getLeaderboard()

  return NextResponse.json({ leaderboard })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  const name = cleanName(body?.name)
  const score = cleanScore(body?.score)

  if (score <= 0) {
    const leaderboard = await getLeaderboard()
    return NextResponse.json({ leaderboard })
  }

  const currentLeaderboard = await getLeaderboard()

  const nextLeaderboard = [...currentLeaderboard, { name, score }]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  await redis.set(LEADERBOARD_KEY, nextLeaderboard)

  return NextResponse.json({ leaderboard: nextLeaderboard })
}