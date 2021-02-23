import{B as e,t}from"./data.6dc17073.js";import{d as a}from"./ScrollContainer.7c8aaa6b.js";import{d as n,h as s,n as l,j as o,r,o as d,f as i,p as c,g as p,q as u}from"./index.8a947221.js";import{_ as f}from"./index.ee861045.js";import"./index.02b8894f.js";import"./domUtils.e0b91801.js";import"./RightOutlined.d3306906.js";/* empty css              */import"./useTimeout.4ab89dd3.js";import"./useScrollTo.a0f2ab62.js";import"./vendor.3b1829c7.js";import"./index.2698f41d.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./isEqual.563532de.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./toInteger.a25ecc80.js";import"./DownOutlined.e3879b2b.js";import"./index.c32e09a2.js";import"./usePageContext.5206dcb7.js";import"./transButton.249d7b30.js";import"./ArrowLeftOutlined.5c44f118.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:f},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=o(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=u(" 显示到第2级 "),h=u(" 显示到第1级 "),k=u(" 设置勾选数据 "),j=u(" 获取勾选数据 "),b=u(" 设置选中数据 "),D=u(" 获取选中数据 "),K=u(" 设置展开数据 "),S=u(" 获取展开数据 "),x={class:"mb-4"},B=u(" 添加根节点 "),_=u(" 添加在parent3内添加节点 "),g=u(" 删除parent3节点 "),N=u(" 更新parent2节点 ");m.render=function(e,t,a,n,s,l){const o=r("a-button"),u=r("BasicTree"),f=r("CollapseContainer"),m=r("PageWrapper");return d(),i(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:c((()=>[p("div",y,[p(o,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:c((()=>[C])),_:1}),p(o,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:c((()=>[h])),_:1}),p(o,{onClick:e.handleSetCheckData,class:"mr-2"},{default:c((()=>[k])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetCheckData,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetSelectData,class:"mr-2"},{default:c((()=>[b])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetSelectData,class:"mr-2"},{default:c((()=>[D])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetExpandData,class:"mr-2"},{default:c((()=>[K])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetExpandData,class:"mr-2"},{default:c((()=>[S])),_:1},8,["onClick"])]),p("div",x,[p(o,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:c((()=>[B])),_:1}),p(o,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[_])),_:1}),p(o,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[g])),_:1}),p(o,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:c((()=>[N])),_:1})]),p(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:c((()=>[p(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;
