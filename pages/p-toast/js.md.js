module.exports = `


\`\`\`
Page({ 
  onLoad: function () {
    this.toast = this.selectComponent("#toast")
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
        this.toast.show({ message: "这是顶部出现Toast", direction: "TOP",})
        break
      case "3":
        this.toast.show({ message: "这是Toast，一秒后消失", duration: 1000 })
        break
    }
  }
})
\`\`\`


`;
