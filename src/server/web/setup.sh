
npm init -y
npm install express
npm install react
npm install --save-dev @babel/core @babel/cli
npm install @babel/preset-env --save-dev

mkdir lib

touch .babelrc
echo "{\"presets\": [\"@babel/preset-env\"]}" > .babelrc