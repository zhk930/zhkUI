module.exports = `

\`\`\`
<zhkUI-toast id="toast"></zhkUI-toast>

<zhkUI-panel>
  <zhkUI-button type="WARN" size="LARGE" data-type="0" bindtap="bindToastShow">默认Toast</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="DANGER" size="LARGE" data-type="1" bindtap="bindToastShow">动态设置Toast</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="SUCCESS" size="LARGE" data-type="2" bindtap="bindToastShow">顶部出现Toast</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="INFO" size="LARGE" data-type="3" bindtap="bindToastShow">Toast一秒后消失</zhkUI-button>
</zhkUI-panel>
\`\`\`

`;
