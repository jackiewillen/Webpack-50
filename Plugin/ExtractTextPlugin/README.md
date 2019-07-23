为什么要使用ExtractTextPlugin这个插件

答：因为js和css被webpack都打包到一个js文件下，每次html页面都要等js文件加载才能渲染css，所以直接将css提出来，放到html页面中会加快页面的渲染速度。

踩坑一：
我是webpack4.X使用npm install extract-text-webpack-plugin安装后报错
Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead

stackoverflow上提供方案：
https://stackoverflow.com/questions/51383618/chunk-entrypoints-use-chunks-groupsiterable-and-filter-by-instanceof-entrypoint
需要使用如下命令安装即可
npm install extract-text-webpack-plugin@next
