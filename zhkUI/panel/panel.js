/*
creator: ZHK
components:zhkUI
name: panel
*/
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /** * 组件的属性列表 * 用于组件自定义设置 */
  properties: {
    //边框
    noBorder: {
      type: Boolean, value: false
    },
    // 标题 
    title: {
      type: String, value: ''
    },
    // top边距 
    top: {
      type: String, value: ''
    },
    // bottom边距 
    bottom: {
      type: String, value: ''
    },
    // noPadding
    noPadding: {
      type: Boolean, value: false
    }
  },
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */
  data: {
    _noBorder: '',
    _title: '',
    _titleDisplay: 'none',
    _marginTop: '0',
    _marginBottom: '0',
    _noPadding: ''
  },
  ready: function () {
    if (!this.properties.noBorder){
      this.setData({ _noBorder: 'zhkui-panel-border'})
    }
    if (this.properties.title != "") {
      this.setData({ 
        _title: this.properties.title,
        _titleDisplay: "block"
      })
    }else{
      this.setData({
        _marginTop: '30rpx'
      })
    }
    if (this.properties.top != "") {
      this.setData({
        _marginTop: this.properties.top
      })
    }
    if (this.properties.bottom != "") {
      this.setData({
        _marginBottom: this.properties.bottom
      })
    }
    if (this.properties.noPadding) {
      this.setData({
        _noPadding: 'zhkui-panel-nopadding'
      })
    }
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */
  methods: {
    
  }
})