import{d as t,dr as e,ds as s,dg as o,dh as r,r as n,o as a,f as i,br as d,g as m,q as p}from"./index.8a947221.js";import{A as c}from"./index.a5da0e53.js";import u from"./CurrentPermissionMode.f20117f6.js";import{_ as l}from"./index.ee861045.js";import"./vendor.3b1829c7.js";import"./index.6704907b.js";import"./index.2698f41d.js";import"./index.d94421bb.js";import"./RightOutlined.d3306906.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./isEqual.563532de.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./toInteger.a25ecc80.js";import"./DownOutlined.e3879b2b.js";/* empty css              */import"./index.c32e09a2.js";import"./usePageContext.5206dcb7.js";import"./transButton.249d7b30.js";import"./ArrowLeftOutlined.5c44f118.js";var j=t({components:{Alert:c,CurrentPermissionMode:u,PageWrapper:l},setup(){const{changeMenu:t}=s();return{RoleEnum:e,changeMenu:t}}});const b=d("data-v-bcdaa5b4");o("data-v-bcdaa5b4");const f={class:"mt-4"},g=p(" 权限切换(请先切换权限模式为后台权限模式): "),x=p(" 获取用户id为1的菜单 "),_=p(" 获取用户id为2的菜单 ");r();const h=b(((t,e,s,o,r,d)=>{const p=n("CurrentPermissionMode"),c=n("Alert"),u=n("a-button"),l=n("a-button-group"),j=n("PageWrapper");return a(),i(j,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:b((()=>[m(p),m(c,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),m("div",f,[g,m(l,null,{default:b((()=>[m(u,{onClick:e[1]||(e[1]=e=>t.changeMenu("1"))},{default:b((()=>[x])),_:1}),m(u,{onClick:e[2]||(e[2]=e=>t.changeMenu("2"))},{default:b((()=>[_])),_:1})])),_:1})])])),_:1})}));j.render=h,j.__scopeId="data-v-bcdaa5b4";export default j;
