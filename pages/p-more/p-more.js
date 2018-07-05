const app = getApp() 

Page({ 
  onLoad: function () {
    this.dialog = this.selectComponent("#dialog")
    this.toast = this.selectComponent("#toast")
    this.notify = this.selectComponent("#notify")
    this.topTip = this.selectComponent("#topTip")
    this.tab = this.selectComponent("#tab")
    this.buttonA = this.selectComponent("#buttonA")
  },
  /** * 生命周期函数--监听页面初次渲染完成 */ 
  onReady: function () { 
  }, 
  showDialog(){ 
    // this.dialog.show()
    this.toast.show({ message: "欢迎使用", direction: "BOTTOM", duration: 1000 })
    this.notify.show({ type:"INFO", message: "欢迎使用", direction: "TOP", duration: 1000 })
    // this.topTip.show({ type: "WARN", message: "欢迎使用", duration: 1000})
    this.tab.set({
      pattern: "BUTTON",
      col: 4,
      current: 0,
      list:[
        { "title": "第一个" },
        { "title": "第二个" },
        { "title": "第三个" },
        { "title": "第四个" },
        { "title": "第五个" },
      ]
    })
    this.buttonA.set({
      loading:true
    })
  },
  bbb: function (e) {
    this.buttonA.set({
      loading: false
    })
  },
  //取消事件 
  _cancelEvent(){ console.log('你点击了取消'); this.dialog.hide(); }, 
  //确认事件 
  _confirmEvent(){ console.log('你点击了确定'); this.dialog.hide(); },
  bindTabChange: function (e){
    console.log(e)
  },
  aaa:function (e){
    console.log(e)
  }
  
})