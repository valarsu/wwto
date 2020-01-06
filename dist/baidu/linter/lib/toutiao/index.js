import wx from './../../../adaptor.js';
const utils=require("../utils/utils"),unsupportedFns=require("./unsupported-fns"),unsupportedTags=require("./unsupported-tags"),unsupportedAttrs=require("./unsupported-attrs"),unsupportedEvents=require("./unsupported-events"),wxmlLineRules=[e=>{const r="组件头条小程序未实现";for(let s=0;s<unsupportedTags.length;s++){const t=unsupportedTags[s],u=new RegExp(`<${t}\\s+`);if(e.match(u))return{source:e,rule:[t,r].join("")}}return null},e=>{const r=/\.\w+\(/,s=e.match(/wx:(for|if)=['"](.+)['"]/);return s&&r.test(s[0])?{source:s[0],rule:"条件/循环渲染，不能进行函数调用运算（如：`wx:if=\"{{['aa', 'bb'].indexOf('aa')===-1}}\"`）"}:null},e=>{const r=[{rule:"scroll-view组件upper-threshold、lower-threshold、scroll-top、scroll-left属性不支持rpx",reg:"<scroll-view[^>]*(upper-threshold|lower-threshold|scroll-top|scroll-left)=[\"']\\d*rpx[\"']"},{rule:"icon组件size属性不支持rpx",reg:"<icon[^>]*size=[\"']\\d*rpx[\"']"},{rule:"progress组件stroke-width属性不支持rpx",reg:"<progress[^>]*stroke-width=[\"']\\d*rpx[\"']"},{rule:"button组件open-type仅支持share",reg:"<button[^>]*open-type=[\"']((?!share).)*[\"']"},{rule:"input组件cursor-spacing属性不支持rpx",reg:"<input[^>]*cursor-spacing=[\"']\\d*rpx[\"']"},{rule:"textarea组件cursor-spacing属性不支持rpx",reg:"<textarea[^>]*cursor-spacing=[\"']\\d*rpx[\"']"},{rule:"navigator组件open-type不支持支持reLaunch、exit",reg:"<navigator[^>]*open-type=[\"'](reLaunch|exit)[\"']"}];for(let s=0;s<r.length;s++){const t=new RegExp(r[s].reg);if(e.match(t))return{source:e,rule:r[s].rule}}return null}],wxmlFileRules=[(e,r)=>utils.unsupportedAttrOrEvents(e,r,unsupportedAttrs,"头条","属性"),(e,r)=>utils.unsupportedAttrOrEvents(e,r,unsupportedEvents,"头条","事件")],wxssLineRules=[],wxssFileRules=[],scriptLineRules=[e=>{const r="方法头条小程序未实现";for(let s=0;s<unsupportedFns.length;s++){const t=unsupportedFns[s],u=new RegExp(`\\.${t}\\(`);if(e.match(u))return{source:e,rule:[t,r].join("")}}return null},e=>{const r=e.match(/wx\.onSocketOpen/);return r?{source:r[0],rule:"`websocket`不能使用全局事件（如：`wx.onSocketOpen`）"}:null},e=>{const r=e.match(/\.selectComponent\(/);return r?{source:r[0],rule:"不支持`selectComponent`，可以通过监听属性的`observer`来实现外部的调用"}:null}],scriptFileRules=[];module.exports={wxmlLineRules:wxmlLineRules,wxmlFileRules:wxmlFileRules,wxssFileRules:wxssFileRules,wxssLineRules:wxssLineRules,scriptFileRules:scriptFileRules,scriptLineRules:scriptLineRules};