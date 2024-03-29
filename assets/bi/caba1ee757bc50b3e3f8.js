"use strict";(self.webpackChunkaesirx_analytics=self.webpackChunkaesirx_analytics||[]).push([[4086],{24086:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(75975),r=n(71714),c=n(98574),s=n(67294),o=n(96042),i=n(36763),l=n(85518),m=n(23123),g={projectId:i.CONCORDIUM_WALLET_CONNECT_PROJECT_ID,metadata:{name:"AesirX SSO",description:"AesirX SSO is our Open Source Single Sign On service.",url:"#",icons:["https://walletconnect.com/walletconnect-logo.png"]}},d=(0,i.ephemeralConnectorType)(i.BrowserWalletConnector.create),u=(0,i.ephemeralConnectorType)(i.WalletConnectConnector.create.bind(void 0,g)),A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF5SURBVHgBrVXtcYMwDJVz/I83qDdoOkHpBtkARmgmgE5QNkg2aDtB2IBkgtIJSCdwpdrcCUcGUvruFDv6eEiyMApGYK3VuGxQUpQ7r/5GaVA+lFIXuAVEiFKgdDaOdIwjEUgp4A1FwwIkAWmGy0Hwa1FqvzfgWjMPSLoRyt2TXvDVvv+ziD8D0hwWIPGkObgSe+zwxA/soZTdFmWNckZbHSQ1iEd7KWW7D4IKoUXkb5hPejUxQm/TCVJOrpnvkdkqUmyZouPl22mUzL9i+mYF7s3qcWL7q2kQEIvVq8BRR/YxrGMGIm4jZDVM48z2hu0vIbGx/oXwF8w7xEH2iv1/ZPuv3187vGxee6s/wEY4tC6YHhPYM+UNJS4Fe+IDZnxigTm4g1r7bCp+ZaL9GZd7Fr/jmXXBjBr4D9BThXIz+CNUQF7CsCWEFtyEUGvo60EtobJfwjtjFERu5yGFW+FP+biEOJGUWGKLy5N1M52DK117oWmgtrQwgh9inye0Cp+8ygAAAABJRU5ErkJggg==",E=({isConnecting:e,handleOnConnect:t,activeConnectorError:n,activeConnectorType:a,activeConnector:r})=>s.createElement("div",{className:"d-flex"},l.nI&&s.createElement("button",{disabled:e,className:"btn btn-dark btn-concordium flex-grow-1 fw-medium py-2 px-4 fs-18 lh-sm text-white d-flex align-items-center justify-content-center",onClick:()=>t(d,"browser")},e?s.createElement(s.Fragment,null,s.createElement("span",{className:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"}),"Connecting"):s.createElement(s.Fragment,null,s.createElement("img",{src:A,className:"me-3 align-text-bottom",alt:"Concordium logo"}),"Browser Wallet")),l.BF===l.Qv.IOS&&l.tq?s.createElement(s.Fragment,null):s.createElement("button",{className:"btn btn-dark btn-concordium fw-medium py-2 px-4 fs-18 lh-sm text-white ms-3 d-flex align-items-center justify-content-center",onClick:()=>t(u,"walletconnect")},n||!a||r?s.createElement(s.Fragment,null,s.createElement("img",{src:A,className:"me-2 align-text-bottom",alt:"Concordium logo"}),"QR Code"):s.createElement("span",{className:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"}))),C=({account:e,connection:t})=>{const[n,l]=(0,s.useState)(""),m="concordium",{handleOnData:g}=(0,s.useContext)(c.T),{getWalletNonce:d,verifySignature:u}=(0,a.w)(m,e);return s.createElement(s.Fragment,null,s.createElement("button",{disabled:""!==n,className:"btn btn-dark btn-concordium w-100 fw-medium py-2 px-4 fs-18 lh-sm text-white d-flex align-items-center",onClick:async()=>{l("connect");const n=await d();if(n)try{l("sign");const a=await t.signMessage(e,(0,i.stringMessage)(`${n}`)),r="object"==typeof a&&null!==a?a:JSON.parse(a);if(a){const t=await u(m,e,r);g(t)}}catch(e){(0,o.Am)(e.message)}l("")}},n?s.createElement("div",{className:"d-flex align-items-center"},s.createElement("span",{className:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"}),s.createElement("span",{className:"ms-1"},"sign"===n?"Please sign message on the wallet":"Please wait to connect...")):s.createElement(s.Fragment,null,s.createElement("img",{src:A,className:"me-3 align-text-bottom",alt:"Concordium logo"}),"Sign in via Concordium (",e&&(0,r.S)(e),")")))},w=e=>{const{activeConnectorType:t,activeConnector:n,activeConnectorError:a,network:c,connectedAccounts:l,genesisHashes:g,setActiveConnectorType:d}=e,{connection:u,setConnection:A,account:w,genesisHash:p}=(0,i.useConnection)(l,g),{connect:b,connectError:h,isConnecting:v}=(0,i.useConnect)(n,A),[f,N]=(0,s.useState)(),[x,k]=(0,s.useState)("");(0,s.useEffect)((()=>{u&&(N(void 0),(0,i.withJsonRpcClient)(u,(async e=>(await e.getConsensusStatus()).genesisBlock)).then((e=>{const{network:t}=(0,r.z)();let n=!1;if("testnet"===t)n=e===i.TESTNET.genesisHash;else n=e===i.MAINNET.genesisHash;if(!n){const{network:e}=(0,r.z)();throw new Error(`Please change the network to ${e} in Wallet`)}N(e),k("")})).catch((e=>{N(void 0),(0,o.Am)(e.message),k(e.message)})))}),[u,p,c]),(0,s.useEffect)((()=>{n&&b()}),[n]),(0,s.useEffect)((()=>{h&&(0,o.Am)(h)}),[h]);return s.createElement(s.Fragment,null,!w||x?s.createElement(E,{isConnecting:v,handleOnConnect:async(e,t)=>{m.Z.setItem("concordium",t),await d(e)},activeConnectorError:a,activeConnectorType:t,activeConnector:n}):s.createElement(s.Fragment,null,f?s.createElement(C,{account:w,connection:u}):s.createElement("button",{className:"btn btn-dark"},s.createElement("span",{className:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"}))),a&&s.createElement("div",{className:"mt-1 fs-7 text-danger text-start"},"Connector error: ",a,"."),x&&s.createElement("div",{className:"mt-1 fs-7 text-danger text-start"},"RPC error: ",x))},p=()=>s.createElement(i.WithWalletConnector,{network:i.MAINNET},(e=>s.createElement(w,{...e})))}}]);