(function(){"use strict";var e={6056:function(e,t,n){n.d(t,{I8:function(){return u}});var o=n(3977),r=n(316),i=n(6100),a=n(6650);const s={apiKey:"AIzaSyDRFnauQi1VXmNL0R5_ektmRbZurJNCAGQ",authDomain:"vue-fire-auth-yt-f1899.firebaseapp.com",projectId:"vue-fire-auth-yt-f1899",storageBucket:"vue-fire-auth-yt-f1899.appspot.com",messagingSenderId:"876419201426",appId:"1:876419201426:web:3886dafc2a96676a5a294b",databaseURL:"https://vue-fire-auth-yt-f1899-default-rtdb.firebaseio.com/"},l=(0,o.ZF)(s),u=(0,r.v0)(l);(0,i.ad)(l),(0,a.cF)(l)},7006:function(e,t,n){var o=n(9963),r=n(6252),i=n(3577);const a=(0,r._)("div",{class:"head"},[(0,r._)("div"),(0,r._)("div",null,[(0,r._)("h2",{id:"start"},"Drugger Detection")])],-1),s={class:"links"},l={key:2,id:"logoutbut2",class:"page"},u=(0,r._)("div",{class:"bar1"},null,-1),d=(0,r._)("div",{class:"bar2"},null,-1),c=(0,r._)("div",{class:"bar3"},null,-1);function g(e,t,n,o,g,m){const p=(0,r.up)("router-link"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{id:"nav",class:(0,i.C_)(["nav-bar",{scrolled:g.isScrolled}])},[a,(0,r._)("div",s,[(0,r.Wm)(p,{class:"page",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(p,{class:"page",to:"/projectabout"},{default:(0,r.w5)((()=>[(0,r.Uk)("Application Guide")])),_:1}),(0,r.Wm)(p,{class:"page",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Wm)(p,{class:"page",to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contact")])),_:1}),e.$store.state.user?((0,r.wg)(),(0,r.j4)(p,{key:0,class:"page",to:"/user"},{default:(0,r.w5)((()=>[(0,r.Uk)("User")])),_:1})):(0,r.kq)("",!0),e.$store.state.user?((0,r.wg)(),(0,r.iD)("button",{key:1,id:"logoutbut",class:"page",onClick:t[0]||(t[0]=t=>e.$store.dispatch("logout"))},"Logout")):(0,r.kq)("",!0),e.$store.state.user?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",l,[(0,r.Wm)(p,{class:"login-button",to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Login")])),_:1})]))]),(0,r._)("div",{class:(0,i.C_)(["res-menu",{change:g.isClick}]),onClick:t[1]||(t[1]=e=>g.isClick=!g.isClick)},[u,d,c,(0,r._)("div",{class:(0,i.C_)({res:!g.isClick,resmenu:g.isClick})},[(0,r._)("div",null,[(0,r.Wm)(p,{class:"page3",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("div",null,[(0,r.Wm)(p,{class:"page3",to:"/projectabout"},{default:(0,r.w5)((()=>[(0,r.Uk)("Application Guide")])),_:1})]),(0,r._)("div",null,[(0,r.Wm)(p,{class:"page3",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r._)("div",null,[(0,r.Wm)(p,{class:"page3",to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contact")])),_:1})])],2)],2)],2),(0,r.Wm)(f)],64)}var m=n(3907),p={data(){return{isScrolled:!1,isWhite:!1,isBottom:!0,dynamicStyles:{backgroundColor:"#ffff"},isClick:!1,isValidate:!1}},setup(){const e=(0,m.oR)();(0,r.wF)((()=>{e.dispatch("fetchUser")}))},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.isScrolled=window.scrollY>0,this.isBottom=!this.isBottom}}},f=n(3744);const h=(0,f.Z)(p,[["render",g]]);var v=h,b=n(3669),y=(n(560),n(6056)),w=n(316),_=n(6100),k=(0,m.MT)({state:{user:null},mutations:{SET_USER(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},CLEAR_USER(e){e.user=null,localStorage.removeItem("user")}},actions:{async login({commit:e},t){const{email:n,password:o}=t;try{await(0,w.e5)(y.I8,n,o);const t=y.I8.currentUser,r=t.uid,i=(0,_.ad)(),a=(0,_.JU)(i,"users",r),s=await(0,_.QT)(a);if(s.exists()){const n=s.data(),o=n.name,r=n.surname,i=n.gender,a=n.date,l=n.job,u=n.country;e("SET_USER",{...t,name:o,surname:r,gender:i,date:a,job:l,country:u})}else console.error("Kullanıcı belgesi bulunamadı.")}catch(r){switch(r.code){case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");break;default:alert("Something went wrong")}return}b.Z.push("/")},async register({commit:e},t){const{email:n,password:o,name:r,surname:i,gender:a,date:s,job:l,country:u}=t;try{const t=await(0,w.Xb)(y.I8,n,o),d=t.user.uid,c=(0,_.ad)(),g=(0,_.hJ)(c,"users"),m=(0,_.JU)(g,d);await(0,_.pl)(m,{name:r,surname:i,job:l,gender:a,country:u,date:s}),e("SET_USER",{uid:d,email:n,name:r,surname:i,gender:a,date:s,job:l,country:u}),b.Z.push("/")}catch(d){switch(d.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password");break;default:alert("Something went wrong")}return}},async logout({commit:e}){await(0,w.w7)(y.I8),e("CLEAR_USER"),b.Z.push("/login")},fetchUser({commit:e}){y.I8.onAuthStateChanged((async t=>{if(null===t)e("CLEAR_USER");else{const t=JSON.parse(localStorage.getItem("user"));e("SET_USER",t),b.Z.isReady()&&"/login"===b.Z.currentRoute.value.path&&b.Z.push("/")}}))}}});(0,o.ri)(v).use(k).use(b.Z).mount("#app")},3669:function(e,t,n){n.d(t,{Z:function(){return z}});var o=n(2201),r=n(6252),i=n.p+"img/playstore.1f404088.jpg",a=n.p+"img/drugger.a83595a2.jpg",s=n.p+"img/drugger2.51e7e2bb.jpg";const l=(0,r.uE)('<div class="home"><div class="header"><div class="header-text"><h3>Do you want to find a drugger?</h3><p>The primary goal of the application is to identify individuals whom we suspect may be drug addicts in our surroundings, diagnose them, and rescue them from this menace. The aim is to take preventive measures and liberate these individuals from the clutches of drug addiction.</p><a href="https://play.google.com/store/apps?hl=tr&amp;gl=US" target="_blank"><img id="playstoreicon" src="'+i+'" alt=""></a></div><div class="header-image"><img src="'+a+'" alt=""></div></div></div><div class="home-body"><div class="home-body-sec"><div class="gallery"></div></div><div class="home-body-details"><p>Drug addiction is a health issue that seriously affects individuals&#39; lives and becomes a societal problem. Drug use typically negatively impacts an individual&#39;s mental and physical health, disrupting their social relationships and work life. Addiction often begins as curiosity, stress, or peer influence but can evolve into a habit of uncontrollable use over time. Drug addicts frequently experience estrangement from their families, friends, and society due to their addictions. The treatment process is a crucial step in combating addiction and generally involves medical, psychosocial, and rehabilitation approaches. During this process, it is important for the addict to receive support, have strong social connections, and acquire the necessary skills to sustain their life. Combating drug addiction is a significant issue for both individual and societal health, and effective solutions require both preventive measures and efficient treatment methods.</p></div><div class="home-body-details"><img id="drugger2" src="'+s+'" alt=""></div><div class="home-body-details"><p>Designed as an ideal application for parents, this platform provides a comprehensive diagnostic opportunity regarding the health and development of your children. Through this application, parents can better understand the needs of their children and support their healthy growth. On the other hand, tailored for police officers, this application offers a special ability to instantly identify suspects in their surroundings. This enables police officers to enhance their security measures more effectively and contribute to community safety. Aimed at providing customizable options, this practical application strives to offer solutions tailored to the individual needs of each user.</p></div></div><footer class="footer"><div><h5>Drugger Detection © 2023-2024</h5></div></footer>',3);function u(e,t,n,o,r,i){return l}var d={data(){return{currentIndex:0}}},c=n(3744);const g=(0,c.Z)(d,[["render",u]]);var m=g,p=n(9963),f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=";const h={class:"login mainlogin"},v={class:"forms"},b=(0,r._)("div",null,[(0,r._)("h2",null,"Sign in")],-1),y={class:"divin"},w={class:"divin"},_=(0,r._)("div",null,[(0,r._)("input",{type:"submit",value:"Login",class:"login-btn"})],-1),k={class:"for-google"},A=(0,r._)("div",null,[(0,r._)("img",{src:f,alt:""})],-1),C=(0,r._)("div",null,[(0,r._)("h2",null,"Sign up")],-1),U={class:"divin"},S=(0,r._)("option",{value:null,disabled:""},"Select gender",-1),E=(0,r._)("option",{value:"male"},"Male",-1),I=(0,r._)("option",{value:"female"},"Female",-1),j=(0,r._)("option",{value:"other"},"Other",-1),R=[S,E,I,j],D={class:"divin"},J=(0,r._)("div",null,[(0,r._)("input",{type:"submit",value:"Register",class:"login-btn"})],-1),W={class:"for-google"},H=(0,r._)("div",null,[(0,r._)("img",{src:f,alt:""})],-1),N={class:"divin"},T=(0,r._)("h3",null,"Change password",-1),G={class:"divin reset"},V=(0,r._)("div",null,[(0,r._)("input",{type:"submit",value:"Reset password",class:"login-btn"})],-1);function P(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("main",h,[(0,r._)("section",v,[o.isHidden||o.isForgot?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("form",{key:0,class:"login login-for",onSubmit:t[5]||(t[5]=(0,p.iM)(((...e)=>o.login&&o.login(...e)),["prevent"]))},[b,(0,r._)("div",y,[(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":t[0]||(t[0]=e=>o.login_form.email=e)},null,512),[[p.nr,o.login_form.email]])]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>o.login_form.password=e)},null,512),[[p.nr,o.login_form.password]])])]),(0,r._)("div",w,[(0,r._)("div",null,[(0,r._)("h5",{class:"forgot-pass",onClick:t[2]||(t[2]=e=>o.isForgot=!0)},"Forgot password?")]),_,(0,r._)("div",null,[(0,r._)("h4",null,[(0,r.Uk)("Don't have an account? "),(0,r._)("a",{href:"#/login",onClick:t[3]||(t[3]=e=>o.isHidden=!o.isHidden)},"Sign up")])]),(0,r._)("div",k,[A,(0,r._)("div",null,[(0,r._)("h6",{class:"google-btn",onClick:t[4]||(t[4]=e=>o.handleGoogle2())},"Login With Google")])])])],32)),o.isHidden&&!o.isForgot?((0,r.wg)(),(0,r.iD)("form",{key:1,class:"register login-for",onSubmit:t[16]||(t[16]=(0,p.iM)(((...e)=>o.register&&o.register(...e)),["prevent"]))},[C,(0,r._)("div",U,[(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"name",placeholder:"Name","onUpdate:modelValue":t[6]||(t[6]=e=>o.register_form.name=e)},null,512),[[p.nr,o.register_form.name]])]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"surname",placeholder:"Surname","onUpdate:modelValue":t[7]||(t[7]=e=>o.register_form.surname=e)},null,512),[[p.nr,o.register_form.surname]])]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"date",placeholder:"date","onUpdate:modelValue":t[8]||(t[8]=e=>o.register_form.date=e)},null,512),[[p.nr,o.register_form.date]])]),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[9]||(t[9]=e=>o.register_form.gender=e),id:"gender",name:"gender"},R,512),[[p.bM,o.register_form.gender]]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"job",placeholder:"Job","onUpdate:modelValue":t[10]||(t[10]=e=>o.register_form.job=e)},null,512),[[p.nr,o.register_form.job]])]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"country",placeholder:"Country","onUpdate:modelValue":t[11]||(t[11]=e=>o.register_form.country=e)},null,512),[[p.nr,o.register_form.country]])]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":t[12]||(t[12]=e=>o.register_form.email=e)},null,512),[[p.nr,o.register_form.email]])]),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[13]||(t[13]=e=>o.register_form.password=e)},null,512),[[p.nr,o.register_form.password]])])]),(0,r._)("div",D,[J,(0,r._)("div",W,[H,(0,r._)("div",null,[(0,r._)("h6",{class:"google-btn",onClick:t[14]||(t[14]=e=>o.handleGoogle())},"Continue With Google")])]),(0,r._)("div",null,[(0,r._)("h4",null,[(0,r.Uk)("Already have an account? "),(0,r._)("a",{href:"#/login",onClick:t[15]||(t[15]=e=>o.isHidden=!o.isHidden)},"Sign in")])])])],32)):(0,r.kq)("",!0),o.isForgot?((0,r.wg)(),(0,r.iD)("form",{key:2,class:"forgotten",onSubmit:t[19]||(t[19]=(0,p.iM)(((...e)=>o.ForgotPassword&&o.ForgotPassword(...e)),["prevent"]))},[(0,r._)("div",N,[T,(0,r.wy)((0,r._)("input",{type:"email",placeholder:"Email address","onUpdate:modelValue":t[17]||(t[17]=e=>o.email_forgotten.email=e)},null,512),[[p.nr,o.email_forgotten.email]])]),(0,r._)("div",G,[V,(0,r._)("div",null,[(0,r._)("input",{type:"button",value:"back",class:"login-btn back",onClick:t[18]||(t[18]=e=>o.isForgot=!o.isForgot)})])])],32)):(0,r.kq)("",!0)])])}var F=n(2262),L=n(3907),O=n(316),Q=n(6056),q=n(6100),Z={setup(){const e=(0,F.iH)({}),t=(0,F.iH)({}),n=(0,L.oR)(),o=(0,F.iH)(!1),r=(0,F.iH)(!1),i=(0,F.iH)({}),a=()=>{n.dispatch("login",e.value)},s=()=>{n.dispatch("register",t.value).then((()=>{(0,O.w$)(Q.I8.currentUser).then((()=>{alert("Email verfication link sent!")}))}))},l=async()=>{try{const e=new O.hJ,t=await(0,O.rh)(Q.I8,e);if(Q.I8.currentUser){const e={name:t.user.displayName,surname:"default",job:"default",date:"1999-09-21",gender:"default",country:"default"},o=t.user.displayName,r="default",i="default",a="1999-09-21",s="default",l="default",u=(0,q.JU)((0,q.hJ)((0,q.ad)(),"users"),Q.I8.currentUser.uid);await(0,q.pl)(u,{...e}),n.commit("SET_USER",{...Q.I8.currentUser,name:o,surname:r,gender:i,date:a,job:s,country:l}),console.log("Google ile giriş yapıldı ve kullanıcı bilgileri Firestore'a eklendi.")}else console.error("Kullanıcı nesnesi tanımsız (undefined).")}catch(e){console.error("Google ile giriş yaparken bir hata oluştu:",e)}},u=async()=>{try{const e=new O.hJ;await(0,O.rh)(Q.I8,e);const t=Q.I8.currentUser.uid,o=(0,q.ad)();if(Q.I8.currentUser){const e=(0,q.JU)(o,"users",t),r=await(0,q.QT)(e);if(r.exists()){const e=r.data(),t=e.name,o=e.surname,i=e.gender,a=e.date,s=e.job,l=e.country;n.commit("SET_USER",{...Q.I8.currentUser,name:t,surname:o,gender:i,date:a,job:s,country:l})}else console.error("Kullanıcı belgesi bulunamadı.");console.log("Google ile giriş yapıldı ve kullanıcı bilgileri Firestore'a eklendi.")}else console.error("Kullanıcı nesnesi tanımsız (undefined).")}catch(e){console.error("Google ile giriş yaparken bir hata oluştu:",e)}},d=()=>{(0,O.LS)(Q.I8,i.value.email).then((()=>{alert("A Password Reset Link has been sent to your email")})).catch((e=>{console.log(e.code),console.log(e.message)}))};return{login_form:e,register_form:t,login:a,register:s,handleGoogle:l,handleGoogle2:u,isHidden:o,ForgotPassword:d,isForgot:r,email_forgotten:i}}};const x=(0,c.Z)(Z,[["render",P]]);var B=x;const M=[{path:"/",name:"home",component:m,meta:{requiresAuth:!1}},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,2060)),meta:{requiresAuth:!1}},{path:"/contact",name:"contact",component:()=>n.e(443).then(n.bind(n,9335)),meta:{requiresAuth:!1}},{path:"/projectabout",name:"projectabout",component:()=>n.e(443).then(n.bind(n,9543)),meta:{requiresAuth:!1}},{path:"/login",name:"Login",component:B},{path:"/user",name:"user",component:()=>n.e(443).then(n.bind(n,2762)),meta:{requiresAuth:!0}}],X=(0,o.p7)({history:(0,o.r5)("/druggerdetection/"),routes:M});X.beforeEach(((e,t,n)=>{"/login"===e.path&&Q.I8.currentUser?setTimeout((()=>{n("/")}),1):!e.matched.some((e=>e.meta.requiresAuth))||Q.I8.currentUser?n():setTimeout((()=>{n("/login")}),500)}));var z=X}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.aca9b2d9.js"}}(),function(){n.miniCssF=function(e){return"css/about.114c9639.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="reglog:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==o||c.getAttribute("data-webpack")==t+i){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/druggerdetection/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode&&i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var d=l(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkreglog"]=self["webpackChunkreglog"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7006)}));o=n.O(o)})();
//# sourceMappingURL=app.65244ab1.js.map