'use client';
import { cn } from '@/lib/utils';
import { CodeSnippet } from '@carbon/react';

interface CodeBlockProps {
  className: string;
  children: React.ReactNode;
}

export default function CodeBlock({ className, children }: CodeBlockProps) {
  return (
    <CodeSnippet className={cn('not-prose', className)}>{children}</CodeSnippet>
  );
}
