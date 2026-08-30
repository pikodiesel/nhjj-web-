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

/** Reads content/this-sunday.md at build time. Only `key: value` lines for
 *  the four known keys are read — any other prose in the file is ignored. */
export function getThisSunday(): ThisSunday {
  const file = fs.readFileSync(path.join(process.cwd(), "content", "this-sunday.md"), "utf8")

  const out: Record<string, string> = {}
  for (const line of file.split(/\r?\n/)) {
    const i = line.indexOf(":")
    if (i === -1) continue
    const key = line.slice(0, i).trim().toLowerCase()
    if ((KEYS as readonly string[]).includes(key) && !(key in out)) {
      out[key] = line.slice(i + 1).trim()
    }
  }

  const status = out.status as Status
  return {
    date: out.date ?? "",
    status: status === "cancelled" || status === "no-class" ? status : "on",
    teaching: out.teaching ?? "",
    note: out.note ?? "",
  }
}
