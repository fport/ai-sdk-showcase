import ChatPlayground from "@/app/case/generate-image/playgrounds";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsSection } from "@/components/docs/section";

const codeExample = `
 const result = streamText({
    model: openai('gpt-4o'),
    messages: formattedMessages,
    tools: {
      generateImage: tool({
        description: 'Generate an image',
        parameters: z.object({
          prompt: z.string().describe('The prompt to generate the image from'),
        }),
        execute: async ({ prompt }) => {
          const { image } = await experimental_generateImage({
            model: openai.image('dall-e-3'),
            prompt,
          });
          // in production, save this image to blob storage and return a URL
          return { image: image.base64, prompt };
        },
      }),
    },
  });
`;

export default function GenerateText() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <DocsSection title="Generate image">
        <CodeBlock code={codeExample} title="Generate image with Vercel's AI SDK"/>
      </DocsSection>
      <ChatPlayground/>
    </div>
  );
} 
