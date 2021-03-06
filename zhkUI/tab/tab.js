/*
creator: ZHK
components:zhkUI
name: tab
*/

var Classes
var Col
var Pattern

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }, 
  created: function (){

  },
  /** * 组件的属性列表 * 用于组件自定义设置 */ 
  properties: {
    //样式
    pattern:{
      type: String, value: 'LINE' //BUTTON/LINE
    },
    //类型
    type: {
      type: String, value: 'DANGER' //DANGER/INFO/SUCCESS/WARN
    },
    //一屏幕宽度包含几个元素
    col: {
      type: Number, value: 4
    },
    // 消息内容 
    list: {  
      type: String, value: '[]'
    },
    //当前index
    current:{
      type: Number, value: 0
    }
  }, 
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */ 
  data: {
    _listData: [],
    _itemWidth: 0,
    _selectedLinePattern: "",
    _selectedLineDisplay:"none"
  },
  ready: function (){
    var list = JSON.parse(this.properties.list)
    var col = this.properties.col
    var $type = this.properties.type
    var pattern = this.properties.pattern
    var current = this.properties.current
    this._init(list, col, $type, pattern, current)
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */ 
  methods: { 
    //设置 
    set(options){
      var obj = options == undefined ? {} : options
      if (obj == undefined){
        return false
      }
      var list = obj.list == undefined ? this.data._listData : obj.list
      var col = obj.col == undefined ? this.Col : obj.col
      var $type = obj.type == undefined ? this.properties.type : obj.type
      var pattern = obj.pattern == pattern ? this.properties.pattern : obj.pattern
      var current = obj.current == current ? this.properties.current : obj.current
      this._init(list, col, $type, pattern, current)
    },
    //init
    _init(list, col, $type, pattern, current) {
      //col
      if (list.length < 5) {
        this.Col = list.length
      } else {
        this.Col = col > 4 || col < 0 ? 4 : col //不能大于4小于0
      }
      //selectedLinePattern
      var selectedLinePattern
      //classes
      if ($type == "SUCCESS") {
        this.Classes = pattern == "LINE" ? "text-success" : "bg-success border-success"
        selectedLinePattern = "bg-success"
      } else if ($type == "DANGER") {
        this.Classes = pattern == "LINE" ? "text-danger" : "bg-danger border-danger"
        selectedLinePattern = "bg-danger"
      } else if ($type == "WARN") {
        this.Classes = pattern == "LINE" ? "text-warn" : "bg-warn border-warn"
        selectedLinePattern = "bg-warn"
      } else {
        this.Classes = pattern == "LINE" ? "text-info" : "bg-info border-info"
        selectedLinePattern = "bg-info"
      }
      var btnOpacity = []
      for (var i in list) {
        btnOpacity.push("1.0")
      }
      this.setData({
        _listData: list,
        _itemWidth: parseInt(750 / this.Col),
        _btnOpacity: btnOpacity,
        _selectedLinePattern: selectedLinePattern,
        _pattern: pattern
      })
      if (pattern == "LINE") {
        this.setData({ _selectedLineDisplay: "block" })
      }else{
        this.setData({ _selectedLineDisplay: "none" })
      }
      this.Pattern = pattern
      this._change(current)
    },
    //按下监听
    _bindtouchstart(e) {
      var index = e.currentTarget.dataset.index   
      var btnOpacity = this.data._btnOpacity
      for (var i in this.data._listData) {
        if (i == index) {
          btnOpacity.splice(index, 1, "0.6")
        }
      }
      this.setData({ _btnOpacity: btnOpacity})
    },
    //弹起
    _bindtouchend(){
      var btnOpacity = []
      for (var i in this.data._listData) {
        btnOpacity.push("1.0")
      }
      this.setData({ _btnOpacity: btnOpacity })
    },
    //点击监听
    _catchtap(e){
      var index = e.currentTarget.dataset.index
      this._change(index)
    },
    //选中时执行
    _change(index){
      index = index > this.data._listData.length-1 ? this.data._listData.length-1 : index
      var list = this.data._listData
      for (var i in list){
        if (i == index){
          list[i]["classes"] = this.Classes
        }else{
          list[i]["classes"] = this.Pattern == "LINE" ? "text-disable" : "bg-disable border-disable"
        }        
      }
      this.setData({
        _listData: list,
        _scrollInto: "item-"+ (index-1),
        _selectedLineLeft: parseInt(750 / this.Col) * index + (parseInt(750 / this.Col) - 30) / 2
      })
      //触发change回调 
      this.triggerEvent("changeEvent", { current: index, title: this.data._listData[index].title }) 
    }
  } 
})