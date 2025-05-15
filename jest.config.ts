// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@src/(.*)$': '<rootDir>/$1',
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};

export default config;
