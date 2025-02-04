import { cn } from "@/lib/utils"
import React from "react"

interface DocsSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  children: React.ReactNode
}

export function DocsSection({
  title,
  description,
  children,
  className,
  ...props
}: DocsSectionProps) {
  return (
    <section className={cn("space-y-4", className)} {...props}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {description && (
          <p className="text-gray-400">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
} 