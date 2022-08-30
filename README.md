threejs-shader-template
npm init -y
npm i -D webpack webpack-cli webpack-dev-server
touch webpack.config.js
module.exports = {
mode: 'development', entry: './src/index.js', output: { path: ${__dirname}/dist, filename: 'bundle.js', }, devServer: { static: './dist', }, resolve: { extensions: ['.js', '.glsl', 'vs', 'fs'], }, module: { rules: [ // javascript { test: /.js$/, exclude: /node_modules/, use: ['babel-loader'] }, // Shader { test: /.(glsl|vs|fs|vert|frag)$/, type: 'asset/source', generator: { folename: 'assets/images/[hash][ext]', }, }, // Images { test: /.(jpg|png|gif|svg)$/, type: 'asset/resource', generator: { filename: 'assets/images/[hash][ext]', }, }, ], }, };

mkdir src
cd src
touch index.js
mkdir textures
cd ../
mkdir dist
npm i -D babel-loader @babel/core
package.json>>>>"scripts": {
"start": "webpack-dev-server",
"dev": "webpack --mode=development",
"build": "webpack --mode=production"
},

npm run start
cd dist
touch index.html
index.js>>>>>>console.log('webpack')
ctrl + c
npm run dev
npm run start

### npm i three

### npm i -D style-loader css-loader