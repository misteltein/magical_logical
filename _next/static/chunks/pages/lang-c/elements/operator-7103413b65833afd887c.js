(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{4059:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var t=n(5893),r=n(3272),c=n.n(r);function l(e){return(0,t.jsx)("div",{className:c().abstract,style:e.styles,children:e.children})}},2064:function(e,s,n){"use strict";n.d(s,{Z:function(){return T}});var t=n(5893),r=n(3349),c=n(6156),l=n(2949),i=n(6610),a=n(5991),d=n(5255),o=n(6089),h=n(7608),u=n(7294),x=n(3300),j=n.n(x),g=n(9235),p=n(7694),m=n(5005),f=n(7625),Z=n(767),b=n(8774),v=n(4370),y=n(3253),_=n.n(y),w=n(4184),N=n.n(w);function O(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function I(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?O(Object(n),!0).forEach((function(s){(0,c.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function k(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=(0,h.Z)(e);if(s){var r=(0,h.Z)(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return(0,o.Z)(this,n)}}var C=function(e){(0,d.Z)(n,e);var s=k(n);function n(e){var t;return(0,i.Z)(this,n),(t=s.call(this,e)).state={maxHeight:"15rem"},t.props.maxHeight&&Object.assign(t.state,{maxHeight:t.props.maxHeight}),t}return(0,a.Z)(n,[{key:"render",value:function(){return(0,t.jsx)("pre",{className:N()("code-core",this.props.className),style:this.state,children:this.props.children})}}]),n}(u.Component),M=function(e){(0,d.Z)(n,e);var s=k(n);function n(e){var t;return(0,i.Z)(this,n),(t=s.call(this,e)).state={loaded:!1,source:"",showModal:!1},t}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?j()(this.props.uri).then((function(e){return e.text()})).then((function(e){var s=e.split("\n");return""===s.slice(-1)[0]&&s.pop(),s.join("\n")})).then((function(s){e.setState({loaded:!0,source:s})})).catch((function(s){return e.setState({loaded:!0,source:s})})):this.setState({loaded:!0,source:this.props.source})}},{key:"render",value:function(){var e=this,s=(g.lG.theme,(0,l.Z)(g.lG,["theme"]));return(0,t.jsx)("div",{children:(0,t.jsx)(g.ZP,I(I({theme:p.Z},s),{},{code:this.state.source,language:this.props.language,children:function(s){var n=s.className,r=s.style,c=s.tokens,l=s.getLineProps,i=s.getTokenProps;return(0,t.jsx)(C,{className:n,style:r,maxHeight:e.props.maxHeight,children:c.map((function(e,s){return(0,t.jsx)("div",I(I({},l({line:e,key:s})),{},{children:e.map((function(e,s){return(0,t.jsx)("span",I({},i({token:e,key:s})))}))}))}))})}}))})}}]),n}(u.Component),P={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},T=function(e){(0,d.Z)(n,e);var s=k(n);function n(e){var t;return(0,i.Z)(this,n),(t=s.call(this,e)).state={showModal:!1},t.handleOpenModal=t.handleOpenModal.bind((0,r.Z)(t)),t.handleCloseModal=t.handleCloseModal.bind((0,r.Z)(t)),t}return(0,a.Z)(n,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,t.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,t.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language}),(0,t.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.Z,{variant:"outline-dark",size:"sm",onClick:this.handleOpenModal,children:(0,t.jsx)(f.G,{icon:b.TT,style:{width:"1rem"}})}),(0,t.jsxs)(_(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:P,children:[(0,t.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language,maxHeight:"70vh"}),(0,t.jsx)("div",{style:{textAlign:"right"},children:(0,t.jsx)(m.Z,{variant:"outline-dark",size:"sm",onClick:this.handleCloseModal,children:(0,t.jsx)(f.G,{icon:v.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,t.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,t.jsx)(m.Z,{variant:"outline-primary",size:"sm",className:"m-0 mr-1",children:(0,t.jsx)(f.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,t.jsx)(M,{uri:this.props.uri,source:this.props.source,language:this.props.language})}}]),n}(u.Component)},5525:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var t=n(5893),r=n(4824),c=n.n(r);function l(e){return(0,t.jsx)("div",{className:c().element,style:e.styles,children:e.children})}},897:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var t=n(5893),r=n(4091),c=n.n(r);function l(e){return(0,t.jsx)("div",{className:c().grid,children:e.children})}},9955:function(e,s,n){"use strict";n.d(s,{Z:function(){return a}});var t=n(5893),r=n(3062),c=n(4315),l=n(4505),i=n(1664);function a(){return(0,t.jsx)("div",{className:"sticky-top",children:(0,t.jsxs)(r.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,t.jsx)(i.default,{href:"/lang-c",children:(0,t.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,t.jsx)(r.Z.Toggle,{"aria-controls":"nav2"}),(0,t.jsx)(r.Z.Collapse,{id:"nav2",children:(0,t.jsxs)(c.Z,{className:"ml-auto mr-auto",children:[(0,t.jsx)(l.Z.Divider,{}),(0,t.jsxs)(l.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,t.jsx)(l.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,t.jsx)(r.Z.Toggle,{"aria-controls":"nav2"}),(0,t.jsx)(r.Z.Collapse,{id:"nav2",children:(0,t.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,t.jsxs)(l.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,t.jsx)(r.Z.Toggle,{"aria-controls":"nav3"}),(0,t.jsx)(r.Z.Collapse,{id:"nav3",children:(0,t.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,t.jsxs)(l.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,t.jsx)(l.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/complexes/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790"})]})})}),(0,t.jsx)(r.Z.Toggle,{"aria-controls":"nav4"}),(0,t.jsx)(r.Z.Collapse,{id:"nav4",children:(0,t.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,t.jsxs)(l.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,t.jsx)(l.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"}),(0,t.jsx)(l.Z.Item,{href:"/lang-c/subjects/finch",children:"\u30c7\u30fc\u30bf\u89e3\u6790\u6539"})]})})}),(0,t.jsx)(r.Z.Toggle,{"aria-controls":"nav5"}),(0,t.jsx)(r.Z.Collapse,{id:"nav5",children:(0,t.jsx)(c.Z,{className:"ml-auto mr-auto",children:(0,t.jsx)(l.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,t.jsx)(l.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},6535:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var t=n(5893),r=n(5513),c=n.n(r);function l(e){return(0,t.jsx)("div",{className:c().width,children:e.children})}},9208:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return h}});var t=n(5893),r=n(9008),c=n(6535),l=n(9955),i=n(4059),a=n(897),d=n(5525),o=n(2064);function h(){return(0,t.jsxs)("div",{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"\u6f14\u7b97\u5b50"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(l.Z,{}),(0,t.jsx)("main",{children:(0,t.jsxs)(c.Z,{children:[(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h1",{children:"\u6f14\u7b97\u5b50"}),(0,t.jsx)("p",{children:"\u6f14\u7b97\u5b50\u306f\uff0c\u6570\u5b66\u7684\u30fb\u8ad6\u7406\u7684\u306a\u51e6\u7406\uff08\u6f14\u7b97\uff09\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\u30b7\u30f3\u30dc\u30eb\u3067\u3042\u308b\u3002 \u5024\u306e\u5909\u66f4\u3060\u3051\u3067\u306a\u304f\uff0c\u6761\u4ef6\u5206\u5c90\u3084\u30eb\u30fc\u30d7\u306e\u69cb\u9020\u3092\u8868\u3059\u305f\u3081\u306b\u3082\u4f7f\u308f\u308c\u308b\u3002"})]}),(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("h2",{children:"\u7b97\u8853\u6f14\u7b97\u5b50"}),(0,t.jsxs)("table",{className:"table table-striped mt-3 mb-3",children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{scope:"col",children:"\u6f14\u7b97\u5b50"}),(0,t.jsx)("th",{scope:"col",children:"\u6a5f\u80fd"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a + b",language:"c"})}),(0,t.jsx)("td",{children:"a \u3068 b \u306e\u548c\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a - b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304b\u3089 b \u3092\u5f15\u3044\u305f\u5dee\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a * b",language:"c"})}),(0,t.jsx)("td",{children:"a \u3068 b \u306e\u7a4d\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a / b",language:"c"})}),(0,t.jsx)("td",{children:"a \u3092 b \u3067\u5272\u3063\u305f\u5546\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a % b",language:"c"})}),(0,t.jsx)("td",{children:"a \u3092 b \u3067\u5272\u3063\u305f\u4f59\u308a\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"++a \u307e\u305f\u306f a++",language:"c"})}),(0,t.jsx)("td",{children:"a \u306b 1 \u3092\u8db3\u3059"})]})]})]})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("h2",{children:"\u4ee3\u5165\u6f14\u7b97\u5b50"}),(0,t.jsxs)("table",{className:"table table-striped mt-3 mb-3",children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{scope:"col",children:"\u6f14\u7b97\u5b50"}),(0,t.jsx)("th",{scope:"col",children:"\u6a5f\u80fd"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a = b",language:"c"})}),(0,t.jsx)("td",{children:"a \u306b b \u3092\u4ee3\u5165\u3059\u308b"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a += b",language:"c"})}),(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a = a + b",language:"c"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a -= b",language:"c"})}),(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a = a - b",language:"c"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a *= b",language:"c"})}),(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a = a * b",language:"c"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a /= b",language:"c"})}),(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a = a / b",language:"c"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a %= b",language:"c"})}),(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a = a % b",language:"c"})})]})]})]})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("h2",{children:"\u6bd4\u8f03\u6f14\u7b97\u5b50"}),(0,t.jsxs)("table",{className:"table table-striped mt-3 mb-3",children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{scope:"col",children:"\u6bd4\u8f03\u6f14\u7b97\u5b50"}),(0,t.jsx)("th",{scope:"col",children:"\u6a5f\u80fd"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a < b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304c b \u672a\u6e80\u306a\u3089\u771f\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a <= b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304c b \u4ee5\u4e0b\u306a\u3089\u771f\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a == b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304c b \u3068\u7b49\u3057\u3051\u308c\u3070\u771f\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a != b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304c b \u3068\u7570\u306a\u308c\u3070\u771f\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a >= b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304c b \u4ee5\u4e0a\u306a\u3089\u3070\u771f\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a > b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304c b \u8d85\u3048\u306a\u3089\u3070\u771f\u3092\u8fd4\u3059"})]})]})]})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("h2",{children:"\u8ad6\u7406\u6f14\u7b97\u5b50"}),(0,t.jsxs)("table",{className:"table table-striped mt-3 mb-3",children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{scope:"col",children:"\u6f14\u7b97\u5b50"}),(0,t.jsx)("th",{scope:"col",children:"\u6a5f\u80fd"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a && b",language:"c"})}),(0,t.jsx)("td",{children:"a \u304b\u3064 b \u306a\u3089\u771f\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a || b",language:"c"})}),(0,t.jsx)("td",{children:"a \u307e\u305f\u306f b \u306a\u3089\u771f\u3092\u8fd4\u3059"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"!a",language:"c"})}),(0,t.jsx)("td",{children:"a \u306e\u5426\u5b9a\u3092\u8fd4\u3059"})]})]})]})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("h2",{children:"\u6761\u4ef6\u6f14\u7b97\u5b50"}),"\u4e09\u9805\u6f14\u7b97\u5b50\u3068\u3082\u547c\u3070\u308c\u308b\u3002",(0,t.jsxs)("table",{className:"table table-striped mt-3 mb-3",children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{scope:"col",children:"\u6f14\u7b97\u5b50"}),(0,t.jsx)("th",{scope:"col",children:"\u6a5f\u80fd"})]}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(o.Z,{source:"a ? b : c",language:"c"})}),(0,t.jsx)("td",{children:"a \u304c\u771f\u306a\u3089\u3070 b\uff0c\u305d\u3046\u3067\u306a\u3051\u308c\u3070 c \u3092\u8fd4\u3059"})]})})]})]})]})]})})]})}},1518:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/elements/operator",function(){return n(9208)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return s=1518,e(e.s=s);var s}));var s=e.O();_N_E=s}]);