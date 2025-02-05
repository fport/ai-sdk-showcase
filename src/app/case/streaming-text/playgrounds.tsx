'use client';

import { PromptInput } from "@/components/docs/prompt-input";
import { Card, CardContent } from "@/components/ui/card";
import { Suggestion } from '@/lib/suggestions';
import { cn } from "@/lib/utils";
import { type Message, useChat } from 'ai/react';
import { ChangeEvent } from 'react';

interface PlaygroundProps {
  suggestions: Suggestion[];
  initialMessages?: Message[];
}

type ContentPart = {
  type: string;
  text: string;
};

type ExtendedMessage = Omit<Message, 'content'> & {
  content: string | ContentPart[];
};

export default function Playground({
  suggestions: initSuggestions,
  initialMessages = [],
}: PlaygroundProps) {
  const { messages, input, handleInputChange, append, isLoading } = useChat({
    api: '/api/streaming-text',
    initialMessages,
  });

  const onSubmit = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;
    await append({
      content: prompt,
      role: 'user',
    });
  };

  const handleChange = (value: string) => {
    const syntheticEvent = {
      target: { value }
    } as ChangeEvent<HTMLInputElement>;
    handleInputChange(syntheticEvent);
  };

  return (
    <div className="w-full space-y-4">
      <PromptInput
        suggestions={initSuggestions}
        onSubmit={onSubmit}
        isLoading={isLoading}
        placeholder="Enter your prompt here..."
        value={input}
        onChange={handleChange}
      />

      <div className="space-y-4">
        {messages.map((message: ExtendedMessage, index: number) => (
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