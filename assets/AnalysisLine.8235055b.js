import{u as t}from"./useECharts.b40ed75c.js";import{b as e}from"./props.f48aca0b.js";import{d as i,h as a,a3 as r,o,f as n}from"./index.8a947221.js";import"./useTimeout.4ab89dd3.js";import"./vendor.3b1829c7.js";var s=i({name:"AnalysisLine",props:e,setup(){const e=a(null),{setOptions:i}=t(e);return r((()=>{i({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{icon:"rect",itemWidth:15,itemHeight:4,left:80,top:0,orient:"horizontal",data:["产品一","产品二"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{color:"#5B8FF9"},data:[330,132,101,134,90,230,210,150,232,234,230,400],animationDuration:4e3},{name:"产品二",type:"line",itemStyle:{color:"#55D187"},data:[220,182,191,234,290,330,310,330,232,201,330,190],animationDuration:4e3}]})})),{chartRef:e}}});s.render=function(t,e,i,a,r,s){return o(),n("div",{ref:"chartRef",style:{height:t.height,width:t.width}},null,4)};export default s;
