"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Suggestion } from "@/lib/suggestions";
import { Lightbulb } from "lucide-react";

interface PromptSuggestionsProps {
  suggestions: Suggestion[];
  onSelect: (prompt: string) => void;
  disabled?: boolean;
}

export function PromptSuggestions({
  suggestions,
  onSelect,
  disabled = false,
}: PromptSuggestionsProps) {
  return (
    <div className="w-full bg-zinc-900 rounded-lg p-4">
      <ScrollArea className="w-full">
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion.text}
              variant="outline"
              size="sm"
              className="h-8 shrink-0 gap-1.5 whitespace-nowrap"
              disabled={disabled}
              onClick={() => onSelect(suggestion.prompt)}
            >
              <Lightbulb className="h-3.5 w-3.5 text-muted-foreground" />
              {suggestion.text}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}