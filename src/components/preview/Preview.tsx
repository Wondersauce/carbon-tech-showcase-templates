"use client"

import { Launch } from "@carbon/icons-react"
import {
  Button,
  CodeSnippet,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@carbon/react"

export default function Preview({ previewURL }: { previewURL: string }) {
  return (
    <div>
      <Tabs>
        <TabList aria-label="List of tabs" fullWidth className="w-full">
          <Tab>Preview</Tab>
          <Tab>Code</Tab>
          <div className="flex w-full items-center justify-end">
            <Link href={previewURL} target="_blank">
              <Button renderIcon={(props) => <Launch size={16} {...props} />}>
                <span className="order-last">Launch</span>
              </Button>
            </Link>
          </div>
        </TabList>
        <TabPanels>
          <TabPanel className="border border-solid border-gray-20">
            <div>
              <iframe className="h-[768px] w-full" src={previewURL} />
            </div>
          </TabPanel>
          <TabPanel>
            <CodeSnippet type="multi" feedback="Copied to clipboard">
              {`  "scripts": {
    "build": "lerna run build --stream --prefix --npm-client yarn",
    "ci-check": "carbon-cli ci-check",
    "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",
    "doctoc": "doctoc --title '## Table of Contents'",
    "format": "prettier --write '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**'",
    "format:diff": "prettier --list-different '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**' '!packages/components/**'",
    "lint": "eslint actions config codemods packages",
    "lint:styles": "stylelint '**/*.{css,scss}' --report-needless-disables --report-invalid-scope-disables",
    "sync": "carbon-cli sync",
    "test": "cross-env BABEL_ENV=test jest",
    "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns='examples,/packages/components/,/packages/react/'"
  },
  "resolutions": {
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-is": "~16.9.0",
    "react-test-renderer": "~16.9.0"
  },
  "devDependencies": {
    "@babel/core": "^7.10.0",
    "@babel/plugin-proposal-class-properties": "^7.7.4",
    "@babel/plugin-proposal-export-default-from": "^7.7.4",
    "@babel/plugin-proposal-export-namespace-from": "^7.7.4",
    "@babel/plugin-transform-runtime": "^7.10.0",
    "@babel/preset-env": "^7.10.0",
    "@babel/preset-react": "^7.10.0",
    "@babel/runtime": "^7.10.0",
    "@commitlint/cli": "^8.3.5",`}
            </CodeSnippet>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
