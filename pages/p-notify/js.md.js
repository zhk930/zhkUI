module.exports = `


\`\`\`
Page({ 
  onLoad: function () {
    this.notify = this.selectComponent("#notify")
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
\`\`\`


`;
