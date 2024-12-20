# Docusaurus说明
## 前言
Docusaurus 是用 JavaScript 开发的，是一个开源的静态网站生成器，并使用了一些流行的 JavaScript 库和框架，如 React、Webpack 和 Babel，旨在帮助开发者快速搭建易于维护和部署的文档网站。它是由 Facebook开源并持续维护的项目。
## 项目配置
```
git remote add origin git@gitee.com:jeff-chan/docusaurus-2024.git
git branch -M main
git push -u origin main
```
git远程
```
git remote add github git@github.com:cjf717/docusaurus-2024.git
git push -u github main --force


## 参考文章
- docusaurus网站
官方Github：https://github.com/facebook/docusaurus
官方文档：https://docusaurus.io/zh-CN/
民间中文文档：
https://www.docusaurus.cn/
https://docusaurus.org.cn/
https://docusaurus.nodejs.cn/（推荐）

- react官网
Github：https://github.com/facebook/react
中文文档：https://zh-hans.react.dev/

## 上传
- 更新到服务器
```
rsync -avz --chmod=755 --delete -e 'D:\tools\cwrsync_6.2.12_x64_free\bin\ssh.exe -p 38220 -i ~/.ssh/id_ed25519' build/ jeff@8.134.209.242:/var/www/html/docusaurus-2024/
```

## 使用总结
- 换行
  MDX 与 JSX 行为一致：即使在 <pre> 内，换行符也会转换成空格。 你必须显式地写一个换行符，它才会真的显示成换行效果。
- jsx语法
  集成到markdown中，如果md文件写有{ }、< >等带react格式的语法，会导致识别出错。解决方法：属于普通md文本内容，跟react语法冲突的部分内容进行代码包裹，避免执行。
- front-matter(前端标记)
  支持YAML语法，包含有title、description、head、tags，没有categories和katex。更多内容参考官方文档：[plugin-content-docs](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)
- 式使用
  跟react一样，任何组件中直接导入将在全局生效。局部生效及使用sass请参考官方文档。

- 优势
  可以按文件夹分类，标签tags自动汇总，文章目录有显示。
- 不足
  Docusaurus是国外产品，热度很高。但国内不流行，相关中文文档较少。官方翻译只是一小部分。
  Markdown 文件都是使用 MDX 解析的，在文档中所有 HTML 语法都必须使用 JSX（React）语法。对文档元素设置的内联样式，需要遵循 JSX 语法。
  编程习惯有差异，例如对markdown换行的规范。
  自定义页面中，导入第三方库aplayer时，本地编译通过，打包时出错。需要对react的框架足够了解。
