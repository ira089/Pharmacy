"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{952:function(e,t,a){a.d(t,{Z:function(){return c}});a(2791);var n=a(7689),r=a(5705),s="input_inputWrap__fccxa",l=a(3329),c=function(e){var t=e.name,a=e.placeholder,c=e.type,i=e.textLabel,o=e.handleChange,d=e.valueInput,u=(0,n.TH)();return(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("label",{htmlFor:t,children:i}),"/cart"===u.pathname?(0,l.jsx)(r.gN,{onChange:o,value:d,id:t,name:t,placeholder:a,type:c}):(0,l.jsx)(r.gN,{id:t,name:t,placeholder:a,type:c}),(0,l.jsx)(r.Bc,{name:t,children:function(e){return(0,l.jsx)("span",{children:e})}})]})}},4542:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var n=a(1413),r=a(9439),s=a(2791),l=a(4420),c=a(835),i=a(8956),o=a(9700),d=a(4942),u=a(5705),h=a(9316),m=a(952),p="cartForm_form__pc8UU",x=a(3329),_=function(e){var t=e.handleChangeForm,a=(0,s.useState)({name:"",email:"",phone:"",address:""}),l=(0,r.Z)(a,2),c=l[0],i=l[1],o=function(e){var a=e.target,r=a.name,s=a.value;i((function(e){var a=(0,n.Z)((0,n.Z)({},e),{},(0,d.Z)({},r,s));return(0,h.mj)(a)&&(t(a),i({name:"",email:"",phone:"",address:""})),a}))};return(0,x.jsx)(u.J9,{initialValues:{name:"",email:"",phone:"",address:""},children:(0,x.jsxs)(u.l0,{className:p,children:[(0,x.jsx)(m.Z,{handleChange:o,valueInput:c.name,name:"name",placeholder:"Enter text",type:"text",textLabel:"Name"}),(0,x.jsx)(m.Z,{handleChange:o,valueInput:c.email,name:"email",placeholder:"Enter text",type:"email",textLabel:"Email"}),(0,x.jsx)(m.Z,{handleChange:o,valueInput:c.phone,name:"phone",placeholder:"Enter text",type:"text",textLabel:"Phone"}),(0,x.jsx)(m.Z,{handleChange:o,valueInput:c.address,name:"address",placeholder:"Enter text",type:"text",textLabel:"Address"})]})})},f=a(6506),j=a(6934),g=a(8291),v=a(9641),y=(0,j.ZP)(g.Z)({color:"rgba(18, 20, 23, 0.2)","&.Mui-checked":{color:"#59B17A"}}),N=(0,j.ZP)(v.Z)({"& .MuiFormControlLabel-label":{fontFamily:"Inter",fontWeight:"400",fontSize:"14px",color:"#1d1e21",lineHeight:"129%"}}),C=a(5847),Z="cartInfo_wrapText__SNbyV",I="cartInfo_title__zD9oT",b="cartInfo_text__bCY0L",w="cartInfo_wrapPayment__RqMOv",P="cartInfo_wrapTotal__zcXhr",k=function(e){var t=e.handleChange,a=e.handleChangeForm,n=e.total,r=e.onClick;return(0,x.jsxs)("div",{className:Z,children:[(0,x.jsx)("h4",{className:I,children:"Enter shipping info "}),(0,x.jsx)("p",{className:b,children:"Enter your delivery address where you get the product. You can also send any other location where you send the products."}),(0,x.jsx)(_,{handleChangeForm:a}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("h4",{className:I,children:"Payment method"}),(0,x.jsx)("p",{className:b,children:"You can pay us in a multiple way in our payment gateway system."}),(0,x.jsxs)(f.Z,{name:"payment",onChange:t,children:[(0,x.jsx)(N,{control:(0,x.jsx)(y,{}),value:"cash",label:"Cash On Delivery"}),(0,x.jsx)(N,{value:"bank",control:(0,x.jsx)(y,{}),label:"Bank"})]})]}),(0,x.jsx)("h4",{className:I,children:"Order details "}),(0,x.jsx)("p",{className:b,children:"Shipping and additionnal costs are calculated based on values you have entered."}),(0,x.jsxs)("div",{className:P,children:[(0,x.jsx)("h4",{className:I,children:"Total:"}),(0,x.jsxs)("h4",{className:I,children:["\u09f3 ",n]})]}),(0,x.jsx)(C.Z,{onClick:r,style:{color:"#fff",width:"141px",height:"44px"},children:"Place order"})]})},S=function(e){return e.orderItems},E=a(5212),F=a(4879),B=a(5131),L="cartItem_wrapItem__mu9uf",T="cartItem_img__JskPA",O="cartItem_wrapText__seiU4",z="cartItem_text__z80B8",Q="cartItem_price__5iBy6",R="cartItem_wrapBtn__ug-VH",q="cartItem_wrapCounter__sWzl2",A="cartItem_btnRemore__5EWnw",H="cartItem_wrapTitle__CHwDR",M="cartItem_title__u0IeA",D=function(e){var t=e.idProduct,a=e.quantity,n=e.idOrder,c=e._id,d=e.totalQuantity,u=e.total,m=(0,s.useRef)(!0),p=(0,l.I0)(),_=(0,s.useState)(a),f=(0,r.Z)(_,2),j=f[0],g=f[1],v=(0,s.useState)(u),y=(0,r.Z)(v,2),N=y[0],C=y[1],Z=(0,s.useState)(d),I=(0,r.Z)(Z,2),b=I[0],w=I[1];console.log(typeof N),(0,s.useEffect)((function(){p((0,E.L)(t))}),[t]);var P=(0,l.v9)(F.n).products,k=Boolean(P.length)&&P.find((function(e){return e._id===t})),S=k.name,D=k.photo,J=k.price,U=k.category;(0,s.useEffect)((function(){m.current?m.current=!1:p((0,i.w)({idProduct:t,quantity:String(j),idOrder:n,id:c}))}),[j,c]),(0,s.useEffect)((function(){m.current?m.current=!1:p((0,o.Ze)({id:n,total:N,totalQuantity:b,status:"Pending"}))}),[N,b]);console.log(N),console.log(b);return(0,x.jsxs)("li",{className:L,children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{className:T,src:D,alt:"product"})}),(0,x.jsxs)("div",{className:O,children:[(0,x.jsxs)("div",{className:H,children:[(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("h4",{children:S}),(0,x.jsx)("p",{className:z,children:U})]}),(0,x.jsxs)("p",{className:Q,children:["\u09f3",J]})]}),(0,x.jsxs)("div",{className:R,children:[(0,x.jsxs)("div",{className:q,children:[(0,x.jsx)("button",{type:"submit",onClick:function(){g((function(e){return Number(e)+1})),w((0,h.MS)(d)),C((0,h.AN)(J,u))},children:(0,x.jsx)(B.Z,{width:18,height:18,name:"icon-plus-green"})}),(0,x.jsx)("span",{children:j}),(0,x.jsx)("button",{type:"submit",onClick:function(){1!==j&&(g((function(e){return e-1})),w((0,h.ty)(d)),C((0,h.DB)(J,u)))},children:(0,x.jsx)(B.Z,{width:18,height:18,name:"icon-minus-green"})})]}),(0,x.jsx)("button",{className:A,onClick:function(){return e=c,p((0,i.lZ)(e)),w((0,h._R)(d,j)),void C((0,h.PJ)(J,u,j));var e},children:"Remove"})]})]})]})},J="cartProduts_list__mZclJ",U="cartProduts_text__+XF7j",W=function(e){var t=e.idOrder,a=e.totalQuantity,n=e.total,r=(0,l.v9)(S),s=r.cart,c=r.isLoading,i=r.error,o=Boolean(s.length);return(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)("p",{children:"...Loading"}),i&&(0,x.jsx)("p",{children:i.message}),o?(0,x.jsx)("ul",{className:J,children:s.map((function(e){return(0,x.jsx)(D,{idProduct:e.idProduct,_id:e._id,quantity:e.quantity,idOrder:t,total:n,totalQuantity:a},e._id)}))}):(0,x.jsx)("p",{className:U,children:"Sorry, there are no items in your cart."})]})},V="cartPage_wrapCart__Ni01T",Y="cartPage_title__z4IHU",X="cartPage_wrap__pZeNS",G=function(){var e=(0,l.I0)(),t=(0,l.v9)(c.zT),a=Boolean(t.length)&&t.find((function(e){return"Pending"===e.status})),d=a.totalQuantity,u=a.total,h=a._id;(0,s.useEffect)((function(){e((0,i.iy)(h))}),[h,e]);var m=(0,s.useState)(""),p=(0,r.Z)(m,2),_=p[0],f=p[1],j=(0,s.useState)({name:"",email:"",phone:"",address:""}),g=(0,r.Z)(j,2),v=g[0],y=g[1],N=(0,n.Z)((0,n.Z)({},v),{},{paymentMethod:_,total:u,totalQuantity:d,status:"Confirmed",id:h});console.log(N);return(0,x.jsxs)("section",{className:V,children:[(0,x.jsx)("h2",{className:Y,children:"Cart"}),(0,x.jsxs)("div",{className:X,children:[(0,x.jsx)(k,{total:u,handleChange:function(e){f(e.target.value)},handleChangeForm:function(e){console.log("Form values:",e),y(e)},onClick:function(){e((0,o.Ze)(N))}}),(0,x.jsx)(W,{idOrder:h,totalQuantity:d,total:u})]})]})}},4879:function(e,t,a){a.d(t,{n:function(){return n}});var n=function(e){return e.products}}}]);
//# sourceMappingURL=542.f4791eff.chunk.js.map