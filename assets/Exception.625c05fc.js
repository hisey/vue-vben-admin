import{d as t,aF as e,h as s,aG as a,aH as l,a as n,u as i,c as r,j as u,aI as o,g as b,B as T,aJ as c}from"./index.8a947221.js";import{R as p}from"./index.8f0e7ab4.js";import"./vendor.3b1829c7.js";var d=t({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t){const d=s(new Map),{query:x}=a(),f=c(),m=l(),{t:E}=n(),{prefixCls:_}=i("app-exception-page"),y=r((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),O=r((()=>u(d).get(u(y)))),N=E("sys.exception.backLogin"),A=E("sys.exception.backHome");return u(d).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:E("sys.exception.subTitle403"),btnText:t.full?N:A,handler:()=>t.full?f(o.BASE_LOGIN):f()}),u(d).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:E("sys.exception.subTitle404"),btnText:t.full?N:A,handler:()=>t.full?f(o.BASE_LOGIN):f()}),u(d).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:E("sys.exception.subTitle500"),btnText:A,handler:()=>f()}),u(d).set(e.PAGE_NOT_DATA,{title:E("sys.exception.noDataTitle"),subTitle:"",btnText:E("common.redo"),handler:()=>m(),icon:"/vue-vben-admin/assets/no-data.f7e550cc.svg"}),u(d).set(e.NET_WORK_ERROR,{title:E("sys.exception.networkErrorTitle"),subTitle:E("sys.exception.networkErrorSubTitle"),btnText:E("common.redo"),handler:()=>m(),icon:"/vue-vben-admin/assets/net-error.61b7e6df.svg"}),()=>{const{title:e,subTitle:s,btnText:a,icon:l,handler:n,status:i}=u(O)||{};return b(p,{class:_,status:i,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&b(T,{type:"primary",onClick:n},{default:()=>a}),icon:()=>l?b("img",{src:l},null):null})}}});export default d;
