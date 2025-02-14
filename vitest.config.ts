import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

const rootBaseConfig = {
    plugins: [tsconfigPaths()],
}

const testBaseConfig = {
    coverage: {
        provider: 'v8',
    },
}

export default defineConfig({
    test: {
        workspace: [
            {
                ...rootBaseConfig,
                test: {
                    ...testBaseConfig,
                    name: 'unit',
                    include: ['src/**/*.spec.ts'],
                },
            },
            {
                ...rootBaseConfig,
                test: {
                    ...testBaseConfig,
                    name: 'integration',
                    include: ['test/**/*.spec.ts'],
                },
            },
        ],
    },
})
