"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import * as React from "react"
import { SidebarTrigger } from "./ui/sidebar"

export function BreadcrumbNav() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <Breadcrumb className="border-b border-white/10 w-full p-4 bg-sidebar">
      <BreadcrumbList>
        <BreadcrumbItem>
          <div className="flex items-center gap-2 border-r border-white/10 pr-4">
            <SidebarTrigger />
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
    </Breadcrumb>
  )
} 