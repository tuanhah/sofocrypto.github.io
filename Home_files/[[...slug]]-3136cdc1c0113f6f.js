(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{8196:function(o,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_sites/[siteId]/[cacheTag]/[[...slug]]",function(){return n(4754)}])},9534:function(o,r,n){"use strict";var e=n(5944),l=n(7294);let t=(o,r)=>{let n=new Set;return JSON.stringify(o,(o,r)=>(n.add(o),r)),JSON.stringify(o,Array.from(n).sort(),r)},u=(o,r)=>"block"===o?"ID: ".concat(r.id):"text"===o||"buy"===o||"button"===o||"download"===o||"paypal"===o?r.text?r.text:Array.isArray(r.utf.content.value)?r.utf.content.value.map(o=>o.content.value).join(" "):r.utf.content.value:void 0,F={block:{backgroundColor:"#88FF88",foregroundColor:"#000000"},blockOnGrid:{backgroundColor:"#008800",foregroundColor:"#FFFFFF"},button:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},buy:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},code:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},document:{backgroundColor:"#FF8800",foregroundColor:"#000000"},download:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},giphy:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},graphic:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},grid:{backgroundColor:"#00FF00",foregroundColor:"#000000"},icon:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},image:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},longVideo:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},map:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},menuFullscreen:{backgroundColor:"#FF0000",foregroundColor:"#000000"},menuMinimal:{backgroundColor:"#FF0000",foregroundColor:"#000000"},menuPagingIndicator:{backgroundColor:"#FF0000",foregroundColor:"#000000"},menuSidebar:{backgroundColor:"#FF0000",foregroundColor:"#000000"},menuTabs:{backgroundColor:"#FF0000",foregroundColor:"#000000"},payment:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},paypal:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},photoGallery:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},section:{backgroundColor:"#0000FF",foregroundColor:"#FFFFFF"},sectionStub:{backgroundColor:"#000088",foregroundColor:"#FFFFFF"},soundcloud:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},subscribe:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},text:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},theme:{backgroundColor:"#FF00FF",foregroundColor:"#000000"},timelineHorizontal:{backgroundColor:"#00FFFF",foregroundColor:"#000000"},timelineVertical:{backgroundColor:"#00FFFF",foregroundColor:"#000000"},unknown:{backgroundColor:"#DDDDDD",foregroundColor:"#000000"},video:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},vimeo:{backgroundColor:"#FFFF00",foregroundColor:"#000000"},youtube:{backgroundColor:"#FFFF00",foregroundColor:"#000000"}},d=o=>{var r;let{data:n}=o,a={...n},c=n.contentType||!!a.slug&&"section"||!!a.block&&"blockOnGrid"||!!a.route&&"sectionStub"||!!a.attributes&&"theme"||"unknown";delete a.contentType;let g=c.replace(/([A-Z])/g,o=>" ".concat(o)).replace(/^./,o=>o.toUpperCase()).trim(),{backgroundColor:i,foregroundColor:C}=F[c]||F.unknown,f=[];["block","children","content","pages","theme"].forEach(o=>{a[o]&&(Array.isArray(a[o])?f.push(...a[o]):f.push(a[o]),delete a[o])});let b=f.map((o,r)=>(0,e.tZ)(d,{data:o},"child-".concat(r))),[k,s]=(0,l.useState)(!1);return(0,e.BX)("div",{children:[(0,e.tZ)("button",{style:{width:200,height:50,backgroundColor:i,padding:"14px 0 12px",border:"none",fontFamily:"Papyrus, fantasy",fontSize:"18px",color:C,textAlign:"center"},onClick:()=>s(!k),children:g}),(0,e.tZ)("span",{style:{color:"gray",marginLeft:"1em",fontFamily:"Papyrus, fantasy"},children:null===(r=u(c,a))||void 0===r?void 0:r.slice(0,100)}),k&&(0,e.tZ)("div",{style:{paddingLeft:10,whiteSpace:"pre-wrap"},children:(0,e.tZ)("p",{children:t(a,2)})}),(0,e.tZ)("div",{style:{marginLeft:32},children:b})]})};r.Z=d},4754:function(o,r,n){"use strict";n.r(r),n.d(r,{__N_SSP:function(){return d}});var e=n(5944);n(7294);var l=n(7739),t=n(865),u=n(9534);let F=(0,t.o)(o=>o.explore?(0,e.tZ)(u.Z,{data:o.document.content}):(0,e.tZ)(l.Z,{data:o.document,context:{host:o.host,canonicalHost:o.canonicalHost}}));var d=!0;r.default=F}},function(o){o.O(0,[383,739,774,888,179],function(){return o(o.s=8196)}),_N_E=o.O()}]);