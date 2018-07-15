module.exports = `

\`\`\`
<zhkUI-panel title="不带边框" noBorder>不带边框Panel</zhkUI-panel>
<zhkUI-panel title="带边框">带边框Panel</zhkUI-panel>
<zhkUI-panel title="内边距" noPadding>取消内边距</zhkUI-panel>
<zhkUI-panel title="底部边距" bottom="80rpx">距离底部80rpx</zhkUI-panel>
<zhkUI-panel>不带标题Panel</zhkUI-panel>
<zhkUI-panel title="顶部边距" top="50rpx">距离顶部50rpx</zhkUI-panel>
<zhkUI-panel id="panel" title="标题">Panel内容</zhkUI-panel>
<zhkUI-panel>
  <zhkUI-button type="WARN" size="LARGE" bindtap="bindChangePanel">动态设置Panel属性</zhkUI-button>
</zhkUI-panel>
\`\`\`

`;
