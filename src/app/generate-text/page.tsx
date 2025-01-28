import Link from "next/link";

export default function GenerateText() {
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
        <h1 className="text-xl">→ Generate Text</h1>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
        {/* Left Side - Instructions */}
        <div className="space-y-8 border-r border-white/10 pr-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 text-sm">1</span>
              <div className="space-y-2">
                <p>To kick that off, we're going to create a getWeather tool.</p>
                <p className="text-white/60">We'll start by giving it a description and some parameters.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 text-sm">2</span>
              <div className="space-y-2">
                <p>Then we'll implement the execute function.</p>
                <p className="text-white/60">In this case, we're going to just stub it out by saying the weather in this city is twenty-five degrees.</p>
                <p className="text-white/60">But if we wanted to, we could call a weather API to get the actual weather.</p>
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

const getWeatherTool = tool({
  description:
    "Get the current weather in the specified city",
  parameters: z.object({
    city: z
      .string()
      .describe("The city to get the weather for"),
  }),
});`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
} 