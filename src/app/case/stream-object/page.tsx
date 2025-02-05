import { CodeBlock } from "@/components/docs/code-block";
import { DocsSection } from "@/components/docs/section";
import Playground from "./playgrounds";

const codeExample = `
export async function POST(req: Request) {
  const context = await req.json();

  const result = streamObject({
    model: openai('gpt-4-turbo'),
    schema: notificationSchema,
    prompt:
      "Generate 3 notifications for a messages app in this context:" + context,
  });

  return result.toTextStreamResponse();
}
`;

const schemaExample = `
import { z } from 'zod';

// define a schema for the notifications
export const notificationSchema = z.object({
  notifications: z.array(
    z.object({
      name: z.string().describe('Name of a fictional person.'),
      message: z.string().describe('Message. Do not use emojis or links.'),
    }),
  ),
});
`;




export default function GenerateObject() {

  return (
    <div className="flex flex-col gap-8 p-6">
      <DocsSection title="Schema">
        <CodeBlock code={schemaExample} title="Schema for stream object"/>
      </DocsSection>
      <DocsSection title="Stream object">
        <CodeBlock code={codeExample} title="Stream object with Vercel's AI SDK"/>
      </DocsSection>

      <Playground  />
    </div>
  );
} 
