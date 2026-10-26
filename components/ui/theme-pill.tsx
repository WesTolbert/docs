import * as React from "react"

import { cn } from "@/lib/utils"

const themePillVariants = {
  violet: "border-violet-400/40 bg-violet-500/10 text-violet-100",
  cyan: "border-cyan-400/40 bg-cyan-500/10 text-cyan-100",
  amber: "border-amber-400/40 bg-amber-500/10 text-amber-100",
  rose: "border-rose-400/40 bg-rose-500/10 text-rose-100",
  emerald: "border-emerald-400/40 bg-emerald-500/10 text-emerald-100",
  slate: "border-slate-400/40 bg-slate-500/10 text-slate-100",
} as const

const themePillStyles = "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors"

export interface ThemePillProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: keyof typeof themePillVariants
}

function ThemePill({ className, tone = "violet", ...props }: ThemePillProps) {
  return <span className={cn(themePillStyles, themePillVariants[tone], className)} {...props} />
}

export { ThemePill }
