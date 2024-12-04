import DocsLayout from "@/components/docsLayout/DocsLayout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DocsLayout>{children}</DocsLayout>;
}
