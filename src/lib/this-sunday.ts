import fs from "fs"
import path from "path"

export type Status = "on" | "cancelled" | "no-class"

export interface ThisSunday {
  date: string
  status: Status
  teaching: string
  note: string
}

const KEYS = ["date", "status", "teaching", "note"] as const

/** "2026-08-30" -> "August 30, 2026". Built from local parts so the date
 *  never slips a day across timezones. Anything else passes through, so a
 *  hand-written "August 30, 2026" still works. */
function formatDate(value: string): string {
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (!m) return value
  const [, y, mo, d] = m
  return new Date(Number(y), Number(mo) - 1, Number(d)).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

/** Reads the frontmatter block of content/this-sunday.md at build time.
 *  Prose after the closing --- is ignored. */
export function getThisSunday(): ThisSunday {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", "this-sunday.md"), "utf8")

  // Frontmatter if present, otherwise scan the whole file.
  const fm = raw.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---/)
  const block = fm ? fm[1] : raw

  const out: Record<string, string> = {}
  for (const line of block.split(/\r?\n/)) {
    const i = line.indexOf(":")
    if (i === -1) continue
    const key = line.slice(0, i).trim().toLowerCase()
    if ((KEYS as readonly string[]).includes(key) && !(key in out)) {
      out[key] = line.slice(i + 1).trim()
    }
  }

  // Fail the build on a bad value rather than guessing. Defaulting a typo to
  // "on" would tell people class is running when it is cancelled.
  const status = out.status
  if (status !== "on" && status !== "cancelled" && status !== "no-class") {
    throw new Error(
      `content/this-sunday.md: status is "${status ?? "(missing)"}". ` +
        `It must be exactly one of: on, cancelled, no-class.`
    )
  }
  if (!out.date) {
    throw new Error("content/this-sunday.md: date is missing. Use YYYY-MM-DD.")
  }

  return {
    date: formatDate(out.date),
    status,
    teaching: out.teaching ?? "",
    note: out.note ?? "",
  }
}
