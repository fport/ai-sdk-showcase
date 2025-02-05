import Playground from "@/app/case/streaming-text/playgrounds";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsSection } from "@/components/docs/section";
import { getRandomSuggestions } from "@/lib/suggestions";

const codeExample = `
  const result = streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toDataStreamResponse();
`;

export default function StreamingText() {
  const suggestions = getRandomSuggestions(4, "text");
  return (
    <div className="flex flex-col gap-8 p-6">
      <DocsSection title="Streaming text">
        <CodeBlock code={codeExample} title="Streaming text with Vercel's AI SDK"/>
      </DocsSection>
      <Playground suggestions={suggestions}/>
    </div>
  );
} 
