(function(e){function t(t){for(var n,i,c=t[0],o=t[1],u=t[2],l=0,v=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(v.length)v.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0906":function(e,t,a){},1165:function(e,t,a){},"187b":function(e,t,a){e.exports=a.p+"static/img/rg2.732ad979.png"},"1d27":function(e,t,a){e.exports=a.p+"static/img/rn951.b6a5cb38.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",{staticClass:"pagetitle"},[e._v("头像装饰器")]),a("app-main",{on:{save:function(t){e.saveImage=t}}}),a("transition",{attrs:{name:"el-zoom-in-top"}},[a("app-save",{directives:[{name:"show",rawName:"v-show",value:""!=e.saveImage,expression:"saveImage!=''"}],attrs:{image:e.saveImage},on:{close:function(t){e.saveImage=""}}})],1),a("footer",{staticClass:"copyright"},[e._v("N/A")])],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("section",{staticClass:"avatar-box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.hasImage,expression:"!hasImage"}],staticClass:"noImage upload-box"},[a("div",{staticClass:"upload-box"},[a("svg",{attrs:{viewBox:"0 0 512 512.00099",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"m373.410156 0h-234.816406c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.8125c0 76.421875 62.171875 138.59375 138.59375 138.59375h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.59375v-234.8125c0-76.421875-62.171875-138.59375-138.589844-138.59375zm108.574219 373.40625c0 59.871094-48.707031 108.578125-108.578125 108.578125h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.578125v-1.316406l86.089844-79.25c2.4375-2.242188 6.257812-2.242188 8.695312-.003906l65.875 60.476562c7.640625 7.015625 17.941407 10.441406 28.269531 9.414062 10.324219-1.03125 19.742188-6.4375 25.847657-14.828124l116.25-159.847657c1.542969-2.117187 3.65625-2.558593 4.777343-2.632812 1.121094-.066407 3.273438.085937 5.078126 1.988281l111.082031 117.050781v68.949219zm0-112.550781-89.3125-94.109375c-7.472656-7.875-17.960937-11.984375-28.808594-11.277344-10.832031.707031-20.707031 6.148438-27.09375 14.929688l-116.253906 159.847656c-1.472656 2.023437-3.488281 2.507812-4.558594 2.613281-1.066406.105469-3.136719.035156-4.980469-1.660156l-65.875-60.472657c-13.839843-12.710937-35.503906-12.691406-49.324218.03125l-65.761719 60.535157v-192.699219c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0"}}),a("path",{attrs:{d:"m142.910156 86.734375c-29.082031 0-52.746094 23.664063-52.746094 52.75 0 29.082031 23.664063 52.746094 52.746094 52.746094 29.085938 0 52.746094-23.664063 52.746094-52.746094.003906-29.085937-23.660156-52.75-52.746094-52.75zm0 75.476563c-12.53125 0-22.730468-10.195313-22.730468-22.730469 0-12.53125 10.199218-22.730469 22.730468-22.730469 12.535156 0 22.730469 10.195312 22.730469 22.730469 0 12.535156-10.195313 22.730469-22.730469 22.730469zm0 0"}})]),e._v("\n                请选择图片\n            ")])]),a("canvas",{ref:"canvas",staticClass:"ccanvas",attrs:{width:"512",height:"512"}}),a("canvas",{ref:"canvas2",staticClass:"fb-canvas",attrs:{width:"512",height:"512"}})]),a("section",{staticClass:"choice-box"},[a("div",{directives:[{name:"hscroll",rawName:"v-hscroll"}],staticClass:"choice-warp"},e._l(e.head,(function(t,n){return a("div",{key:"head"+n,staticClass:"choice-icon",class:{active:e.activeHead==n},on:{click:function(t){e.activeHead=n}}},[a("img",{staticClass:"choice-img",attrs:{src:t.preview}})])})),0)]),a("section",{staticClass:"choice-box"},[a("div",{directives:[{name:"hscroll",rawName:"v-hscroll"}],staticClass:"choice-warp"},e._l(e.icons,(function(t,n){return a("div",{key:"icon"+n,staticClass:"choice-icon",on:{click:function(t){return e.addIcon(n)}}},[a("img",{staticClass:"choice-img",attrs:{src:t.preview}})])})),0)]),a("button",{directives:[{name:"show",rawName:"v-show",value:!e.hasImage,expression:"!hasImage"}],staticClass:"save-btn",on:{click:function(t){return e.$refs.picker.click()}}},[e._v("\n            选择图片\n        ")]),a("section",{directives:[{name:"show",rawName:"v-show",value:e.hasImage,expression:"hasImage"}],staticClass:"save-box"},[a("button",{staticClass:"save-btn save-w50",on:{click:function(t){return e.$refs.picker.click()}}},[e._v("\n            更换头像\n        ")]),a("button",{staticClass:"save-btn save-w50",on:{click:e.saveImage}},[e._v("\n            保存图片\n        ")])]),a("div",{ref:"picker",attrs:{id:"pick-avatar"}}),a("avatar-cropper",{attrs:{mimes:"image/*",trigger:"#pick-avatar","upload-handler":e.getImage}})],1)},c=[],o=(a("ac4d"),a("8a81"),a("ac6a"),a("5df3"),a("96cf"),a("3b8d")),u=a("a566"),p=a.n(u),l=a("1d27"),v=a.n(l),h=a("bf15"),f=a.n(h),d=a("a1e6"),m=a.n(d),g=a("d90a"),b=a.n(g),w=a("187b"),x=a.n(w),I=a("bc99"),y=a.n(I),C=a("5753"),$=a.n(C),k=a("9bcf"),_=a.n(k),O=a("adc3"),j=a.n(O),P=[{src:$.a,preview:$.a,params:[0,0,512,512]},{src:_.a,preview:_.a,params:[0,0,512,512]},{src:j.a,preview:j.a,params:[0,0,512,512]}],S=[{src:b.a,preview:b.a,x:40,y:40},{src:x.a,preview:x.a,x:60,y:40},{src:y.a,preview:y.a,x:80,y:200},{src:m.a,preview:m.a,x:50,y:200},{src:v.a,preview:v.a,x:50,y:200},{src:f.a,preview:f.a,x:50,y:200}],z=a("920e"),H=a.n(z),N={components:{AvatarCropper:p.a},directives:{hscroll:{inserted:function(e,t){H()(e)}}},data:function(){return{hasImage:!1,activeHead:-1,head:P,icons:S}},methods:{getImage:function(e){this.$orignalImage=e.getCroppedCanvas({width:512,height:512}),this.drawIcon()},renewImage:function(){this.$ctx.clearRect(0,0,512,512),this.$orignalImage&&(this.$ctx.drawImage(this.$orignalImage,0,0,512,512),this.hasImage=!0)},drawIcon:function(){this.renewImage(),this.activeHead<0||this.$ctx.drawImage.apply(this.$ctx,[this.$headImg[this.activeHead]].concat(this.head[this.activeHead].params))},saveImage:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$fb.toDataURL("image/png"),e.next=3,this.loadImg(t);case 3:a=e.sent,this.$ctx.drawImage(a,0,0,512,512),n=this.$refs.canvas.toDataURL("image/png"),this.$emit("save",n),this.drawIcon();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadImg:function(e){return new Promise((function(t,a){var n=new Image;n.onload=function(){t(n)},n.onerror=a,n.src=e}))},addIcon:function(e){var t=new fabric.Image(this.$iconImg[e],{left:this.icons[e].x,top:this.icons[e].y});t.cornerSize=30,t.rotatingPointOffset=50,t.transparentCorners=!1,this.$fb.add(t)}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,s,i,c,o,u,p,l,v,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$nextTick();case 2:for(this.$ctx=this.$refs.canvas.getContext("2d"),this.$fb=new fabric.Canvas(this.$refs.canvas2),t=[],a=!0,n=!1,r=void 0,e.prev=8,s=this.head[Symbol.iterator]();!(a=(i=s.next()).done);a=!0)c=i.value,t.push(this.loadImg(c.src));e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](8),n=!0,r=e.t0;case 16:e.prev=16,e.prev=17,a||null==s.return||s.return();case 19:if(e.prev=19,!n){e.next=22;break}throw r;case 22:return e.finish(19);case 23:return e.finish(16);case 24:return e.next=26,Promise.all(t);case 26:for(this.$headImg=e.sent,o=[],u=!0,p=!1,l=void 0,e.prev=31,v=this.icons[Symbol.iterator]();!(u=(h=v.next()).done);u=!0)c=h.value,o.push(this.loadImg(c.src));e.next=39;break;case 35:e.prev=35,e.t1=e["catch"](31),p=!0,l=e.t1;case 39:e.prev=39,e.prev=40,u||null==v.return||v.return();case 42:if(e.prev=42,!p){e.next=45;break}throw l;case 45:return e.finish(42);case 46:return e.finish(39);case 47:return e.next=49,Promise.all(o);case 49:this.$iconImg=e.sent;case 50:case"end":return e.stop()}}),e,this,[[8,12,16,24],[17,,19,23],[31,35,39,47],[40,,42,46]])})));function t(){return e.apply(this,arguments)}return t}(),watch:{activeHead:function(){this.drawIcon()}}},R=N,M=(a("9bcc"),a("b4a6"),a("2877")),T=Object(M["a"])(R,i,c,!1,null,"d5243078",null),E=T.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"save-wrap"},[a("div",{staticClass:"save-box"},[a("div",{staticClass:"save-image"},[a("h2",[e._v("长按下方图片保存")]),a("img",{attrs:{src:e.image,alt:"长按图片保存"}}),a("button",{staticClass:"save-close-btn",on:{click:function(t){return e.$emit("close")}}},[e._v("\n                关闭\n            ")])])])])},D=[],J={props:{image:{type:String,default:""}}},L=J,U=(a("f222"),Object(M["a"])(L,A,D,!1,null,"065f9fd0",null)),B=U.exports,q={name:"app",data:function(){return{saveImage:""}},components:{appMain:E,appSave:B}},F=q,G=(a("5c0b"),Object(M["a"])(F,r,s,!1,null,null,null)),K=G.exports;a("450d"),a("d455");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(K)}}).$mount("#app")},5753:function(e,t,a){e.exports=a.p+"static/img/n1.9b994d18.png"},"5c0b":function(e,t,a){"use strict";var n=a("e332"),r=a.n(n);r.a},"9bcc":function(e,t,a){"use strict";var n=a("1165"),r=a.n(n);r.a},"9bcf":function(e,t,a){e.exports=a.p+"static/img/n2.ea5eb416.png"},a1e6:function(e,t,a){e.exports=a.p+"static/img/rn95.05239f38.png"},adc3:function(e,t,a){e.exports=a.p+"static/img/n3.c61416fb.png"},b4a6:function(e,t,a){"use strict";var n=a("e701"),r=a.n(n);r.a},bc99:function(e,t,a){e.exports=a.p+"static/img/rg3.a7028b54.png"},bf15:function(e,t,a){e.exports=a.p+"static/img/rn952.84f2bb90.png"},d90a:function(e,t,a){e.exports=a.p+"static/img/rg1.4eed2e0c.png"},e332:function(e,t,a){},e701:function(e,t,a){},f222:function(e,t,a){"use strict";var n=a("0906"),r=a.n(n);r.a}});
//# sourceMappingURL=app.3d6d6a60.js.map