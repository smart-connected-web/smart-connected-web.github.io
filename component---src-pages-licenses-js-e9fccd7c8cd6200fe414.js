(self.webpackChunksmart_and_connected_newark_project=self.webpackChunksmart_and_connected_newark_project||[]).push([[90],{2846:function(e,t,n){"use strict";var r=n(2122),a=n(1253),i=n(7294),l=n(5505),c=n(4621),o=n(7595),s=i.forwardRef((function(e,t){var n=e.absolute,c=void 0!==n&&n,o=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,f=void 0!==u&&u,g=e.light,p=void 0!==g&&g,h=e.orientation,x=void 0===h?"horizontal":h,v=e.role,w=void 0===v?"hr"!==m?"separator":void 0:v,b=e.variant,E=void 0===b?"fullWidth":b,y=(0,a.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,(0,r.Z)({className:(0,l.Z)(o.root,s,"fullWidth"!==E&&o[E],c&&o.absolute,f&&o.flexItem,p&&o.light,"vertical"===x&&o.vertical),role:w,ref:t},y))}));t.Z=(0,c.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,o.U1)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},838:function(e,t,n){"use strict";var r=n(1253),a=n(2122),i=n(7294),l=n(5505),c=n(4621),o=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,o=e.alignItems,s=void 0===o?"stretch":o,d=e.classes,m=e.className,u=e.component,f=void 0===u?"div":u,g=e.container,p=void 0!==g&&g,h=e.direction,x=void 0===h?"row":h,v=e.item,w=void 0!==v&&v,b=e.justify,E=void 0===b?"flex-start":b,y=e.lg,k=void 0!==y&&y,Z=e.md,j=void 0!==Z&&Z,N=e.sm,S=void 0!==N&&N,W=e.spacing,C=void 0===W?0:W,_=e.wrap,I=void 0===_?"wrap":_,L=e.xl,M=void 0!==L&&L,z=e.xs,B=void 0!==z&&z,R=e.zeroMinWidth,D=void 0!==R&&R,G=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),O=(0,l.Z)(d.root,m,p&&[d.container,0!==C&&d["spacing-xs-".concat(String(C))]],w&&d.item,D&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==E&&d["justify-xs-".concat(String(E))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==S&&d["grid-sm-".concat(String(S))],!1!==j&&d["grid-md-".concat(String(j))],!1!==k&&d["grid-lg-".concat(String(k))],!1!==M&&d["grid-xl-".concat(String(M))]);return i.createElement(f,(0,a.Z)({className:O,ref:t},G))})),u=(0,c.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(d(a,2)),width:"calc(100% + ".concat(d(a),")"),"& > $item":{padding:d(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.Z=u},851:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9756),a=n(7294),i=n(920),l=n(838),c=(0,i.Z)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}});function o(e){var t=c(),n=e.children,i=e.className,o=(0,r.Z)(e,["children","className"]);return a.createElement(l.Z,Object.assign({container:!0},o,{className:t.grid+" "+i}),n)}o.defaultProps={className:""}},6308:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9756),a=n(7294),i=n(920),l=n(838),c=(0,i.Z)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}});function o(e){var t=c(),n=e.children,i=e.className,o=(0,r.Z)(e,["children","className"]);return a.createElement(l.Z,Object.assign({item:!0},o,{className:t.grid+" "+i}),n)}o.defaultProps={className:""}},9963:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(7294),a=n(5900),i=n.n(a),l=n(920),c={parallax:{height:"45vh",minHeight:"250px",maxHeight:"1000px",overflow:"hidden",position:"relative",backgroundPosition:"center center",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center"},filter:{"&:before":{background:"rgba(0, 0, 255, 0.4)"},"&:after,&:before":{position:"absolute",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"380px"}},o=(0,l.Z)(c);function s(e){var t,n;n="undefined"!=typeof window&&window.innerWidth>=768?window.pageYOffset/3:0;var a=r.useState("translate3d(0,"+n+"px,0)"),l=a[0],c=a[1];r.useEffect((function(){return window.innerWidth>=768&&window.addEventListener("scroll",s),function(){window.innerWidth>=768&&window.removeEventListener("scroll",s)}}));var s=function(){var e=window.pageYOffset/3;c("translate3d(0,"+e+"px,0)")},d=e.filter,m=e.className,u=e.children,f=e.style,g=e.image,p=e.small,h=o(),x=i()(((t={})[h.parallax]=!0,t[h.filter]=d,t[h.small]=p,t[m]=void 0!==m,t));return r.createElement("div",{className:x,style:Object.assign({},f,{backgroundImage:"url("+g+")",transform:l})},u)}var d=n(9630),m=n(2009),u=n(6432),f=n(2846),g=(0,l.Z)(u.Z);function p(){var e=g();return r.createElement("div",{className:e.sections,style:{paddingTop:"0.5em",fontWeight:400,minHeight:"70vh"}},r.createElement("div",{className:e.container},r.createElement("div",{style:{margin:"2em 0"}},r.createElement("h3",null,"Open Source Credits"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www.gatsbyjs.com",target:"_blank",rel:"noreferrer"},"Gatsby.js")),r.createElement("li",null,r.createElement("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer"},"React.js")),r.createElement("li",null,r.createElement("a",{href:"https://material-ui.com",target:"_blank",rel:"noreferrer"},"Material UI")),r.createElement("li",null,r.createElement("a",{href:"https://www.creative-tim.com/product/material-kit-react",target:"_blank",rel:"noreferrer"},"Material Kit React")),r.createElement("li",null,r.createElement("a",{href:"https://github.com/remarkjs/react-markdown",target:"_blank",rel:"noreferrer"},"react-markdown")))),r.createElement(f.Z,null),r.createElement("div",{style:{margin:"2em 0"}},r.createElement("h3",null,"Image License"),r.createElement("p",null,"Background images by ",r.createElement("a",{href:"https://www.freepik.com",target:"_blank",rel:"noreferrer"},"Freepik"),".")),r.createElement(f.Z,null),r.createElement("div",{style:{margin:"2em 0"}},r.createElement("h3",null,"Developer"),r.createElement("h4",null,"Biyun Wu"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://github.com/biyunwu",target:"_blank",rel:"noreferrer"},"Github")),r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/in/biyunwu",target:"_blank",rel:"noreferrer"},"LinkedIn")),r.createElement("li",null,r.createElement("a",{href:"https://biyunwu.com",target:"_blank",rel:"noreferrer"},"Personal Website"))))))}var h=n(7447),x=n(851),v=n(6308),w=(0,l.Z)(d.Z);function b(e){var t=w(),n="Licenses";return r.createElement(m.Z,null,r.createElement(h.Z,{title:n.charAt(0).toUpperCase()+n.slice(1),description:"Licenses | Credits | Developed by Biyun Wu"}),r.createElement(s,{filter:!0,style:{maxHeight:"100px"}},r.createElement("div",{className:t.container},r.createElement(x.Z,null,r.createElement(v.Z,null,r.createElement("div",{className:t.brand,style:{paddingTop:40}},r.createElement("h1",{className:t.title},"Licenses")))))),r.createElement("div",{className:i()(t.main)},r.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-licenses-js-e9fccd7c8cd6200fe414.js.map