(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(3272),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var r=t(5893),s=t(3349),i=t(6156),c=t(2949),l=t(6610),a=t(5991),o=t(5255),d=t(6089),h=t(7608),u=t(7294),m=t(3300),f=t.n(m),x=t(9235),p=t(7694),j=t(5005),g=t(7625),Z=t(767),v=t(8774),b=t(4370),y=t(3253),_=t.n(y);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function I(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,h.Z)(e);if(n){var s=(0,h.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}function k(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:n,children:e.children})}var N=function(e){(0,o.Z)(t,e);var n=I(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?f()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(x.lG.theme,(0,c.Z)(x.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(x.ZP,O(O({theme:p.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,i=n.tokens,c=n.getLineProps,l=n.getTokenProps;return(0,r.jsx)(k,{className:t,style:s,maxHeight:e.maxHeight,children:i.map((function(e,n){return(0,r.jsx)("div",O(O({},c({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",O({},l({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},M=function(e){(0,o.Z)(t,e);var n=I(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(N,O({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(_(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:C,children:[(0,r.jsx)(N,O(O({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(j.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:b.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(j.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(N,O({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(4824),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(4091),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),s=t(3062),i=t(4315),c=t(4505),l=t(1664);t(7625);function a(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(l.default,{href:"/lang-c",className:"font-weight-bold",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(i.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(c.Z.Divider,{}),(0,r.jsxs)(c.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(c.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(c.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(5513),i=t.n(s);function c(e){return(0,r.jsx)("div",{className:i().width,children:e.children})}},3249:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),s=t(9008),i=t(8237),c=t(7074),l=t(603),a=t(5642),o=t(6905),d=t(1221);function h(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u95a2\u6570"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(i.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h1",{children:"\u95a2\u6570"}),(0,r.jsx)("p",{children:"\u95a2\u6570\u3068\u306f\u6587\u306e\u96c6\u307e\u308a\u3067\u3042\u308a\uff0c\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u90e8\u54c1\u3068\u6349\u3048\u3089\u308c\u308b\u3088\u3046\u306a\u3082\u306e\u3067\u3042\u308b\u3002 \u57fa\u672c\u7684\u306b\uff11\u3064\u3060\u3051\u306e\u6a5f\u80fd\u3092\u3082\u305f\u305b\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u308b\u3002 \u4f55\u5ea6\u3082\u4f7f\u308f\u308c\u308b\u51e6\u7406\u3092\u5207\u308a\u51fa\u3057\u3066\u95a2\u6570\u306b\u3059\u308b\u3053\u3068\u3067\uff0c \u30d7\u30ed\u30b0\u30e9\u30e0\u5168\u4f53\u306e\u898b\u901a\u3057\u3092\u78ba\u4fdd\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"})]}),(0,r.jsx)(a.Z,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u95a2\u6570\u306e\u4f5c\u308a\u65b9"}),(0,r.jsxs)("p",{children:["\u95a2\u6570\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3088\u308a\u524d\u306b\uff0c\u95a2\u6570\u306e\u5b9a\u7fa9\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u305f\u3081\uff0c \u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u4e0a\u90e8\u3067\uff0c\u95a2\u6570\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u5ba3\u8a00\u3092\u884c\u3046\u3002 \u3053\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u3068\u306f\uff0c\u5b9f\u88c5\u3092\u305b\u305a\u306b\u95a2\u6570\u306e\u540d\u524d\uff0c\u8fd4\u3059\u5024\u306e\u578b\uff0c\u5f15\u6570\u3060\u3051\u3092\u5b9a\u3081\u308b\u3082\u306e\u3067\u3042\u308a\uff0c",(0,r.jsx)(d.Z,{source:"\u623b\u308a\u5024\u306e\u578b \u95a2\u6570\u306e\u540d\u524d(\u5f15\u6570\u306e\u578b \u5f15\u6570\u306e\u540d\u524d, ...);",language:""}),"\u306e\u3088\u3046\u306b\u66f8\u304f\u3002 \u8fd4\u3055\u308c\u308b\u5024\u306e\u3053\u3068\u3092\uff0c\u623b\u308a\u5024(return value, \u8fd4\u308a\u5024, \u8fd4\u5374\u5024)\u3068\u547c\u3076\u3002 \u95a2\u6570\u306b\u6a5f\u80fd\u3092\u3082\u305f\u305b\u308b\u5b9f\u88c5\u306f\u3053\u306e\u5ba3\u8a00\u6587\u306e\u5f8c\u306b\u66f8\u304f\u3002 main \u95a2\u6570\u3088\u308a\u3082\u5f8c\u306b\u66f8\u304f\u3053\u3068\u304c\u591a\u3044\u6c17\u304c\u3059\u308b\u304c\uff0c \u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u5ba3\u8a00\u306e\u5f8c\u306a\u3089\u3069\u3053\u3067\u3082\u3088\u3044\u3002"]}),(0,r.jsx)("p",{children:"\u6a5f\u80fd\u3092\u6301\u305f\u305b\u308b\u305f\u3081\u306e\u5b9f\u88c5\u306f\uff0c\u5f15\u6570\u3092\u5217\u6319\u3057\u305f () \u306e\u5f8c\u306b\uff0c\u8907\u5408\u6587\u3068\u3057\u3066\u66f8\u304f\u3002 \u623b\u308a\u5024\u306f\uff0creturn \u6587\u3092\u4f7f\u3063\u3066\u8fd4\u3059\u3002 \u6761\u4ef6\u306b\u5fdc\u3058\u3066\u8fd4\u3059\u5024\u304c\u7570\u306a\u308b\u5834\u5408\u306b\u306f\uff0c\u8907\u6570\u306e return \u6587\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u8aac\u660e\u306e\u305f\u3081\u306e\u610f\u5473\u306e\u306a\u3044\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4ee5\u4e0b\u306b\u793a\u3059\u3002",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/function/function1.c",language:"c"}),"\u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3059\u308b\u3068\uff0c main \u95a2\u6570\u304c\u5b9f\u884c\u3055\u308c\uff0cfunctionA \u304c\u547c\u3070\u308c\u308b\u3002 \u305d\u306e functionA \u306e\u5b9f\u88c5\u306b\u3057\u305f\u304c\u3063\u3066\u51e6\u7406\u304c\u9032\u307f\uff0c functionB \u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3002 functionB \u306e\u5b9f\u88c5\u306b\u3057\u305f\u304c\u3063\u3066\u51e6\u7406\u304c\u9032\u307f\uff0c\u623b\u308a\u5024\u3092\u623b\u3059\u3002 functionA \u304c\u305d\u308c\u3092\u4f7f\u3063\u3066\u623b\u308a\u5024\u3092\u8fd4\u3059\u3002 \u305d\u308c\u306f main \u95a2\u6570\u306e printf \u306e\u5f15\u6570\u3068\u3057\u3066\u4f7f\u308f\u308c\u6a19\u6e96\u51fa\u529b\u3055\u308c\u308b\u3002"]})]})})]})})]})}},5166:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/elements/function",function(){return t(3249)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=5166,e(e.s=n);var n}));var n=e.O();_N_E=n}]);