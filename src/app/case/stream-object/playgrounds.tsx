'use client';

import { notificationSchema } from '@/app/api/stream-object/schema';
import { PromptInput } from "@/components/docs/prompt-input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { experimental_useObject as useObject } from 'ai/react';


type Notification = {
  name: string;
  message: string;
};

type StreamResponse = {
  notifications: Notification[];
};

export default function Playground() {
  const { object, submit, isLoading } = useObject<StreamResponse>({
    api: '/api/stream-object',
    schema: notificationSchema,
  });

  const handleSubmit = async (prompt: string) => {
    if (!prompt.trim() || isLoading) return;
    await submit(prompt);
  };

  // Type assertion to help TypeScript understand the array contents
  const notifications = (object?.notifications ?? []) as Notification[];

  return (
    <div className="w-full space-y-4">
      <PromptInput
        value='Messages during finals week.'
        onSubmit={handleSubmit}
        isLoading={isLoading}
        placeholder="Enter your prompt here..."
      />

      {notifications.length > 0 && (
        <Card className="border-muted/50 bg-muted/30">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col gap-1 rounded-lg border border-muted/50 bg-muted/20 p-3",
                    isLoading && index === notifications.length - 1 && "animate-pulse"
                  )}
                >
                  <div className="text-sm font-medium">{notification.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {notification.message}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}