"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, Copy, Terminal } from "lucide-react"
import * as React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

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
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code: ", err)
    }
  }

  return (
    <Card className="relative overflow-hidden border-muted/30 bg-zinc-950 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/90">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-muted/20 bg-zinc-900/70 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-muted-foreground/70" />
          <span className="text-sm font-medium text-zinc-300">
            {title || `${language.charAt(0).toUpperCase()}${language.slice(1)} Example`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-zinc-800/70 px-2 py-1 text-xs font-medium text-zinc-400">{language}</div>
          {showCopy && (
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 transition-colors hover:bg-zinc-800/70"
              onClick={copyToClipboard}
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-zinc-400" />}
              <span className="sr-only">Copy code</span>
            </Button>
          )}
        </div>
      </div>

      {/* Code content */}
      <div className="relative font-mono text-[13px]">
        <div className={cn("overflow-x-auto", className)}>
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
            }}
            codeTagProps={{
              style: {
                fontSize: '13px',
                lineHeight: '1.5',
              }
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </Card>
  )
}

