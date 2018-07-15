module.exports = `

\`\`\`
<zhkUI-notify id="notify" message="这是默认Notify"></zhkUI-notify>

<zhkUI-panel>
  <zhkUI-button type="WHITE" size="LARGE" data-type="0" bindtap="bindNotifyShow">默认Notify</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="DANGER" size="LARGE" data-type="1" bindtap="bindNotifyShow">DANGER Notify</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="SUCCESS" size="LARGE" data-type="2" bindtap="bindNotifyShow">SUCCESS Notify</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="INFO" size="LARGE" data-type="3" bindtap="bindNotifyShow">INFO Notify</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="WARN" size="LARGE" data-type="4" bindtap="bindNotifyShow">WARN Notify</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="WHITE" size="LARGE" data-type="5" bindtap="bindNotifyShow">底部出现Notify</zhkUI-button>
</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="WHITE" size="LARGE" data-type="6" bindtap="bindNotifyShow">Notify显示后一秒钟消失</zhkUI-button>
</zhkUI-panel>
\`\`\`

`;
