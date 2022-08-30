module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  devServer: {
    static: './dist',
  },
  resolve: {
    extensions: ['.js', '.glsl', 'vs', 'fs'],
  },
  module: {
    rules: [
      // javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Shader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: 'asset/source',
        generator: {
          folename: 'assets/images/[hash][ext]',
        },
      },
      // Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
    ],
  },
};

