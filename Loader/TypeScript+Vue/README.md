主要是将typescript的技术应用到vue中
参考链接：
typescript在webpack中配置
https://webpack.js.org/guides/typescript/#root
vue中如何引用typescript
https://cn.vuejs.org/v2/guide/typescript.html

1.首先参考vue中推荐的对于typescript中的tsconfig.json的配置
{
  "compilerOptions": {
    // 与 Vue 的浏览器支持保持一致
    "target": "es5",
    // 这可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "es2015",
    "moduleResolution": "node"
  }
}
注意你需要引入 strict: true (或者至少 noImplicitThis: true，这是 strict 模式的一部分) 以利用组件方法中 this 的类型检查，否则它会始终被看作 any 类型。

2.为了能够在声明组件时基于类的 API，则可以使用官方维护的 vue-class-component 装饰器：
export default class MyComponent extends Vue {
  // 初始数据可以直接声明为实例的属性
  message: string = 'Hello!'

  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.message)
  }
}

3.踩坑 
把  options: {
          appendTsSuffixTo: [/\.vue$/]
        }
配置到了vue下了，应该配置到.tsx?$下