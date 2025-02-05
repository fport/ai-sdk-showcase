"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BookOpen, ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import * as React from "react"
import { ModeToggle } from "./mode-toggle"
import { SidebarTrigger } from "./ui/sidebar"

export function BreadcrumbNav() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <Breadcrumb className="border-b border-white/10 w-full px-4 bg-sidebar">
      <div className="flex justify-between items-center w-full">
        <BreadcrumbList>
          <BreadcrumbItem>
            <div className="flex items-center border-r border-white/10 pr-4 h-12">
              <SidebarTrigger />
            </div>
            <div className="flex items-center border-r border-white/10 px-4 h-12">
              <ModeToggle />
            </div>
            <BreadcrumbLink href="/" className="flex items-center pl-4">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`
            const isLast = index === segments.length - 1

            return (
              <React.Fragment key={segment}>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="capitalize">
                      {segment}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href} className="capitalize">
                      {segment}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
        <a
          href="https://sdk.vercel.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <BookOpen className="h-4 w-4" />
          <span>Vercel AI SDK Docs</span>
        </a>
      </div>
    </Breadcrumb>
  )
} 