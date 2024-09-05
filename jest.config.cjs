/**
 * @type {import("jest").Config}
 */
const config = {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  verbose: true,
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.tsx',
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!node_modules/**',
    '!src/App.tsx',
    '!src/main.tsx',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov', 'json', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
};

module.exports = config;
