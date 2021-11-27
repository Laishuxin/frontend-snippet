# Frontend Snippet

本仓库的目的是构建前端常用的代码片段。社区已经有许多优秀的前端代码片段
而且也支持 tree-shaking。但是，有时候我们并不想引入他们。

所以这里提供了常用的前端**代码片段**，而且提供了 **Vscode Snippet** 功能以及标准化
的命名规则，方便在日常开发使用对应的 Snippet.

命名规则如下：
`s大分类:代码片段名`。(s: Snippet)

例如： `sutils:isDef` 表示 `Utils` 下的 `isDef` 函数代码片段。

（不用考虑 Vscode Snippet 命名过长的问题， 在 Vscode 中，我们其实可以输入 keyword 就能联想出对应的 Snippet。但是如果命名规则太多，需要记忆的规则会占用太多的精力。）

## Utils

- [前端工具库 - 与框架无关](./utils/README.md)。
- [前端工具库 - Vscode Snippet](./utils/snippet.json)

vscode 生成文档的 snippet:

````json
{
  "sutils": {
    "prefix": "sutils",
    "body": [
      "##### `${1:utils-name}`:",
      "",
      "1. Examples",
      "",
      "```js",
      "${1:utils-name}()$0",
      "```",
      "",
      "2. code",
      "",
      "```js",
      "",
      "```",
      "",
      "3. vscode snippet",
      "",
      "```json",
      "{",
      "\t\"sutils:${1:utils-name}\": {",
      "\t\t\"prefix\": \"sutils:${1:utils-name}\",",
      "\t\t\"body\": []",
      "\t}",
      "}",
      "```",
      "",
      "---",
      ""
    ]
  }
}
````

## Vue

### Vue2

[Vue2 相关的工具。例如：mixins 等](./vue/vue2/README.md)

<!-- ### Vue3 -->

## Nuxt
