/*
creator: ZHK
components:zhkUI
name: icon
*/
var that

Component({
  options: {
    multipleSlots: true
  },
  /**属性 */
  properties: {  
    customFontUrl: {
      type: String,
      value: ''
    },
    customFontName: {
      type: String,
      value: ''
    },
    name: {  
      type: String,
      value: 'appreciate'
    },
    customStyle: {
      type: String,
      value: ''
    }
  }, 
  /**数据 */ 
  data: {
    iconfont: "zhkui-iconfont"
  },
  ready: function () {
    var iconfont = this.properties.customFontUrl != "" ? this.properties.customFontName : "zhkui-iconfont"
    this.setData({ iconfont: iconfont })
  },
  /**方法 */
  methods: { 
  }
})