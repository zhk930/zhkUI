module.exports = `

\`\`\`
<zhkUI-panel title="Pattern" noPadding>
  <zhkUI-tab pattern="LINE" col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
  <zhkUI-tab pattern="BUTTON" col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
</zhkUI-panel>

<zhkUI-panel title="Type" noPadding>
  <zhkUI-tab pattern="LINE" type="DANGER" col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
  <zhkUI-tab pattern="LINE" type="SUCCESS" col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
  <zhkUI-tab pattern="LINE" type="INFO" col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
  <zhkUI-tab pattern="LINE" type="WARN" col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
</zhkUI-panel>

<zhkUI-panel title="Col" noPadding>
  <zhkUI-tab col="2" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
  <zhkUI-tab col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
  <zhkUI-tab col="4" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0"></zhkUI-tab>
</zhkUI-panel>

<zhkUI-panel title="Event" noPadding>
  <zhkUI-tab id="tab1" pattern="LINE" col="3" list='[{"title": "已预约"},{"title": "待支付"},{"title": "已支付"},{"title": "待发货"},{"title": "已发货"},{"title": "已完成"}]' current="0" bind:changeEvent="bindTabChange1"></zhkUI-tab>
</zhkUI-panel>

<zhkUI-panel title="">
  <zhkUI-button type="WARN" size="LARGE" bindtap="bindChangeTab">动态设置Tab属性</zhkUI-button>
</zhkUI-panel>
\`\`\`

`;
