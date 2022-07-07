(function(){"use strict";var t={3119:function(t,e,o){var s=o(9242),a=o(3396);const n={class:"app"};function l(t,e,o,s,l,i){const r=(0,a.up)("navbar"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r),(0,a._)("div",n,[(0,a.Wm)(u)])],64)}const i={class:"navbar"},r=(0,a.Uk)("Vue 3"),u=(0,a.Uk)("About"),d={class:"navbar__btns"},c=(0,a.Uk)("Post default"),p=(0,a.Uk)("Vuex Post"),m=(0,a.Uk)("CompositionApi Post");function h(t,e,o,s,n,l){const h=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/"))},[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[r])),_:1})]),(0,a.Wm)(h,{style:{"margin-left":"17px"},onClick:e[1]||(e[1]=e=>t.$router.push("/about"))},{default:(0,a.w5)((()=>[u])),_:1}),(0,a._)("div",d,[(0,a.Wm)(h,{onClick:e[2]||(e[2]=e=>t.$router.push("/posts"))},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(h,{style:{"margin-left":"17px"},onClick:e[3]||(e[3]=e=>t.$router.push("/store"))},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(h,{style:{"margin-left":"17px"},onClick:e[4]||(e[4]=e=>t.$router.push("/composition"))},{default:(0,a.w5)((()=>[m])),_:1})])])}var g={},v=o(89);const f=(0,v.Z)(g,[["render",h],["__scopeId","data-v-0b08000d"]]);var y=f,w={components:{Navbar:y}};const P=(0,v.Z)(w,[["render",l],["__scopeId","data-v-4c162194"]]);var _=P;const b={class:"btn"};function S(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("button",b,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])}var k={name:"my-button"};const V=(0,v.Z)(k,[["render",S],["__scopeId","data-v-d7d9eb82"]]);var D=V;const C=["value"];function W(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>l.updateInput&&l.updateInput(...t)),class:"input",type:"text"},null,40,C)}var U={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const M=(0,v.Z)(U,[["render",W],["__scopeId","data-v-1b28f5c1"]]);var O=M,L=o(7139);const Q=t=>((0,a.dD)("data-v-1343fff8"),t=t(),(0,a.Cn)(),t),x={class:"post"},I={style:{"margin-bottom":"6px"}},j=Q((()=>(0,a._)("strong",null,"Name:",-1))),$=Q((()=>(0,a._)("strong",null,"Description:",-1))),A={class:"post__btns"},Z=(0,a.Uk)(" Open "),T=(0,a.Uk)(" Delete ");function H(t,e,o,s,n,l){const i=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",null,[(0,a._)("div",I,"id = "+(0,L.zw)(o.post.id),1),(0,a._)("div",null,[j,(0,a.Uk)(" "+(0,L.zw)(o.post.title),1)]),(0,a._)("div",null,[$,(0,a.Uk)(" "+(0,L.zw)(o.post.body),1)])]),(0,a._)("div",A,[(0,a.Wm)(i,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`)),style:{"margin-right":"5px"}},{default:(0,a.w5)((()=>[Z])),_:1}),(0,a.Wm)(i,{onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,a.w5)((()=>[T])),_:1})])])}var F={props:{post:{type:Object,required:!0}}};const R=(0,v.Z)(F,[["render",H],["__scopeId","data-v-1343fff8"]]);var z=R;const E=t=>((0,a.dD)("data-v-eb73dd06"),t=t(),(0,a.Cn)(),t),N={key:0},q=E((()=>(0,a._)("h3",null,"List of posts",-1))),B={key:1,style:{color:"red"}};function Y(t,e,o,n,l,i){const r=(0,a.up)("post-item");return o.posts.length>0?((0,a.wg)(),(0,a.iD)("div",N,[q,(0,a.Wm)(s.W3,{name:"user-list"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.posts,(e=>((0,a.wg)(),(0,a.j4)(r,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,a.wg)(),(0,a.iD)("h2",B," The list of posts is empty! "))}var K={components:{PostItem:z},props:{posts:{type:Array,required:!0}}};const G=(0,v.Z)(K,[["render",Y],["__scopeId","data-v-eb73dd06"]]);var J=G;function X(t,e,o,n,l,i){return t.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,s.iM)(((...e)=>t.hideDialog&&t.hideDialog(...e)),["stop"]))},[(0,a._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,a.WI)(t.$slots,"default",{},void 0,!0)])])):(0,a.kq)("",!0)}var tt={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){console.log("mixin mounted")}},et={name:"my-dialog",mixins:[tt],mounted(){console.log("dialog mounted")}};const ot=(0,v.Z)(et,[["render",X],["__scopeId","data-v-59fb392a"]]);var st=ot;const at=(0,a._)("option",{disabled:"",value:""},"Select from the list ",-1),nt=["value"];function lt(t,e,o,n,l,i){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.modelValue=t),onChange:e[1]||(e[1]=(...t)=>i.changeOption&&i.changeOption(...t))},[at,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.options,(t=>((0,a.wg)(),(0,a.iD)("option",{key:o.options.value,value:t.value},(0,L.zw)(t.name),9,nt)))),128))],544)),[[s.bM,o.modelValue]])}var it={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const rt=(0,v.Z)(it,[["render",lt]]);var ut=rt,dt={mounted(t){t.focus()},name:"focus"},ct={mounted(t,e){const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},a=new IntersectionObserver(s,o);a.observe(t)},name:"intersection"},pt=[dt,ct],mt=[D,O,st,ut,y,z,J,pt];const ht=(0,a._)("h1",null,"Welcome!",-1),gt=(0,a._)("h2",null,"Use navbar to show code variations. Thanks!",-1),vt=[ht,gt];function ft(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,vt)}var yt={};const wt=(0,v.Z)(yt,[["render",ft]]);var Pt=wt,_t=o(2483);const bt=(0,a._)("h1",null,"Page with Posts",-1),St={class:"app__btns"},kt=(0,a.Uk)(" Create Post "),Vt={key:1},Dt={class:"observer"};function Ct(t,e,o,s,n,l){const i=(0,a.up)("my-input"),r=(0,a.up)("my-button"),u=(0,a.up)("my-select"),d=(0,a.up)("post-form"),c=(0,a.up)("my-dialog"),p=(0,a.up)("post-list"),m=(0,a.Q2)("focus"),h=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.iD)("div",null,[bt,(0,a.wy)((0,a.Wm)(i,{modelValue:n.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>n.searchQuery=t),placeholder:"Search..."},null,8,["modelValue"]),[[m]]),(0,a._)("div",St,[(0,a.Wm)(r,{onClick:l.showDialog},{default:(0,a.w5)((()=>[kt])),_:1},8,["onClick"]),(0,a.Wm)(u,{modelValue:n.selectSort,"onUpdate:modelValue":e[1]||(e[1]=t=>n.selectSort=t),options:n.sortOptions},null,8,["modelValue","options"])]),(0,a.Wm)(c,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"]),n.isPostsLoading?((0,a.wg)(),(0,a.iD)("div",Vt,"Downloading...")):((0,a.wg)(),(0,a.j4)(p,{key:0,posts:l.sortedAndSearchedPosts,onRemove:l.removePost},null,8,["posts","onRemove"])),(0,a.wy)((0,a._)("div",Dt,null,512),[[h,l.loadMorePosts]])])}o(6699);const Wt=(0,a.Uk)("Create Post"),Ut=(0,a.Uk)(" Create ");function Mt(t,e,o,n,l,i){const r=(0,a.up)("center"),u=(0,a.up)("my-input"),d=(0,a.up)("my-button"),c=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[(0,a._)("h4",null,[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[Wt])),_:1})]),(0,a.wy)((0,a.Wm)(u,{modelValue:l.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>l.post.title=t),type:"text",placeholder:"Name"},null,8,["modelValue"]),[[c]]),(0,a.Wm)(u,{modelValue:l.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>l.post.body=t),type:"text",placeholder:"Description"},null,8,["modelValue"]),(0,a.Wm)(d,{class:"btn",style:{"align-self":"flex-end","margin-top":"15px"},onClick:i.createPost},{default:(0,a.w5)((()=>[Ut])),_:1},8,["onClick"])],32)}var Ot={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const Lt=(0,v.Z)(Ot,[["render",Mt],["__scopeId","data-v-4959d3c5"]]);var Qt=Lt,xt=o(6265),It=o.n(xt),jt={components:{PostList:J,PostForm:Qt,PostItem:z,MyDialog:st,MyButton:D,MySelect:ut,MyInput:O},data(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostsLoading=!0;const t=await It().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert("Error")}finally{this.isPostsLoading=!1}},async loadMorePosts(){try{this.page+=1;const t=await It().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert("Error")}}},mounted(){this.fetchPosts(),console.log(this.$refs.observer)},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectSort]?.localeCompare(e[this.selectSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}}};const $t=(0,v.Z)(jt,[["render",Ct]]);var At=$t;const Zt=(0,a._)("h1",null,"This application was created as a result of training",-1),Tt=(0,a._)("h2",null,"© Arseniy",-1),Ht=[Zt,Tt];function Ft(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,Ht)}var Rt={};const zt=(0,v.Z)(Rt,[["render",Ft]]);var Et=zt;function Nt(t,e,o,s,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h1",null,"This is the page of the post ID = "+(0,L.zw)(t.$route.params.id),1)])}var qt={};const Bt=(0,v.Z)(qt,[["render",Nt]]);var Yt=Bt;const Kt=(0,a._)("h1",null,"Page with Posts",-1),Gt={class:"app__btns"},Jt=(0,a.Uk)(" Create Post "),Xt={key:1},te={class:"observer"};function ee(t,e,o,s,n,l){const i=(0,a.up)("my-input"),r=(0,a.up)("my-button"),u=(0,a.up)("my-select"),d=(0,a.up)("post-form"),c=(0,a.up)("my-dialog"),p=(0,a.up)("post-list"),m=(0,a.Q2)("focus"),h=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.iD)("div",null,[Kt,(0,a.wy)((0,a.Wm)(i,{"model-value":t.searchQuery,"onUpdate:modelValue":t.setSearchQuery,placeholder:"Search...."},null,8,["model-value","onUpdate:modelValue"]),[[m]]),(0,a._)("div",Gt,[(0,a.Wm)(r,{onClick:l.showDialog},{default:(0,a.w5)((()=>[Jt])),_:1},8,["onClick"]),(0,a.Wm)(u,{"model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,options:t.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),(0,a.Wm)(c,{show:n.dialogVisible,"onUpdate:show":e[0]||(e[0]=t=>n.dialogVisible=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"]),t.isPostsLoading?((0,a.wg)(),(0,a.iD)("div",Xt,"Downloading...")):((0,a.wg)(),(0,a.j4)(p,{key:0,posts:t.sortedAndSearchedPosts,onRemove:l.removePost},null,8,["posts","onRemove"])),(0,a.wy)((0,a._)("div",te,null,512),[[h,t.loadMorePosts]])])}var oe=o(65),se={components:{MyInput:O,MySelect:ut,MyButton:D,PostList:J,PostForm:Qt},data(){return{dialogVisible:!1}},methods:{...(0,oe.OI)({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"}),...(0,oe.nv)({loadMorePosts:"post/loadMorePosts",fetchPosts:"post/fetchPosts"}),createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0}},mounted(){this.fetchPosts()},computed:{...(0,oe.rn)({posts:t=>t.post.posts,isPostsLoading:t=>t.post.isPostsLoading,selectedSort:t=>t.post.selectedSort,searchQuery:t=>t.post.searchQuery,page:t=>t.post.page,limit:t=>t.post.limit,totalPages:t=>t.post.totalPages,sortOptions:t=>t.post.sortOptions}),...(0,oe.Se)({sortedPosts:"post/sortedPosts",sortedAndSearchedPosts:"post/sortedAndSearchedPosts"})}};const ae=(0,v.Z)(se,[["render",ee]]);var ne=ae;const le=(0,a._)("h1",null,"Page with Posts",-1),ie={class:"app__btns"},re={key:1};function ue(t,e,o,s,n,l){const i=(0,a.up)("my-input"),r=(0,a.up)("my-select"),u=(0,a.up)("post-form"),d=(0,a.up)("my-dialog"),c=(0,a.up)("post-list"),p=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("div",null,[le,(0,a.wy)((0,a.Wm)(i,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>s.searchQuery=t),placeholder:"Search...."},null,8,["modelValue"]),[[p]]),(0,a._)("div",ie,[(0,a.Wm)(r,{modelValue:s.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>s.selectedSort=t),options:n.sortOptions},null,8,["modelValue","options"])]),(0,a.Wm)(d,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t)},{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1},8,["show"]),s.isPostsLoading?((0,a.wg)(),(0,a.iD)("div",re,"Downloading...")):((0,a.wg)(),(0,a.j4)(c,{key:0,posts:s.sortedAndSearchedPosts},null,8,["posts"]))])}var de=o(4870);function ce(t){const e=(0,de.iH)([]),o=(0,de.iH)(0),s=(0,de.iH)(!0),n=async()=>{try{const a=await It().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:1,_limit:t}});o.value=Math.ceil(a.headers["x-total-count"]/t),e.value=a.data}catch(a){alert("Ошибка")}finally{s.value=!1}};return(0,a.bv)(n),{posts:e,isPostsLoading:s,totalPages:o}}function pe(t){const e=(0,de.iH)(""),o=(0,a.Fl)((()=>[...t.value].sort(((t,o)=>t[e.value]?.localeCompare(o[e.value])))));return{selectedSort:e,sortedPosts:o}}function me(t){const e=(0,de.iH)(""),o=(0,a.Fl)((()=>t.value.filter((t=>t.title.toLowerCase().includes(e.value.toLowerCase())))));return{searchQuery:e,sortedAndSearchedPosts:o}}var he={components:{PostList:J,PostForm:Qt,MySelect:ut,MyInput:O},data(){return{dialogVisible:!1,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},setup(t){const{posts:e,totalPages:o,isPostsLoading:s}=ce(10),{sortedPosts:a,selectedSort:n}=pe(e),{searchQuery:l,sortedAndSearchedPosts:i}=me(a);return{posts:e,totalPages:o,isPostsLoading:s,sortedPosts:a,selectedSort:n,searchQuery:l,sortedAndSearchedPosts:i}}};const ge=(0,v.Z)(he,[["render",ue]]);var ve=ge;const fe=[{path:"/",component:Pt},{path:"/posts",component:At},{path:"/about",component:Et},{path:"/posts/:id",component:Yt},{path:"/store",component:ne},{path:"/composition",component:ve}],ye=(0,_t.p7)({routes:fe,history:(0,_t.PO)()});var we=ye;const Pe={state:()=>({posts:[],isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}),getters:{sortedPosts(t){return[...t.posts].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))},sortedAndSearchedPosts(t,e){return e.sortedPosts.filter((e=>e.title.toLowerCase().includes(t.searchQuery.toLowerCase())))}},mutations:{setPosts(t,e){t.posts=e},setLoading(t,e){t.isPostsLoading=e},setPage(t,e){t.page=e},setSelectedSort(t,e){t.selectedSort=e},setTotalPages(t,e){t.totalPages=e},setSearchQuery(t,e){t.searchQuery=e}},actions:{async fetchPosts({state:t,commit:e}){try{e("setLoading",!0);const o=await It().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",o.data)}catch(o){console.log(o)}finally{e("setLoading",!1)}},async loadMorePosts({state:t,commit:e}){try{e("setPage",t.page+1);const o=await It().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",[...t.posts,...o.data])}catch(o){console.log(o)}}},namespaced:!0};var _e=(0,oe.MT)({state:{isAuth:!1},modules:{post:Pe}});const be=(0,s.ri)(_);mt.forEach((t=>{be.component(t.name,t)})),pt.forEach((t=>{be.directive(t.name,t)})),be.use(we).use(_e).mount("#app")}},e={};function o(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,s,a,n){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],n=t[d][2];for(var i=!0,r=0;r<s.length;r++)(!1&n||l>=n)&&Object.keys(o.O).every((function(t){return o.O[t](s[r])}))?s.splice(r--,1):(i=!1,n<l&&(l=n));if(i){t.splice(d--,1);var u=a();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,a,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,l=s[0],i=s[1],r=s[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(r)var d=r(o)}for(e&&e(s);u<l.length;u++)n=l[u],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(d)},s=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(3119)}));s=o.O(s)})();
//# sourceMappingURL=app.86678b40.js.map