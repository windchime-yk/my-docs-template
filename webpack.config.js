module.exports = {
  mode: 'production',
  entry: './src/babel/main.js',
  output: {
    path: `${__dirname}/docs/assets/js`,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  }
}