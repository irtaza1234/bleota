(this["webpackJsonptet-app"]=this["webpackJsonptet-app"]||[]).push([[0],{12:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o,r,c,a,i=n(0),u=n.n(i),f=n(6),s=n.n(f),l=(n(12),n(1)),h=n.n(l),d=(n(23),null),m=null,g=null,p=null,w="N/A",v="N/A",E="N/A";function b(){navigator.bluetooth.requestDevice({filters:[{services:["d804b643-6ce7-4e81-9f8a-ce0f699085eb"]}],optionalServices:["c8659210-af91-4ad3-a995-a58d6fd26145"]}).then((function(e){return e.gatt.connect()})).then((function(e){return e.getPrimaryService("c8659210-af91-4ad3-a995-a58d6fd26145")})).then((function(e){d=e})).then((function(e){return e})).then((function(e){return function(){if(!d)return;return d.getCharacteristic("c8659212-af91-4ad3-a995-a58d6fd26145").then((function(e){return e.readValue()})).then((function(e){w="v"+e.getUint8(0)+"."+e.getUint8(1),v="v"+e.getUint8(2)+"."+e.getUint8(3)+"."+e.getUint8(4),document.getElementById("hw_version").innerHTML="Hardware: "+w,document.getElementById("sw_version").innerHTML="Software: "+v})).then((function(e){return fetch("https://raw.githubusercontent.com/sparkfun/ESP32_OTA_BLE_React_WebApp_Demo/master/GithubRepo/version.json")})).then((function(e){return e.json()})).then((function(e){if(E===v);else{var t=0;E=e.firmware[t].software;e:for(;void 0!==E;){for(var n="N/A",i=0;void 0!==n;)if((n=e.firmware[t].hardware[i++])===w){(E=e.firmware[t].software)!==v&&(console.log(E),h.a.create({content:"Version "+v+" is out of date. Update to "+E+"?",buttons:{left:[{text:"Yes",action:function(){fetch("https://raw.githubusercontent.com/sparkfun/ESP32_OTA_BLE_React_WebApp_Demo/"+E+"/GithubRepo/"+w+".bin").then((function(e){return e.arrayBuffer()})).then((function(e){return h.a.close(),p=e,function(){if(!d)return void console.log("No esp32 Service");o=p.byteLength,r=o,c=0,a=0,d.getCharacteristic("c8659211-af91-4ad3-a995-a58d6fd26145").then((function(e){return m=e,e.startNotifications().then((function(e){m.addEventListener("characteristicvaluechanged",_)}))})).catch((function(e){console.log(e)})),_()}()})).catch((function(e){console.warn("Something went wrong.",e)}))}}],right:[{text:"No",action:function(){h.a.close()}}]}}));break e}t++}}})).catch((function(e){console.log(e)}))}()})).catch((function(e){console.log(e)}))}function _(){r>0&&(c=r>=512?512:r,g=p.slice(a,a+c),a+=c,r-=c,console.log("remaining: "+r),d.getCharacteristic("c8659211-af91-4ad3-a995-a58d6fd26145").then((function(e){return function e(t,n){return t.writeValue(n).catch((function(o){return e(t,n)}))}(e,g)})).then((function(e){return document.getElementById("completion").innerHTML=(a/o*100).toPrecision(3)+"%"})).catch((function(e){console.log(e)})))}var N=function(){return u.a.createElement("div",{className:"App",id:"top"},u.a.createElement("header",{className:"App-header",id:"mid"},u.a.createElement(h.a,null),u.a.createElement("p",{id:"hw_version"},"Hardware: Not Connected"),u.a.createElement("p",{id:"sw_version"},"Software: Not Connected"),u.a.createElement("p",{id:"completion"}),u.a.createElement("button",{id:"connect",onClick:b},"Connect to Bluetooth")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(24)}},[[7,1,2]]]);
//# sourceMappingURL=main.06569a6d.chunk.js.map