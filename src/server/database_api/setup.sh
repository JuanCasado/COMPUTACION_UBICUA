
npm init -y
npm install express
npm install mongoose
npm install --save-dev @babel/core @babel/cli
npm install @babel/preset-env --save-dev
npm install body-parser

mkdir lib

touch .babelrc
echo "{\"presets\": [\"@babel/preset-env\"]}" > .babelrc