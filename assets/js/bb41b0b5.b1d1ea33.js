"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9034],{63958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=n(85893),o=n(11151);const s={title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:9,slug:"/roadmap/roadmap"},a="Roadmap ibc-go",l={id:"ibc/roadmap",title:"Roadmap",description:"Lastest update: July 7, 2022",source:"@site/versioned_docs/version-v6.3.x/01-ibc/09-roadmap.md",sourceDirName:"01-ibc",slug:"/roadmap/roadmap",permalink:"/v6/roadmap/roadmap",draft:!1,unlisted:!1,tags:[],version:"v6.3.x",sidebarPosition:9,frontMatter:{title:"Roadmap",sidebar_label:"Roadmap",sidebar_position:9,slug:"/roadmap/roadmap"},sidebar:"defaultSidebar",previous:{title:"Protobuf Documentation",permalink:"/v6/ibc/proto-docs"},next:{title:"Overview",permalink:"/v6/apps/transfer/overview"}},r={},c=[{value:"Q3 - 2022",id:"q3---2022",level:2},{value:"Features",id:"features",level:3},{value:"Testing and infrastructure",id:"testing-and-infrastructure",level:3},{value:"Documentation and backlog",id:"documentation-and-backlog",level:3},{value:"Release schedule",id:"release-schedule",level:3},{value:"<strong>July</strong>",id:"july",level:4},{value:"<strong>August</strong>",id:"august",level:4},{value:"<strong>September</strong>",id:"september",level:4},{value:"Q4 - 2022",id:"q4---2022",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"roadmap-ibc-go",children:"Roadmap ibc-go"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Lastest update: July 7, 2022"})}),"\n",(0,i.jsx)(t.p,{children:"This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go by the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications."}),"\n",(0,i.jsx)(t.p,{children:"This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans."}),"\n",(0,i.jsx)(t.h2,{id:"q3---2022",children:"Q3 - 2022"}),"\n",(0,i.jsx)(t.p,{children:"At a high level we will focus on:"}),"\n",(0,i.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Releasing ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/26",children:"v4.0.0"}),", which includes the ICS-29 Fee Middleware module."]}),"\n",(0,i.jsxs)(t.li,{children:["Finishing and releasing the ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/16",children:"refactoring of 02-client"}),". This refactor will make the development of light clients easier."]}),"\n",(0,i.jsxs)(t.li,{children:["Starting the implementation of channel upgradability (see ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/issues/1599",children:"epic"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/29",children:"alpha milestone"}),") with the goal of cutting an alpha1 pre-release by the end of the quarter. Channel upgradability will allow chains to renegotiate an existing channel to take advantage of new features without having to create a new channel, thus preserving all existing packet state processed on the channel."]}),"\n",(0,i.jsxs)(t.li,{children:["Implementing the new ",(0,i.jsxs)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/31",children:[(0,i.jsx)(t.code,{children:"ORDERED_ALLOW_TIMEOUT"})," channel type"]})," and hopefully releasing it as well. This new channel type will allow packets on an ordered channel to timeout without causing the closure of the channel."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"testing-and-infrastructure",children:"Testing and infrastructure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Adding ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/32",children:"automated e2e tests"})," to the repo's CI."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"documentation-and-backlog",children:"Documentation and backlog"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Finishing and releasing the upgrade to Cosmos SDK v0.46."}),"\n",(0,i.jsxs)(t.li,{children:["Writing the ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/issues/59",children:"light client implementation guide"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Working on ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/28",children:"core backlog issues"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Depending on the timeline of the Cosmos SDK, implementing and testing the changes needed to support the ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/milestone/21",children:"transition to SMT storage"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We have also received a lot of feedback to improve Interchain Accounts and we might also work on a few things, but will depend on priorities and availability."}),"\n",(0,i.jsxs)(t.p,{children:["For a detail view of each iteration's planned work, please check out our ",(0,i.jsx)(t.a,{href:"https://github.com/orgs/cosmos/projects/7",children:"project board"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"release-schedule",children:"Release schedule"}),"\n",(0,i.jsx)(t.h4,{id:"july",children:(0,i.jsx)(t.strong,{children:"July"})}),"\n",(0,i.jsx)(t.p,{children:"We will probably cut at least one more release candidate of v4.0.0 before the final release, which should happen around the end of the month."}),"\n",(0,i.jsx)(t.p,{children:"For the Rho upgrade of the Cosmos Hub we will also release a new minor version of v3 with SDK 0.46."}),"\n",(0,i.jsx)(t.h4,{id:"august",children:(0,i.jsx)(t.strong,{children:"August"})}),"\n",(0,i.jsx)(t.p,{children:"In the first half we will probably start cutting release candidates for the 02-client refactor. Final release would most likely come out at the end of the month or beginning of September."}),"\n",(0,i.jsx)(t.h4,{id:"september",children:(0,i.jsx)(t.strong,{children:"September"})}),"\n",(0,i.jsx)(t.p,{children:"We might cut some pre-releases for the new channel type, and by the end of the month we expect to cut the first alpha pre-release for channel upgradability."}),"\n",(0,i.jsx)(t.h2,{id:"q4---2022",children:"Q4 - 2022"}),"\n",(0,i.jsxs)(t.p,{children:["We will continue the implementation and cut the final release of ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-004-channel-and-packet-semantics/UPGRADES.md",children:"channel upgradability"}),". At the end of Q3 or maybe beginning of Q4 we might also work on designing the implementation and scoping the engineering work to add support for ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/ibc/pull/741/files",children:"multihop channels"}),", so that we could start the implementation of this feature during Q4 (but this is still be decided)."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(67294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);