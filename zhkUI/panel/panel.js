/*
creator: ZHK
components:zhkUI
name: panel
*/

var NoBorder
var NoPadding

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
    _marginTop: 0,
    _marginBottom: 0,
    _noPadding: ''
  },
  ready: function () {
    var noBorder = this.properties.noBoder
    var title = this.properties.title
    var top = this.properties.top
    var bottom = this.properties.bottom
    var noPadding = this.properties.noPadding
    this._init(noBorder, title, top, bottom, noPadding)
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */
  methods: {
    //设置 
    set(options) {
      var obj = options == undefined ? {} : options
      if (obj == undefined) {
        return false
      }
      var noBorder = obj.noBorder == undefined ? this.Noborder : obj.noBorder
      var title = obj.title == undefined ? this.properties.title : obj.title
      var top = obj.top == undefined ? this.properties.top : obj.top
      var bottom = obj.bottom == undefined ? this.properties.bottom : obj.bottom
      var noPadding = obj.noPadding == undefined ? this.NoPadding : obj.noPadding
      this._init(noBorder, title, top, bottom, noPadding)
    },
    //init
    _init(noBorder, title, top, bottom, noPadding) {
      this.NoBorder = noBorder
      if (!noBorder) {
        this.setData({ _noBorder: 'zhkui-panel-border' })
      }else{
        this.setData({ _noBorder: '' })
      }
      if (title != "") {
        this.setData({
          _title: title,
          _titleDisplay: "block"
        })
      } else {
        this.setData({
          _marginTop: '30rpx',
          _titleDisplay: "none"
        })
      }
      if (top != "") {
        this.setData({
          _marginTop: top
        })
      }
      if (bottom != "") {
        this.setData({
          _marginBottom: bottom
        })
      }

      this.NoPadding = noPadding
      if (noPadding) {
        this.setData({
          _noPadding: 'zhkui-panel-nopadding'
        })
      }else{
        this.setData({
          _noPadding: ''
        })
      }
    }
  }
})