import{cI as t,g as e,a}from"./index.8a947221.js";import{T as r}from"./index.36897cf3.js";import"./vendor.3b1829c7.js";const{t:d}=a();function n(){return[{dataIndex:"type",title:d("sys.errorLog.tableColumnType"),width:80,customRender:({text:a})=>{const d=a===t.VUE?"green":a===t.RESOURCE?"cyan":a===t.PROMISE?"blue":t.AJAX?"red":"purple";return e(r,{color:d},{default:()=>a})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:d("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:d("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:d("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:d("sys.errorLog.tableColumnStackMsg")}]}function o(){return n().map((t=>({field:t.dataIndex,label:t.title})))}export{n as getColumns,o as getDescSchema};
