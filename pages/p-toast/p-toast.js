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
    this.toast = this.selectComponent("#toast")
    this.toast1 = this.selectComponent("#toast1")
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
  bindToastShow:function (e){
    var $type = e.currentTarget.dataset.type
    switch ($type) {
      case "0":
        this.toast.show()
        break
      case "1":
        this.toast.show({ message: "这是动态设置的Toast" })
        break
      case "2":
        this.toast.show({ message: "这是顶部出现Toast", direction: "TOP"})
        break
      case "3":
        this.toast.show({ message: "这是Toast，一秒后消失", duration: 1000 })
        break
    }
  }
})