npm run build编译完毕后自动启动网站在localhost:3000端口。使用express搭建能够在修改js代码后，自动热更新网页。全程无需手动刷新。

解决方案来源：
https://webpack.js.org/guides/development/

踩坑：
一、打开http://localhost:3000/ 显示 Cannot GET /

webpack.config.js中少了这一段，所以生成的文件夹中就没有index.html了
plugins: [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Output Management'
  })
],

二、编译完成就结束了，没有办法在浏览器中访问localhost:3000

应该是用tnpm run server 而不是用tnpm run build

三、页面不能够自动刷新
// 因为少了下面这一段
let hotMiddleware = webpackHotMiddleware(compiler,{
    heartbeat: 2000,
 })

