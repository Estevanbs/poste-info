export default {
  bail: true,
  clearMocks: true,
  resetMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/useCases/**/*UseCase*.ts',
    '<rootDir>/src/modules/**/useCases/**/*Controller*.ts',
    '<rootDir>/src/modules/**/errors/**/*.ts',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/dist/'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'text-summary'],
  preset: 'ts-jest',
  reporters: ['default'],
  testMatch: ['**/*.spec.ts'],
};
