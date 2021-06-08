import{p as t,a as e,r as a,o as s,c as n,w as o,b as l,u as c,t as i,d as r,e as d,f as p,g as u,F as v,h as m,i as _,j as f,k as y,l as b,m as h,n as x,q as g,s as k,_ as C,J as I,v as S,z as F,x as w,y as T,A as $}from"./vendor.24ce53b4.js";const z={},N=o();t("data-v-1aa8501c");const L=l("낸내");e();const E=N(((t,e)=>{const o=a("router-link");return s(),n(o,{class:"title typo-headline",to:"/"},{default:N((()=>[L])),_:1})}));z.render=E,z.__scopeId="data-v-1aa8501c";const q={expose:[],setup(t){const e=c(),{isLight:a}=i(e.state),o=()=>{const t=document.querySelector("html");t.classList.toggle("theme-light"),t.classList.toggle("theme-dark"),e.commit("toggleTheme")};return(t,e)=>(s(),n("span",{class:["icon material-icons-outlined",{turn:d(a)}],onClick:o},r(d(a)?"brightness_high":"brightness_low"),3))},__scopeId:"data-v-986989cc"};const O={expose:[],setup:t=>(t,e)=>(s(),n("header",null,[p(z),p(q)])),__scopeId:"data-v-ef182192"};const j=o();t("data-v-9186642c");const M={class:"footer__leftside"},A=p("p",{class:"footer__leftside--contents typo-text"},[l(" 낸내는 한글 폰트를 웹에서 바로 사용할 수 있도록 소개하며, 모든 폰트의 저작권은 각 폰트의 제작자/제작사에 있습니다."),p("br"),l("폰트 사용 시 라이센스 문의는 제작자/제작사에 문의해주세요. ")],-1),Z={class:"footer__rightside"},W=l("모든 폰트"),D=l("소개"),U=p("a",{class:"typo-link",target:"_blank",href:"https://github.com/naen-nae/naen-nae/"}," GitHub ",-1),X=p("a",{class:"typo-link",href:"mailto:to@shj.rip"},"to@shj.rip",-1);e();const H={expose:[],setup:t=>(t,e)=>{const o=a("router-link");return s(),n("footer",null,[p("div",M,[p(z),A]),p("div",Z,[p(o,{class:"typo-link",to:"/"},{default:j((()=>[W])),_:1}),p(o,{class:"typo-link",to:"/about"},{default:j((()=>[D])),_:1}),U,X])])},__scopeId:"data-v-9186642c"};const B={},P=o();t("data-v-5e88a8e5");const R={class:"snackbar-item"},G={class:"snackbar-item__content typo-subtitle"};e();const J=P(((t,e)=>(s(),n("div",R,[p("p",G,[u(t.$slots,"default",{},void 0,!0)]),p("span",{class:"snackbar-item__icon icon material-icons-outlined",onClick:e[1]||(e[1]=e=>t.$emit("close",e.target.parentElement.dataset.key))}," close ")]))));B.render=J,B.__scopeId="data-v-5e88a8e5";const K=o();t("data-v-58d7b718");const Y={class:"snackbar"};e();const Q={expose:[],setup(t){const e=c(),{snackbarMsgs:a}=i(e.state),o=t=>e.commit("removeSnackbar",t);return(t,e)=>(s(),n("div",Y,[(s(!0),n(v,null,m(d(a),(({msg:t,key:e})=>(s(),n("div",{class:"snackbar__item",key:e},[p(B,{"data-key":e,onClose:o},{default:K((()=>[l(r(t),1)])),_:2},1032,["data-key"])])))),128))]))},__scopeId:"data-v-58d7b718"};t("data-v-06a08871");const V=p("span",{class:"top-button__icon icon material-icons-outlined"},"arrow_upward",-1);e();const tt={expose:[],setup(t){const e=_(!0),a=()=>window.scrollTo(0,0);return window.addEventListener("scroll",(()=>{window.scrollY>0?e.value=!1:e.value=!0}),{passive:!0}),(t,o)=>(s(),n("div",{class:["top-button",{hide:e.value}],onClick:a},[V],2))},__scopeId:"data-v-06a08871"};t("data-v-5f4813ab");const et={class:"app"};e();const at={expose:[],setup:t=>(t,e)=>{const o=a("router-view");return s(),n(v,null,[p("div",et,[p(O),p("main",null,[p(o)]),p(tt,{class:"top-button"}),p(H)]),p(Q)],64)},__scopeId:"data-v-5f4813ab"};var st={DEFAILT_FONT_SIZE:"22",MAX_FONT_SIZE:80,MIN_FONT_SIZE:10},nt=f({state:()=>({isLight:void 0===window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").matches,fontSize:st.DEFAILT_FONT_SIZE,textContent:"",snackbarMsgs:[],fonts:[]}),mutations:{toggleTheme(t){t.isLight=!t.isLight},setFontSize(t,e){st.MIN_FONT_SIZE<=e&&e<=st.MAX_FONT_SIZE&&(t.fontSize=e)},setTextContent(t,e){t.textContent=e},createSnackbar(t,e){t.snackbarMsgs.push({msg:e,key:Math.random().toString()})},removeSnackbar(t,e){t.snackbarMsgs.splice(t.snackbarMsgs.findIndex((({key:t})=>t===e)),1)},addFonts(t,e){t.fonts.push(...e)}},actions:{resetFontSize(t){t.commit("setFontSize",st.DEFAILT_FONT_SIZE)}},plugins:[y({reducer:t=>b(t,["isLight","fontSize","textContent"])})]});const ot={},lt=o();t("data-v-40258298");const ct={class:"about"},it=h('<section class="about__title" data-v-40258298><p class="typo-headline" data-v-40258298>낸내</p><p class="about__title--contents typo-subtitle" data-v-40258298> 낸내는 상업적으로 이용할 수 있는 재배포 가능한 무료 한글 폰트를 모아 많은 사람들에게, 그리고 광고 없이 소개하기 위해 시작했습니다. <br data-v-40258298><br data-v-40258298> 오픈 소스로 관리되며, 광고 및 후원은 받지 않고 운영됩니다. <br data-v-40258298><br data-v-40258298> 낸내에서 소개되는 모든 폰트의 지적재산권은 각 폰트 제작자/제작사에 있으며, 낸내는 오로지 한글 폰트를 소개하고 이를 웹에서 바로 사용할 수 있도록 제공합니다. <br data-v-40258298><br data-v-40258298> 낸내는 폰트 제작자/제작사와 관련이 없는 단체입니다. 따라서 낸내는 폰트 소프트웨어 사용과 취급으로 발생하는 일에 대해 책임 및 의무를 가지지 않습니다. </p></section><section class="about__contact" data-v-40258298><p class="typo-title" data-v-40258298>문의</p><a class="typo-link" href="mailto:to@shj.rip" data-v-40258298>to@shj.rip</a></section><section class="about__github" data-v-40258298><p class="typo-title" data-v-40258298>깃허브</p><a class="typo-link" target="_blank" href="https://github.com/naen-nae/naen-nae" data-v-40258298> https://github.com/naen-nae/naen-nae </a></section>',3);e();const rt=lt(((t,e)=>(s(),n("article",ct,[it]))));ot.render=rt,ot.__scopeId="data-v-40258298";t("data-v-f23e8018");const dt={class:"input-field"};e();const pt={expose:[],props:{placeholder:{type:String,default:"무엇이든 입력해보세요"},mask:{type:String,default:".*"},maxLength:{type:String,default:""},value:{type:String,default:""}},setup(t){const e=t,{mask:a}=e,{value:o}=i(e),l=t=>{const{key:e}=t;new RegExp(a).test(e)||t.preventDefault()};return(e,a)=>(s(),n("div",dt,[p("input",{class:"input-field__input typo-text",placeholder:t.placeholder,onInput:a[1]||(a[1]=t=>e.$emit("update:value",t.target.value)),onKeypress:l,maxlength:t.maxLength,value:d(o)},null,40,["placeholder","maxlength","value"])]))},__scopeId:"data-v-f23e8018"};t("data-v-6f51e4dc");const ut={class:"search-box"},vt=p("span",{class:"search-box__icon icon material-icons-outlined"},"search",-1);e();const mt={expose:[],setup:t=>(t,e)=>(s(),n("div",ut,[vt,p(pt,{placeholder:"이름으로 폰트 검색하기"})])),__scopeId:"data-v-6f51e4dc"};const _t={expose:[],props:{min:{type:Number,default:1},max:{type:Number,default:100},value:{type:String,required:!0}},setup(t){const e=t,{min:a,max:o}=e,{value:l}=i(e),c=t=>{const e=(t-a)/(o-a)*100;return`linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${e}%, var(--slider-background-color) ${e}%, var(--slider-background-color) 100%)`},r=x((()=>({background:c(parseInt(l.value))}))),p=({target:t})=>t.style.setProperty("background",c(parseInt(t.value)));return(t,e)=>(s(),n("input",{class:"slide-bar",type:"range",min:d(a),max:d(o),value:d(l),style:d(r),onInput:p,onChange:e[1]||(e[1]=e=>t.$emit("update:value",e.target.value))},null,44,["min","max","value"]))},__scopeId:"data-v-89965a9a"};t("data-v-dccd83cc");const ft={class:"font-size-modifier"},yt={class:"font-size-modifier__text typo-text"};e();const bt={expose:[],setup(t){const e=c(),{fontSize:a}=i(e.state),o=_(e.state.fontSize);return g(o,(()=>e.commit("setFontSize",o.value))),g(a,(()=>o.value=a.value)),(t,e)=>(s(),n("div",ft,[p("p",yt,r(o.value)+" px",1),p(_t,{class:"font-size-modifier__slide-bar",min:d(st).MIN_FONT_SIZE,max:d(st).MAX_FONT_SIZE,value:o.value,"onUpdate:value":e[1]||(e[1]=t=>o.value=t)},null,8,["min","max","value"])]))},__scopeId:"data-v-dccd83cc"};t("data-v-076fdce6");const ht={class:"reset-button"};e();const xt={expose:[],setup(t){const e=c(),{fontSize:a}=i(e.state),o=x((()=>a.value===st.DEFAILT_FONT_SIZE)),l=()=>e.dispatch("resetFontSize");return(t,e)=>(s(),n("div",ht,[p("span",{class:["reset-button__icon icon material-icons-outlined",{disabled:d(o)}],onClick:l},"replay",2)]))},__scopeId:"data-v-076fdce6"};t("data-v-4e4bae42");const gt={class:"modifier-bar"};e();const kt={expose:[],setup(t){const e=c(),a=_(e.state.textContent);return g(a,(()=>e.commit("setTextContent",a.value))),(t,e)=>(s(),n("div",gt,[p(mt,{class:"modifier-bar__search",onInput:e[1]||(e[1]=e=>t.$emit("update:search-value",e.target.value))}),p(pt,{class:"modifier-bar__input",value:a.value,"onUpdate:value":e[2]||(e[2]=t=>a.value=t)},null,8,["value"]),p(bt,{class:"modifier-bar__font-size"}),p(xt,{class:"modifier-bar__reset"})]))},__scopeId:"data-v-4e4bae42"};t("data-v-052b7f35");const Ct={class:"card-box-header"},It={class:"card-box-header__subtitle"},St={class:"typo-subtitle"};e();const Ft={expose:[],props:{fontFamily:{type:String,required:!0},author:{type:String,required:!0},stylesLen:{type:Number,required:!0}},setup:t=>(e,a)=>(s(),n("div",Ct,[p("p",{class:"card-box-header__title typo-title",textContent:r(t.fontFamily)},null,8,["textContent"]),p("div",It,[p("p",{class:"card-box-header__subtitle--author typo-subtitle",textContent:r(t.author)},null,8,["textContent"]),p("p",St,r(t.stylesLen)+" Styles",1)])])),__scopeId:"data-v-052b7f35"};t("data-v-4fe48d31");const wt={class:"card-box"},Tt={class:"card-box__header"},$t=p("hr",null,null,-1),zt={class:"card-box__contents"};e();const Nt={expose:[],props:{font:{type:Object,required:!0}},setup(t){const e=c(),{textContent:a,fontSize:o}=i(e.state);return(e,l)=>(s(),n("div",wt,[p("div",Tt,[p(Ft,{fontFamily:t.font.fontFamily,author:t.font.author,stylesLen:t.font.files.length},null,8,["fontFamily","author","stylesLen"]),$t,p("div",zt,[p("p",{style:{fontSize:`${d(o)}px`,fontFamily:t.font.fontFamily},textContent:r(""!==d(a)?d(a):t.font.author)},null,12,["textContent"])])])]))},__scopeId:"data-v-4fe48d31"};t("data-v-30383e75");const Lt={class:"home"},Et={class:"home__cards"};e();const qt={expose:[],setup(t){const e=c(),{fonts:a}=i(e.state),o=k(),l=_(""),r=x((()=>a.value.filter((({fontFamily:t})=>RegExp(l.value.toLowerCase()).test(t.toLowerCase())))));return(t,e)=>(s(),n("div",Lt,[p(kt,{"search-value":l.value,"onUpdate:search-value":e[1]||(e[1]=t=>l.value=t)},null,8,["search-value"]),p("section",Et,[(s(!0),n(v,null,m(d(r),((t,e)=>(s(),n(Nt,{key:`${t.fontFamily}-${e}`,font:t,onClick:e=>d(o).push({name:"detail",params:{fontName:t.fontFamily}})},null,8,["font","onClick"])))),128))])]))},__scopeId:"data-v-30383e75"};const Ot={},jt=o();t("data-v-034e7986");const Mt={class:"button-box",ref:"buttonBox"},At={class:"icon material-icons-outlined"},Zt={class:"button-box__text typo-text"};e();const Wt=jt(((t,e)=>(s(),n("div",Mt,[p("span",At,[u(t.$slots,"icon",{},void 0,!0)]),p("span",Zt,[u(t.$slots,"default",{},void 0,!0)])],512))));Ot.render=Wt,Ot.__scopeId="data-v-034e7986";const Dt=o();t("data-v-0073313c");const Ut={class:"detail-title-panel"},Xt={class:"detail-title-panel__left-side"},Ht={class:"detail-title-panel__left-side--info"},Bt={class:"detail-title-panel__right-side"},Pt={key:0,class:"typo-subtitle"};e();const Rt={expose:[],props:{font:{type:Object,required:!0}},setup(t){const{font:{files:e,fontFamily:a,author:o}}=t,c=k(),i=_(!1),u=async()=>{i.value=!0,await(async(t,{fileNames:e,zipName:a}={})=>{const s=await Promise.all(C.map(t,(async t=>await fetch(t)))),n=new I;for(const[o,l]of C.zip(s,null!=e?e:t))n.file(l,await o.blob());return S.exports.saveAs(await n.generateAsync({type:"blob"}),null!=a?a:"file.zip")})(e,{fileNames:e.map((t=>t.match(/.*\/(.*)$/)[1])),zipName:`${a}.zip`}),i.value=!1};return(t,e)=>(s(),n("section",Ut,[p("div",Xt,[p("span",{class:"icon material-icons-outlined",onClick:e[1]||(e[1]=t=>d(c).push("/"))}," chevron_left "),p("div",Ht,[p("p",{class:"typo-title",textContent:r(d(a))},null,8,["textContent"]),p("p",{class:"typo-subtitle",textContent:r(d(o))},null,8,["textContent"])])]),p("div",Bt,[p(Ot,null,{icon:Dt((()=>[l(r(i.value?"download_done":"file_download"),1)])),default:Dt((()=>[i.value?(s(),n("span",Pt,"파일 압축중...")):(s(),n("span",{key:1,class:"typo-subtitle",onClick:u},"폰트 다운로드"))])),_:1})])]))},__scopeId:"data-v-0073313c"};t("data-v-51ceef05");const Gt={class:"style-bar"};e();const Jt={expose:[],setup(t){const e=c(),a=_(e.state.textContent);return g(a,(()=>e.commit("setTextContent",a.value))),(t,e)=>(s(),n("div",Gt,[p(pt,{class:"style-bar__input",value:a.value,"onUpdate:value":e[1]||(e[1]=t=>a.value=t)},null,8,["value"]),p(bt,{class:"style-bar__font-size"}),p(xt,{class:"style-bar__reset"})]))},__scopeId:"data-v-51ceef05"};t("data-v-924a1d66");const Kt={class:"font-box"},Yt={class:"font-box__contents"};e();const Qt={expose:[],props:{fontWeight:{type:Number,required:!0},fontFamily:{type:String,required:!0}},setup(t){const e=c(),{textContent:a,fontSize:o}=i(e.state);return(e,l)=>(s(),n("div",Kt,[p("p",{class:"font-box__style typo-text",textContent:r(t.fontWeight)},null,8,["textContent"]),p("div",Yt,[p("p",{style:{fontSize:`${d(o)}px`,fontFamily:t.fontFamily,fontWeight:t.fontWeight},textContent:r(""!==d(a)?d(a):t.fontWeight)},null,12,["textContent"])])]))},__scopeId:"data-v-924a1d66"};t("data-v-11c47cc4");const Vt={class:"detail-style"},te=p("p",{class:"typo-title"},"스타일",-1);e();const ee={expose:[],props:{font:{type:Object,required:!0}},setup(t){const{font:{fontFamily:e,fontWeights:a}}=t;return(t,o)=>(s(),n("div",Vt,[te,p(Jt),(s(!0),n(v,null,m(d(a),((t,a)=>(s(),n(Qt,{key:`${t}-${a}`,"font-weight":t,"font-family":d(e)},null,8,["font-weight","font-family"])))),128))]))},__scopeId:"data-v-11c47cc4"};t("data-v-514af790");const ae={class:"code-box"},se={class:"code-box__code"},ne={key:0,class:"icon material-icons-outlined"};e();const oe={expose:[],props:{name:{type:String,required:!0},content:{type:String,required:!0}},setup(t){const{content:e}=t,a=_(!1),o=async()=>{a.value=!0,await(async t=>"clipboard"in navigator?await navigator.clipboard.writeText(t):nt.commit("createSnackbar","복사 기능을 지원하지 않는 브라우저에요. 최신 크롬 브라우저를 사용해주세요."))(e),setTimeout((()=>a.value=!1),500)};return(l,c)=>(s(),n("div",ae,[p("p",{class:"code-box__name typo-text",textContent:r(t.name)},null,8,["textContent"]),p("div",se,[p("p",{class:"typo-text code-box__code--code",textContent:r(e)},null,8,["textContent"]),a.value?(s(),n("span",ne," done ")):(s(),n("span",{key:1,class:"icon material-icons-outlined",onClick:o}," content_copy "))])]))},__scopeId:"data-v-514af790"};t("data-v-11ba31e8");const le={class:"detail-code"},ce=p("p",{class:"typo-title"},"웹폰트",-1);e();const ie={expose:[],props:{fontFamily:{type:String,required:!0}},setup(t){const{fontFamily:e}=t,a=[["<link>",`<link href="https://cdn.jsdelivr.net/gh/naen-nae/naen-nae/public/css/${e}.css" rel="stylesheet">`],["@import",`@import url('https://cdn.jsdelivr.net/gh/naen-nae/naen-nae/public/css/${e}.css');`],["CSS font-family",`font-family: '${e}', sans-serif;`]];return(t,e)=>(s(),n("div",le,[ce,(s(),n(v,null,m(a,(([t,e],a)=>p(oe,{key:a,name:t,content:e},null,8,["name","content"]))),64))]))},__scopeId:"data-v-11ba31e8"};const re={expose:[],props:{summary:{type:Object,required:!0}},setup(t){const{summary:e}=t,a=["카테고리","사용 범위","허용 여부"],o=F(["인쇄","웹사이트","영상","포장지","임베딩","BI/CI","OFL"],["브로슈어, 포스터, 책, 잡지 및 출판용 인쇄물 등","웹페이지, 광고 배너, 메일, E-브로슈어 등","영상물 자막, 영화 오프닝/엔딩 크레딧, UCC 등","판매용 상품의 패키지","웹사이트 및 프로그램 서버 내 폰트 탑재, E-book 제작","회사명, 브랜드명, 상품명, 로고, 마크, 슬로건, 캐치프레이즈","폰트 파일의 수정/ 복제/ 배포 가능. 단, 폰트 파일의 유료 판매는 금지"],Object.values(e));return(t,e)=>(s(),n("table",null,[p("thead",null,[p("tr",null,[(s(),n(v,null,m(a,((t,e)=>p("th",{key:`${t}-${e}`,class:"typo-text",textContent:r(t)},null,8,["textContent"]))),64))])]),p("tbody",null,[(s(!0),n(v,null,m(d(o),(([t,e,a],o)=>(s(),n("tr",{key:`${t}-${o}`},[p("td",{class:"typo-text",textContent:r(t)},null,8,["textContent"]),p("td",{class:"typo-text",textContent:r(e)},null,8,["textContent"]),p("td",{class:"typo-text",textContent:r(a?"O":"X")},null,8,["textContent"])])))),128))])]))},__scopeId:"data-v-4d72890e"};t("data-v-6e91d868");const de=l("\n  "),pe={class:"detail-license"},ue=l("\n    "),ve=p("p",{class:"typo-title"},"라이선스",-1),me=l("\n\n    "),_e={class:"detail-license__full"},fe=l("\n      "),ye=p("p",{class:"typo-subtitle"},"라이선스 전문",-1),be=l("\n      "),he=l("\n    "),xe=l("\n\n    "),ge={class:"detail-license__summary"},ke=l("\n      "),Ce=p("p",{class:"typo-subtitle"},"라이선스 요약",-1),Ie=l("\n      "),Se=l("\n      "),Fe=p("p",{class:"typo-text"},[l("\n        * 위 내용은 참고용으로, 정확한 사용 범위는 폰트 제작자/제작사에 확인\n        바랍니다.\n        "),p("br"),l("\n        사용 범위는 폰트 제작사의 세부 규정에 따라 달라질 수 있으며, 낸내는 폰트\n        소프트웨어 사용과 취급으로 발생하는 일에 대해 책임 및 의무를 가지지\n        않습니다.\n      ")],-1),we=l("\n    "),Te=l("\n  "),$e=l("\n");e();const ze={expose:[],props:{license:{type:String,required:!0},licenseSummary:{type:Object,required:!0}},setup(t){const{license:e,licenseSummary:a}=t,o=e.replace(/(https?:.*)(\s|$)/,'<a style="color: var(--text-color); text-decoration: underline;" href="$1" target="_blank">$1</a>');return(t,e)=>(s(),n(v,null,[de,p("div",pe,[ue,ve,me,p("div",_e,[fe,ye,be,p("pre",{class:"typo-text",innerHTML:d(o)},null,8,["innerHTML"]),he]),xe,p("div",ge,[ke,Ce,Ie,p(re,{summary:a}),Se,Fe,we]),Te]),$e],64))},__scopeId:"data-v-6e91d868"};t("data-v-909879d4");const Ne={class:"detail"},Le=p("hr",null,null,-1),Ee=p("hr",null,null,-1),qe=p("hr",null,null,-1);e();const Oe={expose:[],props:{fontName:{type:String}},setup(t){const{fontName:e}=t,a=c(),{fonts:o}=i(a.state),l=o.value.find((({fontFamily:t})=>t===e));return(t,e)=>(s(),n("div",Ne,[p(Rt,{font:d(l)},null,8,["font"]),Le,p(ee,{font:d(l)},null,8,["font"]),Ee,p(ie,{"font-family":d(l).fontFamily},null,8,["font-family"]),qe,p(ze,{"license-summary":d(l).licenseSummary,license:d(l).license},null,8,["license-summary","license"])]))},__scopeId:"data-v-909879d4"},je=w({history:T(),routes:[{path:"/about",component:ot},{name:"detail",path:"/detail/:fontName",props:!0,component:Oe},{path:"/",component:qt},{path:"/:pathMatch(.*)*",component:qt}]});je.beforeEach((({name:t,params:{fontName:e}})=>{if(window.scrollTo(0,0),"detail"!==t)return!0;return void 0!==nt.state.fonts.find((({fontFamily:t})=>t===e))||je.push("/")}));"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js"),(async()=>{document.querySelector("html").classList.add(nt.state.isLight?"theme-light":"theme-dark"),nt.commit("addFonts",await(async(t,{parseType:e="text"}={})=>{try{const a=await fetch(t);if(a.ok)return await a[e]();throw new Error}catch{nt.commit("createSnackbar","인터넷 연결을 확인해주세요")}})("/fonts.json",{parseType:"json"})),$(at).use(nt).use(je).mount("#app")})();
