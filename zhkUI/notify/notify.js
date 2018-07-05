/*
creator: ZHK
components:zhkUI
name: notify
*/
var that

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }, 
  /** * 组件的属性列表 * 用于组件自定义设置 */ 
  properties: { 
    //类型
    type: {
      type: String, value: 'INFO'
    },
    // 消息内容 
    message: {  
      type: String, value: 'Notify内容...'
    }, 
    // 持续时间（毫秒）
    duration :{ 
      type : Number, value : 3000
    }, 
    // 出现位置(TOP/BOTTOM)
    direction: { 
      type: String, value: 'BOTTOM' 
    }
  }, 
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */ 
  data: {
    message: '',
    animationData:{},
    icon: "icon-info",  //icon图标
    backgroundClass: "bg-info-9" //背景颜色
  }, 
  ready: function () {
    this.setData({ style: "top:-60px;" })
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */ 
  methods: { 
    //显示 
    show(options){
      var obj = options == undefined ? {} : options
      this.setData({
        message: obj.message == undefined ? this.properties.message : obj.message
      })
      //类型
      var _type = obj.type == undefined ? this.properties.type : obj.type
      var icon = this.data.icon
      var backgroundClass = this.data.backgroundClass
      if (_type == "INFO"){
        icon = "icon-info"
        backgroundClass = "bg-info-9"
      } else if (_type == "SUCCESS") {
        icon = "icon-roundcheck"
        backgroundClass = "bg-success-9"
      } else if (_type == "DANGER") {
        icon = "icon-roundclose"
        backgroundClass = "bg-danger-9"
      } else if (_type == "WARN") {
        icon = "icon-warn"
        backgroundClass = "bg-warn-9"
      } else {
        icon = "icon-icon"
        backgroundClass = "bg-info-9"
      }
      var y = 70
      var direction = obj.direction == undefined ? this.properties.direction : obj.direction
      var duration = obj.duration == undefined ? this.properties.duration : obj.duration
      if (direction === "TOP"){
        y = -y
        this.setData({ style: "top:-60px;" })
      }else{
        this.setData({ style: "bottom:-60px;" })
      }
      if (duration < 1000 || duration > 10000){
        duration = 3000
      }
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      animation.opacity(1).translateY(-y).step()
      this.setData({
        animationData: animation.export(),
        icon: icon,
        backgroundClass: backgroundClass
      })
      that = this
      //延时隐藏
      setTimeout(function () {
        var animation = wx.createAnimation({
          duration: 500,
          timingFunction: 'ease',
        })
        animation.opacity(0).translateY(y).step()
        that.setData({
          animationData: animation.export()
        })
      }, duration)
    }
  } 
})