/*
creator: ZHK
components:zhkUI
name: topTip
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
      type: String, value: 'TopTip内容...'
    }, 
    // 持续时间（毫秒）
    duration :{ 
      type : Number, value : 3000
    }
  }, 
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */ 
  data: {
    message: '',
    animationData:{},
    backgroundClass: "bg-info" //背景颜色
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
      var backgroundClass = this.data.backgroundClass
      if (_type == "INFO"){
        backgroundClass = "bg-info"
      } else if (_type == "SUCCESS") {
        backgroundClass = "bg-success"
      } else if (_type == "DANGER") {
        backgroundClass = "bg-danger"
      } else if (_type == "WARN") {
        backgroundClass = "bg-warn"
      } else {
        backgroundClass = "bg-info"
      }
      var y = -20
      var duration = obj.duration == undefined ? this.properties.duration : obj.duration
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