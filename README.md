## threejs-shader-template
### npm init -y
### npm i -D webpack webpack-cli webpack-dev-server
### touch webpack.config.js
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
