(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(3272),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var r=t(5893),s=t(3349),i=t(6156),l=t(2949),c=t(6610),o=t(5991),a=t(5255),d=t(6089),h=t(7608),u=t(7294),x=t(3300),j=t.n(x),f=t(9235),p=t(7694),m=t(5005),g=t(7625),Z=t(767),v=t(8774),b=t(4370),y=t(3253),w=t.n(y);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,h.Z)(e);if(n){var s=(0,h.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,d.Z)(this,t)}}function I(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:n,children:e.children})}var N=function(e){(0,a.Z)(t,e);var n=O(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?j()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(f.lG.theme,(0,l.Z)(f.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(f.ZP,k(k({theme:p.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,i=n.tokens,l=n.getLineProps,c=n.getTokenProps;return(0,r.jsx)(I,{className:t,style:s,maxHeight:e.maxHeight,children:i.map((function(e,n){return(0,r.jsx)("div",k(k({},l({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",k({},c({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},M=function(e){(0,a.Z)(t,e);var n=O(t);function t(e){var r;return(0,c.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,o.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(N,k({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(w(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:C,children:[(0,r.jsx)(N,k(k({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(m.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:b.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(m.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(N,k({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4824),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(4091),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),s=t(3062),i=t(4315),l=t(4505),c=t(1664);t(7625);function o(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(c.default,{href:"/lang-c",className:"font-weight-bold",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(i.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(l.Z.Divider,{}),(0,r.jsxs)(l.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(l.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,r.jsx)(l.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(i.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(l.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(l.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),s=t(5513),i=t.n(s);function l(e){return(0,r.jsx)("div",{className:i().width,children:e.children})}},919:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),s=t(9008),i=t(7074),l=t(8237),c=t(603),o=t(5642),a=t(6905),d=t(1221);function h(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u53cd\u5fa9"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(l.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{children:"\u53cd\u5fa9"}),(0,r.jsx)("p",{children:"\u53cd\u5fa9\u3068\u306f\uff0c\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u9593\uff0c\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u3092\u884c\u3046\u3088\u3046\u306a\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u69cb\u9020\u3067\u3042\u308b\u3002 \u7e70\u308a\u8fd4\u3059\u56de\u6570\u306f\u5b9a\u6570\u56de\u306e\u5834\u5408\u3082\u3042\u308c\u3070\uff0c\u30d7\u30ed\u30b0\u30e9\u30e0\u304c\u5b9f\u884c\u3055\u308c\u308b\u307e\u3067\u308f\u304b\u3089\u306a\u3044\u3053\u3068\u3082\u3042\u308b\u3002 \u3069\u3061\u3089\u306b\u3057\u3066\u3082\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u5197\u9577\u3055\u3092\u6e1b\u3089\u3057\u67d4\u8edf\u3055\u3092\u751f\u307f\u51fa\u3059\u91cd\u8981\u306a\u69cb\u9020\u3067\u3042\u308b\u3002"}),(0,r.jsx)("p",{children:"\u4ee5\u4e0b\uff0c\u5909\u6570 a \u306f\u4e8b\u524d\u306b\u5ba3\u8a00\u3055\u308c\u3066\u3044\u308b\u6574\u6570\u578b\u306e\u5909\u6570\u3068\u3059\u308b\u3002"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"while \u6587"}),(0,r.jsx)("p",{children:"while \u6587\u306f\uff0c\u3042\u308b\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u9593\uff0c\u7279\u5b9a\u306e\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306a \u7e70\u308a\u8fd4\u3057\u3092\u884c\u3046\u5236\u5fa1\u6587\u3067\u3042\u308b\u3002"}),(0,r.jsxs)("p",{children:["while \u306b\u7d9a\u304f ( ) \u306b\u306f\u7d99\u7d9a\u6761\u4ef6\u3092\u66f8\u304f\u3002 \u3053\u306e\u6761\u4ef6\u3092\u8a55\u4fa1\u3057\u305f\u3068\u304d\u771f\u3067\u3042\u308c\u3070\uff0c\u305d\u306e\u3042\u3068\u306e\uff11\u6587\u3092\u5b9f\u884c\u3059\u308b\u3002 \u305d\u306e\u305f\u3081\uff0c\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u9593\uff0c\u51e6\u7406\u304c\u7e70\u308a\u8fd4\u3055\u308c\u308b\u3002 \u4f8b\u3048\u3070\uff0c\u5909\u6570 a \u306e\u5024\u304c 5 \u672a\u6e80\u3067\u3042\u308b\u9593 a \u306e\u5024\u3092\u51fa\u529b\u3057\uff0c \u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\uff08++\uff09\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/while.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u308b\u3002 \u7e70\u308a\u8fd4\u3059\u51e6\u7406\u304c\u5358\u7d14\u5206\u3067\u5341\u5206\u66f8\u3051\u305f\u3068\u3057\u3066\u3082\uff0c","{"," ","}"," \u3067\u56f2\u3063\u3066\u304a\u3044\u305f\u307b\u3046\u304c\u3088\u3044\u3002 \u3053\u3053\u3067\u306f\uff11\u6587\u3092\u7e70\u308a\u8fd4\u3059\u3053\u3068\u3092\u5f37\u8abf\u3059\u308b\u305f\u3081\u306b\uff0c\u3042\u3048\u3066\u56f2\u3063\u3066\u3044\u306a\u3044\u3002"]}),(0,r.jsx)("p",{children:"\u7e70\u308a\u8fd4\u3057\u5b9f\u884c\u3059\u308b\uff11\u6587\u306f\uff0c\u5358\u7d14\u6587\uff0c\u8907\u5408\u6587\uff0c\u5236\u5fa1\u6587\u3069\u308c\u3067\u3082\u3088\u3044\u3002 \u3053\u306e\u6587\u304c\u5b9f\u884c\u3055\u308c\u305f\u3042\u3068\uff0c \u7d99\u7d9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u518d\u3073\u5224\u5b9a\u304c\u3055\u308c\u308b\u3002"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"do-while \u6587"}),"do-while \u6587\u3082 ( ) \u306e\u5185\u5074\u306b\u7d99\u7d9a\u6761\u4ef6\u3092\u66f8\u304d\uff0c\u305d\u308c\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u9593\uff0c do \u306b\u7d9a\u304f\uff11\u6587\u3092\u7e70\u308a\u8fd4\u3057\u5b9f\u884c\u3059\u308b\u3002",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/do-while.c",language:"c"}),"\u7570\u306a\u308b\u70b9\u306f\uff0c\u51e6\u7406\u3092\u5b9f\u884c\u3057\u305f\u3042\u3068\u306b\u7d99\u7d9a\u6761\u4ef6\u3092\u8a55\u4fa1\u3059\u308b\u3068\u3053\u308d\u3067\u3042\u308b\u3002 \u3064\u307e\u308a\uff11\u5ea6\u306f\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u308b\u3002"]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"for \u6587"}),(0,r.jsx)("p",{children:"for \u6587\u306f\uff0c\u521d\u671f\u5316\u51e6\u7406\uff0c\u7d99\u7d9a\u6761\u4ef6\uff0c\u5f8c\u51e6\u7406\u306e\uff13\u3064\u306e\u8a2d\u5b9a\u304c\u3067\u304d\u308b\u53cd\u5fa9\u51e6\u7406\u306e\u305f\u3081\u306e\u5236\u5fa1\u6587\u3067\u3042\u308b\u3002 \u304a\u305d\u3089\u304f\u53cd\u5fa9\u51e6\u7406\u306e\u4e2d\u3067\u306f\u6700\u3082\u3088\u304f\u4f7f\u308f\u308c\u308b\u6587\u3067\u3042\u308b\u3002"}),(0,r.jsxs)("p",{children:["for \u6587\u306f\uff0cfor \u306b\u7d9a\u3051\u3066 (\u524d\u51e6\u7406; \u7d99\u7d9a\u6761\u4ef6; \u5f8c\u51e6\u7406) \u306e\u3088\u3046\u306b\u66f8\u304f\u3002 \u7d99\u7d9a\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u9593\uff0c\u305d\u306e\u5f8c\u306e\uff11\u6587\u304c\u7e70\u308a\u8fd4\u3055\u308c\u308b\u3002 \u3053\u306e\uff11\u6587\u306f\uff0c\u5358\u7d14\u6587\uff0c\u8907\u5408\u6587\uff0c\u5236\u5fa1\u6587\u3069\u308c\u3067\u3082\u3088\u3044\u3002 \u4f8b\u3048\u3070\uff0c\u5909\u6570 a \u306e\u5024\u3092 0 \u306b\u3057\u3066\u304b\u3089\uff0ca \u304c 5 \u672a\u6e80\u3067\u3042\u308b\u9593\uff0c a \u306e\u5024\u3092\u51fa\u529b\u3057\uff0c\u51fa\u529b\u5f8c\u306b a \u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\u3059\u308b\u3088\u3046\u306a\u7e70\u308a\u8fd4\u3057\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/for.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u307e\u305f\uff0c\u3053\u306e\u7e70\u308a\u8fd4\u3057\u3067\u4f7f\u3046\u3060\u3051\u306e\u88dc\u52a9\u7684\u306a\u5909\u6570\u3092 \u5e83\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u3082\u3064\u3088\u3046\u306b\u4f5c\u308b\u3053\u3068\u306f\uff0c \u30d7\u30ed\u30b0\u30e9\u30e0\u5168\u4f53\u306e\u898b\u901a\u3057\u3092\u60aa\u304f\u3057\u305f\u308a\uff0c \u601d\u3044\u3082\u3057\u306a\u3044\u30df\u30b9\u3092\u5f15\u304d\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u51fa\u3066\u304f\u308b\u306e\u3067\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/for2.c",language:"c"}),"\u306e\u3088\u3046\u306b\u524d\u51e6\u7406\u90e8\u5206\u3067\u5909\u6570\u3092\u4f5c\u308b\u3053\u3068\u304c\u3042\u308b\u3002 \u3053\u3053\u3067\u5ba3\u8a00\u3057\u305f\u5909\u6570\u306f\uff0cfor \u6587\u306e\u5185\u90e8\u3060\u3051\u3067\u6709\u52b9\u306b\u306a\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u3088\u304f for \u6587\u306f\u914d\u5217\u306e\u5024\u3092\u9806\u306b\u53d6\u308a\u51fa\u3059\u3068\u304d\u306b\u4f7f\u308f\u308c\u308b\u3002 \u914d\u5217\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306f 0 \u304b\u3089\u914d\u5217\u5168\u4f53\u306e\u8981\u7d20\u6570\uff08\u9577\u3055\uff09-1 \u307e\u3067\u306a\u306e\u3067\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/for3.c",language:"c"}),"\u306e\u3088\u3046\u306b\uff0c\u914d\u5217\u306e\u8981\u7d20\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"break \u6587"}),(0,r.jsx)("p",{children:"while, do-while, for \u6587\u306e\u7e70\u308a\u8fd4\u3057\u3092\u7d42\u3048\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306f\uff0c \u306a\u308b\u3079\u304f\u7d99\u7d9a\u6761\u4ef6\u306b\u3088\u3063\u3066\u4e0e\u3048\u305f\u3044\u3002 \u3057\u304b\u3057 \u5185\u90e8\u306e\u51e6\u7406\u5185\u5bb9\u306b\u3088\u3063\u3066\u7e70\u308a\u8fd4\u3057\u3092\u4e2d\u65ad\u3057\u305f\u3044\u5834\u5408\u304c\u5ea6\u3005\u3042\u308b\u3002 break \u6587\u306f\u3053\u3046\u3044\u3063\u305f\u5834\u5408\u306b\u4f7f\u3046\u3082\u306e\u3067\uff0c \u3053\u306e\u6587\u3092\u542b\u3080\u7e70\u308a\u8fd4\u3057\u306e\u51e6\u7406\u3092\uff11\u3064\u3060\u3051\uff0c\u629c\u3051\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"}),(0,r.jsxs)("p",{children:["break \u6587\u3092\u4f7f\u3063\u305f\u4e2d\u65ad\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/break.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u308b\u3002\u3053\u306e\u5834\u5408\uff0cb \u306e\u5024\u304c 2 \u306b\u306a\u3063\u305f\u6642\u70b9\u3067\uff0c\u7e70\u308a\u8fd4\u3057\u3092\u4e2d\u65ad\u3059\u308b\u3002"]})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"continue \u6587"}),(0,r.jsxs)("p",{children:["\u7e70\u308a\u8fd4\u3057\u51e6\u7406\u306e\u3046\u3061\uff0c\uff11\u90e8\u306e\u51e6\u7406\u3060\u3051\u9664\u304f\u5834\u5408\u306b\u306f\uff0ccontinue \u6587\u3092\u4f7f\u3046\u3002 continue \u6587\u304c\u51e6\u7406\u3055\u308c\u305f\u5f8c\u306f\uff0c\u7d99\u7d9a\u6761\u4ef6\u306e\u8a55\u4fa1\u306b\u79fb\u308b\u305f\u3081\uff0c continue \u6587\u3088\u308a\u3082\u5f8c\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u90e8\u5206\u306e\u51e6\u7406\u306f\u7701\u304b\u308c\u308b\u3002 \u4f8b\u3048\u3070\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/continue.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u3051\u3070\uff0cb \u306e\u5024\u304c 2 \u306e\u3068\u304d\u3060\u3051 b \u306e\u5024\u306e\u51fa\u529b\u306f\u884c\u308f\u308c\u306a\u3044\u3002 \u305f\u3060\uff0c--- \u306e\u51fa\u529b\u307e\u3067\u306f\u884c\u308f\u308c\u308b\u3002"]})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h2",{children:"goto \u6587"}),(0,r.jsx)("p",{children:"goto \u6587\u306f\u4e71\u7528\u53b3\u7981\u3067\u3042\u308b\u304c\uff0c\u4f7f\u3063\u305f\u307b\u3046\u304c\u3044\u3044\u6a5f\u4f1a\u3082\u3042\u308b\u6ce8\u610f\u304c\u5fc5\u8981\u306a\u6587\u3067\u3042\u308b\u3002 goto\u6587\u3092\u4f7f\u308f\u305a\u306b\u540c\u69d8\u306e\u7d50\u679c\u3092\u3082\u305f\u3089\u3059\u51e6\u7406\u3092\u66f8\u3051\u308b\u5834\u5408\u304c\u307b\u3068\u3093\u3069\u3067\u3042\u308b\u3002 \u3057\u304b\u3057\uff0c goto \u6587\u306e\u4f7f\u7528\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u30c8\u30ea\u30c3\u30ad\u30fc\u306a\u51e6\u7406\u3092\u66f8\u304f\u3053\u3068\u306b\u306a\u308a\uff0c \u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u898b\u901a\u3057\u304c\u60aa\u304f\u306a\u308b\u5834\u5408\u306b\u9650\u308a\uff0c\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u308b\u3002"}),(0,r.jsxs)("p",{children:["\u524d\u8ff0\u306e\u3088\u3046\u306b break \u6587\u306f\u7e70\u308a\u8fd4\u3057\u306e\u51e6\u7406\u3092\uff11\u3064\u3060\u3051\u3057\u304b\u629c\u3051\u51fa\u305b\u306a\u3044\u305f\u3081\uff0c \u591a\u91cd\u306e\u7e70\u308a\u8fd4\u3057\u3092\u4e00\u5ea6\u306b\u629c\u3051\u305f\u3044\u5834\u5408\u306b\u306f\uff0cgoto \u6587\u3092\u4f7f\u3046\u3053\u3068\u306b\u306a\u308b\u3002 \uff08goto \u6587\u3092\u4f7f\u308f\u305a\u306b\u540c\u69d8\u306e\u51e6\u7406\u3092\u884c\u3046\u65b9\u6cd5\u3092\u66f8\u3044\u3066\u307f\u308b\u3053\u3068\u3092\u52e7\u3081\u308b\u3002\uff09 goto \u6587\u306b\u306f\u3069\u3053\u306b\u51e6\u7406\u306e\u6d41\u308c\u3092\u98db\u3070\u305b\u3070\u3044\u3044\u306e\u304b\u30e9\u30d9\u30eb\u3092\u4f7f\u3063\u3066\u4e0e\u3048\u308b\u3002 \u4f8b\u3048\u3070\uff0c\u4e8c\u91cd\u306e for \u6587\u3092\u6761\u4ef6\u306b\u5fdc\u3058\u3066\u629c\u3051\u51fa\u3059\u5834\u5408\u306b\u306f\uff0c",(0,r.jsx)(d.Z,{uri:"/codes/lang-c/loop/goto.c",language:"c"}),"\u306e\u3088\u3046\u306b\u66f8\u304f\u3002\u3053\u3053\u3067 end \u3068\u66f8\u304b\u308c\u305f\u90e8\u5206\u304c\u30e9\u30d9\u30eb\u3067\uff0c \u3053\u306e\u540d\u524d\u306f\u5909\u6570\u3068\u540c\u69d8\u306b\u81ea\u7531\u306b\u5b9a\u3081\u3089\u308c\u308b\u3002"]})]})]})]})})]})}},1659:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/elements/loop",function(){return t(919)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=1659,e(e.s=n);var n}));var n=e.O();_N_E=n}]);