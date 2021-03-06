const { generateConfig, resolveApp } = require('../lib')

module.exports = generateConfig(
  {
    polyfill: true,
    babel: {
      react: false
    },
    css: {
      postcss: true
    },
    sass: {
      scoped: true,
      extract: true
    },
    typescript: false,
    production: true,
    excludeExternals: true,
    media: {
      dataUrl: false
    }
  }, {
    entry: {
      app: ['babel-polyfill', './src/index.js']
    },
    output: {
      filename: '[name].js',
      path: resolveApp('build')
    }
  }
)
