"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Bot, Copy, Loader2, RotateCcw, SendHorizontal } from 'lucide-react'
import * as React from "react"

interface TextGenerationProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  defaultPrompt?: string
  maxLength?: number
}

export function TextGeneration({
  placeholder = "Enter your prompt here...",
  defaultPrompt = "",
  maxLength = 1000,
  className,
  ...props
}: TextGenerationProps) {
  const [prompt, setPrompt] = React.useState(defaultPrompt)
  const [output, setOutput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async () => {
    if (!prompt.trim() || isLoading) return

    setIsLoading(true)
    // Your API call logic here
    setIsLoading(false)
  }

  const handleReset = () => {
    setPrompt("")
    setOutput("")
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className={cn("grid gap-4 lg:grid-cols-2", className)} {...props}>
      {/* Input Card */}
      <Card className="border-muted/50 bg-muted/50">
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg flex items-center gap-2">
            Prompt
            <span className="text-xs text-muted-foreground ml-auto">
              {prompt.length} / {maxLength}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value.slice(0, maxLength))}
              placeholder={placeholder}
              className="min-h-[300px] resize-none bg-background p-4 focus-visible:ring-1"
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={handleReset}
                className="h-8 w-8 rounded-full"
                disabled={!prompt || isLoading}
              >
                <RotateCcw className="h-4 w-4" />
                <span className="sr-only">Reset</span>
              </Button>
              <Button
                size="icon"
                onClick={handleSubmit}
                className="h-8 w-8 rounded-full"
                disabled={!prompt.trim() || isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <SendHorizontal className="h-4 w-4" />
                )}
                <span className="sr-only">Generate</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Output Card */}
      <Card className="border-muted/50 bg-muted/50">
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="h-4 w-4" />
            Generated Output
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="min-h-[300px] rounded-md bg-background p-4">
              {output ? (
                <pre className="whitespace-pre-wrap break-words text-sm">
                  <code>{output}</code>
                </pre>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  Generated text will appear here...
                </div>
              )}
            </div>
          </div>
        </CardContent>
        {output && (
          <CardFooter>
            <Button
              variant="outline" 
              size="sm"
              className="ml-auto"
              onClick={copyToClipboard}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy to clipboard
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
