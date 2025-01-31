import {defineConfig} from 'vitest/config'

import shared from './config.shared'

export default defineConfig({
  test: {
    ...shared,
    include: [`tests/e2e/*.test.ts`],
    pool: `threads`,
    poolOptions: {
      threads: {
        isolate: false,
        maxThreads: 1,
        minThreads: 1,
      },
    },
    watch: false,
  },
})
