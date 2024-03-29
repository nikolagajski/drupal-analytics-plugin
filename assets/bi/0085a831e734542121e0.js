"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[778],{20778:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var s,a=i(52921),l=i(17307),o=i(71547),n=i(90298),r=(i(84361),i(20734),i(16505),i(28949)),d=i(15218),c=i(20513),m=i(70069),h=i(23541),p=i(67294),w=i(34051),g=i(31555),u=i(91072),E=i(38585),v=i(73022),_=i(73727),f=i(16550),x=i(30381),b=i.n(x),y=i(17905),M=i(88325),N=(i(7034),i(26982)),V=(0,E.Pi)(class extends p.Component{constructor(e){super(e),(0,h.o)(this,"handleSortCountries",(async e=>{this.listViewModel.getCountries({"filter[domain]":this.props.domain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.listViewModel?.sortByCountries["sort_direction[]"]?"asc":"desc"})})),(0,h.o)(this,"handleSortCities",(async e=>{this.listViewModel.getCities({"filter[domain]":this.props.domain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.listViewModel?.sortByCities["sort_direction[]"]?"asc":"desc"})})),(0,h.o)(this,"handleSortBrowsers",(async e=>{this.listViewModel.getBrowsers({"filter[domain]":this.props.domain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.listViewModel?.sortByBrowsers["sort_direction[]"]?"asc":"desc"})})),(0,h.o)(this,"handleSortDevices",(async e=>{this.listViewModel.getDevices({"filter[domain]":this.props.domain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.listViewModel?.sortByDevices["sort_direction[]"]?"asc":"desc"})})),(0,h.o)(this,"handleSortLanguages",(async e=>{this.listViewModel.getLanguages({"filter[domain]":this.props.domain},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.listViewModel?.sortByLanguages["sort_direction[]"]?"asc":"desc"})}));const{listViewModel:t}=e;this.listViewModel=t||null,this.state={loading:!1}}render(){const{t:e}=this.props,{statusTopTable:t}=this.listViewModel;return p.createElement("div",{className:"position-relative h-100"},p.createElement(y.Z.Container,{id:"left-tabs-example",defaultActiveKey:"country"},p.createElement(w.Z,{className:"gx-24"},p.createElement(g.Z,{sm:3,id:"customCol"},p.createElement("div",{className:"bg-white rounded-3 pe-24 shadow-sm h-100 position-relative"},p.createElement(M.Z,{variant:"pills",className:"flex-column"},p.createElement(M.Z.Item,null,p.createElement(M.Z.Link,{eventKey:"country",className:"ps-32px"},e("txt_countries"))),p.createElement(M.Z.Item,null,p.createElement(M.Z.Link,{eventKey:"city",className:"ps-32px"},e("txt_cities"))),p.createElement(M.Z.Item,null,p.createElement(M.Z.Link,{eventKey:"browser",className:"ps-32px"},e("txt_browser"))),p.createElement(M.Z.Item,null,p.createElement(M.Z.Link,{eventKey:"device",className:"ps-32px"},e("txt_devices"))),p.createElement(M.Z.Item,null,p.createElement(M.Z.Link,{eventKey:"language",className:"ps-32px"},e("txt_language")))))),p.createElement(g.Z,{sm:9},p.createElement("div",{className:"bg-white rounded-3 shadow-sm h-100 position-relative"},p.createElement(y.Z.Content,null,p.createElement(y.Z.Pane,{eventKey:"country"},p.createElement(o.t,{data:this.listViewModel?.countriesTableData?.list,pagination:this.listViewModel?.countriesTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterCountries({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterCountries({page:1,page_size:e})},status:t,sortAPI:!0,handleSort:this.handleSortCountries,sortBy:this.listViewModel?.sortByCountries,...this.props})),p.createElement(y.Z.Pane,{eventKey:"city"},p.createElement(o.t,{data:this.listViewModel?.citiesTableData?.list,pagination:this.listViewModel?.citiesTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterCities({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterCities({page:1,page_size:e})},status:t,sortAPI:!0,handleSort:this.handleSortCities,sortBy:this.listViewModel?.sortByCities,...this.props})),p.createElement(y.Z.Pane,{eventKey:"browser"},p.createElement(o.t,{data:this.listViewModel?.browsersTableData?.list,pagination:this.listViewModel?.browsersTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterBrowsers({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterBrowsers({page:1,page_size:e})},status:t,sortAPI:!0,handleSort:this.handleSortBrowsers,sortBy:this.listViewModel?.sortByBrowsers,...this.props})),p.createElement(y.Z.Pane,{eventKey:"device"},p.createElement(o.t,{data:this.listViewModel?.devicesTableData?.list,pagination:this.listViewModel?.devicesTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterDevices({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterDevices({page:1,page_size:e})},status:t,sortAPI:!0,handleSort:this.handleSortDevices,sortBy:this.listViewModel?.sortByDevices,...this.props})),p.createElement(y.Z.Pane,{eventKey:"language"},p.createElement(o.t,{data:this.listViewModel?.languagesTableData?.list,pagination:this.listViewModel?.languagesTableData?.pagination,selectPage:async e=>{await this.listViewModel.handleFilterLanguages({page:e})},selectPageSize:async e=>{await this.listViewModel.handleFilterLanguages({page:1,page_size:e})},status:t,sortAPI:!0,handleSort:this.handleSortLanguages,sortBy:this.listViewModel?.sortByLanguages,...this.props}))))))))}}),S=(0,u.Zh)()((0,f.EN)(V)),P=(0,E.Pi)((s=class extends p.Component{constructor(e){super(e),(0,h.o)(this,"componentDidMount",(()=>{this.visitorsListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain})})),(0,h.o)(this,"componentDidUpdate",(e=>{this.props.location===e.location&&this.props.activeDomain===e.activeDomain||this.visitorsListViewModel.initialize({"filter[domain]":this.context.biListViewModel.activeDomain})})),(0,h.o)(this,"handleDateRangeChange",((e,t)=>{this.visitorsListViewModel.handleFilterDateRange(e??t,t??e)})),(0,h.o)(this,"handleSortFlowList",(async e=>{this.visitorsListViewModel.getFlowList({"filter[domain]":this.props.domain,"with[]":"events"},{},{"sort[]":e?.id,"sort_direction[]":"desc"===this.visitorsListViewModel?.sortBy["sort_direction[]"]?"asc":"desc"})})),(0,h.o)(this,"handleChangeLink",((e,t)=>{e.preventDefault(),t&&this.context.biListViewModel.setIntegrationLink(t)}));const{viewModel:t}=e;this.viewModel=t||null,this.visitorsListViewModel=this.viewModel?this.viewModel.getVisitorsListViewModel():null}render(){const{t:e}=this.props;return p.createElement("div",{className:"py-4 px-4"},p.createElement("div",{className:"d-flex align-items-center justify-content-between mb-24"},p.createElement("div",null,p.createElement("h2",{className:"fw-bold mb-8px"},e("txt_visitors")),p.createElement("p",{className:"mb-0"},e("txt_analytic_details"))),p.createElement("div",{className:"position-relative"},p.createElement(d.r,{onChange:this.handleDateRangeChange}))),p.createElement(w.Z,{className:"mb-24"},p.createElement(g.Z,{lg:"3"},p.createElement("div",{className:"bg-white shadow-sm rounded-3 h-100 d-flex flex-column"},p.createElement("div",{className:"p-32px d-flex flex-column flex-grow-1"},p.createElement("div",{className:"bg-white pb-20 rounded-3  fw-medium d-flex flex-column flex-grow-1 align-items-start justify-content-center"},p.createElement("h5",{className:"fs-6 mb-14px text-gray-900 fw-medium",style:{fontSize:"16px"}},e("txt_visitors")),p.createElement("div",{className:"fs-24 d-flex align-items-center",style:{fontSize:"24px"}},v.WtE.numberWithCommas(this.visitorsListViewModel.metricsData?.[v.lF8.TOTAL_NUMBER_OF_VISITORS]))),p.createElement("div",{className:"bg-white pb-20 rounded-3  fw-medium d-flex flex-column flex-grow-1 align-items-start justify-content-center"},p.createElement("h5",{className:"fs-6 mb-14px text-gray-900 fw-medium",style:{fontSize:"16px"}},e("txt_unique_visitors")),p.createElement("div",{className:"fs-24 d-flex align-items-center",style:{fontSize:"24px"}},v.WtE.numberWithCommas(this.visitorsListViewModel.metricsData?.[v.lF8.NUMBER_OF_VISITORS]))),p.createElement("div",{className:"bg-white pb-20 rounded-3  fw-medium d-flex flex-column flex-grow-1 align-items-start justify-content-center"},p.createElement("h5",{className:"fs-6 mb-14px text-gray-900 fw-medium",style:{fontSize:"16px"}},e("txt_average_visit_duration")),p.createElement("div",{className:"fs-24 d-flex align-items-center",style:{fontSize:"24px"}},this.visitorsListViewModel?.metricsData?.[v.lF8.AVERAGE_SESSION_DURATION]?b().utc(1e3*this.visitorsListViewModel?.metricsData?.[v.lF8.AVERAGE_SESSION_DURATION]).format("m [min] s [s]"):"0 min 0s")),p.createElement("div",{className:"bg-white pb-20 rounded-3  fw-medium d-flex flex-column flex-grow-1 align-items-start justify-content-center"},p.createElement("h5",{className:"fs-6 mb-14px text-gray-900 fw-medium",style:{fontSize:"16px"}},e("txt_page_views")),p.createElement("div",{className:"fs-24 d-flex align-items-center",style:{fontSize:"24px"}},v.WtE.numberWithCommas(this.visitorsListViewModel.metricsData?.[v.lF8.NUMBER_OF_PAGE_VIEWS]))),p.createElement("div",{className:"bg-white rounded-3 fw-medium d-flex flex-column flex-grow-1 align-items-start justify-content-center"},p.createElement("h5",{className:"fs-6 mb-14px text-gray-900 fw-medium",style:{fontSize:"16px"}},e("txt_bounce_rate")),p.createElement("div",{className:"fs-24 d-flex align-items-center",style:{fontSize:"24px"}},v.WtE.numberWithCommas(this.visitorsListViewModel.metricsData?.[v.lF8.BOUNCE_RATE])+"%"))))),p.createElement(g.Z,{lg:9},p.createElement(n.m,{bars:["unique_visits","visits"],barColors:["#0066FF","#96C0FF"],isSelection:!1,listViewModel:this.visitorsListViewModel,status:this.visitorsListViewModel?.statusOverview,data:this.visitorsListViewModel?.visitsData?.toAreaChart(),filterData:this.visitorsListViewModel?.visitsData?.getFilterName()}))),p.createElement(S,{listViewModel:this.visitorsListViewModel,domain:this.context.biListViewModel.activeDomain}),p.createElement("div",{className:"position-relative ChartWrapper my-4 bg-white rounded-3 p-3"},p.createElement("div",{className:"d-flex align-items-center justify-content-between"},p.createElement("h4",{className:"ps-3"},e("txt_user_experience")),this.props.integration?p.createElement("a",{href:"#",onClick:e=>this.handleChangeLink(e,"/visitors-flow"),className:"text-success me-2 text-nowrap fw-semibold"},e("txt_view_more")):p.createElement(_.rU,{to:"/visitors/flow",className:"text-success me-2 text-nowrap fw-semibold"},e("txt_view_more"))),this.visitorsListViewModel?.statusFlowList===c.r.LOADING?p.createElement(N.QI,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):this.visitorsListViewModel?.flowListTableData?.list?p.createElement(a.P,{data:this.visitorsListViewModel?.flowListTableData?.list?.toFlowListTable(this.props.integration),isPagination:!1,pagination:this.visitorsListViewModel?.flowListTableData?.pagination,selectPage:async e=>{await this.visitorsListViewModel.handleFilterFlowList({page:e})},selectPageSize:async e=>{await this.visitorsListViewModel.handleFilterFlowList({page:1,page_size:e})},status,sortAPI:!0,handleSort:this.handleSortFlowList,sortBy:this.visitorsListViewModel?.sortByFlowList,...this.props}):p.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},p.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},p.createElement(r.x,{icons:v.OBj.PUBLIC_URL+"/assets/images/ic_project.svg",title:e("txt_no_data"),width:"w-50"})))))}},(0,h.o)(s,"contextType",m.Fv),s)),L=(0,u.Zh)()((0,f.EN)((0,l.A)(P)))},90298:(e,t,i)=>{i.d(t,{m:()=>d});var s=i(84361),a=i(67294),l=i(91072),o=i(38585),n=i(16550),r=(0,o.Pi)(class extends a.Component{constructor(e){super(e);const{listViewModel:t}=e;this.listViewModel=t||null,this.state={loading:!1}}render(){const{t:e,status:t,bars:i,barColors:l,data:o,filterData:n}=this.props;return a.createElement("div",{className:"position-relative h-100"},a.createElement(s.l,{height:500,data:o,colors:["#1AB394"],layout:"horizontal",barColors:l,bars:i,hiddenGrid:{vertical:!1},XAxisOptions:{axisLine:!0,padding:{left:50,right:50}},defaultValue:{label:"Visitors",value:"visitors"},options:[{label:"Visitors",value:"visitors"}],loading:t,tooltipComponent:{header:e("txt_in_total"),value:1===i?.length&&i[0]+":"},status:t,filterData:n,isSelection:!1,isLegend:!0,filterButtons:["days","months","weeks"]}))}}),d=(0,l.Zh)()((0,n.EN)(r))},52921:(e,t,i)=>{i.d(t,{P:()=>h});var s=i(16505),a=i(28949),l=i(73022),o=i(67294),n=i(91072),r=i(42444),d=i(70982),c=i(56646),m=i(26982),h=(0,n.Zh)()((e=>{const{data:t,t:i,isPagination:n=!0,simplePagination:h=!1,pagination:p,selectPage:w,selectPageSize:g,status:u,limit:E,isPaginationAPI:v=!!n,sortAPI:_,handleSort:f,sortBy:x}=e,b=o.useMemo((()=>t?.header.map(((e,s)=>{let a="";switch(e?.accessor){case l.lF8.NUMBER_OF_VISITORS:case l.lF8.NUMBER_OF_PAGE_VIEWS:case l.lF8.NUMBER_OF_UNIQUE_PAGE_VIEWS:case l.lF8.BOUNCE_RATE:case l.lF8.NUMBER_OF_PAGES_PER_SESSION:case l.lF8.AVERAGE_SESSION_DURATION:break;default:a=""}return{...e,className:`px-3 py-16 fs-sm fw-semibold border-bottom ${s+1===t?.header.length?"rounded-top-end-3":""} ${0===s?"rounded-top-start-3":""}`,width:e.width?e.width:0===s?"auto":170,allowSort:e?.allowSort||!1,Header:o.createElement("span",{className:"align-middle"},i(e.Header),a&&o.createElement(o.Fragment,null,o.createElement(d.G,{"data-tooltip-id":"tooltipTable","data-tooltip-content":i(a),className:"mx-sm fs-12 mb-1",icon:c.DB}),o.createElement(r.u,{id:"tooltipTable"})))}}))),[t?.header]),y=o.useMemo((()=>t?.data),[t?.data]);return o.createElement("div",{className:"h-100 position-relative"},u===m.t_.LOADING?o.createElement(m.QI,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):t?o.createElement(s.k,{classNameTable:"mb-0",columns:b,data:y,canSort:!0,pagination:n,paginationClass:"fs-14 border-top mt-2",isPaginationAPI:v,paginationResponse:p,selectPage:w,selectPageSize:g,simplePagination:h,limit:E,sortAPI:_,sortAPIHandle:f,sortBy:x}):o.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},o.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},o.createElement(a.x,{icons:l.OBj.PUBLIC_URL+"/assets/images/ic_project.svg",title:i("txt_no_data"),width:"w-50"}))))}))},71547:(e,t,i)=>{i.d(t,{t:()=>w});var s=i(16505),a=i(28949),l=i(20513),o=i(67294),n=i(91072),r=i(16550),d=i(26982),c=i(73022),m=i(42444),h=i(70982),p=i(56646),w=(0,n.Zh)()((0,r.EN)((e=>{const{data:t,isPagination:i=!0,simplePagination:n=!1,pagination:r,selectPage:w,selectPageSize:g,status:u,limit:E,isPaginationAPI:v=!!i,t:_,sortAPI:f,handleSort:x,sortBy:b}=e,y=o.useMemo((()=>t?.header?.map(((e,t)=>{let i="";switch(e?.accessor){case c.lF8.NUMBER_OF_VISITORS:i="txt_tooltip_visitors";break;case c.lF8.NUMBER_OF_PAGE_VIEWS:i="txt_tooltip_page_views";break;case c.lF8.NUMBER_OF_UNIQUE_PAGE_VIEWS:i="txt_tooltip_unique_page_views";break;case c.lF8.BOUNCE_RATE:i="txt_tooltip_bounce_rate";break;case c.lF8.NUMBER_OF_PAGES_PER_SESSION:i="txt_tooltip_page_session";break;case c.lF8.AVERAGE_SESSION_DURATION:i="txt_tooltip_avg_session_duration";break;default:i=""}return{...e,className:`px-15 py-16 fs-sm fw-semibold border-bottom border-gray-800 align-middle ${0!==t?"rounded-top-end-3 text-end":""} ${0===t?"rounded-top-start-3":""}`,width:e.width?e.width:0===t?"auto":170,allowSort:e?.allowSort||!1,Header:o.createElement("span",{className:"align-middle text-gray-900 fw-medium"},_(e.Header),i&&o.createElement(o.Fragment,null,o.createElement(h.G,{"data-tooltip-id":"tooltipTable","data-tooltip-content":_(i),className:"mx-sm fs-12 mb-1",icon:p.DB}),o.createElement(m.u,{id:"tooltipTable"})))}}))),[t?.header]),M=o.useMemo((()=>t?.data),[t?.data]);return o.createElement(o.Fragment,null,u===l.r.LOADING?o.createElement(d.QI,{className:"d-flex justify-content-center align-items-center bg-white rounded-3 shadow-sm"}):t?o.createElement(s.k,{classNameTable:"mb-0",columns:y,data:M,canSort:!0,pagination:i,paginationClass:"fs-14 border-top mt-2",isPaginationAPI:v,paginationResponse:r,selectPage:w,selectPageSize:g,simplePagination:n,limit:E,sortAPI:f,sortAPIHandle:x,sortBy:b}):o.createElement("div",{className:"position-relative ChartWrapper bg-white rounded-3 shadow-sm"},o.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},o.createElement(a.x,{icons:c.OBj.PUBLIC_URL+"/assets/images/ic_project.svg",title:_("txt_no_data"),width:"w-50"}))))})))}}]);