/*
creator: ZHK
components:zhkUI
name: loading
*/
var that

Component({
  options: {
    multipleSlots: true
  },
  /**属性 */
  properties: {
    type: {
      type: String,
      value: 'DEFAULT' //SUCCESS/DANGER/WARN/INFO/WHITE/DEFAULT
    },
    pattern: {
      type: String,
      value: 'OVAL'
    },
    customStyle: {
      type: String,
      value: ''
    }
  }, 
  /**数据 */ 
  data: {
  },
  ready: function () {

    this.setData({
      _type: this.properties.type.toLowerCase(),
      _pattern: this.properties.pattern.toLowerCase(),
    })
  },
  /**方法 */
  methods: {
  }
})