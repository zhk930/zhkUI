module.exports = `


## 属性

### message

设置TopTip控件的消息体

示例:

\`\`\`
<zhkUI-toptip id="toast" message="这是默认TopTip"></zhkUI-toptip>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
字符串 | String | -

默认值: TopTip内容...

### duration

设置TopTip控件的显示持续时间（毫秒）

示例:

\`\`\`
<zhkUI-toptip id="toptip" message="这是默认TopTip" duration="1000"></zhkUI-toptip>
\`\`\`

参数

属性值 | 类型 | 描述
---|---|---
1000 ~ 10000 | Number | -

默认值: 3000

> 注意:该属性如果设置数值超出属性值规定范围将自动使用默认值

## 方法

### show(options)

显示并设置TopTip控件的属性

示例:

\`\`\`
WXML
<zhkUI-toptip id="toptip"></zhkUI-toptip>
\`\`\`

\`\`\`
JS
this.toptip = this.selectComponent("#toptip")
this.toptip.show({ message: "这是TopTip，一秒后消失", duration: 1000 })
\`\`\`

参数

参数 | 类型 | 描述
---|---|---
options | Object | 相关对象属性请参照上文属性


`;
