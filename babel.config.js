module.exports = {
  "presets": [
    [
      '@babel/preset-env', {targets: {node: 'current'}, loose: true}],
    "@babel/preset-typescript", // if you want to have typescript in your project,
  ],

  "plugins": [
    // For Jest - Babel equivalents for experimentalDecorators and emitDecoratorMetadata
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]

};
