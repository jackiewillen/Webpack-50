1.将编译后的js文件直接注入到html文件中
2.将js中的变量能够在html的页面上输出，例如在js
文件中定义 a = 'hello,Webpack',如何将其输出到html页面（注意：不是通过Dom插入的方式，是更为简单的方式）




参考资料：
https://github.com/jantimon/html-webpack-plugin#options


踩坑：
index.html body中的内容每次注入内容后都被移除，是因为没有在
这边配置：
