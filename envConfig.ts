import nextEnv from "@next/env"

if (nextEnv && "loadEnvConfig" in nextEnv) {
  nextEnv.loadEnvConfig(process.cwd())
} else {
  // eslint-disable-next-line
  require("@next/env").loadEnvConfig(process.cwd())
}
