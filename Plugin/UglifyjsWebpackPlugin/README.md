需要达到的目标：
1. 删除注释
2. 丑化代码，也就是压缩代码或者也美化一下试试
3. 删除其中的console命令
4. 去除degubber调试信息

参考配置方案：
https://www.webpackjs.com/plugins/uglifyjs-webpack-plugin/

https://github.com/mishoo/UglifyJS2/tree/harmony#minify-options

踩坑，感觉uglifyjs中的部分功能不能够发挥作用。
因为 需要设置mode:'production'才能够发挥作用，
optimization.minimizer下面的内容只有在生产环境下才有效。