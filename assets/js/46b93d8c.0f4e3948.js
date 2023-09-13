"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7831],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var x=r.createContext({}),l=function(e){var n=r.useContext(x),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(x.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,x=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,m=p["".concat(x,".").concat(u)]||p[u]||s[u]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var x in n)hasOwnProperty.call(n,x)&&(c[x]=n[x]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={},i="How SuperDuperDB handles external data",c={unversionedId:"docs/explanations/external_data",id:"docs/explanations/external_data",title:"How SuperDuperDB handles external data",description:"SuperDuperDB has 2 handy features which work in concert, which make working with data and AI together",source:"@site/content/docs/explanations/external_data.md",sourceDirName:"docs/explanations",slug:"/docs/explanations/external_data",permalink:"/docs/docs/explanations/external_data",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/content/docs/explanations/external_data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"When to use standalone or cluster mode",permalink:"/docs/docs/explanations/cluster_vs_standalone_mode"},next:{title:"Serialization",permalink:"/docs/docs/explanations/serialization"}},x={},l=[],d={toc:l},p="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-superduperdb-handles-external-data"},"How SuperDuperDB handles external data"),(0,a.kt)("p",null,"SuperDuperDB has 2 handy features which work in concert, which make working with data and AI together\nmuch more convenient:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Store Python objects which aren't serializable in standard data handled by JSON."),(0,a.kt)("li",{parentName:"ul"},"Add data by reference to web-content, ",(0,a.kt)("inlineCode",{parentName:"li"},"aws s3")," URIs and local filesystems")),(0,a.kt)("p",null,"The key abstraction for doing this is ",(0,a.kt)("inlineCode",{parentName:"p"},"superduperdb.core.encoder.Encoder"),":"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder")," instance attaches an ",(0,a.kt)("inlineCode",{parentName:"p"},"encoder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"decoder")," to the data to be sent to the database.\nThese are wrapped in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Encodable")," instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> from superduperdb.core.encoder import Encoder\n>>> import torch\n>>> x = torch.randn(10)\n# `encoder` and `decoder` handle turning an object into bytes and back\n>>> enc = Encoder('my-enc', encoder=my_encoder, decoder=my_decoder)\n>>> e = enc(x)\n>>> type(e)\n<class 'superduperdb.core.encoder.Encodable'>\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Encodable")," instance then has the information it needs to send the data to the database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> e.encode()\n{'_content': {'bytes': b'\\x80\\x04\\x95\\xac\\x01\\x00\\x00\\x00\\x00\\x00\\x00\\x8c\\x0ctorch._utils\\x94\\x8c\\x12_rebuild_tensor_v2\\x94\\x93\\x94(\\x8c\\rtorch.storage\\x94\\x8c\\x10_load_from_bytes\\x94\\x93\\x94B%\\x01\\x00\\x00\\x80\\x02\\x8a\\nl\\xfc\\x9cF\\xf9 j\\xa8P\\x19.\\x80\\x02M\\xe9\\x03.\\x80\\x02}q\\x00(X\\x10\\x00\\x00\\x00protocol_versionq\\x01M\\xe9\\x03X\\r\\x00\\x00\\x00little_endianq\\x02\\x88X\\n\\x00\\x00\\x00type_sizesq\\x03}q\\x04(X\\x05\\x00\\x00\\x00shortq\\x05K\\x02X\\x03\\x00\\x00\\x00intq\\x06K\\x04X\\x04\\x00\\x00\\x00longq\\x07K\\x04uu.\\x80\\x02(X\\x07\\x00\\x00\\x00storageq\\x00ctorch\\nFloatStorage\\nq\\x01X\\x0f\\x00\\x00\\x00140190109010112q\\x02X\\x03\\x00\\x00\\x00cpuq\\x03K\\nNtq\\x04Q.\\x80\\x02]q\\x00X\\x0f\\x00\\x00\\x00140190109010112q\\x01a.\\n\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\xd9\\x07\\x99\\xbe\\xb8|\\xd4\\xbf~\\x997?\\xb37\\xc5\\xbfqRa\\xbe\\x91\\xc3\\x02\\xbf\\xe7\\xf7??\\xf0G\\x1a?@\\x99\\xa2?K\\x92|?\\x94\\x85\\x94R\\x94K\\x00K\\n\\x85\\x94K\\x01\\x85\\x94\\x89\\x8c\\x0bcollections\\x94\\x8c\\x0bOrderedDict\\x94\\x93\\x94)R\\x94t\\x94R\\x94.',\n  'encoder': 'my-enc'}}\n")),(0,a.kt)("p",null,"This dictionary is now in a form compatible with storage in MongoDB or similar document stores. The original ",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder")," is able to decode the data in the opposite direction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> enc.decode(e.encode()['_content']['bytes'])\n")),(0,a.kt)("p",null,"SuperDuperDB uses the ",(0,a.kt)("inlineCode",{parentName:"p"},'"_content.encoder"')," subfield to determine which ",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder")," instance it should use.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder")," instances are loaded from SuperDuperDB using the ",(0,a.kt)("a",{parentName:"p",href:"serialization"},"inbuilt serialization mechanism"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Encoder")," may also be used to add content via a reference given in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," parameter. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> enc(uri='file://data/images/my_tensor.pkl').encode()\n{'_content': {'uri': 'file://data/img/tensor.pkl', 'encoder': 'my-enc'}}\n")),(0,a.kt)("p",null,"This is also a document which can be handled by the database. SuperDuperDB then creates a job which pulls in content mentioned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," subfield."))}s.isMDXComponent=!0}}]);