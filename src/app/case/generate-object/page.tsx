import { CodeBlock } from "@/components/docs/code-block";
import { DocsSection } from "@/components/docs/section";
import Playground from "./playgrounds";

const codeExample = `
  const { response } = await generateObject({
    model: openai('gpt-4o-mini'),
    system: 'You are a helpful assistant.',
    prompt,
    schema: z.object({
      notifications: z.array(
        z.object({
          name: z.string().describe('Name of a fictional person.'),
          message: z.string().describe('Do not use emojis or links.'),
          minutesAgo: z.number(),
        })
      ),
    })
  });
`;

const blogPostSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    author: { type: "string" },
    date: { type: "string" },
    content: { type: "string" },
    tags: { type: "array", items: { type: "string" } },
    comments: {
      type: "array",
      items: {
        type: "object",
        properties: {
          author: { type: "string" },
          content: { type: "string" },
          date: { type: "string" }
        }
      }
    },
    metadata: {
      type: "object",
      properties: {
        views: { type: "number" },
        likes: { type: "number" },
        shares: { type: "number" }
      }
    }
  }
};

export default function GenerateObject() {
  const structuredSuggestion = {
    text: "Blog Post Schema",
    prompt: "Generate a JSON schema for a blog post including: title, author, date, content, tags, comments, metadata",
    schema: blogPostSchema
  };

  return (
    <div className="flex flex-col gap-8 p-6">
      <DocsSection title="Generate object">
        <CodeBlock code={codeExample} title="Generate object with Vercel's AI SDK"/>
      </DocsSection>
      <Playground structuredSuggestion={structuredSuggestion} />
    </div>
  );
} 
