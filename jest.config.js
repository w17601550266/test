module.exports = {
    // Jest 配置项
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js',
      'jest-canvas-mock'
    ],
    rootDir: '.', // 项目根目录，这里假设为当前目录
    collectCoverage: false, // 是否收集覆盖率信息
    collectCoverageFrom: [
      '<rootDir>/src/components/**/*.{js,jsx,mjs}',
      // 其他需要收集覆盖率的文件路径
    ],
    coverageDirectory: 'coverage', // 覆盖率报告的存储目录
    coveragePathIgnorePatterns: [
      // 忽略覆盖率报告中的路径模式
    ],
    testMatch: [
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
      '**/?(*.)(spec|test).{js,jsx,ts,tsx}',
      // 其他测试文件匹配模式
    ],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // 转换规则
      // 其他文件类型的转换规则
    },
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1', // 模块名称映射
      // 其他模块名称映射规则
    },
    transformIgnorePatterns: [
      // 忽略转换的文件或目录模式
    ],
    // 其他 Jest 配置项...
  };