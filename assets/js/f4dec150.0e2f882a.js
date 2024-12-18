"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22817],{90721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(85893),i=n(11151),a=n(84924);const s={title:"Wire Up the ICS-29 Fee Middleware to a Cosmos SDK Blockchain",sidebar_label:"Wire Up the ICS-29 Fee Middleware to a Cosmos SDK Blockchain",sidebar_position:4,slug:"/fee/wire-feeibc-mod"},o="Wire up the ICS-29 Fee Middleware to a Cosmos SDK blockchain",l={id:"fee/wire-feeibc-mod",title:"Wire Up the ICS-29 Fee Middleware to a Cosmos SDK Blockchain",description:"In this section, you will:",source:"@site/tutorials/01-fee/04-wire-feeibc-mod.md",sourceDirName:"01-fee",slug:"/fee/wire-feeibc-mod",permalink:"/tutorials/fee/wire-feeibc-mod",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Wire Up the ICS-29 Fee Middleware to a Cosmos SDK Blockchain",sidebar_label:"Wire Up the ICS-29 Fee Middleware to a Cosmos SDK Blockchain",sidebar_position:4,slug:"/fee/wire-feeibc-mod"},sidebar:"defaultSidebar",previous:{title:"Scaffold a Cosmos SDK Blockchain with Ignite",permalink:"/tutorials/fee/scaffold-chain"},next:{title:"Scaffold a React App",permalink:"/tutorials/fee/scaffold-react"}},d={},c=[{value:"1. Wire up the ICS-29 Fee Middleware as a Cosmos SDK module",id:"1-wire-up-the-ics-29-fee-middleware-as-a-cosmos-sdk-module",level:2},{value:"1.1. Add the Fee Middleware to the module managers and define its account permissions",id:"11-add-the-fee-middleware-to-the-module-managers-and-define-its-account-permissions",level:3},{value:"1.2. Initialize the Fee Middleware keeper",id:"12-initialize-the-fee-middleware-keeper",level:3},{value:"1.3. Add the Fee Middleware to SetOrderBeginBlockers, SetOrderEndBlockers, and genesisModuleOrder",id:"13-add-the-fee-middleware-to-setorderbeginblockers-setorderendblockers-and-genesismoduleorder",level:3},{value:"2. Wire up the ICS-29 Fee Middleware to the IBC Transfer stack",id:"2-wire-up-the-ics-29-fee-middleware-to-the-ibc-transfer-stack",level:2},{value:"2.1. Wire up the ICS-29 Fee Middleware to the <code>TransferKeeper</code>",id:"21-wire-up-the-ics-29-fee-middleware-to-the-transferkeeper",level:3},{value:"2.2. Wire up the ICS-29 Fee Middleware to the <code>TransferModule</code>",id:"22-wire-up-the-ics-29-fee-middleware-to-the-transfermodule",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"wire-up-the-ics-29-fee-middleware-to-a-cosmos-sdk-blockchain",children:"Wire up the ICS-29 Fee Middleware to a Cosmos SDK blockchain"}),"\n",(0,r.jsxs)(a.Z,{type:"learning",title:"Learning Goals",children:[(0,r.jsx)(t.p,{children:"In this section, you will:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Add the ICS-29 Fee Middleware to a Cosmos SDK blockchain as a module."}),"\n",(0,r.jsx)(t.li,{children:"Wire up the ICS-29 Fee Middleware to the IBC transfer stack."}),"\n"]})]}),"\n",(0,r.jsx)(t.h2,{id:"1-wire-up-the-ics-29-fee-middleware-as-a-cosmos-sdk-module",children:"1. Wire up the ICS-29 Fee Middleware as a Cosmos SDK module"}),"\n",(0,r.jsx)(t.p,{children:"The Fee Middleware is not just an IBC middleware, it is also a Cosmos SDK module since it manages its own state and defines its own messages.\nWe will first wire up the Fee Middleware as a Cosmos SDK module, then we will wire it up to the IBC transfer stack."}),"\n",(0,r.jsxs)(t.p,{children:["Cosmos SDK modules are registered in the ",(0,r.jsx)(t.code,{children:"app/app.go"})," file. The ",(0,r.jsx)(t.code,{children:"app.go"})," file is the entry point for the Cosmos SDK application. It is where the application is initialized and where the application's modules are registered."]}),"\n",(0,r.jsxs)(t.p,{children:["We first need to import the ",(0,r.jsx)(t.code,{children:"fee"})," module into the ",(0,r.jsx)(t.code,{children:"app.go"})," file. Add the following import statements to the ",(0,r.jsx)(t.code,{children:"app.go"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'reference title="app/app.go"',children:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/64e572214b4ba9a1075db96440dd83d4b90a6052/app/app.go#L99-L101\n"})}),"\n",(0,r.jsx)(t.h3,{id:"11-add-the-fee-middleware-to-the-module-managers-and-define-its-account-permissions",children:"1.1. Add the Fee Middleware to the module managers and define its account permissions"}),"\n",(0,r.jsxs)(t.p,{children:["Next, we need to add ",(0,r.jsx)(t.code,{children:"fee"})," module to the module basic manager and define its account permissions. Add the following code to the ",(0,r.jsx)(t.code,{children:"app.go"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"\t// ModuleBasics defines the module BasicManager is in charge of setting up basic,\n\t// non-dependant module elements, such as codec registration\n\t// and genesis verification.\n\tModuleBasics = module.NewBasicManager(\n\t\t// ... other modules\n\t\tevidence.AppModuleBasic{},\n\t\ttransfer.AppModuleBasic{},\n\t\tica.AppModuleBasic{},\n\t\tvesting.AppModuleBasic{},\n\t\t// plus-diff-line \n+\t\tibcfee.AppModuleBasic{},\n\t\tconsensus.AppModuleBasic{},\n\t\t// this line is used by starport scaffolding # stargate/app/moduleBasic\n\t)\n\n\t// module account permissions\n\tmaccPerms = map[string][]string{\n\t\tauthtypes.FeeCollectorName:     nil,\n\t\tdistrtypes.ModuleName:          nil,\n\t\ticatypes.ModuleName:            nil,\n\t\tminttypes.ModuleName:           {authtypes.Minter},\n\t\tstakingtypes.BondedPoolName:    {authtypes.Burner, authtypes.Staking},\n\t\tstakingtypes.NotBondedPoolName: {authtypes.Burner, authtypes.Staking},\n\t\tgovtypes.ModuleName:            {authtypes.Burner},\n\t\tpooltypes.ModuleName:           nil,\n\t\tibctransfertypes.ModuleName:    {authtypes.Minter, authtypes.Burner},\n\t\t// plus-diff-line \n+\t\tibcfeetypes.ModuleName:         nil,\n\t\t// this line is used by starport scaffolding # stargate/app/maccPerms\n\t}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next, we need to add the fee middleware to the module manager. Add the following code to the ",(0,r.jsx)(t.code,{children:"app.go"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"\tapp.mm = module.NewManager(\n\t\t// ... other modules\n\t\tconsensus.NewAppModule(appCodec, app.ConsensusParamsKeeper),\n\t\tibc.NewAppModule(app.IBCKeeper),\n\t\tparams.NewAppModule(app.ParamsKeeper),\n\t\ttransferModule,\n\t\t// plus-diff-line \n+\t\tibcfee.NewAppModule(app.IBCFeeKeeper),\n\t\ticaModule,\n\t\t// this line is used by starport scaffolding # stargate/app/appModule\n\n\t\tcrisis.NewAppModule(app.CrisisKeeper, skipGenesisInvariants, app.GetSubspace(crisistypes.ModuleName)), // always be last to make sure that it checks for all invariants and not only part of them\n\t)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that we have added ",(0,r.jsx)(t.code,{children:"ibcfee.NewAppModule(app.IBCFeeKeeper)"})," to the module manager but we have not yet created nor initialized the ",(0,r.jsx)(t.code,{children:"app.IBCFeeKeeper"}),". We will do that next."]}),"\n",(0,r.jsx)(t.h3,{id:"12-initialize-the-fee-middleware-keeper",children:"1.2. Initialize the Fee Middleware keeper"}),"\n",(0,r.jsx)(t.p,{children:"Next, we need to add the fee middleware keeper to the Cosmos App, register its store key, and initialize it."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"// App extends an ABCI application, but with most of its parameters exported.\n// They are exported for convenience in creating helper functions, as object\n// capabilities aren't needed for testing.\ntype App struct {\n\t// ... other fields\n\tUpgradeKeeper         *upgradekeeper.Keeper\n\tParamsKeeper          paramskeeper.Keeper\n\tIBCKeeper             *ibckeeper.Keeper // IBC Keeper must be a pointer in the app, so we can SetRouter on it correctly\n\t// plus-diff-line \n+\tIBCFeeKeeper          ibcfeekeeper.Keeper\n\tEvidenceKeeper        evidencekeeper.Keeper\n\tTransferKeeper        ibctransferkeeper.Keeper\n\tICAHostKeeper         icahostkeeper.Keeper\n\t// ... other fields\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"keys := sdk.NewKVStoreKeys(\n\t\tauthtypes.StoreKey, authz.ModuleName, banktypes.StoreKey, stakingtypes.StoreKey,\n\t\tcrisistypes.StoreKey, minttypes.StoreKey, distrtypes.StoreKey, slashingtypes.StoreKey,\n\t\tgovtypes.StoreKey, paramstypes.StoreKey, ibcexported.StoreKey, upgradetypes.StoreKey,\n\t\tfeegrant.StoreKey, evidencetypes.StoreKey, ibctransfertypes.StoreKey, icahosttypes.StoreKey,\n\t\tcapabilitytypes.StoreKey, group.StoreKey, icacontrollertypes.StoreKey, consensusparamtypes.StoreKey,\n\t\t// plus-diff-line \n+\t\tibcfeetypes.StoreKey,\n\t\t// this line is used by starport scaffolding # stargate/app/storeKey\n\t)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then initialize the keeper:"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Make sure to do the following initialization after the ",(0,r.jsx)(t.code,{children:"IBCKeeper"})," is initialized and before ",(0,r.jsx)(t.code,{children:"TransferKeeper"})," is initialized."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'reference title="app/app.go"',children:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/64e572214b4ba9a1075db96440dd83d4b90a6052/app/app.go#L452-L458\n"})}),"\n",(0,r.jsx)(t.h3,{id:"13-add-the-fee-middleware-to-setorderbeginblockers-setorderendblockers-and-genesismoduleorder",children:"1.3. Add the Fee Middleware to SetOrderBeginBlockers, SetOrderEndBlockers, and genesisModuleOrder"}),"\n",(0,r.jsxs)(t.p,{children:["Next, we need to add the fee middleware to the ",(0,r.jsx)(t.code,{children:"SetOrderBeginBlockers"}),", ",(0,r.jsx)(t.code,{children:"SetOrderEndBlockers"}),", and ",(0,r.jsx)(t.code,{children:"genesisModuleOrder"})," functions. Add the following code to the ",(0,r.jsx)(t.code,{children:"app.go"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"\t// During begin block slashing happens after distr.BeginBlocker so that\n\t// there is nothing left over in the validator fee pool, so as to keep the\n\t// CanWithdrawInvariant invariant.\n\t// NOTE: staking module is required if HistoricalEntries param > 0\n\tapp.mm.SetOrderBeginBlockers(\n\t\t// ... other modules\n\t\ticatypes.ModuleName,\n\t\t// plus-diff-line\n+\t\tibcfeetypes.ModuleName,\n\t\tgenutiltypes.ModuleName,\n\t\t// ... other modules\n\t\tconsensusparamtypes.ModuleName,\n\t\t// this line is used by starport scaffolding # stargate/app/beginBlockers\n\t)\n\n\tapp.mm.SetOrderEndBlockers(\n\t\t// ... other modules\n\t\ticatypes.ModuleName,\n\t\t// plus-diff-line\n+\t\tibcfeetypes.ModuleName,\n\t\tcapabilitytypes.ModuleName,\n\t\t// ... other modules\n\t\tconsensusparamtypes.ModuleName,\n\t\t// this line is used by starport scaffolding # stargate/app/endBlockers\n\t)\n\n\t// NOTE: The genutils module must occur after staking so that pools are\n\t// properly initialized with tokens from genesis accounts.\n\t// NOTE: Capability module must occur first so that it can initialize any capabilities\n\t// so that other modules that want to create or claim capabilities afterwards in InitChain\n\t// can do so safely.\n\tgenesisModuleOrder := []string{\n\t\t// ... other modules\n\t\ticatypes.ModuleName,\n\t\t// plus-diff-line\n+\t\tibcfeetypes.ModuleName,\n\t\tevidencetypes.ModuleName,\n\t\t// ... other modules\n\t\tconsensusparamtypes.ModuleName,\n\t\t// this line is used by starport scaffolding # stargate/app/initGenesis\n\t}\n\tapp.mm.SetOrderInitGenesis(genesisModuleOrder...)\n\tapp.mm.SetOrderExportGenesis(genesisModuleOrder...)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"2-wire-up-the-ics-29-fee-middleware-to-the-ibc-transfer-stack",children:"2. Wire up the ICS-29 Fee Middleware to the IBC Transfer stack"}),"\n",(0,r.jsxs)(t.h3,{id:"21-wire-up-the-ics-29-fee-middleware-to-the-transferkeeper",children:["2.1. Wire up the ICS-29 Fee Middleware to the ",(0,r.jsx)(t.code,{children:"TransferKeeper"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ICS-29 Fee Middleware Keeper implements ",(0,r.jsx)(t.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/modules/core/05-port/types/module.go#L109-L133",children:(0,r.jsx)(t.code,{children:"ICS4Wrapper"})})," interface. This means that the ",(0,r.jsx)(t.code,{children:"IBCFeeKeeper"})," wraps the ",(0,r.jsx)(t.code,{children:"IBCKeeper.ChannelKeeper"})," and that it can replace the use of the ",(0,r.jsx)(t.code,{children:"ChannelKeeper"})," for sending packets, writing acknowledgements, and retrieving the IBC channel version."]}),"\n",(0,r.jsxs)(t.p,{children:["We need to replace the ",(0,r.jsx)(t.code,{children:"ChannelKeeper"})," with the ",(0,r.jsx)(t.code,{children:"IBCFeeKeeper"})," in the ",(0,r.jsx)(t.code,{children:"TransferKeeper"}),". To do this, we need to modify the ",(0,r.jsx)(t.code,{children:"TransferKeeper"})," initialization in the ",(0,r.jsx)(t.code,{children:"app.go"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"\t// Create Transfer Keepers\n\tapp.TransferKeeper = ibctransferkeeper.NewKeeper(\n\t\tappCodec,\n\t\tkeys[ibctransfertypes.StoreKey],\n\t\tapp.GetSubspace(ibctransfertypes.ModuleName),\n\t\t// minus-diff-line \n-\t\tapp.IBCKeeper.ChannelKeeper,\n\t\t// plus-diff-line \n+\t\tapp.IBCFeeKeeper,\n\t\tapp.IBCKeeper.ChannelKeeper,\n\t\t&app.IBCKeeper.PortKeeper,\n\t\tapp.AccountKeeper,\n\t\tapp.BankKeeper,\n\t\tscopedTransferKeeper,\n\t)\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"22-wire-up-the-ics-29-fee-middleware-to-the-transfermodule",children:["2.2. Wire up the ICS-29 Fee Middleware to the ",(0,r.jsx)(t.code,{children:"TransferModule"})]}),"\n",(0,r.jsxs)(t.p,{children:["Currently, our ",(0,r.jsx)(t.code,{children:"app/app.go"})," only contains the transfer module, which is a regular SDK AppModule (that manages state and has its own messages) that also fulfills the ",(0,r.jsx)(t.code,{children:"IBCModule"})," interface and therefore has the ability to handle both channel handshake and packet lifecycle callbacks."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"The transfer module is instantiated two times, once as a regular SDK module and once as an IBC module."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'reference title="app/app.go"',children:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/0f41b3c6b4e065aa1a860de3e3038d489c37a28a/app/app.go#L457-L458\n"})})]}),"\n",(0,r.jsxs)(t.p,{children:['We therefore need to "convert" the ',(0,r.jsx)(t.code,{children:"transferIBCModule"})," to an IBC application stack that includes both the ",(0,r.jsx)(t.code,{children:"transferIBCModule"})," and the ICS-29 Fee Middleware. Modify the ",(0,r.jsx)(t.code,{children:"app.go"})," file as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"\ttransferModule := transfer.NewAppModule(app.TransferKeeper)\n\t// minus-diff-line \n-\ttransferIBCModule := transfer.NewIBCModule(app.TransferKeeper)\n\t// plus-diff-start\n+\n+\t/**** IBC Transfer Stack ****/\n+\tvar transferStack ibcporttypes.IBCModule\n+\ttransferStack = transfer.NewIBCModule(app.TransferKeeper)\n+\ttransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\n\t// plus-diff-end \n"})}),"\n",(0,r.jsxs)(t.p,{children:["And finally, we need to add the ",(0,r.jsx)(t.code,{children:"transferStack"})," to the ",(0,r.jsx)(t.code,{children:"ibcRouter"}),". Modify the ",(0,r.jsx)(t.code,{children:"app.go"})," file as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",metastring:'title="app/app.go"',children:"\tibcRouter.AddRoute(icahosttypes.SubModuleName, icaHostIBCModule).\n\t\t// minus-diff-line \n-\t\tAddRoute(ibctransfertypes.ModuleName, transferIBCModule)\n\t\t// plus-diff-line \n+\t\tAddRoute(ibctransfertypes.ModuleName, transferStack)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This completes the wiring of the ICS-29 Fee Middleware to the IBC transfer stack! See a full example of the ",(0,r.jsx)(t.code,{children:"app.go"})," file with the fee middleware wired up ",(0,r.jsx)(t.a,{href:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/blob/64e572214b4ba9a1075db96440dd83d4b90a6052/app/app.go",children:"here"})," and the diff ",(0,r.jsx)(t.a,{href:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/64e572214b4ba9a1075db96440dd83d4b90a6052",children:"here"}),". Test that the application is still running with ",(0,r.jsx)(t.code,{children:"ignite chain serve --reset-once"}),", and quit with ",(0,r.jsx)(t.code,{children:"q"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},84924:(e,t,n)=>{n.d(t,{Z:()=>A});var r,i=n(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:21,height:23,fill:"none",viewBox:"0 0 21 23","aria-labelledby":n},s),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{fill:"#fff",d:"M9.302 22.2c-.1 0-.3 0-.4-.1-.4-.2-.6-.6-.6-1l.9-6.9h-7.9q-.6 0-.9-.6c-.2-.4-.1-.8.1-1.1l10-12c.3-.3.8-.5 1.2-.3s.6.6.6 1l-.9 6.9h7.9q.6 0 .9.6c.2.4.1.8-.1 1.1l-10 12c-.2.3-.5.4-.8.4m-5.9-10h6.9c.3 0 .6.1.7.3.2.2.3.5.2.8l-.6 4.6 6.4-7.7h-6.9c-.3 0-.6-.1-.7-.3-.2-.2-.3-.5-.2-.8l.6-4.6z"})))};var o;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:21,height:21,fill:"none",viewBox:"0 0 21 21","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,o||(o=i.createElement("path",{fill:"#200F31",d:"M8.3 9.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5zM19.3 9.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5zM19.3 20.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5zM8.3 20.2h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v7c0 .5-.5 1-1 1m-6-2h5v-5h-5z"})))};var c;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const h=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:23,height:23,fill:"none",viewBox:"0 0 23 23","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,c||(c=i.createElement("path",{fill:"#fff",d:"M11.3.2C5.2.2.3 5.1.3 11.2s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11m1 19.9v-2.9c0-.6-.4-1-1-1s-1 .4-1 1v2.9c-4.2-.5-7.5-3.8-7.9-7.9h2.9c.6 0 1-.4 1-1s-.4-1-1-1H2.4c.5-4.2 3.8-7.5 7.9-7.9v2.9c0 .6.4 1 1 1s1-.4 1-1V2.3c4.2.5 7.5 3.8 7.9 7.9h-2.9c-.6 0-1 .4-1 1s.4 1 1 1h2.9c-.4 4.2-3.7 7.5-7.9 7.9"})))};var u;function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}const m=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:23,height:22,fill:"none",viewBox:"0 0 23 22","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,u||(u=i.createElement("path",{fill:"#fff",d:"M17.503 21.2c-.2 0-.3 0-.5-.1l-5.7-3-5.7 3c-.3.2-.7.1-1.1-.1-.3-.2-.5-.6-.4-1l1.1-6.4-4.6-4.5c-.3-.3-.4-.7-.3-1 .1-.4.4-.6.8-.7l6.4-.9 2.9-5.8c.3-.7 1.5-.7 1.8 0l2.9 5.8 6.4.9c.4.1.7.3.8.7s0 .8-.3 1l-4.6 4.5 1.1 6.4c.1.4-.1.8-.4 1-.2.1-.4.2-.6.2M3.403 9.1l3.5 3.5c.2.2.3.6.3.9l-.8 4.9 4.4-2.3q.45-.3.9 0l4.4 2.3-.8-4.9c-.1-.3.1-.7.3-.9l3.5-3.5-4.9-.7c-.3 0-.6-.3-.8-.5l-2.2-4.4-2.2 4.4c-.1.3-.4.5-.8.5z"})))};var g;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}const b=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,g||(g=i.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.5 21.2H11m7.7-12.5a6 6 0 0 0-12 0c0 2.3 2.4 4.4 3 5.8 1 1.8 1 3.2 1 3.2h4s0-1.4 1-3.2c.7-1.4 3-3.2 3-5.8"})))};var y;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}const v=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:17,height:21,fill:"none",viewBox:"0 0 17 21","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,y||(y=i.createElement("path",{fill:"#1A1A1A",d:"M5.3 14.5h6c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1m0-4h6c.6 0 1 .4 1 1s-.4 1-1 1h-6c-.6 0-1-.4-1-1 0-.5.4-1 1-1m5-10h-8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12zm4 18h-12v-16h7v3c0 1.1.9 2 2 2h3z"})))};var j;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}const k=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:24,height:23,fill:"none",viewBox:"0 0 24 23","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,j||(j=i.createElement("path",{fill:"#fff",d:"M18.203 7.2h-17c-.6 0-1 .4-1 1v9c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5 2.8 0 5-2.2 5-5s-2.3-5-5-5m-2 10c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3v-8h14zm2-2v-6c1.7 0 3 1.3 3 3 0 1.6-1.4 3-3 3M5.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1M9.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1M13.203 5.2c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .5.4 1 1 1"})))};var C;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const K=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,C||(C=i.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M12 16v-4M12 8h.01"})))};var S;function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}const N=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,S||(S=i.createElement("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0M12 9v4M12 17h.01"})))};var O=n(85893);const F={tip:{color1:"#336667",color2:"#00B067",icon:(0,O.jsx)(b,{}),darkMode:!0},reading:{color1:"#F46800",color2:"#F24CF4",icon:(0,O.jsx)(s,{}),darkMode:!1},info:{color1:"#336667",color2:"#00B067",icon:(0,O.jsx)(K,{}),darkMode:!0},warn:{color1:"#00B067",color2:"#FFD303",icon:(0,O.jsx)(N,{}),darkMode:!1},warning:{color1:"#00B067",color2:"#FFD303",icon:(0,O.jsx)(N,{}),darkMode:!1},synopsis:{color1:"#1c1c1c",color2:"#1c1c1c",icon:null,darkMode:!0},prerequisite:{color1:"lightgray",color2:"lightgray",icon:(0,O.jsx)(d,{}),darkMode:!1},learning:{color1:"#6836D0",color2:"#05BDFC",icon:(0,O.jsx)(h,{}),darkMode:!0},"best-practice":{color1:"#6836D0",color2:"#6836D0",icon:(0,O.jsx)(m,{}),darkMode:!0},remember:{color1:"#6D0000",color2:"#F66800",icon:(0,O.jsx)(b,{}),darkMode:!0},note:{color1:"#F69900",color2:"#FFCE15",icon:(0,O.jsx)(v,{}),darkMode:!1},docs:{color1:"#6836D0",color2:"#F44CF6",icon:(0,O.jsx)(k,{}),darkMode:!0}},E=e=>{let{color1:t,color2:n}=e;return{background:`linear-gradient(78.06deg, ${t} 1.14%, ${n} 98.88%)`,border:0,borderRadius:16,padding:"0 30px",display:"flex",width:"100%",justifyContent:"start",marginBottom:20,fontSize:21,flexWrap:"wrap",flexDirection:"column"}};const A=function(e){let{type:t,title:n,children:r}=e;const a=F[t]||F.info,s={backgroundColor:"var(--docusaurus-highlighted-code-line-bg)"},o={alignSelf:"center",marginTop:"10px",filter:a.darkMode?"brightness(0) invert(1)":"brightness(0)"},l={marginTop:"10px",marginLeft:"10px",color:a.darkMode?"#e6e6e6":"black"},d={color:a.darkMode?"#e6e6e6":"black",marginBottom:"10px"},c=i.Children.map(r,(e=>"a"===e.type?i.cloneElement(e,{style:anchorStyle}):"code"===e.type?i.cloneElement(e,{style:s}):e));return(0,O.jsxs)("div",{style:E(a),className:"highlightBox",children:[(0,O.jsx)("style",{children:`\n          .highlightBox a {\n            color: ${a.darkMode?"blue":"#85c1e9"} !important;\n          }\n        `}),(0,O.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[(0,O.jsx)("div",{style:o,children:a.icon}),(0,O.jsx)("h3",{style:l,children:n})]}),(0,O.jsx)("div",{style:d,children:c})]})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);