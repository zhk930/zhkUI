module.exports = `


## 属性

### message

设置Toast控件的消息体

示例:

\`\`\`
<zhkUI-toast id="toast" message="这是默认Toast"></zhkUI-toast>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
字符串 | String | -

默认值: Toast内容...

### duration

设置Toast控件的显示持续时间（毫秒）

示例:

\`\`\`
<zhkUI-toast id="toast" message="这是默认Toast" duration=“1000”></zhkUI-toast>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
1000 ~ 10000 | Number | -

默认值: 3000

> 注意:该属性如果设置数值超出属性值规定范围将自动使用默认值

### direction

设置Toast控件的出现位置

示例:

\`\`\`
<zhkUI-toast id="toast" message="这是默认Toast" direction="TOP"></zhkUI-toast>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
TOP | String | 顶部
BOTTOM | String | 底部

默认值: BOTTOM

> 注意:该属性请全部字母大写

## 方法

### show(options)

显示并设置Toast控件的属性

示例:

\`\`\`
WXML
<zhkUI-toast id="toast"></zhkUI-toast>
\`\`\`

\`\`\`
JS
this.toast = this.selectComponent("#toast")
this.toast.show({ message: "这是Toast，一秒后消失", duration: 1000, direction: "TOP" })
\`\`\`

参数

参数 | 类型 | 描述
---|---|---
options | Object | 相关对象属性请参照上文属性


`;
