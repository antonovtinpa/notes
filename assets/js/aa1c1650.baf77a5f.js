"use strict";(self.webpackChunktopcoding=self.webpackChunktopcoding||[]).push([[727],{1480:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"system-design-vol-1/design-search-autocomplete-system","title":"Chapter 13. Design a search autocomplete system","description":"\u0422\u0430\u043a\u0430 \u0438\u043c\u0430\u043c\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u043f\u0440\u043e\u0431\u043b\u0435\u043c, \u043f\u043e\u0437\u043d\u0430\u0442 \u043a\u0430\u0442\u043e \\"Design Top K\\". \u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u043c\u0435 autocomplete feature, \u043e\u0449\u0435 \u043f\u043e\u0437\u043d\u0430\u0442\u043e \u043a\u0430\u0442\u043e search-as-you-type \u0438\u043b\u0438 incremental search. \u0426\u0435\u043b\u0442\u0430 \u043d\u0430 \u0442\u043e\u0437\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0435 \u0434\u0430 \u0434\u0430\u0432\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043d\u0430 \u0431\u0430\u0437\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442 \u043f\u043e \u0432\u0440\u0435\u043c\u0435 \u043d\u0430 \u0442\u044f\u0445\u043d\u043e\u0442\u043e \u0442\u044a\u0440\u0441\u0435\u043d\u0435.","source":"@site/docs/system-design-vol-1/13. design-search-autocomplete-system.mdx","sourceDirName":"system-design-vol-1","slug":"/system-design-vol-1/design-search-autocomplete-system","permalink":"/notes/docs/system-design-vol-1/design-search-autocomplete-system","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"Chapter 13. Design a search autocomplete system","sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Chapter 12. Design a chat system","permalink":"/notes/docs/system-design-vol-1/design-chat-system"},"next":{"title":"Chapter 14. Design YouTube","permalink":"/notes/docs/system-design-vol-1/design-youtube"}}');var i=s(4848),r=s(8453);const o={title:"Chapter 13. Design a search autocomplete system",sidebar_position:13},c=void 0,l={},a=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'\u0422\u0430\u043a\u0430 \u0438\u043c\u0430\u043c\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u043f\u0440\u043e\u0431\u043b\u0435\u043c, \u043f\u043e\u0437\u043d\u0430\u0442 \u043a\u0430\u0442\u043e "Design Top K". \u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u043c\u0435 autocomplete feature, \u043e\u0449\u0435 \u043f\u043e\u0437\u043d\u0430\u0442\u043e \u043a\u0430\u0442\u043e search-as-you-type \u0438\u043b\u0438 incremental search. \u0426\u0435\u043b\u0442\u0430 \u043d\u0430 \u0442\u043e\u0437\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0435 \u0434\u0430 \u0434\u0430\u0432\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043d\u0430 \u0431\u0430\u0437\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442 \u043f\u043e \u0432\u0440\u0435\u043c\u0435 \u043d\u0430 \u0442\u044f\u0445\u043d\u043e\u0442\u043e \u0442\u044a\u0440\u0441\u0435\u043d\u0435.'}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u0437\u0438\u0441\u043a\u0432\u0430\u043d\u0438\u044f\u0442\u0430 \u0437\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0441\u0430 \u0441\u043b\u0435\u0434\u043d\u0438\u0442\u0435:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u041f\u0440\u0438\u0435\u043c\u0430\u043c\u0435 \u0442\u044a\u0440\u0441\u0435\u043d\u0438\u044f \u0441\u0430\u043c\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438 \u0435\u0437\u0438\u043a \u0438 \u043f\u0440\u0430\u0432\u0438\u043c \u043f\u0440\u0435\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u043e, \u0447\u0435 \u0432\u0441\u0438\u0447\u043a\u0438 \u0442\u044a\u0440\u0441\u0435\u043d\u0438\u044f \u0449\u0435 \u0431\u044a\u0434\u0430\u0442 \u0441 \u043c\u0430\u043b\u043a\u0438 \u0431\u0443\u043a\u0432\u0438"}),"\n",(0,i.jsx)(n.li,{children:"\u041d\u0430 \u0431\u0430\u0437\u0430 \u0442\u044a\u0440\u0441\u0435\u043d\u0435\u0442\u043e \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f \u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u043c\u0435 5-\u0442\u0435 \u043d\u0430\u0439-\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0438 \u043f\u043e\u0434\u043e\u0431\u043d\u0438 \u0442\u044a\u0440\u0441\u0435\u043d\u0438\u044f."}),"\n",(0,i.jsx)(n.li,{children:"\u041d\u0430\u0448\u0430\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 10 \u043c\u0438\u043b\u0438\u043e\u043d \u0430\u043a\u0442\u0438\u0432\u043d\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438 \u0432\u0441\u0435\u043a\u0438 \u0434\u0435\u043d (10\u041c DAU)."}),"\n",(0,i.jsx)(n.li,{children:"\u041e\u0442 MVP-\u0442\u043e \u0438\u0437\u043a\u043b\u044e\u0447\u0432\u0430\u043c\u0435 \u0432\u0441\u044f\u043a\u0430\u043a\u0432\u0438 \u0441\u043f\u0435\u043b\u0447\u0435\u043a\u044a\u0440\u0438, \u0430\u0443\u0442\u043e\u043a\u043e\u0440\u0435\u043a\u0442 \u0438 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438 \u0435\u0437\u0438\u0446\u0438"}),"\n",(0,i.jsx)(n.li,{children:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044f \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0431\u044a\u0440\u0437\u043e \u0438 \u0434\u0430 \u0438\u043c\u0430\u043c\u0435 \u0434\u043e\u0431\u0440\u043e \u043d\u0438\u0432\u043e \u043d\u0430 availability.\nBOE \u0410\u043d\u0430\u043b\u0438\u0437:"}),"\n",(0,i.jsx)(n.li,{children:"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u043c\u0435, \u0447\u0435 \u0432\u0441\u0435\u043a\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u043f\u0440\u0430\u0432\u0438 \u0442\u043e 10 \u0437\u0430\u043f\u0438\u0442\u0432\u0430\u043d\u0438\u044f \u0432\u0441\u0435\u043a\u0438 \u0434\u0435\u043d, \u0432\u0441\u044f\u043a\u043e \u0437\u0430\u043f\u0438\u0442\u0432\u0430\u043d\u0435 \u0441\u0435 \u0441\u044a\u0441\u0442\u043e\u0438 \u043e\u0442 4 \u0434\u0443\u043c\u0438 \u043e\u0442 5 \u0441\u0438\u043c\u0432\u043e\u043b\u0430, \u043a\u0430\u0442\u043e \u0432\u0441\u0435\u043a\u0438 \u0441\u0438\u043c\u0432\u043e\u043b \u0435 \u0437\u0430\u0435\u043c\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e 1 \u0431\u0430\u0439\u0442."}),"\n",(0,i.jsx)(n.li,{children:"\u0417\u0430 \u0432\u0441\u0435\u043a\u0438 \u043d\u043e\u0432 \u0441\u0438\u043c\u0432\u043e\u043b \u043e\u0442 \u0442\u044a\u0440\u0441\u0435\u043d\u0435\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u043c \u0437\u0430\u044f\u0432\u043a\u0430, \u0442\u043e\u0435\u0441\u0442 $QPS = (10M * 10 * 4 * 5 ) / 24 / 3600 = 24 000$. \u0422\u043e\u0432\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0432\u0430, \u0447\u0435 PQPS e 48 000."}),"\n",(0,i.jsx)(n.li,{children:"\u0410\u043a\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0435 \u043e\u0442 \u0432\u0441\u0438\u0447\u043a\u0438 \u0442\u044a\u0440\u0441\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u043a\u0438 \u0434\u0435\u043d 20% \u0441\u0430 \u043d\u043e\u0432\u0438 \u0442\u044a\u0440\u0441\u0435\u043d\u0438\u044f, \u0437\u043d\u0430\u0447\u0438 \u043d\u0430 \u0434\u0435\u043d \u043d\u0438\u0435 \u0449\u0435 \u043a\u043e\u043d\u0441\u0443\u043c\u0438\u0440\u0430\u043c\u0435 $10M * 10 * 20 * 0.2 = 0.4 GB$."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u041c\u043e\u0436\u0435\u043c \u0434\u0430 \u0438\u0437\u0433\u0440\u0430\u0434\u0438\u043c \u0435\u0434\u043d\u0430 \u043d\u0430\u0438\u0432\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043c\u043d\u043e\u0433\u043e \u0431\u044a\u0440\u0437\u043e \u0438 \u0431\u0435\u0437 \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0438\u0441\u044a\u043b, \u0442\u043e\u0432\u0430 \u0438 \u043f\u0440\u0430\u0432\u0438 \u0430\u0442\u043e\u0440\u044a\u0442 \u0432 High Level Design \u0447\u0430\u0441\u0442\u0442\u0430. \u0420\u0435\u0430\u043b\u043d\u043e \u043f\u043e\u0433\u043b\u0435\u0434\u043d\u0430\u0442\u043e \u043d\u0438 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Data gathering service - \u0417\u0430 \u0432\u0441\u044f\u043a\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u0437\u0430\u043f\u0438\u0441\u0432\u0430\u043c\u0435 \u0442\u044a\u0440\u0441\u0435\u043d\u0435\u0442\u043e \u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043c\u0435 \u0447\u0435\u0441\u0442\u043e\u0442\u0430\u0442\u0430 \u043d\u0430 \u0437\u0430\u043f\u0438\u0442\u0432\u0430\u043d\u0435, \u0442\u043e\u0435\u0441\u0442 \u0430\u043a\u043e \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b \u043f\u043e\u0442\u0440\u044a\u0441\u0438 "topcoding" \u0432 \u043d\u0430\u0448\u0430\u0442\u0430 \u0442\u044a\u0440\u0441\u0430\u0447\u043a\u0430, \u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0449\u0435 \u043f\u043e\u0442\u044a\u0440\u0441\u0438\u043c \u0442\u043e\u0432\u0430 \u0442\u044a\u0440\u0441\u0435\u043d\u0435 \u0432 \u043d\u0430\u0448\u0430\u0442\u0430 \u0431\u0430\u0437\u0430 \u0438 \u0449\u0435 \u0438\u043d\u043a\u0440\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0430\u043c\u0435 \u043a\u043e\u043b\u043e\u043d\u0430\u0442\u0430, \u043a\u043e\u044f\u0442\u043e \u043f\u0430\u0437\u0438 \u0447\u0435\u0441\u0442\u043e\u0442\u0430\u0442\u0430 \u0438\u043b\u0438 \u0449\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u043c \u043d\u043e\u0432 \u0437\u0430\u043f\u0438\u0441 \u0441 \u0447\u0435\u0441\u0442\u043e\u0442\u0430 1, \u0430\u043a\u043e \u043d\u0435 \u0441\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430.'}),"\n",(0,i.jsxs)(n.li,{children:["Query Service - \u0417\u0430 \u0432\u0441\u044f\u043a\u043e \u0437\u0430\u043f\u0438\u0442\u0432\u0430\u043c\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u043d\u043e \u0442\u044a\u0440\u0441\u0438\u043c \u0432 \u0431\u0430\u0437\u0430\u0442\u0430 \u0434\u0440\u0443\u0433\u0438 \u0437\u0430\u043f\u0438\u0442\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0438\u0442\u043e \u0437\u0430\u043f\u043e\u0447\u0432\u0430\u0442 \u043f\u043e \u0441\u044a\u0449\u0438\u044f\u0442 \u043d\u0430\u0447\u0438\u043d, \u043f\u043e\u0434\u0440\u0435\u0436\u0434\u0430\u043c\u0435 \u0433\u0438 \u043f\u043e \u0447\u0435\u0441\u0442\u043e\u0442\u0430 \u043d\u0430 \u0442\u044a\u0440\u0441\u0435\u043d\u0435 \u0438 \u0432\u0440\u044a\u0449\u0430\u043c\u0435 \u043f\u044a\u0440\u0432\u0438\u0442\u0435 5.\n\u041d\u0430\u0448\u0430\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0435 \u0433\u043e\u0442\u043e\u0432\u0430 \u0434\u0430 \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 3-\u043c\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438 ",":D",". \u0420\u0430\u0437\u0431\u0438\u0440\u0430 \u0441\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043f\u043e\u0442\u0440\u0443\u0434\u0438\u043c \u043c\u0430\u043b\u043a\u043e \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u0434\u0430 \u0438\u0437\u0433\u0440\u0430\u0434\u0438\u043c \u0441\u043a\u0430\u043b\u0438\u0440\u0443\u0435\u043c\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u043a\u043e\u044f\u0442\u043e \u0434\u0430 \u0440\u0430\u0431\u043e\u0442\u0438 \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0438 \u0434\u0430 \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u0430 10DAU."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'\u041f\u044a\u0440\u0432\u0430\u0442\u0430 \u043d\u0438 \u0441\u0442\u044a\u043f\u043a\u0430 \u0431\u0438 \u0431\u0438\u043b\u0430 \u0434\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043e\u0442 \u0434\u0430\u043d\u043d\u0438, \u043a\u043e\u044f\u0442\u043e \u0449\u0435 \u043d\u0438 \u043f\u043e\u043c\u043e\u0433\u043d\u0435 \u0434\u0430 \u043f\u0440\u0430\u0432\u0438\u043c \u0431\u044a\u0440\u0437\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0417\u0430\u043f\u043e\u0437\u043d\u0430\u0432\u0430 \u043c\u0435 \u0441\u0435 \u0441 Prefix Tree \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0442\u0430 \u0438\u043b\u0438 \u0442\u0430\u043a\u0430 \u043d\u0430\u0440\u0435\u0447\u0435\u043d\u0438\u044f\u0442 Trie. \u041f\u0440\u0435\u0444\u0438\u043a\u0441 \u0434\u044a\u0440\u0432\u043e\u0442\u043e \u0435 \u0434\u044a\u0440\u0432\u043e\u0432\u0438\u0434\u043d\u0430 \u0441\u0440\u0442\u0443\u043a\u0442\u0443\u0440\u0430, \u043a\u043e\u044f\u0442\u043e \u0435 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u043d\u0430 \u0441 \u0446\u0435\u043b \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441\u044a\u0441 \u0441\u0442\u0440\u0438\u043d\u0433\u043e\u0432\u0435. \u041a\u043e\u0440\u0435\u043d\u0430 \u043d\u0430 \u0434\u044a\u0440\u0432\u043e\u0442\u043e \u0435 \u043f\u0440\u0430\u0437\u0435\u043d \u0441\u0442\u0440\u0438\u043d\u0433\u043c \u0432\u0441\u0435\u043a\u0438 \u041d\u043e\u0443\u0434 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u0434\u0443\u043c\u0430 \u0438\u043b\u0438 \u043d\u0430\u0447\u0430\u043b\u043e \u043d\u0430 \u0434\u0443\u043c\u0430 \u0438 \u0432\u0441\u0435\u043a\u0438 \u043d\u043e\u0443\u0434 \u0438\u043c\u0430 26 \u0434\u0435\u0446\u0430, \u0434\u0435\u0442\u0435 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u0431\u0443\u043a\u0432\u0430 \u043e\u0442 \u0430\u0437\u0431\u0443\u043a\u0430\u0442\u0430. \u0422\u0430\u043a\u0430 \u043f\u043e \u043f\u0440\u043e\u0434\u044a\u043b\u0436\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u0435\u0434\u0438\u043d path \u0430\u043a\u0443\u043c\u0443\u043b\u0438\u0440\u0430\u043c\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0438 \u0438 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u0430\u043c\u0435 \u0434\u0443\u043c\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 "" -> "t" -> "to" -> "top" \u0431\u0438 \u0431\u0438\u043b \u0435\u0434\u0438\u043d path. \u0417\u0430 \u0434\u0430 \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0441\u0435 \u0432\u044a\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u043e\u0442 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0434\u044a\u0440\u0432\u043e\u0442\u043e \u0438 \u0434\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u043c \u043d\u0430 \u0438\u0437\u0438\u0441\u043a\u0432\u0430\u043d\u0435\u0442\u043e \u0437\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u043c \u0438 frequency counter \u043a\u044a\u043c \u041d\u043e\u0443\u0434\u0430.\n\u041a\u044a\u043c \u0442\u043e\u0437\u0438 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430 \u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0437\u0430 \u0434\u0430\u0434\u0435\u043d\u043e \u0442\u044a\u0440\u0441\u0435\u043d\u0435, \u0431\u0438\u0445\u043c\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0441\u043b\u0435\u0434\u043d\u043e\u0442\u043e \u043d\u0435\u0449\u043e:'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043d\u0430\u043c\u0435\u0440\u0438\u043c prefix-a"}),"\n",(0,i.jsx)(n.li,{children:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0442\u0440\u0430\u0432\u0435\u0440\u0441\u043d\u0435\u043c \u0446\u044f\u043b\u043e\u0442\u043e \u0441\u044a\u0431\u0434\u044a\u0440\u0432\u043e \u0438 \u0434\u0430 \u043d\u0430\u043c\u0435\u0440\u0438\u043c \u043d\u043e\u0443\u0434\u043e\u0432\u0435\u0442\u0435 \u0441 \u0440\u0435\u0430\u043b\u043d\u0438 \u0434\u0443\u043c\u0438"}),"\n",(0,i.jsx)(n.li,{children:"\u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u0430\u043c\u0435 \u043d\u0430\u043c\u0435\u0440\u0435\u043d\u0438\u0442\u0435 \u043d\u043e\u0443\u0434\u043e\u0432\u0435 \u043f\u043e \u0447\u0435\u0441\u0442\u043e\u0442\u0430\n\u0422\u043e\u0435\u0441\u0442 \u0438\u043c\u0430\u043c\u0435 \u041e(P), \u043a\u044a\u0434\u0435\u0442\u043e \u0420 \u0435 \u0434\u044a\u043b\u0436\u0438\u043d\u0430\u0442\u0430 \u043d\u0430 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0430 + \u041e(C), \u043a\u044a\u0434\u0435\u0442\u043e \u0421 \u0435 \u0431\u0440\u043e\u044f\u0442 \u0434\u0435\u0446\u0430 \u0432 \u0441\u044a\u0431\u0434\u044a\u0440\u0432\u043e\u0442\u043e + \u041e(C _ logC), \u0442\u0443\u043a \u0421 \u0449\u0435 \u0435 \u043c\u0430\u043b\u043a\u043e \u043f\u043e-\u043c\u0430\u043b\u043a\u043e \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442, \u0437\u0430\u0449\u043e\u0442\u043e \u043d\u0435 \u0432\u0441\u0438\u0447\u043a\u0438 \u0434\u0435\u0446\u0430 \u0441\u0430 \u0440\u0435\u0430\u043b\u043d\u0438 \u0434\u0443\u043c\u0438, \u043d\u043e \u0433\u043e\u0440\u0435 \u0434\u043e\u043b\u0443 \u0449\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0440\u0430\u0437\u0443\u043b\u0442\u0430\u0442 \u0432 time complexity \u041e(P) + \u041e(C) + \u041e(C _ logC),\n\u043a\u043e\u0435\u0442\u043e \u043d\u0435 \u0435 \u0437\u043b\u0435, \u043d\u043e \u0441\u044a\u0441 \u0441\u0438\u0433\u0443\u0440\u043d\u043e\u0441\u0442 \u0435 \u043d\u0435\u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e. \u0417\u0430 \u0442\u043e\u0432\u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u043a\u043e\u0433\u0430\u0442\u043e \u0438\u0437\u0433\u0440\u0430\u0436\u0434\u0430\u043c\u0435 \u0434\u044a\u0440\u0432\u043e\u0442\u043e \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u043f\u0430\u0437\u0438\u043c \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0442\u0430 \u0437\u0430 \u0432\u0441\u0435\u043a\u0438 \u043f\u0440\u0435\u0444\u0438\u043a\u0441, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "top": [\n    ["topcoding", 10],\n    ["topcoding2", 14]\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u0422\u0430\u043a\u0430 \u0438\u0437\u0440\u0430\u0437\u0445\u043e\u0436\u0434\u0430\u043c\u0435 \u0440\u0435\u0441\u0443\u0440\u0441 \u0441\u0430\u043c\u043e \u0434\u0430 \u0441\u0442\u0438\u0433\u043d\u0435\u043c \u0434\u043e \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0430."}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0435\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u043c \u043d\u044f\u0448\u0438\u044f\u0442 data gathering service, \u0434\u043e \u0441\u0435\u0433\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u0445\u043c\u0435 \u0447\u0435\u0441\u0442\u043e\u0442\u0438\u0442\u0435 \u043d\u0430 \u0442\u044a\u0440\u0441\u0435\u043d\u0438\u044f\u0442\u0430 \u0432 \u0440\u0435\u043b\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u0442\u0430 \u043d\u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u0438 \u043f\u0440\u0438 \u0432\u0441\u044f\u043a\u043e \u0442\u044a\u0440\u0441\u0435\u043d\u0435, \u0442\u043e\u0432\u0430 \u0435 \u043c\u043d\u043e\u0433\u043e \u0442\u0440\u0443\u0434\u043e\u0435\u043c\u044a\u043a \u0438 \u0431\u0430\u0432\u0435\u043d \u043f\u0440\u043e\u0446\u0435\u0441, \u043a\u043e\u0439\u0442\u043e \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0441\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u043c. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0435\u043d\u043e\u0442\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438 \u0435 \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0432\u0430 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0442 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0430\u043d\u0438 \u0434\u0430\u043d\u043d\u0438 \u043e\u0442 \u043b\u043e\u0433\u043e\u0432\u0435 \u0438 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438. \u0422\u043e\u0435\u0441\u0442 \u0441\u044a\u0431\u0438\u0440\u0430\u043ce \u0442\u0430\u043a\u0430 \u043d\u0430\u0440\u0435\u0447\u0435\u043d\u0430\u0442\u0430 raw data \u043f\u0440\u0438 \u0432\u0441\u044f\u043a\u043e \u0442\u044a\u0440\u0441\u0435\u043d\u0435 \u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u043f\u0435\u0440\u0438\u043e\u0434 \u043e\u0442 \u0432\u0440\u0435\u043c\u0435 (\u0441\u043f\u043e\u0440\u0435\u0434 \u0437\u0430\u0432\u0438\u0441\u0438 \u043e\u0442 use case-a, \u0432 \u043d\u0430\u0448\u0438\u044f\u0442 \u0441\u043b\u0443\u0447\u0430\u0439 \u0432\u0435\u0434\u043d\u044a\u0436 \u0441\u0435\u0434\u043c\u0438\u0447\u043d\u043e) \u0437\u0430\u043f\u043e\u0447\u0432\u0430\u043c\u0435 \u043f\u0440\u043e\u0446\u0435\u0441 \u043d\u0430 \u043e\u0431\u043d\u043e\u0432\u044f\u0432\u0430\u043d\u0435. \u0422\u043e\u0439 \u0441\u0435 \u0441\u044a\u0441\u0442\u043e\u0438 \u0432 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u0438\u0442\u0435 \u0432\u044a\u0432 \u0444\u043e\u0440\u043c\u0430\u0442, \u043a\u043e\u0439\u0442\u043e \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435, \u0434\u0430 \u043a\u0430\u0436\u0435\u043c, \u0447\u0435 \u043d\u0438 \u0442\u0440\u044f\u0431\u0432\u0430 \u0442\u044a\u0440\u0441\u0435\u043d\u0435\u0442\u043e \u0438 \u0447\u0435\u0441\u0442\u043e\u0442\u0430\u0442\u0430, \u0441\u043b\u0435\u0434 \u0442\u043e\u0432\u0430 \u0442\u0435\u0437\u0438 \u0434\u0430\u043d\u043d\u0438 \u0441\u0435 \u043f\u0440\u0435\u0434\u0430\u0432\u0430\u0442 \u043d\u0430 worker-\u0438, \u043f\u043e \u0435\u0434\u0438\u043d \u0438\u043b\u0438 \u0434\u0440\u0443\u0433 \u043d\u0430\u0447\u0438\u043d, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0440\u0435\u0437 message queue-\u0442\u0430, \u043a\u043e\u0438\u0442\u043e \u043e\u0442 \u0441\u0432\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0430 \u0438\u0437\u0433\u0440\u0430\u0436\u0434\u0430\u0442 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0434\u044a\u0440\u0432\u043e\u0442\u043e, \u0438\u043c\u0430 \u0434\u0432\u0430 \u043d\u0430\u0447\u0438\u043d\u0430 \u0437\u0430 \u0438\u0437\u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0435:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u0421\u044a\u0437\u0434\u0430\u0432\u0430\u0442 \u0438\u0437\u0446\u044f\u043b\u043e \u043d\u043e\u0432\u043e \u0434\u044a\u0440\u0432\u043e \u0438 \u0433\u043e \u0437\u0430\u043c\u0435\u043d\u044f\u0442 \u0441\u044a\u0441 \u0441\u0442\u0430\u0440\u043e\u0442\u043e"}),"\n",(0,i.jsx)(n.li,{children:"\u0410\u043a\u0442\u0443\u0430\u043b\u0438\u0437\u0430\u0440 \u0432\u0441\u0435\u043a\u0438 \u043d\u043e\u0443\u0434 \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u043d\u043e. \u0422\u043e\u0432\u0430 \u043d\u0435 \u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u044f\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043f\u043e\u043d\u0435\u0436\u0435 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u0432 \u043d\u043e\u0443\u0434 \u043d\u0438\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043f\u043e\u043f\u0430\u0433\u0438\u0440\u0430\u043c\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430\u0433\u043e\u0440\u0435, \u043a\u043e\u0435\u0442\u043e \u043d\u0438 \u0432\u0440\u044a\u0449\u0430 \u0432 \u043f\u044a\u0440\u0432\u0430 \u0431\u0430\u0437\u0430.\n\u0421\u043b\u0435\u0434 \u043a\u0430\u0442\u043e \u0438\u0437\u0433\u0440\u0430\u0434\u0438\u043c \u0434\u044a\u0440\u0432\u043e\u0442\u043e \u043d\u0438\u0435 \u0433\u043e \u0437\u0430\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u0432 \u043d\u0435\u0440\u0435\u043b\u0430\u0446\u0438\u043e\u043d\u043d\u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u0438 \u0437\u0430 persistence \u0438 \u0441\u044a\u043e\u0442\u0432\u0435\u0442\u043d\u043e \u0432 \u043a\u0435\u0448 \u0437\u0430 \u0431\u044a\u0440\u0437\u043e \u0447\u0435\u0442\u0435\u043d\u0435."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Query service-a \u0449\u0435 \u0431\u044a\u0434\u0435 \u043e\u0431\u043d\u043e\u0432\u0435\u043d \u043f\u043e \u0441\u043b\u0435\u0434\u043d\u0438\u044f\u0442 \u043d\u0430\u0447\u0438\u043d. \u041a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438\u0437\u043f\u0440\u0430\u0449\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043a\u044a\u043c \u0441\u044a\u0440\u0432\u044a\u0440\u0430 \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e \u0442\u044a\u0440\u0441\u0435\u043d\u0435, \u043c\u0438\u043d\u0430\u0432\u0430 \u043f\u0440\u0435\u0437 load balancer, \u0441\u0442\u0438\u0433\u0430 \u0434\u043e web server, \u0442\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0432\u0430 \u043a\u0435\u0448\u0430 \u0437\u0430 \u0442\u044a\u0440\u0441\u0435\u043d\u0435\u0442\u043e, \u0430\u043a\u043e \u0435 \u0442\u0430\u043c \u0432\u0440\u044a\u0449\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440 \u0430\u043a\u043e \u043d\u0435 \u043f\u0440\u0430\u0432\u0438 \u0437\u0430\u044f\u0432\u043a\u0430 \u043a\u044a\u043c \u0431\u0430\u0437\u0430\u0442\u0430 \u0437\u0430\u043f\u0430\u0437\u0432\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0430 \u0432 \u043a\u0435\u0448\u0430 \u0438 \u0433\u043e \u0432\u0440\u044a\u0449\u0430."}),"\n",(0,i.jsx)(n.p,{children:"\u0422\u0430\u0437\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0435 \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u043e \u043f\u043e-\u043b\u0435\u0441\u043d\u0430 \u0437\u0430 \u0441\u043a\u0430\u043b\u0438\u0440\u0430\u043d\u0435. \u0410\u043a\u043e \u0438\u0441\u043a\u0430\u043c\u0435 \u0434\u0430 \u0441\u043a\u0430\u043b\u0438\u0440\u0430\u043c\u0435 \u0431\u0430\u0437\u0430\u0442\u0430 \u0434\u0435\u043b\u0438\u043c \u0441\u044a\u0440\u0432\u044a\u0440\u0430 \u043d\u0430 \u0434\u0432\u0435 \u0438\u043b\u0438 \u0442\u0440\u0438 \u0438 \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e \u0434\u0435\u043b\u0438\u043c \u0430\u0437\u0431\u0443\u043a\u0430\u0442\u0430 13 \u0431\u0443\u043a\u0432\u0438 \u0437\u0430 \u0435\u0434\u0438\u043d\u0438\u044f\u0442 13 \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u044f\u0442. \u041c\u043e\u0436\u0435\u043c \u0434\u0430 \u0441\u0442\u0438\u0433\u043d\u0435\u043c \u0434\u043e 26 \u0441\u044a\u0440\u0432\u044a\u0440\u0430 \u0437\u0430 \u0432\u0441\u044f\u043a\u0430 \u0431\u0443\u043a\u0432\u0430, \u0430 \u0434\u043e\u0440\u0438 \u0434\u0430 \u0437\u0430\u043f\u043e\u0447\u043d\u0435\u043c \u0434\u0430 \u0441\u043a\u0430\u043b\u0438\u0440\u0430\u043c\u0435 \u043f\u043e \u0432\u0442\u043e\u0440\u0438 \u0441\u0438\u043c\u0432\u043e\u043b."}),"\n",(0,i.jsx)(n.p,{children:"\u0412 wrap up-a \u043c\u043e\u0436\u0435\u043c \u0434\u0430 \u0441\u0438 \u0433\u043e\u0432\u043e\u0440\u0438\u043c \u0437\u0430 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438 \u0435\u0437\u0438\u0446\u0438, \u0447\u0440\u0435\u0437 \u043f\u043e\u0434\u0434\u044a\u0440\u0436\u043a\u0430 \u043d\u0430 unicode \u0441\u0438\u043c\u0432\u043e\u043b\u0438 \u0432 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0434\u044a\u0440\u0432\u043e\u0442\u043e. \u041f\u043e\u0434\u0434\u0440\u044a\u0436\u0434\u043a\u0430 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u0438 \u0438 \u0434\u044a\u0440\u0436\u0430\u0432\u0438, \u0447\u0440\u0435\u0437 \u0441\u044a\u0437\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0434\u044a\u0440\u0432\u0435\u0442\u0430 \u0437\u0430 \u0432\u0441\u0435\u043a\u0438 \u0440\u0435\u0433\u0438\u043e\u043d \u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435 \u043d\u0430 CDN-\u0438 \u0437\u0430 \u0431\u044a\u0440\u0437\u043e \u0447\u0435\u0442\u0435\u043d\u0435. \u041c\u043e\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0433\u043e\u0432\u043e\u0440\u0438 \u0438 \u0437\u0430 real-time \u0430\u043a\u0442\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u044a\u0440\u0441\u0435\u043d\u0438\u044f\u0442\u0430, \u043a\u043e\u0435\u0442\u043e \u0435 \u0434\u043e\u0441\u0442\u0430 \u043f\u043e-\u0441\u043b\u043e\u0436\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u0432\u044a\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u043e\u0442 data streaming \u0443\u0441\u043b\u0443\u0433\u0438."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);