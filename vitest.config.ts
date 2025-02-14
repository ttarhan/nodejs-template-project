import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

const baseConfig = {
    plugins: [tsconfigPaths()],
}

export default defineConfig({
    test: {
        workspace: [
            {
                ...baseConfig,
                test: {
                    name: 'unit',
                    include: ['src/**/*.spec.ts'],
                },
            },
            {
                ...baseConfig,
                test: {
                    name: 'integration',
                    include: ['test/**/*.spec.ts'],
                },
            },
        ],
    },
})
