import{d as t,u as e,c as s,o as i,f as r,t as o,s as n}from"./index.8a947221.js";import{c as a}from"./index.04677d02.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.d3306906.js";import"./LeftOutlined.081aa009.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./isEqual.563532de.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./toInteger.a25ecc80.js";/* empty css              */import"./useTimeout.4ab89dd3.js";import"./uniqBy.5d345c52.js";import"./_baseIsEqual.97cc6b34.js";import"./get.b2e237e3.js";import"./useHeaderSetting.7df844bc.js";import"./domUtils.e0b91801.js";import"./useSortable.ca05ff1a.js";import"./ScrollContainer.7c8aaa6b.js";import"./index.02b8894f.js";import"./useScrollTo.a0f2ab62.js";import"./index.5e7ee9ce.js";import"./useWindowSizeFn.0acae6c2.js";import"./usePageContext.5206dcb7.js";import"./index.82f40d30.js";import"./clickOutside.1357c514.js";import"./index.ef0a0ebf.js";import"./UpOutlined.66b37b38.js";import"./DownOutlined.e3879b2b.js";import"./PlusOutlined.fcbfe0fd.js";import"./Dropdown.16737c14.js";var m=t({name:"MenuItemTag",props:a,setup(t){const{prefixCls:i}=e("basic-menu-item-tag"),r=s((()=>{const{item:e,showTitle:s,isHorizontal:i}=t;if(!e||s||i)return!1;const{tag:r}=e;if(!r)return!1;const{dot:o,content:n}=r;return!(!o&&!n)})),o=s((()=>{if(!r.value)return"";const{item:e}=t,{tag:s}=e,{dot:i,content:o}=s;return i?"":o})),n=s((()=>{const{item:e}=t,{tag:s={}}=e||{},{dot:r,type:o="error"}=s;return[i,[`${i}--${o}`],{[`${i}--dot`]:r}]}));return{prefixCls:i,getTagClass:n,getShowTag:r,getContent:o}}});m.render=function(t,e,s,a,m,p){return t.getShowTag?(i(),r("span",{key:0,class:t.getTagClass},o(t.getContent),3)):n("",!0)};export default m;
