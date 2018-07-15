module.exports = `


\`\`\`
Page({ 
  onLoad: function () {
    this.notify = this.selectComponent("#notify")
    this.tab1 = this.selectComponent("#tab1")
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
\`\`\`


`;
