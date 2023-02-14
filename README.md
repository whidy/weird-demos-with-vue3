# 奇怪的Vue.js 3.x

> 什么奇怪，明明太菜！

该项目基于[Vite-Element-Plus-UnoCSS](https://github.com/whidy/Vite-Element-Plus-UnoCSS)模板进行基础搭建。

## 问题集合

* 关于Reactive和Ref相关。
    当你对一个响应数据进行操作的时候，往往容易忽略的是，比如后端接口返回的数据直接覆盖一个reactive内的某个属性值，这是没有问题的，然而，假设另一个reactive依赖了被改变的reactive值时，操作不当会造成响应丢失，因为引用地址发生变化了。这个要特别小心！

* 关于 `el-input` 组件输入一次就出现光标跳出输入框的问题（触发blur）。
