module.exports = `

# 

# Tab
---

## 属性

### pattern

设置Tab的样式

示例:

\`\`\`
<zhkUI-tab pattern="BUTTON"></zhkUI-tab>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
LINE | String | -
BUTTON | String | - 

默认值: LINE

> 注意:该属性请全部字母大写

### type

设置Tab的类型

示例:

\`\`\`
<zhkUI-tab type="WARN"></zhkUI-tab>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
DANGER | String | -
INFO | String | -
SUCCESS | String | -
WARN | String | -

默认值: DANGER

> 注意:该属性请全部字母大写

### col

设置Tab元素每屏个数

示例:

\`\`\`
<zhkUI-tab col="3"></zhkUI-tab>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
1~4 | Int | -

默认值: 4

### list

设置Tab元素数据

示例:

\`\`\`
<zhkUI-tab list="...JSON[]"></zhkUI-tab>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
JSON数组 | JSON[] | JSON数组

默认值: []

JSON Key Value描述:

\`\`\`
[
  { "title": "待支付" },
  { "title": "已支付" },
  { "title": "已发货" }
]
\`\`\`

Key | 类型 | 描述
---|---|---
title | String | 显示的文字标题

### current

设置Tab开始选中位置

示例:

\`\`\`
<zhkUI-tab current="2"></zhkUI-tab>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
0~无穷大 | Int | -

默认值: 0

> 注意:该属性值不能超出list属性JSON数组长度

## 方法

### set(options)

设置Tab的属性

示例:

\`\`\`
WXML
< zhkUI-tab id="tab" list='[{"title": "示例"},{"title": "代码"}]'></zhkUI-tab>
\`\`\`

\`\`\`
JS
this.tab = this.selectComponent("#tab")
this.tab.set({
  type: "WARN",
  pattern: "BUTTON",
  col: 4,
  current: 3,
  list: [
    { "title": "第一个" },
    { "title": "第二个" },
    { "title": "第三个" },
    { "title": "第四个" },
    { "title": "第五个" },
  ]
})
\`\`\`

参数

参数 | 类型 | 描述
---|---|---
options | Object | 相关对象属性请参照上文属性

## 回调

### bind:changeEvent

设置Tab的属性

示例:

\`\`\`
WXML
<zhkUI-tab bind:changeEvent="bindTabChange"></zhkUI-tab>
\`\`\`

\`\`\`
JS
bindTabChange: function (e) {
  var current = e.detail.current
  console.log('选择了第' + current + '个元素')
}
\`\`\`

返回参数

参数 | 类型 | 位置
---|---|---
current | Int | e.detail.current
title | Int | e.detail.title


`;
