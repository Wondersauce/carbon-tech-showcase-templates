"use client"

import { CodeSnippet } from "@carbon/react"

import { cn } from "@/lib/utils"

interface CodeBlockProps {
  className: string
  children: React.ReactNode
}

export default function CodeBlock({ className, children }: CodeBlockProps) {
  return (
    <CodeSnippet className={cn("not-prose", className)}>{children}</CodeSnippet>
  )
}
