import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { getRandomSuggestions, Suggestion } from "@/lib/suggestions";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowUpRight, RefreshCw } from "lucide-react";
import { useState } from "react";

interface PromptInputProps {
  suggestions?: Suggestion[];
  onSubmit: (input: string) => Promise<void>;
  isLoading?: boolean;
  placeholder?: string;
  showRefreshSuggestions?: boolean;
  showSuggestions?: boolean;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function PromptInput({
  suggestions: initSuggestions,
  onSubmit,
  isLoading = false,
  placeholder = "Enter your prompt here...",
  showRefreshSuggestions = true,
  showSuggestions = true,
  className,
  value: externalValue,
  onChange: externalOnChange,
  disabled = false,
}: PromptInputProps) {
  const [internalValue, setInternalValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>(initSuggestions ?? []);

  // Handle controlled vs uncontrolled input
  const value = externalValue !== undefined ? externalValue : internalValue;
  const setValue = externalOnChange || setInternalValue;

  const updateSuggestions = () => {
    setSuggestions(getRandomSuggestions());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!value.trim() || isLoading || disabled) return;

    await onSubmit(value);
    if (!externalValue) {
      setValue("");
    }
  };

  const handleSuggestionSelect = async (prompt: string) => {
    setValue(prompt);
    await onSubmit(prompt);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={cn("w-full flex flex-col gap-4 bg-zinc-900 rounded-lg p-4", className)}>
      <div className="flex flex-col gap-3">
        <Textarea
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={3}
          disabled={disabled}
          className="text-base bg-transparent border-none p-0 resize-none placeholder:text-zinc-400 text-white focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <div className="flex items-center justify-between pt-1">
          <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {showRefreshSuggestions && suggestions && suggestions.length > 0 && (
              <Button
                onClick={updateSuggestions}
                disabled={disabled}
                variant="outline"
                size="sm"
                className="h-8 px-2 lg:px-3 shrink-0"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}
            {showSuggestions && suggestions && suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                disabled={disabled}
                onClick={() => handleSuggestionSelect(suggestion.prompt)}
                className="h-8 shrink-0 whitespace-nowrap"
              >
                <span className="text-white text-xs sm:text-sm">
                  {suggestion.text}
                </span>
                <ArrowUpRight className="ml-1 h-2 w-2 sm:h-3 sm:w-3" />
              </Button>
            ))}
          </div>
          <Button
            onClick={handleSubmit}
            disabled={isLoading || !value.trim() || disabled}
            size="sm"
            className="h-8 w-8 p-0 ml-2 shrink-0"
          >
            {isLoading ? (
              <Spinner className="h-4 w-4" />
            ) : (
              <ArrowUp className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}