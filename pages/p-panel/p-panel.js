var wxmlCode = require('./wxml.md')
var jsCode = require('./js.md')
var jsonCode = require('./json.md')
var apiCode = require('./api.md')

Page({
  data: {
    wxmlCode: wxmlCode,
    jsCode: jsCode,
    jsonCode: jsonCode,
    tabDisplay: ["display", "none", "none"],
    codeTabDisplay: ["display", "none", "none"],
    apiCode: apiCode
  },
  onLoad: function () {
    this.tab = this.selectComponent("#tab")
    this.codeTab = this.selectComponent("#codeTab")
    this.panel = this.selectComponent("#panel")
  },
  bindTabChange: function (e) {
    var current = e.detail.current
    if (current == 0) {
      this.setData({ tabDisplay: ["display", "none", "none"] })
    } else if (current == 1) {
      this.setData({ tabDisplay: ["none", "display", "none"] })
    } else if (current == 2) {
      this.setData({ tabDisplay: ["none", "none", "display"] })
    }
  },
  bindCodeTabChange: function (e) {
    var current = e.detail.current
    if (current == 0) {
      this.setData({ codeTabDisplay: ["display", "none", "none"] })
    } else if (current == 1) {
      this.setData({ codeTabDisplay: ["none", "display", "none"] })
    } else if (current == 2) {
      this.setData({ codeTabDisplay: ["none", "none", "display"] })
    }
  },
  bindChangePanel:function (){
    this.panel.set({
      noBorder: true,
      title: "动态设置的标题",
      top: "100rpx",
      bottom: "100rpx",
      noPadding: true
    })
  }
})