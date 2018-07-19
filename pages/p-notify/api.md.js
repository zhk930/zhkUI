module.exports = `


## 属性

### type

设置Notify的类型

示例:

\`\`\`
<zhkUI-notify message="这是默认Notify" type="WARN"></zhkUI-notify>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
DANGER | String | -
INFO | String | -
SUCCESS | String | -
WARN | String | -

默认值: INFO

> 注意:该属性请全部字母大写

### message

设置Notify控件的消息体

示例:

\`\`\`
<zhkUI-notify message="这是默认Notify"></zhkUI-notify>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
字符串 | String | -

默认值: Notify内容...

### duration

设置Notify控件的显示持续时间（毫秒）

示例:

\`\`\`
<zhkUI-notify message="这是默认Notify" duration="1000"></zhkUI-notify>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
1000 ~ 10000 | Number | -

默认值: 3000

> 注意:该属性如果设置数值超出属性值规定范围将自动使用默认值

### direction

设置Notify控件的出现位置

示例:

\`\`\`
<zhkUI-notify message="这是默认Notify" direction="TOP"></zhkUI-notify>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
TOP | String | 顶部
BOTTOM | String | 底部

默认值: TOP

> 注意:该属性请全部字母大写

## 方法

### show(options)

显示并设置Notify控件的属性

示例:

\`\`\`
WXML
<zhkUI-notify id="notify" message="这是默认Notify"></zhkUI-notify>
\`\`\`

\`\`\`
JS
this.notify = this.selectComponent("#notify")
this.notify.show({ type: "WARN", message: "这是Notify，一秒后消失", duration: "1000",  direction: "BOTTOM" })
\`\`\`

参数

参数 | 类型 | 描述
---|---|---
options | Object | 相关对象属性请参照上文属性


`;
