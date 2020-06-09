import * as babelJest from 'babel-jest'

const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
}

// eslint-disable-line @typescript-eslint/no-var-requires
module.exports = babelJest.createTransformer(babelOptions)
