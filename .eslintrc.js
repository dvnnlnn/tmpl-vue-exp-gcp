module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    'prettier'
  ],
  'rules': {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'camelcase': 'off',
    'prettier/prettier': 'error'
  }
};