module.exports = `


\`\`\`
Page({ 
  onLoad: function () {
    this.panel = this.selectComponent("#panel")
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
\`\`\`


`;
