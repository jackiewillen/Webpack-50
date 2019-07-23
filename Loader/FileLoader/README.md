

1.图片直接放在 ./img/...下，会导致编译路径出错。
需要加上如下代码：
options: {
    outputPath: 'dist/'
}