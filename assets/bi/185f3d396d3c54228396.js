"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[889],{48298:(e,t,a)=>{a.d(t,{x:()=>p});var l=a(16640),n=a(51751),s=a(96540),r=a(32885),o=a(32389),i=a(20982),c=a(66188),m=a(99194),d=a(44011);function g({row:e,rowProps:t,visibleColumns:a,data:l,loading:n}){return n?s.createElement("tr",null,s.createElement("td",null),s.createElement("td",{colSpan:a.length-1},"Loading...")):s.createElement(s.Fragment,null,l?.length&&s.createElement(s.Fragment,null,l.map(((a,l)=>s.createElement("tr",{...t,key:`${t.key}-expanded-${l}`,className:"border-bottom row_sub_component"},e.cells.map(((t,n)=>s.createElement("td",{...t.getCellProps(),key:n,className:`py-2 wb-all align-middle sub-cell-${t.column.id} `},t.render("SubCell",{value:t.column.accessor(a,l),row:{...e,original:a}})))))))))}document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode("/*\n * @copyright   Copyright (C) 2022 AesirX. All rights reserved.\n * @license     GNU General Public License version 3, see LICENSE.\n */\n.sort-icon {\n  height: 20px;\n}"));var p=(0,o.CI)()((({columns:e,data:t,pagination:a,onSelect:o,dataList:p,classNameTable:u,canSort:b,sortAPI:h,sortAPIHandle:E,sortBy:w,limit:y,paginationClass:x,isPaginationAPI:v,paginationResponse:N,selectPage:f,selectPageSize:S,simplePagination:_=!1,status:C,hasSubRow:P,idKey:k,tdClass:L,...z})=>{const{getTableProps:A,getTableBodyProps:I,headerGroups:F,prepareRow:B,rows:D,visibleColumns:K,page:R,pageOptions:$,previousPage:T,canPreviousPage:U,canNextPage:O,pageCount:j,gotoPage:G,setPageSize:Y,nextPage:H,state:{pageIndex:J,pageSize:W}}=(0,r.useTable)({columns:e,data:t,onSelect:o,initialState:{pageSize:(v?N?.page_size:y)??5,pageIndex:0}},r.useSortBy,r.useExpanded,r.usePagination),M=s.useCallback((({row:e,rowProps:t,visibleColumns:a,subRow:l,idKey:r})=>s.createElement(g,{row:e,rowProps:t,visibleColumns:a,loading:C===n.s.LOADING,data:l,idKey:r})),[C]),V=async e=>{await f(e)},{t:X}=z;let q=v?[...Array(N?.total_pages)]:[...Array($.length)];return s.createElement(s.Fragment,null,s.createElement("div",{className:"bg-white fs-14 rounded-3 position-relative text-gray-900"},D.length?s.createElement("table",{...A(),className:`w-100 ${u}`},s.createElement("thead",null,F.map(((e,t)=>{let a="";return a=p?e.headers.filter((e=>!p.some((t=>e.id===t)))):e.headers,s.createElement("tr",{key:t,...e.getHeaderGroupProps()},a.map(((e,t)=>{let a=e.sortParams??e.id,l="";return e.rowSpan&&b&&!h&&(l=e.columns[0]),s.createElement("th",{key:t,...!h&&e?.allowSort&&{...e.getHeaderProps(b&&!e.rowSpan?e.getSortByToggleProps():l&&l.getSortByToggleProps())},className:`${e.className} ${h&&e?.allowSort&&"number"!==a&&"selection"!==a?"cursor-pointer":""}`,...h&&e?.allowSort&&"number"!==a&&"selection"!==a&&{onClick:async()=>{E(e)}},rowSpan:`${e.rowSpan??1}`},e.render("Header"),b&&e?.allowSort&&s.createElement("span",{className:"position-relative align-middle"},h?w&&w["sort[]"]===a&&"number"!==a&&"selection"!==a?"desc"===w["sort_direction[]"]?s.createElement(i.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:c.Ync}):s.createElement(i.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:c.Dvs}):s.createElement(s.Fragment,null):e.rowSpan?l.isSorted&&"number"!==a&&"selection"!==a?l.isSortedDesc?s.createElement(i.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:c.Ync}):s.createElement(i.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:c.Dvs}):"":e.isSorted&&"number"!==a&&"selection"!==a?e.isSortedDesc?s.createElement(i.g,{className:"sort-icon sort-icon-down ms-sm mt-n3",icon:c.Ync}):s.createElement(i.g,{className:"sort-icon sort-icon-up ms-sm mb-nsm",icon:c.Dvs}):s.createElement(s.Fragment,null)))})))}))),s.createElement("tbody",{...I()},R.length>0&&R.map((e=>{B(e);const t=e.getRowProps();let a="";a=p?e.cells.filter((e=>!p.some((t=>e.column.id===t)))):e.cells;const l=e.cells.find((e=>e?.column?.id===k))?.value??[];return s.createElement(s.Fragment,{key:e.getRowProps().key},s.createElement("tr",{...e.getRowProps()},a.map(((e,t)=>s.createElement("td",{key:t,...e.getCellProps({style:{width:e.column.width}}),className:`py-2 wb-all ${L||"align-middle"}`},e.render("Cell"))))),!1===P?null:e.isExpanded&&M({row:e,rowProps:t,visibleColumns:K,subRow:l,idKey:k}))})))):null,0===D.length?s.createElement("div",{className:""},s.createElement(l.Js,{icons:m._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:X("txt_no_data"),width:"w-50"})):null),a&&$.length?s.createElement("div",{className:`d-flex align-items-center justify-content-between ${x}`},_?s.createElement("div",{className:"text-gray-900 fw-light"},1===N?.page?1:N?.page_size*(N?.page-1),"-",N?.total_elements<=N?.page_size?N?.total_elements:N?.page_size*N?.page," ","to ",N?.total_elements):s.createElement("div",{className:"d-flex align-items-center"},s.createElement("span",{className:"text-gray-600 me-16"},"Showing"),s.createElement("div",{className:"bg-white"},s.createElement(d.J0,{isClearable:!1,isSearchable:!1,isBorder:!1,isShadow:!1,menuPlacement:"top",options:[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:30,value:30},{label:40,value:40},{label:50,value:50}],getOptionLabel:e=>s.createElement("div",{className:"showing-option d-flex align-items-center"},s.createElement("span",null,e.label," items")),className:"shadow-none select-bg-white",onChange:e=>{v?(async e=>{await S(e)})(Number(e.value)):Y(Number(e.value))},defaultValue:{label:v?N?.page_size:W,value:v?N?.page_size:W}}))),s.createElement("div",{className:"mt-2 pb-2 text-center pagination d-flex justify-content-end align-items-center"},s.createElement("button",{className:(_?"border-0":"border-1 border-gray-800")+" bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-start rounded-bottom-start",onClick:()=>v?V(N?.page-1):T(),disabled:v?1===N?.page:!U},s.createElement(l.I3,{url:m._K2.PUBLIC_URL+"/assets/images/chevron_left.svg",color:v?1===N?.page?"#5F5E70":"#1ab394":U?"#1ab394":"#5F5E70"}))," ",!_&&s.createElement(s.Fragment,null,s.createElement("button",{onClick:()=>v?V(1):G(0),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((v?1===N?.page:J+1===1)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},1),(v?N?.page>3:J>3)&&s.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),q.map(((e,t)=>{let a=v?N?.page===t+1:J+1===t+1;return(v?0!==t&&t!==N?.total_pages-1&&t<N?.page-1+3&&t>N?.page-1-3:0!==t&&t!==$.length-1&&t<J+3&&t>J-3)&&s.createElement("button",{onClick:()=>v?V(t+1):G(t),key:t,className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+(a?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},t+1)})),(v?N?.page<N?.total_pages-3:J<$.length-4)&&s.createElement("button",{className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px bg-white text-body",style:{width:"38px",height:"38px"}},"..."),(v?N?.total_pages>1:$.length>1)&&s.createElement("button",{onClick:()=>v?V(N?.total_pages):G(j-1),className:"border-1 border-gray-800 rounded-0 btn p-0 w-40px h-40px "+((v?N?.page===N?.total_pages:J+1===$.length)?"bg-gray-900 text-white":"bg-white text-body"),style:{width:"38px",height:"38px"}},v?N?.total_pages:$.length)),s.createElement("button",{className:` ${_?"border-0":"border-1 border-gray-800"} bg-white text-body btn p-0 w-40px h-40px rounded-0 rounded-top-end rounded-bottom-end`,onClick:()=>v?V(N?.page+1):H(),disabled:v?N?.page===N?.total_pages:!O},s.createElement(l.I3,{url:m._K2.PUBLIC_URL+"/assets/images/chevron_right.svg",color:v?N?.page===N?.total_pages?"#5F5E70":"#1ab394":O?"#1ab394":"#5F5E70"})))):null)}))},96526:(e,t,a)=>{a.d(t,{n:()=>y});var l=a(67941),n=a(16640),s=a(51751),r=a(44011),o=a(99194),i=a(96540),c=a(32389),m=a(81174),d=a(44653),g=a(88224),p=a(69107),u=a(77984),b=a(23495),h=a(78687),E=a(91222),w=a(97018),y=(0,c.CI)()((({data:e=[],height:t,barColors:a,chartTitle:y,bars:x,XAxisOptions:v,YAxisOptions:N,loading:f,filterData:S=[],isSelection:_=!0,margin:C,layout:P,isLegend:k=!1,filterButtons:L=[],tooltipComponent:z})=>{const{t:A}=(0,c.Bd)(),[I,F]=(0,i.useState)(S[0]),[B,D]=(0,i.useState)(e[0]),[K,R]=(0,i.useState)(l.f.DAY);(0,i.useEffect)((()=>{const[t,a,n]=e;return K===l.f.MONTH&&D(t),K===l.f.WEEK&&D(n),K===l.f.DAY&&D(a),()=>{}}),[K,e]),(0,i.useEffect)((()=>(F(S[0]),()=>{})),[S]);const $=({x:e,y:t,payload:a})=>a&&a.value?i.createElement(m.E,{fontSize:"12px",width:50,x:e,y:t,textAnchor:"end",verticalAnchor:"middle",maxLines:"2"},a?.value?.replaceAll("_"," ")):null,T=(0,i.useMemo)((()=>({payload:e})=>i.createElement("div",{className:"areachart-tooltip p-15 text-white rounded-6",style:{backgroundColor:"#132342",width:"auto"}},i.createElement("p",{className:"fw-semibold fs-14 mb-sm"},e?.length>0?e[0].payload.name:""),e&&e.map(((t,a)=>i.createElement("div",{key:a,className:"mb-0 fs-12 d-flex flex-nowrap"},e?.length>1&&i.createElement("div",{className:"fw-bold"},t.name,": "),i.createElement("div",{className:"ps-sm"},i.createElement("p",{className:"mb-0"},i.createElement("span",{className:"mr-2"},z?.value),i.createElement("span",null,t.value)))))))),[z]);return i.createElement("div",{className:"bg-white rounded-3 px-24 py-3 shadow-sm position-relative h-100"},f===s.s.LOADING?i.createElement(r.bg,{className:"d-flex justify-content-center align-items-center bg-white"}):e?i.createElement(i.Fragment,null,i.createElement(l.z,{currentSelection:I,onSelectionChange:F,selectionData:S,chartTitle:y,isSelection:_,filterButtons:L,view:K,setView:R}),i.createElement(d.u,{width:"100%",height:t??500},i.createElement(g.E,{data:S?.length?B?.[I.value]:e,layout:P||"vertical",margin:C},i.createElement(p.d,{strokeDasharray:"7 7",vertical:!P}),P?i.createElement(i.Fragment,null,i.createElement(u.W,{dataKey:"name",tickLine:!1,axisLine:v?.axisLine??!1,padding:v?.padding,style:{fontSize:"14px"}}),i.createElement(b.h,{tickLine:!1,axisLine:N?.axisLine??!1,padding:N?.padding,style:{fontSize:"14px"}})):i.createElement(i.Fragment,null,i.createElement(u.W,{type:"number",axisLine:v?.axisLine??!1,tickLine:!1,style:{fontSize:"12px"}}),i.createElement(b.h,{type:"category",axisLine:N?.axisLine??!1,tickLine:!1,tick:i.createElement($,null),dataKey:"name",style:{fontSize:"12px"}})),i.createElement(h.m,{content:T,cursor:{fill:"transparent"}}),x&&x.map(((e,t)=>i.createElement(E.y,{barSize:P?20:32,key:t,dataKey:e,fill:a[t]}))),k&&i.createElement(w.s,{content:e=>{const{payload:t}=e;return i.createElement("ul",{className:"ms-3 mt-2 d-flex align-items-center flex-wrap"},t.map(((e,t)=>i.createElement("li",{key:`item-${t}`,className:"me-24 fs-14 d-flex align-items-center"},i.createElement("div",{className:"rounded-circle me-8px d-flex align-items-center justify-content-center",style:{backgroundColor:e?.color,width:14,height:14}}),e.value))))}})))):i.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},i.createElement(n.Js,{icons:o._K2.PUBLIC_URL+"/assets/images/ic_project.svg",title:A("txt_no_data"),width:"w-50"})))}))}}]);