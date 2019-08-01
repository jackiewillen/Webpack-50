如何进行babel-loader的配置
1.babel 在webpack中的配置可以参考
https://babeljs.io/setup#installation 
每一步都有。

2.需要使用babel-loader缩小一下编译的范围，比如只对
src文件夹下的内容进行编译，这样就不会对其他文件夹下进行
扫描和编译，加快了编译的速度。通过配置resolve.modules来修改配置进行优化。

3.通过resolve来优化

可参考：https://webpack.docschina.org/configuration/resolve/#resolve-modules

4.配置mainFields，减少搜索在package.json中搜索入口的时间，因为默认是['browser', 'module', 'main']这样才能找到main入口。
可参考： https://webpack.docschina.org/configuration/resolve/#resolve-mainfields

5.用alias将./js/utils/路径简化成一个@符号
可参考：
https://webpack.docschina.org/configuration/resolve/#resolve-alias

6.配置extensions来减少webpack对后缀的尝试次数，配置extensions为extensions: ['js']
可参考： https://webpack.docschina.org/configuration/resolve/#resolve-


7.配置noParse已避免对没有模块化的文件作忽略提高性能。如本项目中的react.js中就完全没有import、 require、 define 等模块化语句。
参考配置：
https://webpack.js.org/configuration/module/#modulenoparse


踩坑
1.extensions中是.js，不是js，不然会报错