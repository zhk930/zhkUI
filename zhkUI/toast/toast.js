/*
creator: ZHK
components:zhkUI
name: toast
*/
var that

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }, 
  /** * 组件的属性列表 * 用于组件自定义设置 */ 
  properties: { 
    // 消息内容 
    message: {
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型） 
      value: 'Toast内容...' // 属性初始值（可选），如果未指定则会根据类型选择一个 
    }, 
    // 持续时间（毫秒）
    duration :{ 
      type : Number , value : 3000
    }, 
    // 出现位置(TOP/BOTTOM)
    direction: { 
      type: String, value: 'BOTTOM' 
    }
  }, 
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */ 
  data: {
    style: "bottom:0",
    message: '',
    // 动画
    animationData:{} 
  }, 
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */ 
  methods: { 
    //显示 
    show(options){
      var obj = options == undefined ? {} : options
      this.setData({
        message: obj.message == undefined ? this.properties.message : obj.message
      })
      var y = 80
      var direction = obj.direction == undefined ? this.properties.direction : obj.direction
      var duration = obj.duration == undefined ? this.properties.duration : obj.duration
      if (direction === "TOP"){
        y = -y
        this.setData({ style: "top:0" })
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
        animationData: animation.export()
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