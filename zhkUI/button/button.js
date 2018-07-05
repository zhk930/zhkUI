/*
creator: ZHK
components:zhkUI
name: button
*/
var Type
var Size
var Radius

Component({
  options: {
    multipleSlots: true
  },
  /**属性 */
  properties: {  
    size: {  
      type: String,
      value: 'SMALL'  //LARGE/SMALL/MINI
    },
    type: {
      type: String,
      value: 'SUCCESS' //SUCCESS/DANGER/WARN/INFO/WHITE
    },
    pattern: {
      type: String,
      value: 'DEFAULT'  //DEFAULT/CIRCLE/ROUNDED/
    },
    radius: {
      type: Number,
      value: 0
    },
    openType: {
      type: String,
      value: ''
    },
    ghost: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
  }, 
  /**数据 */ 
  data: {
    _loadingDisplay: ["none","none"],
    _loadingShow: false
  },
  ready: function () {
    var size = this.properties.size
    var type = this.properties.type
    var pattern = this.properties.pattern
    var radius = this.properties.radius
    var ghost = this.properties.ghost
    var disabled = this.properties.disabled
    var loading = this.properties.loading
    var openType = this.properties.openType
    this._init(size, type, pattern, radius, ghost, disabled, loading, openType)
  },
  /**方法 */
  methods: {
    //设置 
    set(options) {
      var obj = options == undefined ? {} : options
      if (obj == undefined) {
        return false
      }
      var size = obj.size == undefined ? this.properties.size : obj.size
      var type = obj.type == undefined ? this.properties.type : obj.type
      var pattern = obj.pattern == undefined ? this.properties.pattern : obj.pattern
      var radius = obj.radius == undefined ? this.properties.radius : obj.radius
      var ghost = obj.ghost == undefined ? this.properties.ghost : obj.ghost
      var disabled = obj.disabled == undefined ? this.properties.disabled : obj.disabled
      var loading = obj.loading == undefined ? this.properties.loading : obj.loading
      var openType = obj.openType == undefined ? this.properties.openType : obj.openType
      this._init(size, type, pattern, radius, ghost, disabled, loading, openType)
    },
    //init
    _init(size, type, pattern, radius, ghost, disabled, loading, openType) {
      var loadingType
      //type
      if (type == "SUCCESS") {
        Type = ghost ? "bg-transparent text-success border-success" : "text-white bg-success border-success"
        loadingType = ghost ? "SUCCESS" : "WHITE"
      } else if (type == "DANGER") {
        Type = ghost ? "bg-transparent text-danger border-danger" : "text-white bg-danger border-danger"
        loadingType = ghost ? "DANGER" : "WHITE"
      } else if (type == "WARN") {
        Type = ghost ? "bg-transparent text-warn border-warn" : "text-white bg-warn border-warn"
        loadingType = ghost ? "WARN" : "WHITE"
      } else if (type == "WHITE") {
        Type = ghost ? "bg-transparent text-white border-white" : "text-disable bg-white border-disable"
        loadingType = "WHITE"
      } else {
        Type = ghost ? "bg-transparent text-info border-info" : "text-white bg-info border-info"
        loadingType = ghost ? "INFO" : "WHITE"
      }
      //size
      if (size == "LARGE"){
        Size = "zhkui-btn-large"
        Radius = pattern == "ROUNDED" || pattern == "CIRCLE" ? 110 : radius
      } else if (size == "MINI") {
        Size = pattern == "CIRCLE" ? "zhkui-btn-mini-circle" : "zhkui-btn-mini"
        Radius = pattern == "ROUNDED" || pattern == "CIRCLE" ? 50 : radius  
      } else {
        Size = pattern == "CIRCLE" ? "zhkui-btn-small-circle" : "zhkui-btn-small"
        Radius = pattern == "ROUNDED" || pattern == "CIRCLE" ? 80 : radius
      }
      //loading
      var loadingDisplay = loading ? ["block", "none"] : ["none", "block"]
      var loadingShow = loading ? true : false
      this.setData({
        _type: Type,
        _size: Size,
        _radius: Radius,
        _disabledAlpha: disabled ? 0.65 : 1.0,
        _disabled: disabled,
        _openType: openType,
        _loadingDisplay: loadingDisplay,
        _loadingShow: loadingShow,
        _loadingType: loadingType.toLowerCase()
      })
    },
    //按下监听
    _bindtouchstart(e) {
      this.setData({ _disabledAlpha: "0.6" })
    },
    //弹起
    _bindtouchend() {
      this.setData({ _disabledAlpha: "1.0" })
    },
  }
})