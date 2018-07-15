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
    this.notify = this.selectComponent("#notify")
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
  bindNotifyShow:function (e){
    var $type = e.currentTarget.dataset.type
    switch ($type) {
      case "0":
        this.notify.show()
        break
      case "1":
        this.notify.show({ message: "DANGER Notify", type: "DANGER" })
        break
      case "2":
        this.notify.show({ message: "SUCCESS Notify", type: "SUCCESS",})
        break
      case "3":
        this.notify.show({ message: "INFO Notify", type: "INFO" })
        break
      case "4":
        this.notify.show({ message: "WARN Notify", type: "WARN" })
        break
      case "5":
        this.notify.show({ message: "这是底部出现Toast", direction: "BOTTOM" })
        break
      case "6":
        this.notify.show({ message: "这是Notify，一秒后消失", duration: "1000" })
        break
    }
  }
})