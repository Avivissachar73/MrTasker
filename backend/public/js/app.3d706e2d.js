(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4678:function(t,e,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=s(t);return r(e)}function s(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=s,t.exports=o,o.id="4678"},"48a3":function(t,e,r){"use strict";var n=r("899e"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,o,s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("confirm-popup"),r("app-header"),r("router-view",{staticClass:"main-router-view"}),r("footer",{staticClass:"app-footer flex align-center justify-center"},[t._v("FOOTER")])],1)},i=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"flex align-center space-between wrap app-header"},[r("h1",{staticClass:"logo"},[t._v("Toys are Ars")]),r("div",{staticClass:"main-nav"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{attrs:{to:"/toy"}},[t._v("Toys")])],1)])},u=[],l=r("2877"),f={},d=Object(l["a"])(f,c,u,!1,null,null,null),y=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.msgTxt?r("section",[r("div",{staticClass:"screen"}),r("section",{staticClass:"confirm-modal"},[r("p",[t._v(t._s(t.msgTxt))]),r("div",{staticClass:"buttons-container"},[t.isConfirm?r("button",{on:{click:t.resolve}},[t._v(t._s(t.confirmBtnMsg))]):t._e(),r("button",{on:{click:t.reject}},[t._v(t._s(t.closeBtnMsg))])])])]):t._e()},m=[],v={name:"alert",computed:{confirmBtnMsg:function(){return"Confirm"},closeBtnMsg:function(){return this.isConfirm?"Cancel":"Close"},isConfirm:function(){return this.$store.getters.isConfirm},msgTxt:function(){return this.$store.getters.alertMsg},confirmResolve:function(){return this.$store.getters.confirmResolve},confirmReject:function(){return this.$store.getters.confirmReject}},methods:{resolve:function(){this.confirmResolve(),this.$store.commit("resetAlert")},reject:function(){this.isConfirm&&this.confirmReject(),this.$store.commit("resetAlert")}}},b=v,h=(r("48a3"),Object(l["a"])(b,p,m,!1,null,null,null)),j=h.exports,g={components:{appHeader:y,confirmPopup:j}},_=g,T=Object(l["a"])(_,a,i,!1,null,null,null),w=T.exports,O=r("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",{staticClass:"text-center"},[t._v("Home page")]),r("some-chart",{staticStyle:{width:"400px",height:"400px"}})],1)},C=[],k=r("1fca"),P={extends:k["a"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{label:"GitHub Commits",backgroundColor:["blue","red"],data:[40,20,12,39,10,40,39,80,40,20,12,11]}]})}},$=P,S=Object(l["a"])($,n,o,!1,null,null,null),B=S.exports,z={name:"home",components:{someChart:B}},E=z,I=Object(l["a"])(E,x,C,!1,null,null,null),A=I.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"toy-app"},[r("h1",{staticClass:"text-center"},[t._v("TOYS")]),r("div",{staticClass:"flex align-center space-around wrap width-all"},[r("toyFilter"),r("router-link",{attrs:{to:"/toy/edit"}},[r("button",[t._v("Add toy")])])],1),r("router-view"),r("toy-list",{attrs:{toys:t.toys}})],1)},N=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex space-around wrap"},t._l(t.toys,(function(t){return r("toy-preview",{key:t.id,attrs:{toy:t}})})),1)},U=[],F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex column align-center toy-preview"},[r("div",{staticClass:"toy-infp-container flex align-center space-around wrap"},[r("div",{staticClass:"flex column align-center"},[r("h3",{staticClass:"text-center toy-title"},[t._v(t._s(t.toy.name))]),r("h4",[t._v("Type: "+t._s(t.toy.type))]),r("h4",[t._v("Price: "+t._s(t.toy.price))]),r("h4",[t._v(t._s(t.isInStockMsg))])]),r("img",{attrs:{src:t.toy.imgUrl||"https://api.adorable.io/avatars/285/"+t.toy.name+".png",alt:"No image available"}})]),r("div",{staticClass:"buttons-container flex align-center space-around wrap"},[r("router-link",{attrs:{to:"/toy/edit/"+t.toy._id}},[r("button",[t._v("Edit")])]),r("button",{on:{click:t.removeToy}},[t._v("Remove")]),r("router-link",{attrs:{to:"/toy/"+t.toy._id}},[r("button",[t._v("More details")])])],1)])},R=[],J={name:"toy-preview",props:["toy"],computed:{isInStockMsg:function(){return this.toy.isInStock?"In stock":"Not in stock"}},methods:{removeToy:function(){var t=this;this.$store.dispatch({type:"getConfirm",msg:"Are you sure you want to remove this toy?"}).then((function(){t.$store.dispatch({type:"removeToy",toyId:t.toy._id})}))}}},q=J,H=Object(l["a"])(q,F,R,!1,null,null,null),L=H.exports,G={name:"toy-list",props:["toys"],components:{toyPreview:L}},X=G,Y=Object(l["a"])(X,D,U,!1,null,null,null),K=Y.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"flex align-center justify-center wrap toy-filter",on:{submit:function(e){return e.preventDefault(),t.searchToys(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.searchStr,expression:"filterBy.searchStr"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.filterBy.searchStr},on:{change:t.searchToys,input:function(e){e.target.composing||t.$set(t.filterBy,"searchStr",e.target.value)}}}),r("select",{directives:[{name:"model",rawName:"v-model",value:t.filterBy.category,expression:"filterBy.category"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filterBy,"category",e.target.multiple?r:r[0])},t.searchToys]}},[r("option",{attrs:{value:"All",label:"All"}}),t._l(t.categories,(function(t){return r("option",{key:t,attrs:{label:t},domProps:{value:t}})}))],2),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.filterBy.maxPrice,expression:"filterBy.maxPrice",modifiers:{number:!0}}],attrs:{type:"number",min:"0"},domProps:{value:t.filterBy.maxPrice},on:{change:t.searchToys,input:function(e){e.target.composing||t.$set(t.filterBy,"maxPrice",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])},V=[],W=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7"));function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function tt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Z(r,!0).forEach((function(e){Object(W["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var et={name:"toys-filter",data:function(){return{filterBy:{}}},computed:{categories:function(){return this.$store.getters.toyCategories}},methods:{searchToys:function(){this.$store.commit({type:"setFilter",filterBy:this.filterBy})}},created:function(){this.filterBy=tt({},this.$store.getters.toysFilterBy)}},rt=et,nt=Object(l["a"])(rt,Q,V,!1,null,null,null),ot=nt.exports,st={name:"toy-app",computed:{toys:function(){return this.$store.getters.toysToShow}},components:{toyList:K,toyFilter:ot},created:function(){this.$store.dispatch("getToys")}},at=st,it=Object(l["a"])(at,M,N,!1,null,null,null),ct=it.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.copiedToy?r("section",{staticClass:"flex column align-center space-around toy-edit"},[r("router-link",{staticClass:"close-btn",attrs:{to:"/toy"}},[r("button",[t._v("X")])]),r("h1",[t._v(t._s(t.title))]),r("form",{staticClass:"flex column align-center justify-center",on:{submit:function(e){return e.preventDefault(),t.saveToy(e)}}},[r("table",[r("tr",[t._m(0),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.copiedToy.name,expression:"copiedToy.name"}],attrs:{id:"toyName",type:"text",placeholder:"Toy name"},domProps:{value:t.copiedToy.name},on:{input:function(e){e.target.composing||t.$set(t.copiedToy,"name",e.target.value)}}})])]),r("tr",[t._m(1),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.copiedToy.type,expression:"copiedToy.type"}],attrs:{id:"toyCategory",type:"text",placeholder:"type",list:"toyCategories"},domProps:{value:t.copiedToy.type},on:{input:function(e){e.target.composing||t.$set(t.copiedToy,"type",e.target.value)}}})]),r("datalist",{attrs:{id:"toyCategories"}},t._l(t.categories,(function(t){return r("option",{attrs:{label:t},domProps:{value:t}})})),0)]),r("tr",[t._m(2),r("td",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.copiedToy.price,expression:"copiedToy.price",modifiers:{number:!0}}],attrs:{id:"toyPrice",type:"number",min:"0"},domProps:{value:t.copiedToy.price},on:{input:function(e){e.target.composing||t.$set(t.copiedToy,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),r("tr",[t._m(3),r("td",[r("input",{attrs:{id:"toyImg",type:"file"},on:{change:t.setImg}})])])]),r("button",[t._v("Save")])])],1):t._e()},lt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("label",{attrs:{for:"toyName"}},[t._v("Name:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("label",{attrs:{for:"toyCategory"}},[t._v("Type:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("label",{attrs:{for:"toyPrice"}},[t._v("Price:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("label",{attrs:{for:"toyImg"}},[t._v("Image:")])])}];function ft(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ft(r,!0).forEach((function(e){Object(W["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ft(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var yt={name:"toy-edit",data:function(){return{copiedToy:null}},computed:{categories:function(){return this.$store.getters.toyCategories},title:function(){return this.copiedToy._id?"Edit toy":"Add new toy"}},methods:{getToy:function(){var t=this,e=this.$route.params._id;this.$store.dispatch({type:"getToy",toyId:e}).then((function(e){console.log(e),t.copiedToy=JSON.parse(JSON.stringify(e))}))},saveToy:function(){this.$store.dispatch({type:"saveToy",toy:dt({},this.copiedToy)}),this.$router.push("/toy")},setImg:function(t){this.$store.dispatch({type:"getToyImg",ev:t})}},created:function(){this.getToy()},watch:{"$route.params.id":function(t){this.getToy()}}},pt=yt,mt=Object(l["a"])(pt,ut,lt,!1,null,null,null),vt=mt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"toy-details flex column align-center space-around"},[r("h1",[t._v("Toy details:")]),r("pre",[t._v(t._s(t.currToy))])])},ht=[],jt={name:"toy-details",computed:{currToy:function(){return this.$store.getters.currToy}},methods:{getToy:function(){var t=this.$route.params._id;this.$store.dispatch({type:"getToy",toyId:t})}},created:function(){this.getToy()},watch:{"$route.params._id":function(t){this.getToy()}}},gt=jt,_t=Object(l["a"])(gt,bt,ht,!1,null,null,null),Tt=_t.exports;s["a"].use(O["a"]);var wt=[{path:"/",component:A},{path:"/toy",component:ct,children:[{path:"edit/:_id?",component:vt}]},{path:"/toy/:_id",component:Tt}],Ot=new O["a"]({routes:wt}),xt=Ot,Ct=r("2f62"),kt=(r("c740"),r("caad"),r("13d5"),r("a434"),r("b0c0"),r("2532"),r("284c")),Pt=(r("0d03"),r("d3b7"),r("bc3a")),$t=r.n(Pt),St={get:zt,remove:Et,post:It,put:At};function Bt(t){throw console.dir(t),t}function zt(t){return console.log("http service got request to API:",t),$t.a.get(t).then((function(t){return t.data})).catch(Bt)}function Et(t){return $t.a.delete(t).then((function(t){return t.data})).catch(Bt)}function It(t,e){return $t.a.post(t,e).then((function(t){return t.data})).catch(Bt)}function At(t,e){return $t.a.put(t,e).then((function(t){return t.data})).catch(Bt)}var Mt="/api/toy/",Nt={query:Rt,get:Ut,save:Ft,remove:Dt};function Dt(t){return St.remove(Mt+t)}function Ut(t){return t?St.get(Mt+t):Promise.resolve(Jt())}function Ft(t){return t._id?St.put(Mt+t._id,t).then((function(){return t})):St.post(Mt,t)}function Rt(){return St.get(Mt)}function Jt(){return{name:"",price:0,type:"",createdAt:Date.now(),isInStock:!0}}function qt(t){var e="dtvih0fww",r="jcc4zczl",n="https://api.cloudinary.com/v1_1/".concat(e,"/image/upload"),o=new FormData;return o.append("file",t.target.files[0]),o.append("upload_preset",r),fetch(n,{method:"POST",body:o}).then((function(t){return t.json()})).then((function(t){return console.log(t),t})).catch((function(t){return console.error(t)}))}var Ht={state:{toys:[],currToy:null,filterBy:{searchStr:"",maxPrice:0,category:"All"},imgUrl:null},getters:{toysToShow:function(t){var e=t.filterBy,r=Object(kt["a"])(t.toys);return r=r.filter((function(t){return t.name.toLowerCase().includes(e.searchStr.toLowerCase())})),r=r.filter((function(t){return"All"===e.category||t.type===e.category})),r=r.filter((function(t){return!e.maxPrice||t.price<=e.maxPrice})),r},toysFilterBy:function(t){return t.filterBy},toyCategories:function(t){return t.toys.reduce((function(t,e){return e.type&&!t.includes(e.type)&&t.push(e.type),t}),[])||[]},currToy:function(t){return t.currToy}},mutations:{setToys:function(t,e){var r=e.toys;t.toys=r},removeToy:function(t,e){var r=e.id,n=t.toys.findIndex((function(t){return t._id===r}));-1!==n&&t.toys.splice(n,1)},saveToy:function(t,e){var r=e.toy,n=t.toys.findIndex((function(t){return t._id===r._id}));-1!==n?t.toys.splice(n,1,r):t.toys.unshift(r)},setCurrToy:function(t,e){var r=e.toy;t.currToy=r},setFilter:function(t,e){var r=e.filterBy;t.filterBy=r}},actions:{getToys:function(t){Nt.query().then((function(e){return t.commit({type:"setToys",toys:e})})).catch((function(t){return console.log(t)}))},getToy:function(t,e){var r=e.toyId;return Nt.get(r).then((function(e){return t.commit({type:"setCurrToy",toy:e}),e}))},removeToy:function(t,e){var r=e.toyId;Nt.remove(r).then((function(e){return t.commit({type:"removeToy",id:e})}))},doSaveToy:function(t,e){var r=e.toy;return Nt.save(r).then((function(e){return t.commit({type:"saveToy",toy:e}),e}))},saveToy:function(t,e){var r=e.toy;return t.state.imgUrl?(r.imgUrl=t.state.imgUrl,console.log(r.imgUrl),t.state.imgUrl=null,t.dispatch({type:"doSaveToy",toy:r})):t.dispatch({type:"doSaveToy",toy:r})},getToyImg:function(t,e){var r=e.ev;qt(r).then((function(e){return t.state.imgUrl=e.secure_url})).catch((function(t){return console.log(t)}))}}},Lt={state:{msg:"",resolve:null,reject:null,isConfirm:!1},getters:{alertMsg:function(t){return t.msg},confirmResolve:function(t){return t.resolve},confirmReject:function(t){return t.reject},isConfirm:function(t){return t.isConfirm}},mutations:{setConfirm:function(t,e){var r=e.resolve,n=e.reject,o=e.msg;t.isConfirm=!0,t.resolve=r,t.reject=n,t.msg=o},setAlert:function(t,e){var r=e.msg;t.msg=r},resetAlert:function(t){t.resolve=null,t.reject=null,t.msg=null,t.isConfirm=!1}},actions:{getConfirm:function(t,e){var r=e.msg;return new Promise((function(e,n){t.commit({type:"setConfirm",resolve:e,reject:n,msg:r})}))},getAlert:function(t,e){var r=e.msg;t.commit({type:"setAlert",msg:r})}}};s["a"].use(Ct["a"]);var Gt=new Ct["a"].Store({state:{},mutations:{},actions:{},modules:{toyStore:Ht,confirmStore:Lt}});r("c860");s["a"].config.productionTip=!1,new s["a"]({router:xt,store:Gt,render:function(t){return t(w)}}).$mount("#app")},"899e":function(t,e,r){},c860:function(t,e,r){}});
//# sourceMappingURL=app.3d706e2d.js.map