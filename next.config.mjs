/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx';
import path from 'path';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
});
