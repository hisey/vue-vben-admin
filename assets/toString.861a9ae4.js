import{af as r,aE as t}from"./index.8a947221.js";import{i as n}from"./isArray.e55f5dd2.js";function i(r,t){for(var n=-1,i=null==r?0:r.length,a=Array(i);++n<i;)a[n]=t(r[n],n,r);return a}var a=r?r.prototype:void 0,o=a?a.toString:void 0;function f(r){if("string"==typeof r)return r;if(n(r))return i(r,f)+"";if(t(r))return o?o.call(r):"";var a=r+"";return"0"==a&&1/r==-Infinity?"-0":a}function e(r){return null==r?"":f(r)}export{i as a,f as b,e as t};
