import { cn } from "@/lib/utils"
import React from "react"

interface Step {
  title: string
  description: string
  code?: string
}

interface StepsListProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[]
}

export function StepsList({ steps, className, ...props }: StepsListProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {steps.map((step, index) => (
        <div
          key={index}
          className="rounded-lg border border-white/10 p-4"
        >
          <h3 className="text-lg font-medium text-white">
            {index + 1}. {step.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            {step.description}
          </p>
          {step.code && (
            <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-2 text-sm text-gray-300">
              <code>{step.code}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  )
} 