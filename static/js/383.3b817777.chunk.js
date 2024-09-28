"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{1615:function(e,t,n){var r=(0,n(7107).Z)({breakpoints:{values:{mobile:0,tablet:768,desktop:1440}},palette:{green:{main:"#59b17a"}}});t.Z=r},6754:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(9439),a=n(2791),i=n(4420),o=n(1087),c=n(8956),l=n(9700),s=n(835),u=n(5847),d=n(5131),m=n(5985),h={wrapProdukt:"medicineItem_wrapProdukt__xcv1W",img:"medicineItem_img__LRJ5K",wrapText:"medicineItem_wrapText__fR-Zm",wrapName:"medicineItem_wrapName__azi3w",wrapBtn:"medicineItem_wrapBtn__aQGMN",link:"medicineItem_link__+Qbvn",wrapCounter:"medicineItem_wrapCounter__a29g3",horizontal:"medicineItem_horizontal__QeqSb",verticalText:"medicineItem_verticalText__Nz3MB",imgtId:"medicineItem_imgtId__8OIGK",wrapTextId:"medicineItem_wrapTextId__73suR",vertical:"medicineItem_vertical__b28tk",horizontalText:"medicineItem_horizontalText__71-7q"},p=n(3329),f=function(e){var t=e.item,n=e.isVariant,f=(0,i.I0)(),x=(0,i.v9)(s.Qb),g=(0,i.v9)(s.zT),_=x&&g.find((function(e){return"Pending"===e.status})),v=_.total,b=_.totalQuantity,j=_._id;console.log(j);var w=n.variant,Z=t.photo,I=t.name,N=t.price,k=t._id,y=t.suppliers,C=Math.round(N),P=(0,a.useState)(1),S=(0,r.Z)(P,2),T=S[0],z=S[1],F=function(e){if(x){var t=String(Number(b)+Number(e)),n=String(e*N+Number(v)),r=String(Math.round(100*n)/100);f((0,c.nK)({idOrder:j,idProduct:k,quantity:String(e)})),f((0,l.Ze)({id:j,total:r,totalQuantity:t,status:"Pending"}))}else m.Am.error("The service is available only to authorized users")};return(0,p.jsxs)("div",{className:"".concat(h.wrapProdukt," ").concat(w?h.horizontal:h.vertical),children:[(0,p.jsx)("img",{className:"".concat(h.img," ").concat(w&&h.imgtId),src:Z,alt:"medicine"}),(0,p.jsxs)("div",{className:"".concat(h.wrapText," ").concat(w&&h.wrapTextId),children:[(0,p.jsxs)("div",{className:"".concat(h.wrapName," ").concat(w?h.verticalText:h.horizontalText),children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h5",{children:I}),(0,p.jsx)("p",{children:y})]}),(0,p.jsxs)("h5",{children:["\u09f3",C]})]}),w?(0,p.jsxs)("div",{className:h.wrapBtn,children:[(0,p.jsxs)("div",{className:h.wrapCounter,children:[(0,p.jsx)("button",{onClick:function(){x?z((function(e){return e+1})):m.Am.error("The service is available only to authorized users")},children:(0,p.jsx)(d.Z,{className:h.icon,width:20,height:20,name:"icon-plus-green"})}),(0,p.jsx)("span",{children:T}),(0,p.jsx)("button",{onClick:function(){x?1!==T&&z((function(e){return e-1})):m.Am.error("The service is available only to authorized users")},children:(0,p.jsx)(d.Z,{width:20,height:20,name:"icon-minus-green"})})]}),(0,p.jsx)(u.Z,{onClick:function(){return F(T)},style:{color:"#fff",width:"140px",height:"44px"},children:"Add to cart"})]}):(0,p.jsxs)("div",{className:h.wrapBtn,children:[(0,p.jsx)(u.Z,{onClick:function(){return F(T)},style:{color:"#fff",width:"108px",height:"34px"},children:"Add to cart"}),(0,p.jsx)(o.OL,{className:h.link,to:"/produst/".concat(k),children:"Details"})]})]})]})}},7383:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(2791),a=n(4420),i=function(e){return e.search},o=n(5212),c=n(2242),l=n(3066),s=n(697),u=n(1615),d=n(4507),m=n(7246),h=n(3329),p=function(e){var t=e.page,n=e.totalPages,r=e.selectPage;return(0,h.jsx)(d.Z,{theme:u.Z,children:(0,h.jsx)(m.Z,{count:n,defaultPage:3,siblingCount:0,page:Number(t),onChange:function(e,t){return r(t)},sx:{marginTop:5,marginX:"auto","& .MuiPaginationItem-root":{"&.Mui-selected":{backgroundColor:"#59b17a",color:"#fff"},"&:hover":{backgroundColor:"#59b17a",color:"#fff"}}},showFirstButton:!0,showLastButton:!0})})},f=n(4879),x=n(6754),g="medicineList_sorry__+DcBr",_=function(){var e=(0,a.v9)(f.n),t=e.isLoading,n=e.error,r=e.products,i=e.totalPages,o=e.page,m=i/12,_=(0,a.I0)(),v={variant:!1},b=Boolean(r.length),j=r.map((function(e){return(0,h.jsx)(l.ZP,{item:!0,mobile:12,tablet:4,desktop:3,children:(0,h.jsx)(x.Z,{item:e,isVariant:v},e._id)})}));return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)("p",{children:"...Loading"}),n&&(0,h.jsx)("p",{children:n.message}),b?(0,h.jsx)(d.Z,{theme:u.Z,children:(0,h.jsx)(s.Z,{sx:{width:"100%"},children:(0,h.jsx)(l.ZP,{container:!0,rowSpacing:{mobile:2.5,tablet:4,desktop:5},columnSpacing:{tablet:1.625,desktop:2.625},children:j})})}):!t&&(0,h.jsx)("p",{className:g,children:"Nothing was found for your request"}),!!i&&!r.length<12&&(0,h.jsx)(p,{page:o,totalPages:m,selectPage:function(e){_((0,c.Ws)(e))}})]})},v=n(9439),b=n(5618),j=n(5131),w=n(5847),Z=[{value:"Medicine",label:"Medicine"},{value:"Heart",label:"Heart"},{value:"Head",label:"Head"},{value:"Hand",label:"Hand"},{value:"Leg",label:"Leg"},{value:"Dental Care",label:"Dental Care"},{value:"Skin Care",label:"Skin Care"}],I=n(1413),N={control:function(e,t){return(0,I.Z)((0,I.Z)({},e),{},{fontFamily:"Inter",background:"#fff",borderRadius:"60px",padding:"0 12px",height:"44px",display:"flex",alignItems:"center",cursor:"pointer",fontSize:"12px",lineHeight:"150%",justifyContent:"space-between",minWidth:"214px",borderColor:t.isFocused?"#59b17a":"rgba(29, 30, 33, 0.1)",boxShadow:t.isFocused?"#59b17a":"0 0 0 1px transparent"})},placeholder:function(e){return(0,I.Z)((0,I.Z)({},e),{},{color:"rgba(29, 30, 33, 0.4)"})},input:function(e){return(0,I.Z)((0,I.Z)({},e),{},{color:"#1d1e21"})},indicatorSeparator:function(e){return(0,I.Z)((0,I.Z)({},e),{},{display:"none"})},menu:function(e){return(0,I.Z)((0,I.Z)({},e),{},{color:"rgba(38, 38, 38, 0.6)",fontFamily:"Inter",fontSize:"12px",lineHeight:"150%",borderRadius:"15px",background:"#fff",boxShadow:"transparent",overflow:"scroll"})},valueContainer:function(e){return(0,I.Z)((0,I.Z)({},e),{},{padding:"0",cursor:"text"})}},k="filter_wrapForma__5In0E",y="filter_searchFormLabel__7eHlu",C="filter_searchFormInput__oNQyF",P="filter_searchFormIcon__8RaMw",S="filter_icon__NtqKZ",T=function(){var e=(0,a.I0)(),t=(0,r.useState)(""),n=(0,v.Z)(t,2),i=n[0],o=n[1],l=(0,r.useState)(""),s=(0,v.Z)(l,2),u=s[0],d=s[1];return(0,h.jsxs)("form",{className:k,onSubmit:function(t){t.preventDefault(),e((0,c.DI)(i)),e((0,c.i8)(u))},children:[(0,h.jsx)(b.ZP,{options:Z,onChange:function(e){d(e.value)},styles:N,placeholder:"Product category"}),(0,h.jsxs)("label",{className:y,children:[(0,h.jsx)("input",{className:C,onChange:function(e){var t=e.target;o(t.value.trim())},type:"text",name:"serch",value:i,placeholder:"Search medicine"}),(0,h.jsx)("div",{className:P,children:(0,h.jsx)(j.Z,{width:16,height:16,name:"icon-loofah"})})]}),(0,h.jsxs)(w.Z,{style:{color:"#fff",width:"116px",height:"44px"},type:"submit",children:[(0,h.jsx)(j.Z,{className:S,width:14,height:12,name:"icon-filter"}),"Filter"]})]})},z="medicinePage_wrapMed__aT3jM",F="medicinePage_title__cvp-5",M=function(){var e=(0,a.v9)(i),t=e.query,n=e.category,c=e.page,l=(0,a.I0)();return(0,r.useEffect)((function(){l((0,o.I)({query:t,category:n,page:c}))}),[n,l,c,t]),(0,h.jsxs)("section",{className:z,children:[(0,h.jsx)("h2",{className:F,children:"Medicine store"}),(0,h.jsx)(T,{}),(0,h.jsx)(_,{})]})}},4879:function(e,t,n){n.d(t,{n:function(){return r}});var r=function(e){return e.products}}}]);
//# sourceMappingURL=383.3b817777.chunk.js.map