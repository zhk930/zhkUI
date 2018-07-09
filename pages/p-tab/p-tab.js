const app = getApp() 

var codeContent = '<zhkUI-tab pattern="LINE" col="3" list=\'[{ "title": "已预约" }, { "title": "待支付" }, { "title": "已支付" }, { "title": "待发货" }, { "title": "已发货" }, { "title": "已完成" }]\' current="0"></zhkUI-tab>\r\n\r\t<zhkUI-tab pattern="LINE" col="3" list=\'[{ "title": "已预约" }, { "title": "待支付" }, { "title": "已支付" }, { "title": "待发货" }, { "title": "已发货" }, { "title": "已完成" }]\' current="0"></zhkUI-tab>'

Page({ 
  data:{
    tabDisplay:["display","none","none"]
  },
  onLoad: function () {
    this.codeInit()
    this.tab = this.selectComponent("#tab")
    this.notify = this.selectComponent("#notify")
    this.tab1 = this.selectComponent("#tab1")
  },
  codeInit: function (){
    this.setData({ codeContent: codeContent})
  },
  /** * 生命周期函数--监听页面初次渲染完成 */ 
  onReady: function () { 
  }, 
  bindTabChange: function (e) {
    var current = e.detail.current
    if (current == 0){
      this.setData({tabDisplay: ["display", "none", "none"]})
    } else if (current == 1){
      this.setData({ tabDisplay: ["none", "display", "none"] })
    } else if (current == 2){
      this.setData({ tabDisplay: ["none", "none", "display"] })
    }
  },
  bindTabChange1: function (e) {
    var title = e.detail.title
    this.notify.show({ type: "WARN", message: '选择了 ' + title })
  },
  bindChangeTab() {
    this.tab1.set({
      type: "WARN",
      pattern: "BUTTON",
      col: 4,
      current: 3,
      list: [
        { "title": "第一个" },
        { "title": "第二个" },
        { "title": "第三个" },
        { "title": "第四个" },
        { "title": "第五个" },
      ]
    })
  }
})