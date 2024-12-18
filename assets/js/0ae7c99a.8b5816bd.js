"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15984],{63723:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=s(85893),c=s(11151);const t={title:"IBC-Go v4 to v5",sidebar_label:"IBC-Go v4 to v5",sidebar_position:6,slug:"/migrations/v4-to-v5"},o="Migrating from v4 to v5",i={id:"migrations/v4-to-v5",title:"IBC-Go v4 to v5",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/versioned_docs/version-v6.3.x/04-migrations/06-v4-to-v5.md",sourceDirName:"04-migrations",slug:"/migrations/v4-to-v5",permalink:"/v6/migrations/v4-to-v5",draft:!1,unlisted:!1,tags:[],version:"v6.3.x",sidebarPosition:6,frontMatter:{title:"IBC-Go v4 to v5",sidebar_label:"IBC-Go v4 to v5",sidebar_position:6,slug:"/migrations/v4-to-v5"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v3 to v4",permalink:"/v6/migrations/v3-to-v4"},next:{title:"IBC-Go v5 to v6",permalink:"/v6/migrations/v5-to-v6"}},a={},d=[{value:"Chains",id:"chains",level:2},{value:"Ante decorator",id:"ante-decorator",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"Core",id:"core",level:3},{value:"ICS03 - Connection",id:"ics03---connection",level:3},{value:"ICS04 - Channel",id:"ics04---channel",level:3},{value:"ICS20 - Transfer",id:"ics20---transfer",level:3},{value:"ICS27 - Interchain Accounts",id:"ics27---interchain-accounts",level:3},{value:"Cosmos SDK message handler responses in packet acknowledgement",id:"cosmos-sdk-message-handler-responses-in-packet-acknowledgement",level:4},{value:"ICS29 - Fee Middleware",id:"ics29---fee-middleware",level:3},{value:"IBC testing package",id:"ibc-testing-package",level:3},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2},{value:"ICS02 - Client",id:"ics02---client",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"migrating-from-v4-to-v5",children:"Migrating from v4 to v5"}),"\n",(0,r.jsx)(n.p,{children:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."}),"\n",(0,r.jsx)(n.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#chains",children:"Chains"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ibc-apps",children:"IBC Apps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#relayers",children:"Relayers"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#relayers",children:"IBC Light Clients"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"github.com/cosmos/ibc-go/v4 -> github.com/cosmos/ibc-go/v5\n"})}),"\n",(0,r.jsx)(n.h2,{id:"chains",children:"Chains"}),"\n",(0,r.jsx)(n.h3,{id:"ante-decorator",children:"Ante decorator"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AnteDecorator"})," type in ",(0,r.jsx)(n.code,{children:"core/ante"})," has been renamed to ",(0,r.jsx)(n.code,{children:"RedundantRelayDecorator"})," (and the corresponding constructor function to ",(0,r.jsx)(n.code,{children:"NewRedundantRelayDecorator"}),"). Therefore in the function that creates the instance of the ",(0,r.jsx)(n.code,{children:"sdk.AnteHandler"})," type (e.g. ",(0,r.jsx)(n.code,{children:"NewAnteHandler"}),") the change would be like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewAnteHandler(options HandlerOptions) (sdk.AnteHandler, error) {\n   // parameter validation\n\n   anteDecorators := []sdk.AnteDecorator{\n      // other ante decorators\n-     ibcante.NewAnteDecorator(opts.IBCkeeper),\n+     ibcante.NewRedundantRelayDecorator(options.IBCKeeper),\n   }\n\n   return sdk.ChainAnteDecorators(anteDecorators...), nil\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"AnteDecorator"})," was actually renamed twice, but in ",(0,r.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/1820",children:"this PR"})," you can see the changes made for the final rename."]}),"\n",(0,r.jsx)(n.h2,{id:"ibc-apps",children:"IBC Apps"}),"\n",(0,r.jsx)(n.h3,{id:"core",children:"Core"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," parameter of the ",(0,r.jsx)(n.code,{children:"NewKeeper"})," function in ",(0,r.jsx)(n.code,{children:"modules/core/keeper"})," is now of type ",(0,r.jsx)(n.code,{children:"storetypes.StoreKey"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   stakingKeeper clienttypes.StakingKeeper,\n   upgradeKeeper clienttypes.UpgradeKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n) *Keeper\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RegisterRESTRoutes"})," function in ",(0,r.jsx)(n.code,{children:"modules/core"})," has been removed."]}),"\n",(0,r.jsx)(n.h3,{id:"ics03---connection",children:"ICS03 - Connection"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," parameter of the ",(0,r.jsx)(n.code,{children:"NewKeeper"})," function in ",(0,r.jsx)(n.code,{children:"modules/core/03-connection/keeper"})," is now of type ",(0,r.jsx)(n.code,{children:"storetypes.StoreKey"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ck types.ClientKeeper\n) Keeper\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ics04---channel",children:"ICS04 - Channel"}),"\n",(0,r.jsxs)(n.p,{children:["The function ",(0,r.jsx)(n.code,{children:"NewPacketId"})," in ",(0,r.jsx)(n.code,{children:"modules/core/04-channel/types"})," has been renamed to ",(0,r.jsx)(n.code,{children:"NewPacketID"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"-  func NewPacketId(\n+  func NewPacketID(\n  portID,\n  channelID string,\n  seq uint64\n) PacketId\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," parameter of the ",(0,r.jsx)(n.code,{children:"NewKeeper"})," function in ",(0,r.jsx)(n.code,{children:"modules/core/04-channel/keeper"})," is now of type ",(0,r.jsx)(n.code,{children:"storetypes.StoreKey"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   clientKeeper types.ClientKeeper,\n   connectionKeeper types.ConnectionKeeper,\n   portKeeper types.PortKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n) Keeper\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ics20---transfer",children:"ICS20 - Transfer"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," parameter of the ",(0,r.jsx)(n.code,{children:"NewKeeper"})," function in ",(0,r.jsx)(n.code,{children:"modules/apps/transfer/keeper"})," is now of type ",(0,r.jsx)(n.code,{children:"storetypes.StoreKey"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ics4Wrapper types.ICS4Wrapper,\n   channelKeeper types.ChannelKeeper,\n   portKeeper types.PortKeeper,\n   authKeeper types.AccountKeeper,\n   bankKeeper types.BankKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n) Keeper\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"amount"})," parameter of function ",(0,r.jsx)(n.code,{children:"GetTransferCoin"})," in ",(0,r.jsx)(n.code,{children:"modules/apps/transfer/types"})," is now of type ",(0,r.jsx)(n.code,{children:"math.Int"})," (",(0,r.jsx)(n.code,{children:'"cosmossdk.io/math"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func GetTransferCoin(\n   portID, channelID, baseDenom string,\n-  amount sdk.Int\n+  amount math.Int\n) sdk.Coin\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RegisterRESTRoutes"})," function in ",(0,r.jsx)(n.code,{children:"modules/apps/transfer"})," has been removed."]}),"\n",(0,r.jsx)(n.h3,{id:"ics27---interchain-accounts",children:"ICS27 - Interchain Accounts"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," and ",(0,r.jsx)(n.code,{children:"msgRouter"})," parameters of the ",(0,r.jsx)(n.code,{children:"NewKeeper"})," functions in"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"modules/apps/27-interchain-accounts/controller/keeper"})}),"\n",(0,r.jsxs)(n.li,{children:["and ",(0,r.jsx)(n.code,{children:"modules/apps/27-interchain-accounts/host/keeper"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["have changed type. The ",(0,r.jsx)(n.code,{children:"key"})," parameter is now of type ",(0,r.jsx)(n.code,{children:"storetypes.StoreKey"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),"), and the ",(0,r.jsx)(n.code,{children:"msgRouter"})," parameter is now of type ",(0,r.jsx)(n.code,{children:"*icatypes.MessageRouter"})," (where ",(0,r.jsx)(n.code,{children:"icatypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/ibc-go/v5/modules/apps/27-interchain-accounts/types"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"// NewKeeper creates a new interchain accounts controller Keeper instance\nfunc NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ics4Wrapper icatypes.ICS4Wrapper,\n   channelKeeper icatypes.ChannelKeeper,\n   portKeeper icatypes.PortKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n-  msgRouter *baseapp.MsgServiceRouter,\n+  msgRouter *icatypes.MessageRouter,\n) Keeper\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"// NewKeeper creates a new interchain accounts host Keeper instance\nfunc NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   channelKeeper icatypes.ChannelKeeper,\n   portKeeper icatypes.PortKeeper,\n   accountKeeper icatypes.AccountKeeper,\n   scopedKeeper capabilitykeeper.ScopedKeeper,\n-  msgRouter *baseapp.MsgServiceRouter,\n+  msgRouter *icatypes.MessageRouter,\n) Keeper\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The new ",(0,r.jsx)(n.code,{children:"MessageRouter"})," interface is defined as:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type MessageRouter interface {\n \tHandler(msg sdk.Msg) baseapp.MsgServiceHandler\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RegisterRESTRoutes"})," function in ",(0,r.jsx)(n.code,{children:"modules/apps/27-interchain-accounts"})," has been removed."]}),"\n",(0,r.jsxs)(n.p,{children:["An additional parameter, ",(0,r.jsx)(n.code,{children:"ics4Wrapper"})," has been added to the ",(0,r.jsx)(n.code,{children:"host"})," submodule ",(0,r.jsx)(n.code,{children:"NewKeeper"})," function in ",(0,r.jsx)(n.code,{children:"modules/apps/27-interchain-accounts/host/keeper"}),".\nThis allows the ",(0,r.jsx)(n.code,{children:"host"})," submodule to correctly unwrap the channel version for channel reopening handshakes in the ",(0,r.jsx)(n.code,{children:"OnChanOpenTry"})," callback."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewKeeper(\n   cdc codec.BinaryCodec,\n   key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n+  ics4Wrapper icatypes.ICS4Wrapper,\n   channelKeeper icatypes.ChannelKeeper,\n   portKeeper icatypes.PortKeeper,\n   accountKeeper icatypes.AccountKeeper,\n   scopedKeeper icatypes.ScopedKeeper,\n   msgRouter icatypes.MessageRouter,\n) Keeper\n"})}),"\n",(0,r.jsx)(n.h4,{id:"cosmos-sdk-message-handler-responses-in-packet-acknowledgement",children:"Cosmos SDK message handler responses in packet acknowledgement"}),"\n",(0,r.jsxs)(n.p,{children:["The construction of the transaction response of a message execution on the host chain has changed. The ",(0,r.jsx)(n.code,{children:"Data"})," field in the ",(0,r.jsx)(n.code,{children:"sdk.TxMsgData"})," has been deprecated and since Cosmos SDK 0.46 the ",(0,r.jsx)(n.code,{children:"MsgResponses"})," field contains the message handler responses packed into ",(0,r.jsx)(n.code,{children:"Any"}),"s."]}),"\n",(0,r.jsx)(n.p,{children:"For chains on Cosmos SDK 0.45 and below, the message response was constructed like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"txMsgData := &sdk.TxMsgData{\n   Data: make([]*sdk.MsgData, len(msgs)),\n}\n\nfor i, msg := range msgs {\n   // message validation\n\n   msgResponse, err := k.executeMsg(cacheCtx, msg)\n   // return if err != nil\n\n   txMsgData.Data[i] = &sdk.MsgData{\n      MsgType: sdk.MsgTypeURL(msg),\n      Data:    msgResponse,\n   }\n}\n\n// emit events\n\ntxResponse, err := proto.Marshal(txMsgData)\n// return if err != nil\n\nreturn txResponse, nil\n"})}),"\n",(0,r.jsx)(n.p,{children:"And for chains on Cosmos SDK 0.46 and above, it is now done like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"txMsgData := &sdk.TxMsgData{\n   MsgResponses: make([]*codectypes.Any, len(msgs)),\n}\n\nfor i, msg := range msgs {\n   // message validation\n\n   any, err := k.executeMsg(cacheCtx, msg)\n   // return if err != nil\n\n   txMsgData.MsgResponses[i] = any\n}\n\n// emit events\n\ntxResponse, err := proto.Marshal(txMsgData)\n// return if err != nil\n\nreturn txResponse, nil\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When handling the acknowledgement in the ",(0,r.jsx)(n.code,{children:"OnAcknowledgementPacket"})," callback of a custom ICA controller module, then depending on whether ",(0,r.jsx)(n.code,{children:"txMsgData.Data"})," is empty or not, the logic to handle the message handler response will be different. ",(0,r.jsx)(n.strong,{children:"Only controller chains on Cosmos SDK 0.46 or above will be able to write the logic needed to handle the response from a host chain on Cosmos SDK 0.46 or above."})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"var ack channeltypes.Acknowledgement\nif err := channeltypes.SubModuleCdc.UnmarshalJSON(acknowledgement, &ack); err != nil {\n   return err\n}\n\nvar txMsgData sdk.TxMsgData\nif err := proto.Unmarshal(ack.GetResult(), txMsgData); err != nil {\n   return err\n}\n\nswitch len(txMsgData.Data) {\ncase 0: // for SDK 0.46 and above\n   for _, msgResponse := range txMsgData.MsgResponses {\n      // unmarshall msgResponse and execute logic based on the response\n   }\n   return nil\ndefault: // for SDK 0.45 and below\n   for _, msgData := range txMsgData.Data {\n      // unmarshall msgData and execute logic based on the response\n   }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/architecture/adr-003-ics27-acknowledgement#next-major-version-format",children:"ADR-03"})," for more information or the ",(0,r.jsx)(n.a,{href:"/v6/apps/interchain-accounts/auth-modules#onacknowledgementpacket",children:"corresponding documentation about authentication modules"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"ics29---fee-middleware",children:"ICS29 - Fee Middleware"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," parameter of the ",(0,r.jsx)(n.code,{children:"NewKeeper"})," function in ",(0,r.jsx)(n.code,{children:"modules/apps/29-fee"})," is now of type ",(0,r.jsx)(n.code,{children:"storetypes.StoreKey"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   ics4Wrapper types.ICS4Wrapper,\n   channelKeeper types.ChannelKeeper,\n   portKeeper types.PortKeeper,\n   authKeeper types.AccountKeeper,\n   bankKeeper types.BankKeeper,\n) Keeper\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RegisterRESTRoutes"})," function in ",(0,r.jsx)(n.code,{children:"modules/apps/29-fee"})," has been removed."]}),"\n",(0,r.jsx)(n.h3,{id:"ibc-testing-package",children:"IBC testing package"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MockIBCApp"})," type has been renamed to ",(0,r.jsx)(n.code,{children:"IBCApp"})," (and the corresponding constructor function to ",(0,r.jsx)(n.code,{children:"NewIBCApp"}),"). This has resulted therefore in:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"IBCApp"})," field of the ",(0,r.jsx)(n.code,{children:"*IBCModule"})," in ",(0,r.jsx)(n.code,{children:"testing/mock"})," to change its type as well to ",(0,r.jsx)(n.code,{children:"*IBCApp"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"type IBCModule struct {\n   appModule *AppModule\n-  IBCApp    *MockIBCApp // base application of an IBC middleware stack\n+  IBCApp    *IBCApp // base application of an IBC middleware stack\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"app"})," parameter to ",(0,r.jsx)(n.code,{children:"*NewIBCModule"})," in ",(0,r.jsx)(n.code,{children:"testing/mock"})," to change its type as well to ",(0,r.jsx)(n.code,{children:"*IBCApp"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewIBCModule(\n   appModule *AppModule,\n-  app *MockIBCApp\n+  app *IBCApp\n) IBCModule\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MockEmptyAcknowledgement"})," type has been renamed to ",(0,r.jsx)(n.code,{children:"EmptyAcknowledgement"})," (and the corresponding constructor function to ",(0,r.jsx)(n.code,{children:"NewEmptyAcknowledgement"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"TestingApp"})," interface in ",(0,r.jsx)(n.code,{children:"testing"})," has gone through some modifications:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The return type of the function ",(0,r.jsx)(n.code,{children:"GetStakingKeeper"})," is not the concrete type ",(0,r.jsx)(n.code,{children:"stakingkeeper.Keeper"})," anymore (where ",(0,r.jsx)(n.code,{children:"stakingkeeper"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/x/staking/keeper"'}),"), but it has been changed to the interface ",(0,r.jsx)(n.code,{children:"ibctestingtypes.StakingKeeper"})," (where ",(0,r.jsx)(n.code,{children:"ibctestingtypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'""github.com/cosmos/ibc-go/v5/testing/types"'}),"). See this ",(0,r.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/pull/2028",children:"PR"})," for more details. The ",(0,r.jsx)(n.code,{children:"StakingKeeper"})," interface is defined as:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type StakingKeeper interface {\n \tGetHistoricalInfo(ctx sdk.Context, height int64) (stakingtypes.HistoricalInfo, bool)\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The return type of the function ",(0,r.jsx)(n.code,{children:"LastCommitID"})," has changed to ",(0,r.jsx)(n.code,{children:"storetypes.CommitID"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See the following ",(0,r.jsx)(n.code,{children:"git diff"})," for more details:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"type TestingApp interface {\n   abci.Application\n\n   // ibc-go additions\n   GetBaseApp() *baseapp.BaseApp\n-  GetStakingKeeper() stakingkeeper.Keeper\n+  GetStakingKeeper() ibctestingtypes.StakingKeeper\n   GetIBCKeeper() *keeper.Keeper\n   GetScopedIBCKeeper() capabilitykeeper.ScopedKeeper\n   GetTxConfig() client.TxConfig\n\n   // Implemented by SimApp\n   AppCodec() codec.Codec\n\n   // Implemented by BaseApp\n-  LastCommitID() sdk.CommitID\n+  LastCommitID() storetypes.CommitID\n   LastBlockHeight() int64\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"powerReduction"})," parameter of the function ",(0,r.jsx)(n.code,{children:"SetupWithGenesisValSet"})," in ",(0,r.jsx)(n.code,{children:"testing"})," is now of type ",(0,r.jsx)(n.code,{children:"math.Int"})," (",(0,r.jsx)(n.code,{children:'"cosmossdk.io/math"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func SetupWithGenesisValSet(\n   t *testing.T,\n   valSet *tmtypes.ValidatorSet,\n   genAccs []authtypes.GenesisAccount,\n   chainID string,\n-  powerReduction sdk.Int,\n+  powerReduction math.Int,\n   balances ...banktypes.Balance\n) TestingApp\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"accAmt"})," parameter of the functions"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AddTestAddrsFromPubKeys"})," ,"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"AddTestAddrs"})}),"\n",(0,r.jsxs)(n.li,{children:["and ",(0,r.jsx)(n.code,{children:"AddTestAddrsIncremental"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["in ",(0,r.jsx)(n.code,{children:"testing/simapp"})," are now of type ",(0,r.jsx)(n.code,{children:"math.Int"})," (",(0,r.jsx)(n.code,{children:'"cosmossdk.io/math"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func AddTestAddrsFromPubKeys(\n   app *SimApp,\n   ctx sdk.Context,\n   pubKeys []cryptotypes.PubKey,\n-  accAmt sdk.Int,\n+  accAmt math.Int\n)\nfunc addTestAddrs(\n   app *SimApp,\n   ctx sdk.Context,\n   accNum int,\n-  accAmt sdk.Int,\n+  accAmt math.Int,\n   strategy GenerateAccountStrategy\n) []sdk.AccAddress\nfunc AddTestAddrsIncremental(\n   app *SimApp,\n   ctx sdk.Context,\n   accNum int,\n-  accAmt sdk.Int,\n+  accAmt math.Int\n) []sdk.AccAddress\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RegisterRESTRoutes"})," function in ",(0,r.jsx)(n.code,{children:"testing/mock"})," has been removed."]}),"\n",(0,r.jsx)(n.h2,{id:"relayers",children:"Relayers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No relevant changes were made in this release."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ibc-light-clients",children:"IBC Light Clients"}),"\n",(0,r.jsx)(n.h3,{id:"ics02---client",children:"ICS02 - Client"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"key"})," parameter of the ",(0,r.jsx)(n.code,{children:"NewKeeper"})," function in ",(0,r.jsx)(n.code,{children:"modules/core/02-client/keeper"})," is now of type ",(0,r.jsx)(n.code,{children:"storetypes.StoreKey"})," (where ",(0,r.jsx)(n.code,{children:"storetypes"})," is an import alias for ",(0,r.jsx)(n.code,{children:'"github.com/cosmos/cosmos-sdk/store/types"'}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"func NewKeeper(\n   cdc codec.BinaryCodec,\n-  key sdk.StoreKey,\n+  key storetypes.StoreKey,\n   paramSpace paramtypes.Subspace,\n   sk types.StakingKeeper,\n   uk types.UpgradeKeeper\n) Keeper\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var r=s(67294);const c={},t=r.createContext(c);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);