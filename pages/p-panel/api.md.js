module.exports = `


## 属性

### noBorder

取消Panel边框

示例:

\`\`\`
<zhkUI-panel title="不带边框" noBorder>不带边框Panel</zhkUI-panel>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
true | Boolean | -
false | Boolean | - 

默认值: false

### title

设置Panel的标题

示例:

\`\`\`
<zhkUI-panel title="标题">Panel内容</zhkUI-panel>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
字符串 | String | -

默认值: 空字符串

### top

设置Panel的顶部外边距

示例:

\`\`\`
<zhkUI-panel title="顶部边距" top="50rpx">距离顶部50rpx</zhkUI-panel>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
值+单位 | String | -

默认值: 0rpx

> 注意:该属性请可以设置多种单位如: 50rpx、50px、2em 等...

### bottom

设置Panel的底部外边距

示例:

\`\`\`
<zhkUI-panel title="底部边距" bottom="50rpx">距离底部50rpx</zhkUI-panel>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
值+单位 | String | -

默认值: 0rpx

> 注意:该属性请可以设置多种单位如: 50rpx、50px、2em 等...

### noPadding

取消Panel内边距

示例:

\`\`\`
<zhkUI-panel title="内边距" noPadding>取消内边距</zhkUI-panel>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
true | Boolean | -
false | Boolean | - 

默认值: false

## 方法

### set(options)

设置Panel的属性

示例:

\`\`\`
WXML
<zhkUI-panel id="panel" title="标题">Panel内容</zhkUI-panel>
\`\`\`

\`\`\`
JS
this.panel = this.selectComponent("#panel")
this.panel.set({
  noBorder: true,
  title: "动态设置的标题",
  top: "100rpx",
  bottom: "100rpx",
  noPadding: true
})
\`\`\`

参数

参数 | 类型 | 描述
---|---|---
options | Object | 相关对象属性请参照上文属性


`;
