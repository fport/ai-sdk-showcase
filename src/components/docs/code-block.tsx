"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, Copy, Terminal } from "lucide-react"
import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"
import "prismjs/components/prism-typescript"
import "prismjs/themes/prism-tomorrow.css"
import * as React from "react"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopy?: boolean
  title?: string
}

export function CodeBlock({
  code,
  language = "typescript",
  showLineNumbers = false,
  showCopy = true,
  title,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code: ", err)
    }
  }

  const lines = code.trim().split("\n")
  const paddingWidth = String(lines.length).length

  return (
    <Card className="relative overflow-hidden border-muted/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-muted/20 bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">
            {title || `${language.charAt(0).toUpperCase()}${language.slice(1)} Example`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">{language}</div>
          {showCopy && (
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 transition-colors hover:bg-muted"
              onClick={copyToClipboard}
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy code</span>
            </Button>
          )}
        </div>
      </div>

      {/* Code content */}
      <div className="relative">
        <pre className={cn("overflow-x-auto p-4 text-sm", showLineNumbers && "pl-12", className)} {...props}>
          {showLineNumbers && (
            <div aria-hidden="true" className="absolute left-4 top-4 select-none text-sm text-muted-foreground/50">
              {lines.map((_, index) => (
                <div key={index + 1} className="leading-6" style={{ width: `${paddingWidth}ch` }}>
                  {index + 1}
                </div>
              ))}
            </div>
          )}
          <code className={`language-${language} leading-6`}>{code}</code>
        </pre>
      </div>
    </Card>
  )
}

