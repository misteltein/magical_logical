(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{603:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(3272),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().abstract,style:e.styles,children:e.children})}},1221:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var r=t(5893),s=t(3349),l=t(6156),i=t(2949),a=t(6610),c=t(5991),o=t(5255),h=t(6089),d=t(7608),u=t(7294),x=t(3300),m=t.n(x),p=t(9235),j=t(7694),f=t(5005),g=t(7625),Z=t(767),v=t(8774),y=t(4370),b=t(3253),_=t.n(b);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.Z)(e);if(n){var s=(0,d.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,h.Z)(this,t)}}function C(e){var n={backgroundColor:"#f6f8fa",fontSize:"14px",padding:"7px 1rem 5px 1rem",margin:"0",overflow:"auto"};return Object.keys(e).includes("maxHeight")&&(n.maxHeight=e.maxHeight),(0,r.jsx)("pre",{style:n,children:e.children})}var I=function(e){(0,o.Z)(t,e);var n=k(t);function t(e){var r;return(0,a.Z)(this,t),(r=n.call(this,e)).state={loaded:!1,source:"",showModal:!1},r.maxHeight="15rem",r.margin="",e.maxHeight&&(r.maxHeight=e.maxHeight),r}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.uri?m()(this.props.uri).then((function(e){return e.text()})).then((function(e){var n=e.split("\n");return""===n.slice(-1)[0]&&n.pop(),n.join("\n")})).then((function(n){e.setState({loaded:!0,source:n})})).catch((function(n){return e.setState({loaded:!0,source:n})})):(this.setState({loaded:!0,source:this.props.source}),this.margin="mt-3 mb-3")}},{key:"render",value:function(){var e=this,n=(p.lG.theme,(0,i.Z)(p.lG,["theme"]));return(0,r.jsx)("div",{className:this.margin,children:(0,r.jsx)(p.ZP,O(O({theme:j.Z},n),{},{code:this.state.source,language:this.props.language,children:function(n){var t=n.className,s=n.style,l=n.tokens,i=n.getLineProps,a=n.getTokenProps;return(0,r.jsx)(C,{className:t,style:s,maxHeight:e.maxHeight,children:l.map((function(e,n){return(0,r.jsx)("div",O(O({},i({line:e,key:n})),{},{children:e.map((function(e,n){return(0,r.jsx)("span",O({},a({token:e,key:n})))}))}))}))})}}))})}}]),t}(u.Component),N={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",maxHeight:"100vh",transform:"translate(-50%, -50%)"}},M=function(e){(0,o.Z)(t,e);var n=k(t);function t(e){var r;return(0,a.Z)(this,t),(r=n.call(this,e)).state={showModal:!1},r.handleOpenModal=r.handleOpenModal.bind((0,s.Z)(r)),r.handleCloseModal=r.handleCloseModal.bind((0,s.Z)(r)),r}return(0,c.Z)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return this.props.uri?(0,r.jsxs)("div",{style:{margin:"8px 0 8px 0"},children:[(0,r.jsx)(I,O({},this.props)),(0,r.jsxs)("div",{style:{textAlign:"right",padding:"5px 0 5px 0"},children:[this.props.expand&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleOpenModal,children:(0,r.jsx)(g.G,{icon:v.TT,style:{width:"1rem"}})}),(0,r.jsxs)(_(),{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,style:N,children:[(0,r.jsx)(I,O(O({},this.props),{},{maxHeight:"80vh"})),(0,r.jsx)("div",{style:{textAlign:"right"},children:(0,r.jsx)(f.Z,{variant:"outline-dark",size:"md",onClick:this.handleCloseModal,children:(0,r.jsx)(g.G,{icon:y.nY,style:{width:"1rem"}})})})]})]}),this.props.download&&(0,r.jsx)("a",{href:this.props.uri,download:!0,className:"ml-1",children:(0,r.jsx)(f.Z,{variant:"outline-primary",size:"md",className:"m-0 mr-1",children:(0,r.jsx)(g.G,{icon:Z.q7,style:{width:"1rem"}})})})]})]}):(0,r.jsx)(I,O({},this.props))}}]),t}(u.Component)},6905:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(4824),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().element,style:e.styles,children:e.children})}},5642:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(4091),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().grid,children:e.children})}},8237:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),s=t(3062),l=t(4315),i=t(4505),a=t(1664);t(7625);function c(){return(0,r.jsx)("div",{className:"sticky-top",children:(0,r.jsxs)(s.Z,{bg:"light",style:{paddingRight:"7rem"},children:[(0,r.jsx)(a.default,{href:"/lang-c",className:"font-weight-bold",children:(0,r.jsx)("span",{className:"text-dark pr-3",children:"C \u8a00\u8a9e\u5165\u9580"})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsxs)(l.Z,{className:"ml-auto mr-auto",children:[(0,r.jsx)(i.Z.Divider,{}),(0,r.jsxs)(i.Z,{title:"\u306f\u3058\u3081\u306b",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/stance",children:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3068\u306f\uff1f"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/install",children:"\u74b0\u5883\u69cb\u7bc9"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/hello",children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/introductions/trial",children:"\u52b9\u7387\u3088\u304f\u7fd2\u5f97\u3059\u308b\u305f\u3081\u306b"})]})]})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav2"}),(0,r.jsx)(s.Z.Collapse,{id:"nav2",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u69cb\u6587\u30fb\u898f\u5247",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/literal_and_variable",children:"\u30ea\u30c6\u30e9\u30eb\u3068\u5909\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/output",children:"\u6a19\u6e96\u51fa\u529b"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/argv",children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u5f15\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/statement",children:"\u5ba3\u8a00\u6587\u30fb\u5b9f\u884c\u6587"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/array",children:"\u914d\u5217"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/structure",children:"\u69cb\u9020\u4f53"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/operator",children:"\u6f14\u7b97\u5b50"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/conditional_branch",children:"\u6761\u4ef6\u5206\u5c90"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/loop",children:"\u53cd\u5fa9"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/function",children:"\u95a2\u6570"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/elements/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u5165\u529b"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav3"}),(0,r.jsx)(s.Z.Collapse,{id:"nav3",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u7d44\u307f\u5408\u308f\u305b",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/file_input",children:"\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u8fbc\u307f"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/complexes/monte_carlo",children:"\u30e2\u30f3\u30c6\u30ab\u30eb\u30ed\u6cd5"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav4"}),(0,r.jsx)(s.Z.Collapse,{id:"nav4",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsxs)(i.Z,{title:"\u6f14\u7fd2",id:"basic-nav-dropdown",children:[(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/linear_search",children:"\u7dda\u578b\u63a2\u7d22"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/bubble_sort",children:"\u30d0\u30d6\u30eb\u30bd\u30fc\u30c8\u6539"}),(0,r.jsx)(i.Z.Item,{href:"/lang-c/subjects/monte_carlo",children:"\u9762\u7a4d\u306e\u8a08\u7b97"})]})})}),(0,r.jsx)(s.Z.Toggle,{"aria-controls":"nav5"}),(0,r.jsx)(s.Z.Collapse,{id:"nav5",children:(0,r.jsx)(l.Z,{className:"ml-auto mr-auto",children:(0,r.jsx)(i.Z,{title:"\u305d\u306e\u4ed6",id:"basic-nav-dropdown",children:(0,r.jsx)(i.Z.Item,{href:"/lang-c/input_samples",children:"\u5165\u529b\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30f3\u30d7\u30eb"})})})})]})})}},7074:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),s=t(5513),l=t.n(s);function i(e){return(0,r.jsx)("div",{className:l().width,children:e.children})}},6490:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),s=t(9008),l=t(8237),i=t(7074),a=t(603),c=t(5642),o=t(6905),h=t(1221);function d(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(l.Z,{}),(0,r.jsx)("main",{children:(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h1",{children:"\u306f\u3058\u3081\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsx)("p",{children:"C \u8a00\u8a9e\u3067\u66f8\u304b\u308c\u305f\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u3002\u307e\u305f\uff0c\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u5c11\u3057\u66f8\u304d\u63db\u3048\u308b\u3002"})]}),(0,r.jsxs)(c.Z,{children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u30b5\u30f3\u30d7\u30eb\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u7528\u610f"}),(0,r.jsxs)("p",{children:["\u3044\u308d\u3044\u308d\u3068\u5fc5\u8981\u306a\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u307e\u3068\u3081\u3066\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306e happy.h\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/lib/happy.h",language:"c",download:!0}),"\u3068\uff0c\u5c0f\u3055\u3044\u30d7\u30ed\u30b0\u30e9\u30e0 hello.c,",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/introduction/hello.c",language:"c",download:!0}),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\uff0c C \u8a00\u8a9e\u3092\u8a66\u3059\u305f\u3081\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u3066\u307b\u3057\u3044\u3002"]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u30b3\u30f3\u30d1\u30a4\u30eb"}),(0,r.jsxs)("p",{children:["\u30bf\u30fc\u30df\u30ca\u30eb\uff08\u7aef\u672b\uff09\u3067\uff0chappy.h \u3068 hello.c \u3092\u914d\u7f6e\u3057\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\uff0c",(0,r.jsx)(h.Z,{source:"clang hello.c -lm -Wall -Wextra -Wshadow -Wfloat-equal",language:"zsh"}),"\u3068\u5b9f\u884c\u3059\u308c\u3070\uff0c",(0,r.jsx)(h.Z,{uri:"/codes/lang-c/introduction/hello2.c",language:"c",expand:!0}),'\u306e\u3088\u3046\u306b, happy.h \u306e\u5185\u5bb9\u304c #include "happy.h" \u3068\u66f8\u3044\u305f\u884c\u306b\u633f\u5165\u3055\u308c\u308b\u3088\u3046\u306b\u89e3\u91c8\u3055\u308c\u3066\uff0c\u305d\u308c\u304c\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\uff0c\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u304c\u5b9f\u884c\u3067\u304d\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u308b\u3002']}),(0,r.jsx)("p",{children:"\u30b3\u30f3\u30d1\u30a4\u30eb\u3059\u308b\u3068\u304d\u306b\u3064\u3051\u305f\u30aa\u30d7\u30b7\u30e7\u30f3 -lm \u306f\u6570\u5b66\u7528\u306e\u30e9\u30a4\u30d6\u30e9\u30ea math.h \u3092\u4f7f\u3046\u3068\u304d\u3060\u3051\u5fc5\u8981\u306a\u3082\u306e\u3060\u304c\uff0c\u5fd8\u308c\u3066\u3057\u307e\u3046\u3072\u3068\u304c\u591a\u305d\u3046\u306a\u306e\u3067\uff0c\u5e38\u306b\u3064\u3051\u3066\u304a\u304f\u3053\u3068\u306b\u3059\u308b\u3002"}),(0,r.jsx)("p",{children:"\u30aa\u30d7\u30b7\u30e7\u30f3 Wall, Wextra, Wshadow, Wfload-equal \u306f\u4e0d\u9069\u5207\u306a\u66f8\u304d\u65b9\u3092\u3057\u3066\u3044\u308b\u3068\u304d\u306b\u8b66\u544a\u3092\u51fa\u3059\u305f\u3081\u306b\u3064\u3051\u3066\u3044\u308b\u3002\u3082\u3057\u4eca\u5f8c\uff0c\u30b3\u30f3\u30d1\u30a4\u30eb\u306e\u969b\u306b\u8b66\u544a\u304c\u51fa\u305f\u3089\uff0c\u305d\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3088\u304f\u8aad\u307f\uff0c\u554f\u984c\u306e\u90e8\u5206\u3092\u4fee\u6b63\u3057\u3088\u3046\u3002"}),(0,r.jsxs)("p",{children:["\u3053\u308c\u3089\u306e\u591a\u304f\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u66f8\u304f\u306e\u306f\u9762\u5012\u306a\u306e\u3067\uff0c\u30b3\u30de\u30f3\u30c9\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u52e7\u3081\u308b\u3002zsh \u306e\u5834\u5408\u306b\u306f\uff0c~/.zshrc \u306b",(0,r.jsx)(h.Z,{source:"alias clang='clang -lm -Wall -Wextra -Wshadow -Wfloat-equal'",language:"zsh"}),"\u3092\u8ffd\u8a18\u3059\u308c\u3070 clang \u3092\u5b9f\u884c\u3059\u308b\u3068\u304d\u306b\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u4ed8\u52a0\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308b\u3002"]}),(0,r.jsxs)("p",{children:["\u30b3\u30f3\u30d1\u30a4\u30eb\u304c\u6210\u529f\u3059\u308b\u3068\uff0ca.out \u3068\u3044\u3046\u540d\u524d\u3067\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u304c\u3067\u304d\u308b\u3002\u3053\u308c\u306f\uff0c\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3088\u3046\u306b\uff0c",(0,r.jsx)(h.Z,{source:"./a.out",language:"zsh"}),"\u3092\u5b9f\u884c\u3059\u308c\u3070\u3088\u3044\u3002\u5148\u982d\u306b ./ \u304c\u4ed8\u3044\u3066\u3044\u308b\u306e\u306f\uff0c\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u308b\u3053\u3068\u3092\u8868\u3059\u305f\u3081\u3067\u3042\u308b\u3002\u5b9f\u884c\u3067\u304d\u308c\u3070\uff0c",(0,r.jsx)(h.Z,{source:"hello",language:"zsh"}),"\u3068\uff11\u6587\u304c\u8868\u793a\u3055\u308c\u308b\u3002"]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("h2",{children:"\u30d7\u30ed\u30b0\u30e9\u30e0\uff08\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\uff09\u306e\u6539\u5909"}),(0,r.jsx)("p",{children:'\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3067\u3042\u308b\u305f\u3081\uff0c\u3053\u308c\u3092\u66f8\u304d\u63db\u3048\u308b\u305f\u3081\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u307e\u3068\u3082\u306b\u6271\u3048\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u3089\u3042\u308b\u7a0b\u5ea6\u4f55\u3067\u3082\u826f\u3044\u3002UTF-8 \u3092\u6271\u3048\u3066 " " \u3092 \u201c \u201d \u306b\u3054\u4e01\u5be7\u306b\u5909\u63db\u3057\u3066\u304f\u308c\u308b\u3082\u306e\u3067\u306a\u3051\u308c\u3070\u554f\u984c\u306a\u3044\u3002\u3057\u304b\u3057\uff0c\u30e1\u30e2\u5e33\u306e\u3088\u3046\u306a\u3082\u306e\u3067\u306f\u4f55\u304b\u3068\u4e0d\u4fbf\u306a\u306e\u3067\uff0cVisual Studio Code \u3084 JetBrains \u7cfb\u7d71\u306a\u3069\u306e\u958b\u767a\u8005\u5411\u3051\u306e\u3082\u306e\u3092\u4f7f\u3046\u3053\u3068\u304c\u591a\u3044\u3002\u3082\u3061\u308d\u3093 Vim \u3067\u3082\u69cb\u308f\u306a\u3044\u304c\uff0c\u7121\u7406\u3092\u3057\u3066\u4f7f\u3046\u5fc5\u8981\u306f\u306a\u3044\u3002'}),(0,r.jsxs)("p",{children:["\u3055\u3066\uff0chello.c \u306e\u5185\u5bb9\u3092\u5c11\u3057\u5909\u3048\u3066\u307f\u3088\u3046\u3002",(0,r.jsx)(h.Z,{source:'printf("hello\\n");',language:"c"}),"\u306e\u90e8\u5206\u3092",(0,r.jsx)(h.Z,{source:'printf("hellooooo\\n");',language:"c"}),"\u306b\u3057\u3066\u307f\u3088\u3046\u3002\u3053\u306e\u6539\u5909\u3092\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u306b\u53cd\u6620\u3059\u308b\u305f\u3081\u306b\u306f\uff0c\u518d\u3073\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002\u30d5\u30a1\u30a4\u30eb\u540d\u306f\u5909\u308f\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u5148\u7a0b\u3068\u540c\u3058\u3088\u3046\u306b\uff0c",(0,r.jsx)(h.Z,{source:"clang hello.c",language:"zsh"}),"\u3068\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066\u304b\u3089\uff0c",(0,r.jsx)(h.Z,{source:"./a.out",language:"zsh"}),"\u3092\u5b9f\u884c\u3059\u308c\u3070\uff0c\u4eca\u5ea6\u306f",(0,r.jsx)(h.Z,{source:"hellooooo",language:"zsh"}),"\u3068\uff11\u6587\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u5909\u308f\u3063\u3066\u3044\u308b\u306f\u305a\u3067\u3042\u308b\u3002\u3053\u306e\u3088\u3046\u306b\u5909\u66f4\u3092\u52a0\u3048\u305f\u3089\uff0c\u5b9f\u884c\u3059\u308b\u524d\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3092\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u3088\u3046\u3002"]})]})]})]})})]})}},7359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lang-c/introductions/hello",function(){return t(6490)}])},3272:function(e){e.exports={abstract:"abstract_abstract__2J1_W"}},4091:function(e){e.exports={grid:"documentGrid_grid__5YgcL",center:"documentGrid_center__1Iy7m"}},4824:function(e){e.exports={element:"contentElement_element__2zPOC"}},5513:function(e){e.exports={width:"widthContainer_width__bLQd8"}}},function(e){e.O(0,[774,264,779,433,888,179],(function(){return n=7359,e(e.s=n);var n}));var n=e.O();_N_E=n}]);