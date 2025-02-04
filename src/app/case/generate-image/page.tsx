import { CodeBlock } from "@/components/docs/code-block"
import { InfoCard } from "@/components/docs/info-card"
import { DocsSection } from "@/components/docs/section"
import { StepsList } from "@/components/docs/steps-list"
import { TextGeneration } from "@/components/docs/text-generation"
import { Cpu, MessageSquare } from "lucide-react"

const codeExample = `import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export async function POST(req: Request) {
  // Extract the prompt from the body
  const { prompt } = await req.json()

  // Ask OpenAI for a streaming completion
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [{ role: 'user', content: prompt }]
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}`

const implementationSteps = [
  {
    title: "Install Dependencies",
    description: "First, install the required packages:",
    code: "npm install ai openai-edge"
  },
  {
    title: "Configure Environment",
    description: "Set up your OpenAI API key in your environment variables:",
    code: "OPENAI_API_KEY=your-api-key-here"
  },
  {
    title: "Create API Route",
    description: "Create a new API route in your Next.js app to handle the text generation requests. Use the code example above as a starting point."
  }
]

export default function GenerateImage() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <DocsSection
        title="Text Generation with AI SDK"
        description="Learn how to implement text generation using the AI SDK in your Next.js applications. This guide will walk you through the process step by step."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            title="Stream Processing"
            description="Learn how to handle streaming responses from the AI model for real-time text generation."
            icon={<Cpu className="h-5 w-5" />}
          />
          <InfoCard
            title="Prompt Engineering"
            description="Understand how to craft effective prompts to get the best results from the AI model."
            icon={<MessageSquare className="h-5 w-5" />}
          />
        </div>
      </DocsSection>

      <DocsSection 
        title="Try It Out" 
        description="Test the text generation capabilities below. Enter a prompt and click the generate button to see the results."
      >
        <TextGeneration 
          placeholder="Enter your prompt here... (e.g., 'Write a short story about a robot learning to paint')"
        />
      </DocsSection>

      <DocsSection title="Code Example">
        <CodeBlock code={codeExample} />
      </DocsSection>

      <DocsSection title="Implementation Steps">
        <StepsList steps={implementationSteps} />
      </DocsSection>

      <DocsSection title="Best Practices">
        <ul className="list-inside list-disc space-y-2 text-gray-400">
          <li>Always validate user input before sending to the AI model</li>
          <li>Implement proper error handling for API responses</li>
          <li>Use appropriate model parameters for your use case</li>
          <li>Consider implementing rate limiting for production applications</li>
        </ul>
      </DocsSection>
    </div>
  );
} 
