/*
creator: ZHK
components:zhkUI
name: title
*/
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /** * 组件的属性列表 * 用于组件自定义设置 */
  properties: {
    //类型
    type: {
      type: String, value: 'bg-default'
    },
    // 标题 
    title: {
      type: String, value: ''
    },
    // 描述 
    label: {
      type: String, value: ''
    },
    // 圆角 
    rounded: {
      type: Boolean, value: false
    }
  },
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */
  data: {
    _blockBg: 'bg-default',
    _title: '',
    _rounded: '',
    _label: ''
  },
  ready: function () {
    var blockBg = "bg-black"
    switch (this.properties.type){
      case "INFO":
        blockBg = "bg-info"
        break
      case "WARN":
        blockBg = "bg-warn"
        break
      case "SUCCESS":
        blockBg = "bg-success"
        break
      case "DANGER":
        blockBg = "bg-danger"
        break
    }
    this.setData({ 
      _blockBg: blockBg,
      _title: this.properties.title,
      _label: this.properties.label
    })
    if (this.properties.rounded) {
      this.setData({ _rounded: "zhkui-title-block-rounded" })
    }
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */
  methods: {
    
  }
})