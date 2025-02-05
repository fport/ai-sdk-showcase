import Playground from "@/app/case/generate-text/playgrounds";
import { CodeBlock } from "@/components/docs/code-block";
import { DocsSection } from "@/components/docs/section";
import { getRandomSuggestions } from "@/lib/suggestions";

const codeExample = `
  const { response } = await generateText({
    model: openai('gpt-4'),
    system: 'You are a helpful assistant.',
    messages,
  });
`;

export default function GenerateText() {
  const suggestions = getRandomSuggestions(4, "text");
  return (
    <div className="flex flex-col gap-8 p-6">
      <DocsSection title="Generate text">
        <CodeBlock code={codeExample} title="Generate text with Vercel's AI SDK"/>
      </DocsSection>
      <Playground suggestions={suggestions}/>
    </div>
  );
} 
