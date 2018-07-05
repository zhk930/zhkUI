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
      type: String, value: 'BUTTON'
    },
    //类型
    type: {
      type: String, value: 'DANGER'
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
    listData: [],
    itemWidth: 0,
    selectedLinePattern: "",
    selectedLineDisplay:"none"
  },
  ready: function (){
    var list = JSON.parse(this.properties.list)
    var col = this.properties.col
    var _type = this.properties.type
    var pattern = this.properties.pattern
    var current = this.properties.current
    this._init(list, col, _type, pattern, current)
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */ 
  methods: { 
    //设置 
    set(options){
      var obj = options == undefined ? {} : options
      if (obj == undefined){
        return false
      }
      var list = obj.list == undefined ? this.data.listData : obj.list
      var col = obj.col == undefined ? Col : obj.col
      var _type = obj.type == undefined ? this.properties.type : obj.type
      var pattern = obj.pattern == pattern ? this.properties.pattern : obj.pattern
      var current = obj.current == current ? this.properties.current : obj.current
      this._init(list, col, _type, pattern, current)
    },
    //init
    _init(list, col, _type, pattern, current){
      //col
      if (list.length < 5) {
        Col = list.length
      } else {
        Col = col > 4 || col < 0 ? 4 : col //不能大于4小于0
      }
      //selectedLinePattern
      var selectedLinePattern
      //classes
      if (_type == "SUCCESS") {
        Classes = pattern == "LINE" ? "text-success" : "bg-success border-success"
        selectedLinePattern = "bg-success"
      } else if (_type == "DANGER") {
        Classes = pattern == "LINE" ? "text-danger" : "bg-danger border-danger"
        selectedLinePattern = "bg-danger"
      } else if (_type == "WARN") {
        Classes = pattern == "LINE" ? "text-warn" : "bg-warn border-warn"
        selectedLinePattern = "bg-warn"
      } else {
        Classes = pattern == "LINE" ? "text-info" : "bg-info border-info"
        selectedLinePattern = "bg-info"
      }
      var btnOpacity = []
      for (var i in list) {
        btnOpacity.push("1.0")
      }
      this.setData({
        listData: list,
        itemWidth: parseInt(750 / Col),
        btnOpacity: btnOpacity,
        selectedLinePattern: selectedLinePattern,
      })
      if (pattern == "LINE") {
        this.setData({ selectedLineDisplay: "block" })
      }else{
        this.setData({ selectedLineDisplay: "none" })
      }
      Pattern = pattern
      this._change(current)
    },
    //按下监听
    _bindtouchstart(e) {
      var index = e.currentTarget.dataset.index   
      var btnOpacity = this.data.btnOpacity
      for (var i in this.data.listData) {
        if (i == index) {
          btnOpacity.splice(index, 1, "0.6")
        }
      }
      this.setData({ btnOpacity: btnOpacity})
    },
    //弹起
    _bindtouchend(){
      var btnOpacity = []
      for (var i in this.data.listData) {
        btnOpacity.push("1.0")
      }
      this.setData({ btnOpacity: btnOpacity })
    },
    //点击监听
    _catchtap(e){
      var index = e.currentTarget.dataset.index
      this._change(index)
    },
    //选中时执行
    _change(index){
      index = index > this.data.listData.length-1 ? this.data.listData.length-1 : index
      var list = this.data.listData
      for (var i in list){
        if (i == index){
          list[i]["classes"] = Classes
        }else{
          list[i]["classes"] = Pattern == "LINE" ? "text-disable" : "bg-disable border-disable"
        }        
      }
      this.setData({
        listData: list,
        scrollInto: "item-"+ (index-1),
        selectedLineLeft: parseInt(750 / Col) * index + (parseInt(750 / Col) - 80) / 2
      })
      //触发change回调 
      this.triggerEvent("changeEvent", { current: index, title: this.data.listData[index].title }) 
    }
  } 
})