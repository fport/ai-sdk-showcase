'use client';

import { PromptInput } from "@/components/docs/prompt-input";
import { Card, CardContent } from "@/components/ui/card";
import { Suggestion } from '@/lib/suggestions';
import { cn } from "@/lib/utils";
import { CoreMessage } from 'ai';
import { useState } from 'react';

interface PlaygroundProps {
  suggestions: Suggestion[];
  api?: string;
  initialMessages?: CoreMessage[];
}

export default function Playground({
  suggestions: initSuggestions,
  api = '/api/generate-text',
  initialMessages = [],
}: PlaygroundProps) {
  const [messages, setMessages] = useState<CoreMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (input: string) => {
    if (!input.trim() || isLoading) return;

    try {
      setIsLoading(true);
      setMessages(currentMessages => [
        ...currentMessages,
        { role: 'user', content: input },
      ]);

      const response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: input }],
        }),
      });

      const { messages: newMessages } = await response.json();

      setMessages(currentMessages => [
        ...currentMessages,
        ...newMessages,
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <PromptInput
        suggestions={initSuggestions}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        placeholder="Enter your prompt here..."
      />

      <div className="space-y-4">
        {messages.map((message, index) => (
          <Card
            key={`${message.role}-${index}`}
            className={cn(
              "border-muted/50",
              message.role === "user" ? "bg-muted/50" : "bg-muted/30"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <span className="text-xs uppercase text-muted-foreground">
                  {message.role}:
                </span>
                <div className="flex-1">
                  {typeof message.content === 'string'
                    ? message.content
                    : message.content
                        .filter(part => part.type === 'text')
                        .map((part, partIndex) => (
                          <div key={partIndex}>{part.text}</div>
                        ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}