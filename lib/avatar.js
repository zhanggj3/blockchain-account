"use strict";!function(){var t=new Array(4);function h(){var e=t[0]^t[0]<<11;return t[0]=t[1],t[1]=t[2],t[2]=t[3],t[3]=t[3]^t[3]>>19^e^e>>8,(t[3]>>>0)/(1<<31>>>0)}function o(){return"hsl("+Math.floor(360*h())+","+(60*h()+40+"%")+","+(25*(h()+h()+h()+h())+"%")+")"}function i(e){var r={};return r.seed=e.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),function(e){for(var r=0;r<t.length;r++)t[r]=0;for(var o=0;o<e.length;o++)t[o%4]=(t[o%4]<<5)-t[o%4]+e.charCodeAt(o)}(r.seed),r.size=e.size||8,r.scale=e.scale||4,r.color=e.color||o(),r.bgcolor=e.bgcolor||o(),r.spotcolor=e.spotcolor||o(),r}function l(e,r){var o=function(e){for(var r=e,o=e,t=Math.ceil(r/2),l=r-t,n=[],a=0;a<o;a++){for(var c=[],i=0;i<t;i++)c[i]=Math.floor(2.3*h());var f=c.slice(0,l);f.reverse(),c=c.concat(f);for(var s=0;s<c.length;s++)n.push(c[s])}return n}((e=i(e||{})).size),t=Math.sqrt(o.length);r.width=r.height=e.size*e.scale;var l=r.getContext("2d");l.fillStyle=e.bgcolor,l.fillRect(0,0,r.width,r.height),l.fillStyle=e.color;for(var n=0;n<o.length;n++)if(o[n]){var a=Math.floor(n/t),c=n%t;l.fillStyle=1===o[n]?e.color:e.spotcolor,l.fillRect(c*e.scale,a*e.scale,e.scale,e.scale)}return r}var e={create:function(e){var r=document.createElement("canvas");return l(e,r),r},render:l};"undefined"!=typeof module&&(module.exports=e),"undefined"!=typeof window&&(window.blockies=e)}();