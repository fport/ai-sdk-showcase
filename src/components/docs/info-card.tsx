import { cn } from "@/lib/utils"
import React from "react"

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
}

export function InfoCard({
  title,
  description,
  icon,
  className,
  ...props
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 p-4 hover:bg-white/5 transition-colors",
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="mt-1 text-white">
            {icon}
          </div>
        )}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  )
} 