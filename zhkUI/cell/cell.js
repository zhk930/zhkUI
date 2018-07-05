/*
creator: ZHK
components:zhkUI
name: cell
*/
Component({
  relations: {
    '../cell-group/cell-group': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /** * 组件的属性列表 * 用于组件自定义设置 */
  properties: {
    // 标题 
    title: {
      type: String, value: '这是标题'
    },
    // 描述 
    label: {
      type: String, value: ''
    },
    // 值 
    value: {
      type: String, value: ''
    },
    // link
    link: {
      type: Boolean, value: false
    },
    // linkUrl
    linkUrl: {
      type: String, value: ''
    },
    //linkType: navigateTo，redirectTo，switchTab，reLaunch
    linkType: { 
      type: String, value: 'navigateTo'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    //badge
    badge: {
      type: String, value: ''
    },
    //badge类型
    badgeType: {
      type: String, value: 'DANGER'
    },
  },
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */
  data: {
    _isLastCell: true
  },
  ready: function () {
    this.setData({ 
      _title: this.properties.title,
      _label: this.properties.label,
      _value: this.properties.value,
      _link: this.properties.link
    })
    var title = this.properties.title
    var label = this.properties.label
    var value = this.properties.value
    var link = this.properties.link
    var linkUrl = this.properties.linkUrl
    var linkType = this.properties.linkType
    var disabled = this.properties.disabled
    var badge = this.properties.badge
    var badgeType = this.properties.badgeType
    this._init(title, label, value, link, linkUrl, linkType, disabled, badge, badgeType)
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */
  methods: {
    //init
    _init: function (title, label, value, link, linkUrl, linkType, disabled, badge, badgeType){
      this.setData({
        _title: title,
        _label: label,
        _value: value,
        _link: link,
        _linkUrl: linkUrl,
        _linkType: linkType,
        _disabled: disabled,
        _badge: badge,
        _badgeType: badgeType
      })
    },
    //_bindtap
    _bindtap: function (e){
      if (this.data._link && this.properties.linkUrl != ""){
        switch (this.properties.linkType){
          case "navigateTo":
            wx.navigateTo({
              url: this.properties.linkUrl,
            })
            break
          case "redirectTo":
            wx.redirectTo({
              url: this.properties.linkUrl,
            })
            break
          case "switchTab":
            wx.switchTab({
              url: this.properties.linkUrl,
            })
            break
          case "reLaunch":
            wx.reLaunch({
              url: this.properties.linkUrl,
            })
            break
        }
      }
    },
    // 用于被 cell-group 更新，标志是否是最后一个 cell
    updateIsLastCell: function (isLastCell) {
      this.setData({ _isLastCell: isLastCell })
    }
  }
})