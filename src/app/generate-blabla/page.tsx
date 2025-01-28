import Link from "next/link";

export default function GenerateBlaBla() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header with back button */}
      <div className="flex items-center gap-4 mb-12">
        <Link 
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        >
          ← Back
        </Link>
        <h1 className="text-xl">→ Generate BlaBla</h1>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
        {/* Left Side - Instructions */}
        <div className="space-y-8 border-r border-white/10 pr-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 text-sm">1</span>
              <div className="space-y-2">
                <p>Let's create a custom text generator.</p>
                <p className="text-white/60">Define the style and parameters for your text.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 text-sm">2</span>
              <div className="space-y-2">
                <p>Implement the generation logic.</p>
                <p className="text-white/60">Use AI models to generate creative and contextual text.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Code Preview */}
        <div className="font-mono">
          <pre className="bg-white/5 p-4 rounded-sm">
            <code className="text-sm">
              {`import { tool } from "*";
import { z } from "zod";

const generateBlaBla = tool({
  description:
    "Generate creative text content",
  parameters: z.object({
    style: z
      .enum(["formal", "casual", "poetic"])
      .describe("The writing style"),
    length: z
      .number()
      .min(50)
      .max(500)
      .describe("Length in words"),
  }),
});`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
} 