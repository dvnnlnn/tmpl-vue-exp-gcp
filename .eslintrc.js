module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "airbnb-base",
    "@vue/airbnb",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "parser": 'babel-eslint',
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'camelcase': 'off'
  }
};