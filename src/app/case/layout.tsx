import { AppSidebar } from "@/components/app-sidebar"
import { BreadcrumbNav } from "@/components/breadcrumb"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ViewTransitions } from "next-view-transitions"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <BreadcrumbNav />
        <div className="mx-auto max-w-6xl space-y-6 p-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
    </ViewTransitions>
  )
}