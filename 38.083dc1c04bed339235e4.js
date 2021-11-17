"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38],{38:function(e,a,t){t.r(a),t(7378);var n=t(2682);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",o({components:a},t),(0,n.kt)("p",null,"IgnorePlugin prevents the generation of modules for ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," calls matching the regular expressions or filter functions:"),(0,n.kt)("h2",{id:"using-regular-expressions"},"Using regular expressions",(0,n.kt)("a",{href:"#using-regular-expressions","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"resourceRegExp"),": A RegExp to test the resource against."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"contextRegExp"),": (optional) A RegExp to test the context (directory) against.")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,n.kt)("span",{className:"token punctuation",parentName:"span"},"."),"IgnorePlugin"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," resourceRegExp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," contextRegExp ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",{id:"using-filter-functions"},"Using filter functions",(0,n.kt)("a",{href:"#using-filter-functions","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"checkResource (resource, context)")," A Filter function that receives ",(0,n.kt)("inlineCode",{parentName:"li"},"resource")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"context")," as arguments, must return boolean.")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,n.kt)("span",{className:"token punctuation",parentName:"span"},"."),"IgnorePlugin"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token function",parentName:"code"},"checkResource"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"resource"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// do something with resource"),"\n    ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"true")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"|")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",{id:"example-of-ignoring-moment-locales"},"Example of ignoring Moment Locales",(0,n.kt)("a",{href:"#example-of-ignoring-moment-locales","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"As of ",(0,n.kt)("a",{href:"https://momentjs.com/",parentName:"p"},"moment")," 2.18, all locales are bundled together with the core library (see ",(0,n.kt)("a",{href:"https://github.com/moment/moment/issues/2373",parentName:"p"},"this GitHub issue"),")."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"resourceRegExp")," parameter passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"IgnorePlugin")," is not tested against the resolved file names or absolute module names being imported or required, but rather against the ",(0,n.kt)("em",{parentName:"p"},"string")," passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," ",(0,n.kt)("em",{parentName:"p"},"within the source code where the import is taking place"),". For example, if you're trying to exclude ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules/moment/locale/*.js"),", this won't work:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-diff",parentName:"pre"},(0,n.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,n.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,n.kt)("span",{className:"token line",parentName:"span"},"new webpack.IgnorePlugin({ resourceRegExp: /moment\\/locale\\// });")))),(0,n.kt)("p",null,"Rather, because ",(0,n.kt)("inlineCode",{parentName:"p"},"moment")," imports with this code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./locale/'")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"+")," name",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"...your first regexp must match that ",(0,n.kt)("inlineCode",{parentName:"p"},"'./locale/'")," string. The second ",(0,n.kt)("inlineCode",{parentName:"p"},"contextRegExp")," parameter is then used to select specific directories from where the import took place. The following will cause those locale files to be ignored:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,n.kt)("span",{className:"token punctuation",parentName:"span"},"."),"IgnorePlugin"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  resourceRegExp",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token regex",parentName:"code"},"/^\\.\\/locale$/"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  contextRegExp",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token regex",parentName:"code"},"/moment$/"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,'...which means "any require statement matching ',(0,n.kt)("inlineCode",{parentName:"p"},"'./locale'")," from any directories ending with ",(0,n.kt)("inlineCode",{parentName:"p"},"'moment'")," will be ignored."))}s.isMDXComponent=!0,a.default=s}}]);