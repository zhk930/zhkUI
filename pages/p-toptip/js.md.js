module.exports = `


\`\`\`
Page({ 
  onLoad: function () {
    this.toptip = this.selectComponent("#toptip")
  },
  bindToptipShow:function (e){
    var $type = e.currentTarget.dataset.type
    switch ($type) {
      case "0":
        this.toptip.show()
        break
      case "1":
        this.toptip.show({ message: "DANGER TopTip", type: "DANGER" })
        break
      case "2":
        this.toptip.show({ message: "SUCCESS TopTip", type: "SUCCESS"})
        break
      case "3":
        this.toptip.show({ message: "INFO TopTip", type: "INFO" })
        break
      case "4":
        this.toptip.show({ message: "WARN TopTip", type: "WARN" })
        break
      case "5":
        this.toptip.show({ message: "这是TopTip，一秒后消失", duration: 1000 })
        break
    }
  }
})
\`\`\`


`;
