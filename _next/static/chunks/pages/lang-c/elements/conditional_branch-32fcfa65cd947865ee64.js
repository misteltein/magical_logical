(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(3272),s=t.n(i);function c(e){return(0,r.jsx)("div",{className:s().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var r=t(5893),i=t(3349),s=t(6156),c=t(2949),l=t(6610),a=t(5991),o=t(5255),d=t(6089),h=t(7608),u=t(7294),f=t(3300),x=t.n(f),j=t(9235),m=t(7694),g=t(5005),p=t(7625),Z=t(767),v=t(8774),b=t(4370),_=t(3253),y=t.n(_);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,h.Z)(e);if(n){var i=(0,h.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}function I(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:n,children:e.children})}var N=function(e){(0,o.Z)(t,e);var n=O(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?x()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(j.lG.theme,(0,c.Z)(j.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(j.ZP,k(k({theme:m.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,i=n.style,s=n.tokens,c=n.getLineProps,l=n.getTokenProps;return(0,r.jsx)(I,{className:t,style:i,maxHeight:e.maxHeight,children:s.map((function(e,n){return(0,r.jsx)("div",k(k({},c({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",k({},l({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},M=function(e){(0,o.Z)(t,e);var n=O(t);function t(e){var r;return(0,l.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,i.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,i.Z)(r)),r}return(0,a.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(N,k({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(p.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(y(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:C,children:[(0,r.jsx)(N,k(k({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(g.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(p.G,{icon:b.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(g.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(p.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(N,k({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(4824),s=t.n(i);function c(e){return(0,r.jsx)("div",{className:s().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(4091),s=t.n(i);function c(e){return(0,r.jsx)("div",{className:s().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(3062),s=t(4315),c=t(4505),l=t(1664);t(7625);function a(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(i.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(l.default,{href:"/lang-c",className:"font-weight-bold",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(i.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(i.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(s.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(c.Z.Divider,{}),(0,r.jsxs)(c.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(i.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(i.Z.Collapse,{id:"nav2",children:(0,r.jsx)(s.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(i.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(i.Z.Collapse,{id:"nav3",children:(0,r.jsx)(s.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,r.jsx)(i.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(i.Z.Collapse,{id:"nav4",children:(0,r.jsx)(s.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(c.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,r.jsx)(c.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,r.jsx)(i.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(i.Z.Collapse,{id:"nav5",children:(0,r.jsx)(s.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(c.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(c.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),i=t(5513),s=t.n(i);function c(e){return(0,r.jsx)("div",{className:s().width,children:e.children})}},6885:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),i=t(9008),s=t(7074),c=t(8237),l=t(603),a=t(5642),o=t(6905),d=t(1221);function h(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(c.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)("h1",{children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)("p",{children:"\u6761\u4ef6\u5206\u5c90\u3068\u306f\uff0c\u6761\u4ef6\u306b\u5fdc\u3058\u3066\u884c\u3046\u51e6\u7406\u3092\u5909\u5316\u3055\u305b\u308b\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u69cb\u9020\u3067\u3042\u308b\u3002 \u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u67d4\u8edf\u3055\u3092\u3082\u305f\u305b\u308b\u305f\u3081\u306b\u5fc5\u9808\u3067\u3042\u308a\uff0c\u975e\u5e38\u306b\u91cd\u8981\u3067\u3042\u308b\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"if \u6587"}),(0,r.jsx)("p",{children:"if \u6587\u306f\uff0c\u3042\u308b\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u3068\u304d\u306b\uff0c\u7279\u5b9a\u306e\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306a \u9078\u629e\u7684\u306a\u51e6\u7406\u3092\u3059\u308b\u305f\u3081\u306b\u4f7f\u308f\u308c\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u4f8b\u3048\u3070\uff0c\u6574\u6570\u578b\u3082\u3057\u304f\u306f\u6d6e\u52d5\u5c0f\u6570\u70b9\u578b\u306e\u5909\u6570 a \u304c\u3042\u308a\uff0c\u305d\u306e\u5024\u304c 100 \u3092\u8d85\u3048\u3066\u3044\u305f\u3089 large\u21b5 \u3068\u51fa\u529b\u3059\u308b\u3068\u304d\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u304f\u3002"]}),(0,r.jsxs)("p",{children:["if \u306b\u7d9a\u304f ( ) \u306e\u5185\u5074\u3092\u8a55\u4fa1\u3057\u305f\u3068\u304d\u771f(true)\u306a\u3089\u3070\uff0c\u305d\u306e\u5f8c\u306e\u6587\u304c\u5b9f\u884c\u3055\u308c\u308b\u3002 \u3053\u306e\u6587\u306f\u5358\u7d14\u6587\u3067\u3082\u8907\u5408\u6587\u3067\u3082\u3088\u304f\uff0c\u5236\u5fa1\u6587\u3067\u3082\u826f\u3044\u3002 \u3064\u307e\u308a\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if2.c",language:"c"}),"\u306e\u3088\u3046\u306b\u8907\u5408\u6587\u3092\u9078\u629e\u7684\u306b\u5b9f\u884c\u3055\u305b\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002 \u307e\u305f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if3.c",language:"c"}),"\u306e\u3088\u3046\u306b\u5236\u5fa1\u6587\u3092\u9078\u629e\u7684\u306b\u5b9f\u884c\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002 \u305f\u3060\u3057\uff0c\u8ad6\u7406\u6f14\u7b97\u5b50\u3092\u4f7f\u3063\u3066\u6761\u4ef6\u3092\u307e\u3068\u3081\u3089\u308c\u308b\u306a\u3089\u305d\u3046\u3057\u305f\u307b\u3046\u304c\u8aad\u307f\u3084\u3059\u304f\u306a\u308b\u3053\u3068\u304c\u591a\u3044\u3002"]}),(0,r.jsxs)("p",{children:["\u305f\u3060\u3057\uff0cif \u6587\u306b\u3088\u308a\u5b9f\u884c\u3055\u308c\u308b\u306e\u306f\u7d9a\u304f\uff11\u3064\u306e\u6587\u3060\u3051\u3067\u3042\u308b\u305f\u3081\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if4.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u304f\u3068\uff0ca > 100 \u3067\u306a\u3044\u3068\u304d\u6539\u884c\u6587\u5b57\u3060\u3051\u51fa\u529b\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308b\u3002 \u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u306f\u3088\u304f\u3042\u308b\u3002 \u305d\u306e\u3068\u304d\uff0c\u3053\u306e\u3088\u3046\u306a\u66f8\u304d\u65b9\u306f\u610f\u56f3\u3057\u306a\u3044\u6761\u4ef6\u304b\u3089\u5916\u308c\u305f\u51e6\u7406\u3092\u8a98\u767a\u3059\u308b\u305f\u3081\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if5.c",language:"c"}),"\u306e\u3088\u3046\u306b\u5358\u7d14\u6587\u3067\u6e08\u3080\u3082\u306e\u3092\u306f\u3058\u3081\u304b\u3089\u8907\u5408\u6587\u3068\u3057\u3066\u66f8\u304f\u3053\u3068\u3092\u63a8\u5968\u3059\u308b\u3053\u3068\u304c\u591a\u3044\u3002 \u305d\u3046\u3059\u308b\u3053\u3068\u3067\uff0c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b\u3068\u304d\u306b\u9593\u9055\u3044\u304c\u8d77\u304d\u306b\u304f\u304f\u306a\u308b\u305f\u3081\u3067\u3042\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u3042\u308b\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u305f\u3068\u304d\uff0c\u6e80\u305f\u3057\u3066\u3044\u306a\u3044\u3068\u304d\u305d\u308c\u305e\u308c\u306b\u3064\u3044\u3066\u306e\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u3068\u304d\u306b\u306f\uff0c else \u3092\u4f7f\u3046\u3002"}),(0,r.jsx)("p",{children:"if \u6587\u3067\u5b9f\u884c\u3059\u308b\u6587\u306e\u3042\u3068 else \u3092\u66f8\u304f\u3053\u3068\u3067\uff0c if \u306b\u7d9a\u304f\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u306a\u3044\u5834\u5408\u306b\u5b9f\u884c\u3059\u308b\u51e6\u7406\u3092\u4e0e\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u4f8b\u3048\u3070",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if-else.c",language:"c"}),"\u3068\u3044\u3046\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\uff0cif \u6587\u306e\u307f\u3092\u4f7f\u3044\u4f5c\u6210\u3057\u305f",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if-else2.c",language:"c"}),"\u3068\u7b49\u3057\u3044\u304c\uff0c\u524d\u8005\u306e\u3088\u3046\u306b else \u3092\u4f7f\u3046\u3053\u3068\u3067\u5206\u304b\u308a\u3084\u3059\u3044\u3082\u306e\u306b\u306a\u308b\u3002 \u3053\u306e else \u306e\u5834\u5408\u3082\uff0c\u7d9a\u304f\uff11\u3064\u306e\u6587\u306e\u307f\u304c\u5b9f\u884c\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u307b\u3057\u3044\u3002"]}),(0,r.jsxs)("p",{children:["if \u6587\u3068\u540c\u69d8\u306b\uff0celse \u306b\u7d9a\u304f\u6587\u306f\u5236\u5fa1\u6587\u3067\u3082\u3088\u3044\u306e\u3067\uff0c\u3055\u3089\u306b if \u6587\u3092\u7e4b\u3052\u3066",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/if-else-if.c",language:"c"}),"\u306e\u3088\u3046\u306b\u51e6\u7406\u3092\u5206\u5c90\u3055\u305b\u3066\u3044\u304f\u3053\u3068\u3082\u3067\u304d\u308b\u3002"]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"switch \u6587"}),(0,r.jsx)("p",{children:"switch \u6587\u306f\u5909\u6570\u306e\u3068\u308b\u5024\u304c\u8907\u6570\u3042\u308a\uff0c\u305d\u308c\u306b\u5fdc\u3058\u305f\u51e6\u7406\u3092\u5b9f\u73fe\u3059\u308b\u5834\u5408\u306b\u3088\u304f\u4f7f\u308f\u308c\u308b\u5236\u5fa1\u6587\u3067\u3042\u308b\u3002 \u305f\u3060\u6761\u4ef6\u306b\u5408\u81f4\u3059\u308b\u5834\u5408\u306b\u3042\u308b\u51e6\u7406\u3092\u3059\u308b\u306a\u3089 if \u6587\u3092\u3044\u304f\u3064\u304b\u66f8\u3051\u3070\u6a5f\u80fd\u7684\u306b\u5341\u5206\u3067\u3042\u308b\u304c\uff0c switch \u6587\u3067\u306f\u30d5\u30a9\u30fc\u30eb\u30b9\u30eb\u30fc\u3068\u3044\u3046\u72ec\u7279\u306e\u6280\u6cd5\u3067\u51e6\u7406\u3092\u9014\u4e2d\u304b\u3089\u5408\u6d41\u3055\u305b\u308b\u3088\u3046\u306a\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsxs)("p",{children:["switch \u6587\u306f\uff0c\u6574\u6570\u30ea\u30c6\u30e9\u30eb\u304b\u6574\u6570\u578b\u306e\u5909\u6570\u306e\u5024\u306b\u5fdc\u3058\u305f\u51e6\u7406\u3092\u884c\u3046\u3002 \u6587\u5b57\u3084\u6587\u5b57\u5217\uff0c\u6d6e\u52d5\u5c0f\u6570\u70b9\u6570\u306f\u305d\u306e\u307e\u307e\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u3002 \u4f8b\u3048\u3070\u5909\u6570 a \u306e\u5024\u304c 1, 2, 3 \u305d\u308c\u305e\u308c\u306e\u3068\u304d case 1\u21b5, case 2\u21b5, case 3\u21b5 \u3068\u305d\u308c\u305e\u308c\u51fa\u529b\u3057\uff0c \u3069\u308c\u306b\u3082\u5f53\u3066\u306f\u307e\u3089\u306a\u3044\u3068\u304d default \u3068\u51fa\u529b\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/switch.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u308b\u3002 \u3053\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\uff0cif \u6587\u3067\u66f8\u3051\u308b",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/switch2.c",language:"c"}),"\u306e\u51e6\u7406\u3068\u540c\u7b49\u3067\u3042\u308b\u3002 \u5834\u5408\u5206\u3051\u306e\u305f\u3081\u306e\u5024\u3092 1, 2, 3 \u3068\u632f\u3063\u305f\u304c\uff0ccase \u304c\u91cd\u8907\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u304b\u307e\u308f\u306a\u3044\u3002 \u5024\u304c\u96e2\u308c\u3066\u3044\u3066\u3082\u3088\u3044\u3002 \u305f\u3060\u3057\uff0cdefault \u306f\u6700\u5f8c\u306b\u66f8\u304f\u3053\u3068\u3002"]}),(0,r.jsx)("p",{children:"break \u306f\u51e6\u7406\u3092\u305d\u3053\u3067\u3084\u3081\uff0cswitch \u6587\u3092\u629c\u3051\u308b\u3088\u3046\u6307\u793a\u3059\u308b\u6587\u3067\u3042\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u305d\u308c\u3067\u306f break \u3092",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/conditional_branch/switch3.c",language:"c"}),"\u306e\u3088\u3046\u306b\u5916\u3057\u3066\u307f\u308b\u3068\uff0c\u51e6\u7406\u306f\u3069\u3046\u306a\u308b\u3060\u308d\u3046\u3002 a \u306e\u5024\u304c 1 \u3067\u3042\u308b\u3068\u304d\u306b\u306f\uff0ccase 1\u21b5case 2\u21b5 \u3068\u8868\u793a\u3055\u308c\uff0c 2 \u3067\u3042\u308b\u3068\u304d\u306f case 2\u21b5 \u306e\u307f\u304c\u8868\u793a\u3055\u308c\u308b\u3002 \u305d\u3057\u3066\uff0ca \u306e\u5024\u304c 3 \u3067\u3042\u308b\u3068\u304d\u306b\u306f case 3\u21b5default\u21b5 \u3068\u8868\u793a\u3055\u308c, a \u306e\u5024\u304c 1, 2, 3 \u306e\u3069\u308c\u3067\u3082\u306a\u3044\u5834\u5408\u306b\u306f default\u21b5 \u3068\u8868\u793a\u3055\u308c\u308b\u3002 \u3053\u306e\u3088\u3046\u306b\u6761\u4ef6\u306e\u5224\u5b9a\u3092\u98db\u3070\u3057\u3066\uff0c\u6b21\u306e\u6761\u4ef6\u306b\u5bfe\u5fdc\u3059\u308b\u51e6\u7406\u306b\u79fb\u3089\u305b\u308b\u6280\u6cd5\u306f \u30d5\u30a9\u30fc\u30eb\u30b9\u30eb\u30fc\u3068\u547c\u3070\u308c\u308b\u3002"]}),(0,r.jsx)("p",{children:"\u30d5\u30a9\u30fc\u30eb\u30b9\u30eb\u30fc\u306e\u51e6\u7406\u3092 if \u6587\u3067\u66f8\u304f\u5834\u5408\u306b\u306f\uff0c\u6761\u4ef6\u6587\u304c\u3068\u3066\u3082\u8907\u96d1\u306b\u306a\u308b\u305f\u3081\uff0c \u3053\u306e\u66f8\u304d\u63db\u3048\u306f\u3042\u307e\u308a\u5b9f\u7528\u7684\u3067\u306f\u306a\u3044\u3002"})]})]})]})})]})}},9127:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/elements/conditional_branch",function(){return t(6885)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=9127,e(e.s=n);var n}));var n=e.O();_N_E=n}]);