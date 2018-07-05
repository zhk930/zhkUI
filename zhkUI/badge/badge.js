/*
creator: ZHK
components:zhkUI
name: badge
*/
var Type, Size, Text

Component({
  options: {
    multipleSlots: true
  },
  /**属性*/
  properties: {
    type: { 
      type: String, value: 'WHITE' //SUCCESS/DANGER/WARN/INFO/WHITE
    },
    size: {
      type: String,
      value: 'SMALL'  //LARGE/SMALL/MINI
    },
    text: {
      type: String,
      value: ''
    }
  },
  /**数据*/
  data: {
  },
  created: function () {
    Type = this.properties.type
    Size = this.properties.size
    Text = this.properties.text
    // console.log(this.properties.text)
  },
  ready: function () {
    Text = this.properties.text
    // console.log(this.properties.text)
    this._init(Type, Size, Text)
  },
  /**方法*/
  methods: {
    _init: function ($type, $size, $text){
      var colorClass = "bg-danger text-white"
      switch ($type) {
        case "INFO":
          colorClass = "bg-info text-white"
          break
        case "WARN":
          colorClass = "bg-warn text-white"
          break
        case "SUCCESS":
          colorClass = "bg-success text-white"
          break
        case "DANGER":
          colorClass = "bg-danger text-white"
          break
        case "WHITE":
          colorClass = "bg-white text-disable"
          break
      }
      var sizeClass = "zhkui-badge-size-default"
      switch ($size) {
        case "LARGE":
          sizeClass = "zhkui-badge-size-large"
          break
        case "DEFAULT":
          sizeClass = "zhkui-badge-size-default"
          break
        case "MINI":
          sizeClass = "zhkui-badge-size-mini"
          break
      }
      this.setData({
        _colorClass: colorClass,
        _sizeClass: sizeClass,
        _text: $text
      })
    }
  }
})