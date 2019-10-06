# You-Dont-Know-JS-zh

《你不知道的 JavaScript（上中下卷）》中文

感谢原作！原 repo 地址：[https://github.com/getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)

## 书目

- [起步上路](docs/up&going/)
- [作用域与闭包](docs/scope&closures/)
- [this 与对象原型](docs/this&objectprototypes/)
- [类型与文法](docs/types&grammar/)
- [异步与性能](docs/async&performance/)
- [ES6 与未来](docs/es6&beyond/)

## 本地开发 & 阅读

本项目基于 vuepress 进行开发，以提供比 github mardown 更佳的阅读体验，依赖于 `node.js`、`yarn`、`vuepress` 等环境

```sh
# node
node -v
> v10.14.1
# yarn
yarn -v
> 1.13.0
# vuepress
yarn global add vuepress

# 本地开发
git clone https://github.com/gdut-yy/You-Dont-Know-JS-zh.git
cd You-Dont-Know-JS-zh
yarn docs:dev

# 本地阅读
http://localhost:8080/
```
