import{d as e,k as s,dr as t,c as r,ds as o,dg as a,dh as l,r as u,bv as i,o as n,f as m,br as d,g as p,t as c,q as f,s as E,w as R}from"./index.8a947221.js";import{A as S}from"./index.a5da0e53.js";import{D as _}from"./index.6704907b.js";import y from"./CurrentPermissionMode.f20117f6.js";import{_ as j}from"./index.vue_vue&type=script&lang.61f4665d.js";import{_ as x}from"./index.ee861045.js";import"./vendor.3b1829c7.js";import"./index.2698f41d.js";import"./index.d94421bb.js";import"./RightOutlined.d3306906.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./isEqual.563532de.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./toInteger.a25ecc80.js";import"./DownOutlined.e3879b2b.js";/* empty css              */import"./index.c32e09a2.js";import"./usePageContext.5206dcb7.js";import"./transButton.249d7b30.js";import"./ArrowLeftOutlined.5c44f118.js";var P=e({components:{Alert:S,PageWrapper:x,CurrentPermissionMode:y,Divider:_,Authority:j},setup(){const{changeRole:e,hasPermission:a}=o();return{userStore:s,RoleEnum:t,isSuper:r((()=>s.getRoleListState.includes(t.SUPER))),isTest:r((()=>s.getRoleListState.includes(t.TEST))),changeRole:e,hasPermission:a}}});const T=d("data-v-135f74ce");a("data-v-135f74ce");const g=f(" 当前角色: "),v={class:"mt-4"},b=f(" 权限切换(请先切换权限模式为前端角色权限模式): "),h=f("组件方式判断权限(有需要可以自行全局注册)"),U=f(" 拥有super角色权限可见 "),A=f(" 拥有test角色权限可见 "),k=f(" 拥有[test,super]角色权限可见 "),C=f("函数方式方式判断权限(适用于函数内部过滤)"),w=f(" 拥有super角色权限可见 "),D=f(" 拥有test角色权限可见 "),L=f(" 拥有[test,super]角色权限可见 "),O=f("指令方式方式判断权限(该方式不能动态修改权限.)"),M=f(" 拥有super角色权限可见 "),q=f(" 拥有test角色权限可见 "),B=f(" 拥有[test,super]角色权限可见 ");l();const I=T(((e,s,t,r,o,a)=>{const l=u("CurrentPermissionMode"),d=u("Alert"),S=u("a-button"),_=u("a-button-group"),y=u("Divider"),j=u("Authority"),x=u("PageWrapper"),P=i("auth");return n(),m(x,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:T((()=>[p(l),p("p",null,[g,p("a",null,c(e.userStore.getRoleListState),1)]),p(d,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),p("div",v,[b,p(_,null,{default:T((()=>[p(S,{onClick:s[1]||(s[1]=s=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:T((()=>[f(c(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),p(S,{onClick:s[2]||(s[2]=s=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:T((()=>[f(c(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})]),p(y,null,{default:T((()=>[h])),_:1}),p(j,{value:e.RoleEnum.SUPER},{default:T((()=>[p(S,{type:"primary",class:"mx-4"},{default:T((()=>[U])),_:1})])),_:1},8,["value"]),p(j,{value:e.RoleEnum.TEST},{default:T((()=>[p(S,{color:"success",class:"mx-4"},{default:T((()=>[A])),_:1})])),_:1},8,["value"]),p(j,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:T((()=>[p(S,{color:"error",class:"mx-4"},{default:T((()=>[k])),_:1})])),_:1},8,["value"]),p(y,null,{default:T((()=>[C])),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(n(),m(S,{key:0,type:"primary",class:"mx-4"},{default:T((()=>[w])),_:1})):E("",!0),e.hasPermission(e.RoleEnum.TEST)?(n(),m(S,{key:1,color:"success",class:"mx-4"},{default:T((()=>[D])),_:1})):E("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(n(),m(S,{key:2,color:"error",class:"mx-4"},{default:T((()=>[L])),_:1})):E("",!0),p(y,null,{default:T((()=>[O])),_:1}),R(p(S,{type:"primary",class:"mx-4"},{default:T((()=>[M])),_:1},512),[[P,e.RoleEnum.SUPER]]),R(p(S,{color:"success",class:"mx-4"},{default:T((()=>[q])),_:1},512),[[P,e.RoleEnum.TEST]]),R(p(S,{color:"error",class:"mx-4"},{default:T((()=>[B])),_:1},512),[[P,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])])),_:1})}));P.render=I,P.__scopeId="data-v-135f74ce";export default P;
