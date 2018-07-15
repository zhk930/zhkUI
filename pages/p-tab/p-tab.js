
var wxmlCode = require('./wxml.md')
var jsCode = require('./js.md')
var jsonCode = require('./json.md')
var apiCode = require('./api.md')


Page({ 
  data:{
    wxmlCode: wxmlCode,
    jsCode: jsCode,
    jsonCode: jsonCode,
    tabDisplay:["display","none","none"],
    codeTabDisplay:["display", "none", "none"],
    apiCode:apiCode
  },
  onLoad: function () {
    this.tab = this.selectComponent("#tab")
    this.codeTab = this.selectComponent("#codeTab")
    this.notify = this.selectComponent("#notify")
    this.tab1 = this.selectComponent("#tab1")
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
  bindCodeTabChange:function (e){
    var current = e.detail.current
    if (current == 0) {
      this.setData({ codeTabDisplay: ["display", "none", "none"] })
    } else if (current == 1) {
      this.setData({ codeTabDisplay: ["none", "display", "none"] })
    } else if (current == 2) {
      this.setData({ codeTabDisplay: ["none", "none", "display"] })
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