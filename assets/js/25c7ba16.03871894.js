"use strict";(self.webpackChunktopcoding=self.webpackChunktopcoding||[]).push([[104],{5231:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"system-design-vol-1/design-google-drive","title":"Chapter 15. Design Google Drive","description":"\u041f\u0440\u0430\u0432\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d \u0437\u0430 Google Drive, Dropbox, Drive on cloud \u043f\u0440\u043e\u0434\u0443\u043a\u0442. \u0418\u0434\u0435\u044f\u0442\u0430 \u0435 \u0434\u0430 \u0438\u0437\u0433\u0440\u0430\u0434\u0438\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442, \u043a\u043e\u0439\u0442\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442 \u043a\u0430\u0442\u043e \u043c\u044f\u0441\u0442\u043e \u0437\u0430 \u0441\u044a\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u0442\u0435\u0445\u043d\u0438\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438, \u0434\u0430 \u0438\u043c\u0430\u0442 \u0434\u043e\u0441\u0442\u044a\u043f \u0434\u043e \u0442\u044f\u0445 \u043e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0434\u0430 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0441\u0438 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u0442 \u0441 \u0442\u0435\u0445\u043d\u0438 \u0431\u043b\u0438\u0437\u043a\u0438 \u0438 \u043f\u043e\u0437\u043d\u0430\u0442\u0438.","source":"@site/docs/system-design-vol-1/15. design-google-drive.mdx","sourceDirName":"system-design-vol-1","slug":"/system-design-vol-1/design-google-drive","permalink":"/notes/docs/system-design-vol-1/design-google-drive","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Chapter 15. Design Google Drive","sidebar_position":15},"sidebar":"tutorialSidebar","previous":{"title":"Chapter 14. Design YouTube","permalink":"/notes/docs/system-design-vol-1/design-youtube"}}');var l=i(4848),r=i(8453);const o={title:"Chapter 15. Design Google Drive",sidebar_position:15},c=void 0,t={},d=[];function a(e){const n={li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u041f\u0440\u0430\u0432\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d \u0437\u0430 Google Drive, Dropbox, Drive on cloud \u043f\u0440\u043e\u0434\u0443\u043a\u0442. \u0418\u0434\u0435\u044f\u0442\u0430 \u0435 \u0434\u0430 \u0438\u0437\u0433\u0440\u0430\u0434\u0438\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442, \u043a\u043e\u0439\u0442\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442 \u043a\u0430\u0442\u043e \u043c\u044f\u0441\u0442\u043e \u0437\u0430 \u0441\u044a\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u0442\u0435\u0445\u043d\u0438\u0442\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438, \u0434\u0430 \u0438\u043c\u0430\u0442 \u0434\u043e\u0441\u0442\u044a\u043f \u0434\u043e \u0442\u044f\u0445 \u043e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0434\u0430 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0441\u0438 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u0442 \u0441 \u0442\u0435\u0445\u043d\u0438 \u0431\u043b\u0438\u0437\u043a\u0438 \u0438 \u043f\u043e\u0437\u043d\u0430\u0442\u0438."}),"\n",(0,l.jsx)(n.p,{children:"\u0418\u043c\u0430\u043c\u0435 \u0441\u043b\u0435\u0434\u043d\u0438\u0442\u0435 \u0438\u0437\u0438\u0441\u043a\u0432\u0430\u043d\u0438\u044f:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u043a\u0430\u0447\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435 \u043e\u0442 \u0432\u0441\u044f\u043a\u0430\u043a\u044a\u0432 \u0432\u0438\u0434 \u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u0435\u043d \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0442 10GB"}),"\n",(0,l.jsx)(n.li,{children:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043a\u0440\u0438\u043f\u0442\u0438\u0440\u0430\u043c\u0435 \u0432\u0441\u0438\u0447\u043a\u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u0435, \u043a\u043e\u0438\u0442\u043e \u0441\u0435 \u043a\u0430\u0447\u0432\u0430\u0442 \u0441 \u0446\u0435\u043b \u0441\u0438\u0433\u0443\u0440\u043d\u043e\u0441\u0442"}),"\n",(0,l.jsx)(n.li,{children:"\u0412\u0441\u0438\u0447\u043a\u0438 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043f\u043e \u0444\u0430\u0439\u043b\u043e\u0432\u0435\u0442\u0435 \u0442\u0440\u044f\u0431\u0430 \u0434\u0430 \u0441\u0435 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0430\u0442 \u0432\u044a\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439-\u0431\u044a\u0440\u0437\u043e, \u043a\u0430\u0442\u043e \u043f\u0440\u0438 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u0444\u0430\u0439\u043b \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u043c \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u0438\u0442\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438"}),"\n",(0,l.jsx)(n.li,{children:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430\u043c\u0435 10\u041c daily active users"}),"\n",(0,l.jsx)(n.li,{children:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u043e\u043a\u0440\u0438\u0432\u0430\u043c\u0435 \u0432\u0441\u0438\u0447\u043a\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438 \u0437\u0430 consistency, availability, scalability, etc. \u041e\u0431\u0449\u043e \u0432\u0437\u0435\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u0430\u043c\u0435 \u0432 \u043f\u0440\u0435\u0434\u0432\u0438\u0434, \u0447\u0435 \u0438\u0437\u0433\u0440\u0430\u0436\u0434\u0430\u043c\u0435 \u0435\u0434\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u043a\u043e\u044f\u0442\u043e \u0449\u0435 \u0435 \u043f\u043e\u0434 \u0433\u043e\u043b\u044f\u043c\u043e \u043d\u0430\u043f\u0440\u0435\u0436\u0435\u043d\u0438\u0435 \u0438 \u0449\u0435 \u0431\u044a\u0434\u0435 \u0432\u0430\u0436\u043d\u0430 \u0437\u0430 \u043c\u043d\u043e\u0433\u043e \u0445\u043e\u0440\u0430."}),"\n",(0,l.jsxs)(n.li,{children:["Back of the Envelope \u0430\u043d\u0430\u043b\u0438\u0437","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u0414\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0435 \u0432\u0441\u0435\u043a\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u0449\u0435 \u043a\u0430\u0447\u0432\u0430 \u043f\u043e \u0434\u0432\u0430 \u0444\u0430\u0439\u043b\u0430 \u0432\u0441\u0435\u043a\u0438 \u0434\u0435\u043d, \u0432\u0441\u0435\u043a\u0438 \u043e\u0442 \u043a\u043e\u0439\u0442\u043e \u0435 \u043f\u043e 500KB"}),"\n",(0,l.jsxs)(n.li,{children:["QPS = 10M * 2 / 24 / 3600 = 232, \u0437\u0430\u043a\u0440\u044a\u0433\u043b\u044f\u043c\u0435 \u043d\u0430 ",(0,l.jsx)(n.strong,{children:"240"})]}),"\n",(0,l.jsxs)(n.li,{children:["Peak QPS = ",(0,l.jsx)(n.strong,{children:"480"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u0412\u0441\u0435\u043a\u0438 \u0434\u0435\u043d \u0449\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 10\u041c _ 2 _ 500 = 9.3TB, \u0437\u0430\u043a\u0440\u044a\u0433\u043b\u044f\u043c\u0435 \u043d\u0430 ",(0,l.jsx)(n.strong,{children:"10TB"})," \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e"]}),"\n",(0,l.jsxs)(n.li,{children:["\u0410\u043a\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0435 \u0441\u043b\u0435\u0434 MVP-\u0442\u043e \u0449\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043c 50\u041c \u043d\u043e\u0432\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438 \u0438 \u043d\u0430 \u0432\u0441\u0435\u043a\u0438 \u043e\u0442 \u0442\u044f\u0445 \u0434\u0430\u0434\u0435\u043c free trial \u043e\u0442 10GB, \u0442\u043e \u0442\u043e\u0433\u0430\u0432\u0430 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u043c\u0435 \u0433\u043e\u0442\u043e\u0432\u0438 \u0434\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043c 50M * 10 = 477PB, \u0437\u0430\u043a\u0440\u044a\u0433\u043b\u044f\u043c\u0435 \u043d\u0430 ",(0,l.jsx)(n.strong,{children:"500PB"})]}),"\n",(0,l.jsx)(n.li,{children:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u0442\u043e \u0435 \u0447\u0435 \u0433\u043e\u0432\u043e\u0440\u0438\u043c \u0437\u0430 \u0435\u0434\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u043a\u043e\u044f\u0442\u043e \u0431\u044a\u0440\u0437\u043e \u043c\u043e\u0436\u0435 \u0434\u0430 \u0438\u0437\u043b\u0435\u0437\u0435 \u0438\u0437\u0432\u044a\u043d \u043a\u043e\u043d\u0442\u0440\u043e\u043b \u043f\u0440\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e \u043f\u043b\u0430\u043d\u0438\u0440\u0430\u043d\u0435"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u0417\u0430\u043f\u043e\u0447\u0432\u0430\u043c\u0435 \u0441 high level design-a. \u041f\u043e\u0440\u0430\u0434\u0438 \u043d\u044f\u043a\u0430\u043a\u0432\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u044a\u0442 \u043d\u0438 \u0432\u0440\u044a\u0449\u0430, \u043c\u043e\u0436\u0435 \u0431\u0438 \u043d\u043e\u0441\u0442\u0430\u043b\u0433\u0438\u0447\u043d\u043e, \u043a\u044a\u043c \u043f\u044a\u0440\u0432\u0430 \u0433\u043b\u0430\u0432\u0430 \u0438 \u0440\u0435\u0448\u0430\u0432\u0430, \u0447\u0435 \u0449\u0435 \u0437\u0430\u043f\u043e\u0447\u043d\u0435\u043c \u0432\u044a\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439-\u043d\u0430\u0438\u0432\u043d\u043e \u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0438 \u0449\u0435 \u0441\u0435 \u0441\u044a\u0441\u0442\u043e\u0438 \u043e\u0442 \u0435\u0434\u0438\u043d \u0441\u044a\u0440\u0432\u044a\u0440 \u0441 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u0438 \u0438 storage \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u0432 \u043a\u043e\u044f\u0442\u043e \u0449\u0435 \u0441\u0438 \u043f\u0430\u0437\u0438\u043c \u0444\u0430\u0439\u043b\u043e\u0432\u0435\u0442\u0435 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435. \u041e\u0447\u0435\u0432\u0438\u0434\u043d\u043e \u0442\u043e\u0437\u0438 \u043f\u043e\u0434\u0445\u043e\u0434 \u043d\u0435 \u0431\u0438 \u043f\u0440\u043e\u0440\u0430\u0431\u043e\u0442\u0438\u043b, \u043e\u0441\u0432\u0435\u043d \u0430\u043a\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u044f\u043c\u0430 \u0434\u0430 \u0441\u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u043e\u0442 \u0441\u0430\u043c\u043e \u0431\u043b\u0438\u0437\u043a\u0438 \u0438 \u043f\u0440\u0438\u044f\u0442\u0435\u043b\u0438. \u0414\u043e \u0442\u043e\u0437\u0438 \u0438\u0437\u0432\u043e\u0434 \u043d\u0438 \u0432\u043e\u0434\u0438 \u0438 \u0430\u0432\u0442\u043e\u0440\u044a\u0442, \u043a\u0430\u0442\u043e \u043f\u044a\u0440\u0432\u043e\u0442\u043e \u043d\u0435\u0449\u043e, \u043a\u043e\u0435\u0442\u043e \u043f\u0440\u0430\u0432\u0438 \u0435 \u0434\u0430 \u043e\u0442\u0434\u0435\u043b\u0438 storage \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0438 \u0434\u0430 \u0441\u044a\u0437\u0430\u0434\u0430\u0434\u0435, \u0434\u0435\u0434\u0438\u043a\u0438\u0440\u0430\u043d\u0438 \u0441\u044a\u0440\u0432\u044a\u0440\u043d\u0438 \u0437\u0430 \u0441\u044a\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435, \u043a\u0430\u0442\u043e \u0430\u043a\u043e \u043d\u0438\u0435 \u0441\u0430\u043c\u0438 \u0441\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u043c\u0435 \u0441\u044a\u0440\u0432\u044a\u0440\u0438\u0442\u0435 \u0442\u0435 \u0431\u0438\u0445\u0430 \u0431\u0438\u043b\u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0440\u0430\u043d\u0438 \u0438 \u0431\u0438\u0445\u0430 \u0441\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u043b\u0438 \u043d\u0430 \u0431\u0430\u0437\u0430 consistent hashing, \u043d\u0430\u0439-\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u043f\u043e namespace. \u041e\u0442 \u0442\u043e\u0437\u0438 \u043f\u043e\u0434\u0445\u043e\u0434 \u0441\u044a\u0449\u043e \u0441\u0435 \u043e\u0442\u043a\u0430\u0437\u0432\u0430\u043c\u0435 \u043f\u043e\u0440\u0430\u0434\u0438 \u043f\u0440\u043e\u0441\u0442\u0430\u0442\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430, \u0447\u0435 \u0434\u043e\u0440\u0438 \u043d\u044f\u043a\u043e\u0438 \u043e\u0442 \u043d\u0430\u0439-\u0433\u043e\u043b\u0435\u043c\u0438\u0442\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0432 \u0441\u0432\u0435\u0442\u0430 \u043d\u0435 \u043d\u0430\u043c\u0438\u0440\u0430\u0442 \u0437\u0430 \u0440\u0435\u043d\u0442\u0430\u0431\u0438\u043b\u043d\u043e \u0441\u0430\u043c\u0438 \u0434\u0430 \u0441\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0432\u0430\u0442 storage \u043d\u0443\u0436\u0434\u0438\u0442\u0435, \u0430 \u0441\u0435 \u0432\u044a\u043f\u043e\u043b\u0437\u0432\u0430\u0442 \u043e\u0442 cloud solution-\u0438, \u043a\u0430\u0442\u043e AWS S3. \u0418 \u043d\u0438\u0435 \u0449\u0435 \u0441\u0435 \u0432\u044a\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u043e\u0442 \u0442\u0430\u0437\u0438 \u0443\u0441\u043b\u0443\u0433\u0430. S3 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0441\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u0432\u0430 \u0441\u044a\u0441 \u0441\u043a\u0430\u043b\u0438\u0440\u0430\u043d\u0435 \u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438\u0442\u0435, \u0434\u043e\u0440\u0438 \u0432 \u043e\u0442\u0434\u0435\u043b\u043d\u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u0438. \u0421\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u0438\u0437\u0447\u0438\u0441\u0442\u0438\u0445\u043c\u0435 \u0442\u043e\u0437\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0435 \u0443\u0434\u0430\u0447\u043d\u043e \u0438 \u0432\u0435\u0447\u0435 \u0434\u0430 \u043e\u0442\u0434\u0435\u043b\u0438\u043c \u0431\u0430\u0437\u0430\u0442\u0430 \u0437\u0430 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u0438\u0442\u0435 \u0438 \u0434\u0430 \u044f \u0441\u043a\u0430\u043b\u0438\u0440\u0430\u043c\u0435 \u043f\u0440\u0438 \u043d\u0443\u0436\u0434\u0430 \u0438 \u0441\u044a\u0449\u043e \u0442\u0430\u043a\u0430 \u0434\u0430 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0440\u0430\u043c\u0435 Web Server-a \u0438 \u0434\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043c Load Balancer. \u041c\u0438\u0441\u043b\u044f, \u0447\u0435 \u0435 \u0443\u0434\u0430\u0447\u043d\u043e \u0432\u0435\u0447\u0435 \u0434\u0430 \u0440\u0430\u0437\u0433\u043b\u0435\u0434\u0430\u043c\u0435 \u0438\u0441\u0442\u0438\u043d\u0441\u043a\u0438\u044f\u0442 high level design \u043f\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u043a\u0430\u0442\u043e \u0449\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u043d\u044f\u043a\u043e\u0438, \u043a\u043e\u0438\u0442\u043e \u0432\u0441\u0435 \u043e\u0449\u0435 \u043d\u0435 \u0441\u043c\u0435 \u0441\u043f\u043e\u043c\u0435\u043d\u0430\u0432\u0430\u043b\u0438:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u041a\u043b\u0438\u0435\u043d\u0442 - \u0422\u043e\u0432\u0430 \u0449\u0435 \u0435 \u043c\u043e\u0431\u0438\u043b\u043d\u043e\u0442\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0438\u043b\u0438 \u0431\u0440\u0430\u0443\u0437\u044a\u0440\u0430"}),"\n",(0,l.jsx)(n.li,{children:"Load Balancers - \u041d\u0430\u0439-\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u0449\u0435 \u043d\u0438 \u0442\u0440\u044f\u0431\u0432\u0430\u0442 \u0438 \u0437\u0430 Web Server-\u0438\u0442\u0435 \u0438 \u0437\u0430 Block Server-\u0438\u0442\u0435, \u043a\u043e\u0438\u0442\u043e \u0441\u0435\u0433\u0430 \u0449\u0435 \u043e\u0431\u0441\u044a\u0434\u0438\u043c."}),"\n",(0,l.jsx)(n.li,{children:"Block Servers - \u0422\u043e\u0432\u0430 \u0449\u0435 \u0441\u0430 \u0434\u0435\u0434\u0438\u043a\u0438\u0440\u0430\u043d\u0438 \u0441\u044a\u0440\u0432\u044a\u0440\u0438, \u043a\u043e\u0438\u0442\u043e \u0449\u0435 \u0441\u0435 \u0437\u0430\u043d\u0438\u043c\u0430\u0432\u0430\u0442 \u0441 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435\u0442\u0435 \u0438 \u0442\u044f\u0445\u043d\u043e\u0442\u043e \u043a\u0430\u0447\u0432\u0430\u043d\u0435 \u0432 S3. \u041d\u0430\u0440\u0438\u0447\u0430 \u0441\u0435 block server, \u0437\u0430\u0449\u043e\u0442\u043e \u0442\u0443\u043a \u0449\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0432\u0430\u043c\u0435 \u0446\u0435\u043b\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u043e\u0432\u0435, \u043d\u043e \u0449\u0435 \u0433\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u043c\u0435 \u043d\u0430 \u0447\u044a\u043d\u043a\u043e\u0432\u0435 \u0438\u043b\u0438 \u0431\u043b\u043e\u043a\u043e\u0432\u0435 \u0437\u0430 \u0434\u0430 \u0441\u0435 \u0441\u044a\u0445\u0440\u0430\u043d\u044f\u0432\u0430\u0442 \u043f\u043e-\u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e, \u0432\u0441\u0435\u043a\u0438 \u0431\u043b\u043e\u043a \u0449\u0435 \u0435 \u043f\u043e \u043d\u0435 \u043f\u043e\u0432\u0435\u0447\u0435 \u043e\u0442 4\u041c\u0412."}),"\n",(0,l.jsx)(n.li,{children:"Cloud Storage - \u0412 \u043d\u0430\u0448\u0438\u044f\u0442 \u0441\u043b\u0443\u0447\u0430\u0439, \u043d\u0438\u0435 \u0449\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 S3. \u0422\u043e\u0432\u0430 \u0435 \u043c\u044f\u0441\u0442\u043e \u0437\u0430 \u0441\u044a\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435\u0442\u0435 \u0432 \u043e\u0431\u043b\u0430\u043a\u0430 \u043f\u043e \u0431\u043b\u043e\u043a\u043e\u0432\u0435."}),"\n",(0,l.jsx)(n.li,{children:"Cold Storage - \u0422\u043e\u0437\u0438 \u0442\u0438\u043f \u043c\u044f\u0441\u0442\u043e \u0437\u0430 \u0441\u044a\u0445\u0440\u0430\u043d\u0435\u043d\u0438 \u0435 \u043f\u043e-\u043d\u0435\u0435\u0444\u0435\u043a\u0442\u0438\u0432\u0435\u043d, \u043d\u043e \u043f\u043e-\u0435\u0432\u0442\u0438\u043d \u0438 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u043d\u043e \u0442\u0443\u043a \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0441\u043a\u043b\u0430\u0434\u0438\u0440\u0430\u043c\u0435 stale \u0444\u0430\u0439\u043b\u043e\u0432\u0435 \u0438\u043b\u0438 \u0442\u0430\u043a\u0438\u0432\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435, \u043a\u043e\u0438\u0442\u043e \u043d\u0435 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442 \u0447\u0435\u0441\u0442\u043e, \u0441 \u0446\u0435\u043b \u0434\u0430 \u043e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u043c \u043c\u044f\u0441\u0442\u043e \u043e\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u044f\u0442 \u0441\u0442\u043e\u0440\u0438\u0434\u0436."}),"\n",(0,l.jsx)(n.li,{children:"Web Servers - \u0422\u043e\u0432\u0430 \u0449\u0435 \u043e\u0441\u043d\u043e\u0432\u0430\u0442\u0430 \u043d\u0438, \u0442\u0443\u043a \u0449\u0435 \u0438\u0437\u043f\u044a\u043b\u043d\u044f\u0432\u0430\u043c\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u043a\u0430\u0446\u0438\u044f, \u0430\u0443\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f, \u0449\u0435 \u0441\u0435 \u0438\u0437\u0432\u044a\u0440\u0448\u0432\u0430\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u0441 \u043c\u0435\u043d\u0438\u0434\u0436\u043c\u044a\u043d\u0442\u0430 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438, \u0449\u0435 \u0441\u0435 \u0441\u0432\u044a\u0440\u0437\u0432\u0430\u043c\u0435 \u0441 \u0431\u0430\u0437\u0430\u0442\u0430 \u0434\u0430\u043d\u043d\u0438 \u0438 \u043a\u0435\u0448\u0430, \u043d\u0430\u0439-\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u0449\u0435 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043c\u0435 \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0447\u0440\u0435\u0437 message queue-\u0442\u0430"}),"\n",(0,l.jsx)(n.li,{children:"Database - \u0422\u043e\u0432\u0430 \u043d\u0438 \u0431\u0430\u0437\u0430\u0442\u0430 \u0434\u0430\u043d\u043d\u0438, \u043a\u044a\u0434\u0435\u0442\u043e \u0449\u0435 \u043f\u0430\u0437\u0438\u043c \u043c\u0435\u0442\u0430\u0434\u0430\u0442\u0430 \u0437\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435\u0442\u0435, \u0432\u0435\u0440\u0441\u0438\u0438\u0442\u0435 \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435\u0442\u0435, \u0431\u043b\u043e\u043a\u043e\u0432\u0435\u0442\u0435, \u0449\u0435 \u043f\u0430\u0437\u0438\u043c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0437\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0438\u043b\u0438\u0442\u0435 \u0438 \u043b\u043e\u0433\u0438\u043d \u0434\u0430\u043d\u043d\u0438\u0442\u0435 \u0438\u043c, \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0442\u0430 \u0438\u043c \u0438 \u0442.\u043d. \u0412 \u043d\u0430\u0448\u0438\u044f\u0442 \u0441\u043b\u0443\u0447\u0430\u0439 \u0431\u0438\u0445\u043c\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043b\u0438 \u0440\u0435\u043b\u0430\u0446\u0438\u043e\u043d\u043d\u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u0438, \u0434\u0430\u043d\u043d\u0438\u0442\u0435 \u043d\u0438 \u0431\u0438\u0445\u0430 \u0431\u0438\u043b\u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0438, \u043f\u043b\u044e\u0441 \u0442\u043e\u0432\u0430 \u0440\u0435\u043b\u0430\u0446\u0438\u043e\u043d\u043d\u0438\u0442\u0435 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u043d\u0438 \u043f\u0440\u0438\u0442\u0435\u0436\u0430\u0442\u0430 ACID \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u0442\u0430, \u043a\u043e\u0438\u0442\u043e \u043d\u0438 \u0431\u0438\u0445\u0430 \u0431\u0438\u043b\u0438 \u043f\u043e\u043b\u0435\u0437\u043d\u0438 \u0437\u0430 \u0438\u0437\u0438\u0441\u043a\u0432\u0430\u043d\u0438\u044f\u0442\u0430."}),"\n",(0,l.jsx)(n.li,{children:"Cache - \u0422\u0443\u043a \u0449\u0435 \u043f\u0430\u0437\u0438\u043c \u0447\u0435\u0441\u0442\u043e \u0438\u0437\u043f\u043e\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0438 \u0434\u0430\u043d\u043d\u0438 \u0441 \u0446\u0435\u043b \u043f\u043e-\u0431\u044a\u0440\u0437\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430"}),"\n",(0,l.jsx)(n.li,{children:"Notification Service - \u0429\u0435 \u043d\u0438 \u0442\u0440\u044f\u0431\u0432\u0430 \u0437\u0430 \u0434\u0430 \u0441\u0435 \u0441\u043f\u0440\u0430\u0432\u044f\u043c\u0435 \u0441 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044f\u0442\u0430, \u043a\u043e\u0438\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u0437\u043f\u0440\u0430\u0449\u0430\u043c\u0435 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043f\u0440\u0438 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u043d\u044f\u043a\u043e\u0438 \u0444\u0430\u0439\u043b, \u043a\u043e\u0439\u0442\u043e \u0433\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0432\u0430."}),"\n",(0,l.jsx)(n.li,{children:"Offline Support Queue - \u0412 \u0442\u043e\u0432\u0430 queue \u0449\u0435 \u043f\u0430\u0437\u0438\u043c \u0432\u0441\u0438\u0447\u043a\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044f, \u043a\u043e\u0438\u0442\u043e \u043d\u0435 \u0441\u0430 \u0443\u0441\u043f\u044f\u043b\u0438 \u0434\u0430 \u0441\u0442\u0438\u0433\u043d\u0430\u0442 \u0434\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435, \u0432 \u0441\u043b\u0443\u0447\u0430\u0439, \u0447\u0435 \u0442\u0435 \u0441\u0430 \u043e\u0444\u043b\u0430\u0439\u043d. \u041f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0435\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430 \u0449\u0435 \u0433\u0438 \u0438\u0437\u0432\u0435\u0442\u044f\u0432\u0430\u043c\u0435."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u041d\u0435\u043a\u0430 \u0434\u0430 \u0438\u0437\u044f\u0441\u043d\u0438\u043c \u043d\u044f\u043a\u043e\u0438 \u0434\u0435\u0442\u0430\u0439\u043b\u0438 \u0438 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438, \u043a\u043e\u0438\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u0430\u043c\u0435 \u0432 \u043f\u0440\u0435\u0434\u0432\u0438\u0434:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Block Servers - \u0421\u043f\u043e\u043c\u0435\u043d\u0430\u0445\u043c\u0435, \u0447\u0435 \u0442\u0443\u043a \u0449\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u043c\u0435 \u0444\u0430\u0439\u043b\u043e\u0432\u0435\u0442\u0435 \u043d\u0430 \u0447\u044a\u043d\u043a\u043e\u0432\u0435, \u043d\u043e \u043d\u0435 \u043a\u0430\u0437\u0430\u0445\u043c\u0435 \u043a\u0430\u043a \u0442\u043e\u0432\u0430 \u043d\u0438 \u043f\u043e\u043c\u0430\u0433\u0430. \u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u0430\u043c\u0435 \u043e\u0442\u0434\u0435\u043b\u043d\u0438 \u0431\u043b\u043e\u043a\u043e\u0432\u0435 \u0437\u0430 \u0434\u0430 \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u043c\u0435 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u044a\u043c \u043d\u0430\u0440\u0435\u0447\u0435\u043d delta synchronization, \u0447\u0440\u0435\u0437 \u043c\u0435\u0442\u043e\u0434 \u043d\u0430 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044a\u043f\u0434\u0435\u0439\u0442\u0432\u0430\u043c\u0435 \u0441\u0430\u043c\u0435 \u0431\u043b\u043e\u043a\u043e\u0432\u0435\u0442\u0435 \u043e\u0442 \u0444\u0430\u0439\u043b\u0430, \u043a\u043e\u0438\u0442\u043e \u0441\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0435\u043d\u0438\u0438. \u0414\u0440\u0443\u0433\u043e\u0442\u043e \u043d\u0435\u0449\u043e, \u043a\u043e\u0435\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u043f\u043e\u043c\u0435\u043d\u0435\u043c, \u0435 \u0447\u0435 \u0432\u0441\u0435\u043a\u0438 \u0431\u043b\u043e\u043a \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043a\u0440\u0438\u043f\u0442\u0438\u0440\u0430 \u0438 \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0438\u0440\u0430. \u0420\u0430\u0437\u043b\u0438\u0447\u043d\u0438\u0442\u0435 \u0432\u0438\u0434\u043e\u0432\u0435 \u0444\u0430\u0439\u043b\u043e\u0432\u0435 \u0438\u043c\u0430\u0442 \u043d\u0443\u0436\u0434\u0430 \u043e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0432\u0438\u0434\u043e\u0432\u0435 \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0438\u0440\u0430\u0449\u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430 \u0442\u0435\u043a\u0441\u0442 \u0431\u0438\u0445\u043c\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 gzip."}),"\n",(0,l.jsx)(n.li,{children:"Notification Service - \u0412 \u0433\u043b\u0430\u0432\u0430\u0442\u0430 \u0437\u0430 \u0447\u0430\u0442 \u0430\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f\u0442\u0430 \u0442\u0440\u044f\u0431\u0432\u0430\u0448\u0435 \u0434\u0430 \u0438\u0437\u0431\u0438\u0440\u0430\u043c\u0435 \u043c\u0435\u0442\u043e\u0434 \u043d\u0430 \u043a\u043e\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0441\u044a\u0440\u0432\u044a\u0440\u0430, \u043a\u0430\u0442\u043e \u0435\u0434\u043d\u0438 \u043e\u0442 \u043e\u043f\u0446\u0438\u0438\u0442\u0435 \u043d\u0438 \u0431\u044f\u0445\u0430 log polling & web sockets, \u0442\u043e\u0433\u0430\u0432\u0430 \u0438\u0437\u0431\u0440\u0430\u0445\u043c\u0435 WS \u043f\u043e\u0440\u0430\u0434\u0438 \u0444\u0430\u043a\u0442\u0430, \u0447\u0435 \u0438\u043c\u0430\u0445\u043c\u0435 \u043d\u0443\u0436\u0434\u0430 \u043e\u0442 stateful, \u0434\u0432\u0443\u043f\u043e\u0441\u043e\u0447\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430 \u0432 \u0440\u0435\u0430\u043b\u043d\u043e \u0432\u0440\u0435\u043c\u0435, \u0442\u0443\u043a \u043f\u0430\u043a \u0438\u043c\u0430\u043c\u0435 \u043e\u043f\u0446\u0438\u044f\u0442\u0430 \u0434\u0430 \u0438\u0437\u0431\u0438\u0440\u0430\u043c\u0435 \u043c\u0435\u0436\u0434\u0443 \u0442\u0435\u0437\u0438 \u0434\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0430, \u043d\u043e long polling e \u043c\u043d\u043e\u0433\u043e \u043f\u043e-\u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449. \u0417\u0430\u0449\u043e? \u0417\u0430\u0449\u043e\u0442\u043e \u043d\u044f\u043c\u0430\u043c\u0435 \u0434\u0432\u0443\u043f\u043e\u0441\u043e\u0447\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u0442\u043e\u0435\u0441\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0441\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0432\u0430 \u043e\u0442 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u0432\u044a\u0432 \u0444\u0430\u0439\u043b\u0430 \u0437\u0430 \u0434\u0430 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0440\u0435\u0430\u0433\u0438\u0440\u0430 \u0438 \u0434\u0430 \u0438\u0437\u0442\u0435\u0433\u043b\u0438 \u044a\u043f\u0434\u0435\u0439\u0442\u0438\u0442\u0435, \u043d\u043e \u0441\u044a\u0440\u0432\u044a\u0440\u0430 \u043d\u044f\u043c\u0430 \u043d\u0443\u0436\u0434\u0430 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043a\u043e\u0439\u0442\u043e \u0441\u043b\u0443\u0448\u0430."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u0412\u0435\u0447\u0435 \u043a\u0430\u0442\u043e \u0438\u043c\u0430\u043c\u0435 \u044f\u0441\u043d\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0430 \u0437\u0430 \u0442\u043e\u0432\u0430 \u043a\u0430\u043a \u0438\u0437\u0433\u043b\u0435\u0436\u0434\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u043d\u0438 \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435\u043d \u0444\u043b\u043e\u0443. \u0417\u0430 \u043a\u0430\u0447\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u041a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438\u0437\u043f\u0440\u0430\u0449\u0430 \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u0434\u0432\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0430 \u0435\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e:","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u0418\u0437\u043f\u0440\u0430\u0449\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043a\u044a\u043c web server-a, \u0441 \u043c\u0435\u0442\u0430\u0434\u0430\u0442\u0430 \u0434\u0430 \u043c\u0443 \u043a\u0430\u0436\u0435, \u0447\u0435 \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u043a\u0430\u0447\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0444\u0430\u0439\u043b","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u0417\u0430\u044f\u0432\u043a\u0430\u0442\u0430 \u043c\u0438\u043d\u0430\u0432\u0430 \u043f\u0440\u0435\u0437 load balancer \u0438 \u0441\u0442\u0438\u0433\u0430 \u0434\u043e \u0441\u044a\u0440\u0432\u044a\u0440\u0430"}),"\n",(0,l.jsx)(n.li,{children:"\u0421\u044a\u0440\u0432\u044a\u0440\u0430 \u0437\u0430\u043f\u0438\u0441\u0432\u0430 \u043c\u0435\u0442\u0430\u0434\u0430\u0442\u0430\u0442\u0430 \u043a\u0430\u0442\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0430 \u044a\u043f\u043b\u043e\u0443\u0434\u0430 \u0435 \u043f\u0435\u043d\u0434\u0438\u043d\u0433"}),"\n",(0,l.jsx)(n.li,{children:"\u041a\u043e\u043c\u0443\u043d\u0438\u043a\u0438\u0440\u0430 \u043d\u0430 notification service-a, \u0447\u0440\u0435\u0437 message queue, \u0447\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0430 \u043d\u0430 \u043a\u0430\u0447\u0432\u0430\u043d\u0435 \u043d\u0430 \u0444\u0430\u0439\u043b \u0435 \u0437\u0430\u043f\u043e\u0447\u043d\u0430\u043b"}),"\n",(0,l.jsx)(n.li,{children:"Notification service-\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u044f\u0432\u0430 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0438"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u0418\u0437\u043f\u0440\u0430\u0449\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043a\u044a\u043c Block server-a, \u0441 \u0444\u0430\u0439\u043b\u0430, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043f\u043e\u0447\u043d\u0435 \u043a\u0430\u0447\u0432\u0430\u043d\u0435\u0442\u043e \u043c\u0443","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u0417\u0430\u044f\u0432\u043a\u0430\u0442\u0430 \u043c\u0438\u043d\u0430\u0432\u0430 \u043f\u0440\u0435\u0437 load balancer \u0438 \u0441\u0442\u0438\u0433\u0430 \u0434\u043e \u0441\u044a\u0440\u0432\u044a\u0440\u0430"}),"\n",(0,l.jsx)(n.li,{children:"\u0421\u044a\u0440\u0432\u044a\u0440\u0430 \u0437\u0430\u043f\u043e\u0447\u0432\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0430 \u043d\u0430 chunk-\u0432\u0430\u043d\u0435, \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0438\u0440\u0430\u043d\u0435 \u0438 \u0435\u043d\u043a\u0440\u0438\u043f\u0442\u0438\u0440\u0430\u043d\u0435"}),"\n",(0,l.jsx)(n.li,{children:"\u0411\u043b\u043e\u043a\u043e\u0432\u0435\u0442\u0435 \u0441\u0435 \u043a\u0430\u0447\u0432\u0430\u0442 \u0432 cloud storage-a"}),"\n",(0,l.jsx)(n.li,{children:"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u0441\u0435 \u0441\u043c\u0435\u043d\u044f \u0438 \u0441\u0435 \u043f\u043e\u0442\u0432\u0442\u0430\u0440\u044f\u0442 \u0441\u0442\u044a\u043f\u043a\u0438\u0442\u0435 \u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u0441 \u0438\u0437\u0432\u0435\u0441\u0442\u044f\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u0438\u0442\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u0417\u0430 \u0442\u0435\u0433\u043b\u0435\u043d\u0435\u0442\u043e \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435. \u0420\u0435\u0430\u043b\u043d\u043e \u043f\u043e\u0433\u043b\u0435\u0434\u043d\u0430\u0442\u043e \u0442\u043e\u0432\u0430 \u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441, \u043a\u043e\u0439\u0442\u043e \u0441\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430 \u0441\u043b\u0435\u0434 \u043f\u0440\u043e\u043c\u044f\u043d\u0430\u0442\u0430 \u0438\u043b\u0438 \u043a\u0430\u0447\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0434\u0430\u0434\u0435\u043d \u0444\u0430\u0439\u043b. \u0410\u043a\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0435 \u043e\u043d\u043b\u0430\u0439\u043d, \u0442\u043e\u0439 \u043f\u043e\u043b\u0443\u0447\u0430\u0432\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u0435, \u0447\u0435 \u0438\u043c\u0430 \u043d\u043e\u0432\u0438 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043f\u043e \u0444\u0430\u0439\u043b\u0430 \u0438 \u0435 \u0434\u043b\u044a\u0436\u0435\u043d \u0434\u0430 \u0433\u0438 \u0438\u0437\u0442\u0435\u0433\u043b\u0438. \u0410\u043a\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0435 \u043e\u0444\u043b\u0430\u0439\u043d, \u0438\u0437\u0432\u0435\u0441\u0442\u0438\u044f\u0442\u0430 \u0441\u0435 \u0437\u0430\u043f\u0430\u0437\u0432\u0430\u0442 \u0432 \u043a\u0435\u0448, \u0432 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430 \u0442\u0435 \u0441\u0435 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0430\u0442."}),"\n",(0,l.jsx)(n.p,{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u043e \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0441\u043f\u043e\u043c\u0435\u043d\u0435\u043c \u043a\u0430\u043a \u0441\u0435 \u0441\u043f\u0440\u0430\u0432\u044f\u043c\u0435 \u0441 failure-\u0438, \u043d\u043e \u043a\u0430\u0442\u043e \u0446\u044f\u043b\u043e \u0438\u043c\u0430\u043c\u0435 \u0434\u043e\u0441\u0442\u0430 generic \u043f\u043e\u0434\u0445\u043e\u0434\u0438, \u043d\u0438\u0449\u043e \u043d\u043e\u0432\u043e, \u0440\u0435\u0432\u044e\u0442\u043e \u0441\u0442\u0430\u043d\u0430 \u0432\u0435\u0447\u0435 \u0434\u043e\u0441\u0442\u0430 \u0434\u044a\u043b\u0433\u043e \u0438 \u043f\u0440\u0438 \u043c\u0435\u043d \u0432\u0435\u0447\u0435 \u0435 \u0434\u043e\u0441\u0442\u0430 \u043a\u044a\u0441\u043d\u043e \u0442\u0430\u043a\u0430 \u0447\u0435 \u0441\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f \u0434\u0430 \u0433\u0438 \u0441\u043a\u0438\u043f\u043d\u0430."}),"\n",(0,l.jsx)(n.p,{children:"\u0410 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u0438 \u0431\u0438\u043b\u0430 \u0434\u0430 \u0441\u0435 \u043e\u0442\u0442\u044a\u0440\u0432\u0435\u043c \u043e\u0442 block server-\u0438\u0442\u0435 \u0438 \u043a\u0430\u0447\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0435 \u0434\u0430 \u0441\u0435 \u0441\u043b\u0443\u0447\u0432\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043d\u043e \u0442\u0443\u043a\u0430 \u0432\u0435\u0447\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u043e\u043c\u0438\u0441\u043b\u0438\u043c \u043c\u043d\u043e\u0433\u043e \u0434\u043e\u0431\u0440\u0435 \u0437\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0438 \u0441\u044a\u0441 \u0441\u0438\u0433\u0443\u0440\u043d\u043e\u0441\u0442\u0442\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043e."}),"\n",(0,l.jsx)(n.p,{children:"\u0422\u0432\u0430 \u0435, \u043a\u0440\u0430\u0439 \u043d\u0430 \u043c\u0430\u0447\u0430, \u0434\u0443\u0437\u043f\u0430 \u0437\u0430 \u0410\u0440\u0436\u0435\u043d\u0442\u0438\u043d\u0430, \u0437\u0430 \u043c\u0435\u043d \u0431\u0435\u0448\u0435 \u0447\u0435\u0441\u0442. \u0414\u043e\u0441\u0442\u0430 \u0434\u043e\u0431\u0440\u0430 \u043a\u043d\u0438\u0433\u0430 \u043c\u043d\u043e\u0433\u043e \u043d\u0435\u0449\u0430 \u043d\u0430\u0443\u0447\u0438\u0445, \u043c\u043d\u043e\u0433\u043e \u043d\u0435\u0449\u0430 \u0437\u0430\u0431\u0440\u0430\u0432\u0438\u0445 \u0441\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u0433\u0438 \u043d\u0430\u0443\u0447\u0438\u0445, reread is a must."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const l={},r=s.createContext(l);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);