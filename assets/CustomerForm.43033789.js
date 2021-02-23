import{d as e,bR as i,n as t,r as s,o,f as r,p as n,g as a}from"./index.8a947221.js";import{I as p}from"./index.2c4e33f6.js";import{f as d}from"./BasicForm.205370b0.js";import{u as m}from"./useForm.5e8ab938.js";import{d as l}from"./ScrollContainer.7c8aaa6b.js";import{_ as j}from"./index.ee861045.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.b19280fd.js";import"./EyeOutlined.3f7d1401.js";import"./index.f1773ae9.js";import"./_baseClone.91fce584.js";import"./_Uint8Array.b1ff6412.js";import"./isArray.e55f5dd2.js";import"./index.b59597c9.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.07496caf.js";import"./isEqual.563532de.js";import"./identity.e5918e80.js";import"./toString.861a9ae4.js";import"./_baseProperty.0fd6dbfc.js";import"./toInteger.a25ecc80.js";import"./index.4c43253e.js";import"./index.6f85517b.js";import"./_baseSlice.6f42b8d2.js";import"./CheckOutlined.af985792.js";import"./DownOutlined.e3879b2b.js";import"./index.aad67b3f.js";import"./index.36897cf3.js";import"./index.c47a44f7.js";import"./UpOutlined.66b37b38.js";import"./index.c8ff2abb.js";import"./RightOutlined.d3306906.js";import"./RedoOutlined.58d0f99d.js";import"./index.d94421bb.js";import"./EllipsisOutlined.0ca49394.js";import"./types.31046b05.js";import"./Tree.00294558.js";import"./util.2d6868a4.js";import"./useFormItem.cfc17307.js";import"./isEqual.222c6e0f.js";import"./_baseIsEqual.97cc6b34.js";import"./get.b2e237e3.js";/* empty css              */import"./uuid.03279e2e.js";import"./index.831f8df6.js";import"./DeleteOutlined.ce0659f5.js";import"./index.a5da0e53.js";import"./useModal.b05e4604.js";import"./useTimeout.4ab89dd3.js";import"./useWindowSizeFn.0acae6c2.js";import"./FullscreenOutlined.88a165f5.js";import"./index.6704907b.js";import"./Dropdown.16737c14.js";import"./index.cdde649d.js";import"./LeftOutlined.081aa009.js";import"./download.93ef06c4.js";import"./domUtils.e0b91801.js";import"./uniqBy.5d345c52.js";import"./index.02b8894f.js";import"./useScrollTo.a0f2ab62.js";import"./index.2698f41d.js";import"./index.c32e09a2.js";import"./usePageContext.5206dcb7.js";import"./transButton.249d7b30.js";import"./ArrowLeftOutlined.5c44f118.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(p,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var f=e({components:{BasicForm:d,CollapseContainer:l,PageWrapper:j,[p.name]:p},setup(){const{createMessage:e}=t(),[i,{setProps:s}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:i,schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:s}}});f.render=function(e,i,t,p,d,m){const l=s("a-input"),j=s("BasicForm"),c=s("CollapseContainer"),f=s("PageWrapper");return o(),r(f,{title:"自定义组件示例"},{default:n((()=>[a(c,{title:"自定义表单"},{default:n((()=>[a(j,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:n((({model:e,field:i})=>[a(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;
