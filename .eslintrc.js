module.exports = {
  extends: 'airbnb',
  "env": {
    "browser": true,
  },
  parser: 'babel-eslint',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/stories/**',
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*.{test,spec}.{js,jsx}',
          '**/jest.config.js',
        ],
        optionalDependencies: false,
        peerDependencies: true
      },
    ],
  },
};
