import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { Activity, ImageIcon } from "lucide-react"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Generate Text",
    url: "/case/generate-text",
    icon: Activity,
  },
  {
    title: "Streaming Text",
    url: "/case/streaming-text",
    icon: Activity,
  },
  {
    title: "Chatbot Message Persistence",
    url: "/case/chatbot-message-persistence",
    icon: Activity,
  },
  {
    title: "Structured Outputs",
    url: "/case/structured-outputs",
    icon: Activity,
  },
  {
    title: "Generate Image",
    url: "/case/generate-image",
    icon: ImageIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-l border-white/10">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2 py-4">
          <div className="flex h-8 w-8 items-center justify-center bg-black">
            <span className="text-lg font-bold text-white">AI</span>
          </div>
          <span className="text-lg font-semibold">ai-sdk-showcase</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="hover:bg-gray-100">
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="text-lg font-medium">
                      <item.icon className="h-6 w-6" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
