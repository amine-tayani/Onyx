module.exports = {
  root: true,
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-key': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
  },
  settings: {
    tailwindcss: {
      config: './tailwind.config.js',
    },
    next: {
      rootDir: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],

  ignorePatterns: ['src/lib/supabase.ts'],
};