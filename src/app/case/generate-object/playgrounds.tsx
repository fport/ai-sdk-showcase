'use client';

import { PromptInput } from "@/components/docs/prompt-input";
import { Card, CardContent } from "@/components/ui/card";
import { Suggestion } from '@/lib/suggestions';
import { useState } from 'react';

interface JsonSchema {
  type: string;
  properties?: {
    [key: string]: JsonSchema | { 
      type: string; 
      items?: { 
        type: string;
        properties?: {
          [key: string]: { type: string };
        };
      };
    };
  };
}

type StructuredSuggestion = Suggestion & { 
  schema: JsonSchema;
};

interface PlaygroundProps {
  structuredSuggestion: StructuredSuggestion;
}

interface GeneratedResult {
  [key: string]: string | number | boolean | GeneratedResult | Array<GeneratedResult>;
}

export default function Playground({structuredSuggestion}: PlaygroundProps) {
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;

    try {
      setIsLoading(true);

      const response = await fetch('/api/generate-object', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt,
          schema: structuredSuggestion.schema
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <PromptInput
        value={structuredSuggestion.prompt}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        placeholder="Enter your prompt here..."
      />

      {result && (
        <Card className="border-muted/50 bg-muted/30">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <span className="text-xs uppercase text-muted-foreground">
                Result:
              </span>
              <div className="flex-1">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}