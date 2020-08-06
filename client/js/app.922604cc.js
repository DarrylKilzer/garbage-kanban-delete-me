(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("Kanban")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" "),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"boards"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"boards"}}},[t._v("My-Dashboard")])],1):t._e()]),t._v(" "),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},c=l,u=a("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null),p=d.exports,h=a("335d"),b={name:"App",async beforeCreate(){try{console.log("firing"),await Object(h["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))}catch(t){this.$router.push({name:"home"})}},components:{Navbar:p}},v=b,m=(a("5c0b"),Object(u["a"])(v,n,o,!1,null,null,null)),f=m.exports,g=a("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("This is your home page.")])])}],y={name:"home",data(){return{}},computed:{},methods:{},components:{}},B=y,$=Object(u["a"])(B,_,w,!1,null,"06790556",null),x=$.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boards"},[t._v("\n  WELCOME TO THE BOARDS!!!\n  "),a("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._v(" "),t._l(t.boards,(function(e){return a("div",{key:e.id},[a("router-link",{attrs:{to:{name:"board",params:{boardId:e.id}}}},[t._v(t._s(e.title))])],1)}))],2)},O=[],j={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}}}},k=j,P=Object(u["a"])(k,C,O,!1,null,null,null),E=P.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board"},[t.board.title?a("h1",[t._v(t._s(t.board.title))]):a("h1",[t._v("Loading...")])])},A=[],S={name:"board",computed:{board(){return this.$store.state.activeBoard}},props:["boardId"]},M=S,N=Object(u["a"])(M,T,A,!1,null,null,null),I=N.exports;r["a"].use(g["a"]);var U=new g["a"]({routes:[{path:"/",name:"home",component:x},{path:"/boards",name:"boards",component:E,beforeEnter:h["b"]},{path:"/boards/:boardId",name:"board",component:I},{path:"*",redirect:"/"}]}),L=a("2f62"),D=a("bc3a"),R=a.n(D);r["a"].use(L["a"]);let W=window.location.host.includes("localhost")?"//localhost:3000/":"/",z=R.a.create({baseURL:W+"api/",timeout:3e3,withCredentials:!0});var H=new L["a"].Store({state:{user:{},boards:[],activeBoard:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e}},actions:{setBearer({},t){z.defaults.headers.authorization=t},resetBearer(){z.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await z.get("/profile");t("setUser",e.data)}catch(e){console.error(e)}},getBoards({commit:t,dispatch:e}){z.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},a){z.post("boards",a).then(t=>{e("getBoards")})}}});const J="bcw-darryl.auth0.com",K="https://kanbanapi.com",q="oI6Y5w6BOQN0mwdFNAbmgWK78px1E1r7";r["a"].use(h["a"],{domain:J,clientId:q,audience:K,onRedirectCallback:t=>{U.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new r["a"]({router:U,store:H,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){}});