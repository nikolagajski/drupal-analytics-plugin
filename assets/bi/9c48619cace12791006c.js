"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[7756],{37756:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var n=s(86055),a=s(51751),i=s(53800),o=s(81252),l=s(96540),r=s(56347),c=s(27813),h=s(99194),p=s(44011),d=s(95093),m=s.n(d),u=s(44015),M=s(32389),C=class{constructor(){(0,o.M)(this,"getConsentsTemplate",(async(e,t,s)=>{try{const n=new h.L20,a=await n.getConsentsTemplate(e);a?(0,c.h5)((()=>{t(a)})):s({message:"Something went wrong from Server response"})}catch(e){(0,c.h5)((()=>{e.response?.data.error?s({message:e.response?.data?.error}):s({message:e?.response?.data?.error?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}})),(0,o.M)(this,"updateConsentsTemplate",(async(e,t,s)=>{try{const n=new h.L20,a=await n.updateConsentsTemplate(e);a?(0,c.h5)((()=>{t(a)})):s({message:"Something went wrong from Server response"})}catch(e){(0,c.h5)((()=>{e.response?.data.error?s({message:e.response?.data?.error}):s({message:e?.response?.data?.error?e.response?.data?._messages[0]?.message:"Something went wrong from Server response"})}))}}))}},T=class{constructor(e,t){(0,o.M)(this,"consentsStore",null),(0,o.M)(this,"status",a.s.READY),(0,o.M)(this,"globalStoreViewModel",null),(0,o.M)(this,"data",null),(0,o.M)(this,"dataFilter",{}),(0,o.M)(this,"statusConsentsTemplate",a.s.READY),(0,o.M)(this,"statusUpdateConsentsTemplate",a.s.READY),(0,o.M)(this,"consentsTemplate",null),(0,o.M)(this,"sortBy",{"sort[]":"","sort_direction[]":""}),(0,o.M)(this,"initialize",(async e=>{this.getConsentsTemplate(e)})),(0,o.M)(this,"getConsentsTemplate",(e=>{this.statusConsentsTemplate=a.s.LOADING,this.consentsStore.getConsentsTemplate(e,this.callbackOnDataConsentsTemplateListSuccessHandler,this.callbackOnErrorHandler)})),(0,o.M)(this,"updateConsentsTemplate",(e=>{this.statusUpdateConsentsTemplate=a.s.LOADING,this.consentsStore.updateConsentsTemplate(e,this.callbackOnDataUpdateConsentTemplateSuccessHandler,this.callbackOnErrorUpdateConsentHandler)})),(0,o.M)(this,"setDataFilter",(e=>{this.dataFilter=e})),(0,o.M)(this,"handleFilterDateRange",((e,t)=>{this.statusConsentsTemplate=a.s.LOADING;const s={...this.globalStoreViewModel.dateFilter,date_start:m()(e).format("YYYY-MM-DD"),date_end:m()(t).endOf("day").format("YYYY-MM-DD")};this.dateFilter={...this.dateFilter,...s},this.initialize(this.dataFilter,s)})),(0,o.M)(this,"handleFilterTableConsentsTemplateList",(async e=>{this.statusConsentsTemplate=a.s.LOADING,this.dataFilterConsentsTemplateList={...this.dataFilterConsentsTemplateList,...e};const t={...this.globalStoreViewModel.dateFilter};await this.consentsStore.getConsentsTemplate(this.dataFilterConsentsTemplateList,t,this.callbackOnDataConsentsTemplateListSuccessHandler,this.callbackOnErrorHandler)})),(0,o.M)(this,"callbackOnErrorHandler",(()=>{this.status=a.s.READY,this.statusConsentsTemplate=a.s.READY,this.consentsTemplate={}})),(0,o.M)(this,"callbackOnErrorUpdateConsentHandler",(()=>{this.status=a.s.READY,this.statusUpdateConsentsTemplate=a.s.READY})),(0,o.M)(this,"callbackOnDataConsentsTemplateListSuccessHandler",(e=>{e?(this.statusConsentsTemplate=a.s.READY,this.consentsTemplate=e):(this.statusConsentsTemplate=a.s.ERROR,this.consentsTemplate={})})),(0,o.M)(this,"callbackOnDataUpdateConsentTemplateSuccessHandler",(e=>{e?(this.statusUpdateConsentsTemplate=a.s.READY,this.consentsTemplate=e,(0,p.me)("Update Successful")):(this.statusUpdateConsentsTemplate=a.s.ERROR,this.consentsTemplate={})})),(0,c.l_)(this),this.consentsStore=e,this.globalStoreViewModel=t}},g=class{constructor(e,t){(0,o.M)(this,"consentsList",null),(0,o.M)(this,"getConsentsTemplateListViewModel",(()=>this.consentsList)),e&&(this.consentsList=new T(e,t))}},w=(0,l.lazy)((()=>s.e(1444).then(s.bind(s,31444)))),D=({link:e,...t})=>l.createElement(w,{...t}),S=(0,u.PA)(class extends l.Component{constructor(e){super(e),(0,o.M)(this,"consentsStore",null),(0,o.M)(this,"behaviorViewModel",null);const{viewModel:t}=e;this.viewModel=t||null,this.biListViewModel=this.viewModel?this.viewModel.getBiListViewModel():null,this.consentsStore=new C({}),this.behaviorViewModel=new g(this.consentsStore,this.biListViewModel)}render(){const{integration:e=!1}=this.props,{integrationLink:t,activeDomain:s}=this.biListViewModel;return l.createElement(n.C,{viewModel:this.behaviorViewModel},l.createElement(b,{integration:e,integrationLink:t,activeDomain:s,ref:e=>this.componentRef=e}))}}),b=(0,u.PA)(class extends l.Component{constructor(e){super(e)}render(){return l.createElement("div",{className:"aesirxui"},this.props.integration?l.createElement(D,{link:this.props.integrationLink,activeDomain:this.props.activeDomain,...this.props}):l.createElement(l.Fragment,null,l.createElement(r.qh,{exact:!0,path:["/consents/template","/bi/consents-templates"]},l.createElement(w,null))))}}),E=(0,M.CI)()((0,r.y)((0,i.cm)(S)))},86055:(e,t,s)=>{s.d(t,{C:()=>i,v:()=>o});var n=s(96540),a=n.createContext(),i=({children:e,viewModel:t})=>n.createElement(a.Provider,{value:t},e),o=()=>n.useContext(a)}}]);