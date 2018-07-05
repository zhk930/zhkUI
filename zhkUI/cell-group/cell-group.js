/*
creator: ZHK
components:zhkUI
name: cell-group
*/
Component({
  relations: {
    '../cell/cell': {
      type: 'child',
      linked: function () {
        this._updateIsLastCell()
      },
      linkChanged: function () {
        this._updateIsLastCell()
      },
      unlinked: function () {
        this._updateIsLastCell()
      }
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /** * 组件的属性列表 * 用于组件自定义设置 */
  properties: {    
  },
  /** * 私有数据,组件的初始数据 * 可用于模版渲染 */
  data: {
  },
  ready: function () {
  },
  /** * 组件的方法列表 * 更新属性和数据的方法与更新页面数据的方法类似 */
  methods: {
    _updateIsLastCell: function () {
      var _this = this;

      // 用 setTimeout 减少计算次数
      if (this.data.cellUpdateTimeout > 0) {
        return;
      }

      var cellUpdateTimeout = setTimeout(function () {
        _this.setData({ cellUpdateTimeout: 0 });
        var cells = _this.getRelationNodes('../cell/cell');

        if (cells.length > 0) {
          var lastIndex = cells.length - 1;

          cells.forEach(function (cell, index) {
            cell.updateIsLastCell(index === lastIndex);
          });
        }
      });

      this.setData({ cellUpdateTimeout: cellUpdateTimeout });
    }
  }
})