"use strict";(self.webpackChunkhow_to_extremenetworks=self.webpackChunkhow_to_extremenetworks||[]).push([[408],{6385:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return E},default:function(){return b},frontMatter:function(){return g},metadata:function(){return d},toc:function(){return v}});var a=n(7462),r=n(3366),l=n(7294),i=n(3905),m=n(6010),c="input_kWcx",o="button_gaxg",s=n(1736);function u(){var e=(0,l.useState)(0),t=e[0],n=e[1],a=(0,l.useState)([]),r=a[0],i=a[1],u=(0,l.useState)();u[0],u[1];function p(e,t){return Array(t-e+1).fill().map((function(t,n){return e+n}))}var g=(0,l.useState)("physical"),E=g[0],d=g[1],f=(0,l.useState)(8.5),v=f[0],h=f[1],b=(0,l.useState)(!1),N=b[0],k=b[1];var y=(0,l.useState)(!1),C=y[0],S=y[1],I=(0,l.useState)(!1),x=I[0],w=I[1];var T=(0,l.useState)(!1),Z=T[0],O=T[1],A=(0,l.useState)(0),P=A[0],F=A[1],L=(0,l.useState)([]),M=L[0],B=L[1];function G(e){var t=parseInt(e.target.dataset.instance),n=[].concat(M);n[t]=M[t],n[t].nickname=e.target.value,B(M)}var R=(0,l.useState)("VSP-1"),_=R[0],U=R[1];var H,D,V=(0,l.useState)(""),z=V[0],X=V[1],q=(0,l.useState)(24),W=q[0],j=q[1];function J(e){var t=parseInt(e.target.dataset.interface);i(r.filter((function(e){return e.id!=t})))}function K(e){var t=parseInt(e.target.dataset.interface),n=[].concat(r);n[t]=r[t],n[t].slot=parseInt(e.target.value),i(n)}function Q(e){var t=parseInt(e.target.dataset.interface),n=[].concat(r);n[t]=r[t],n[t].port=parseInt(e.target.value),i(n)}function Y(e){var t=parseInt(e.target.dataset.interface),n=[].concat(r);n[t]=r[t],n[t].name=e.target.value,i(n)}return l.createElement("div",null,l.createElement("p",null,l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Node type :")),l.createElement("select",{onChange:function(e){d(e.target.value)},className:(0,m.Z)(c,"margin-right--sm")},l.createElement("option",{value:"physical"},"Physical"),l.createElement("option",{value:"virtual"},"Virtual"))," ",l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Node version :")),l.createElement("select",{onChange:function(e){h(e.target.value)},className:(0,m.Z)(c,"margin-right--sm")},l.createElement("option",{value:"8.5"},"8.5.0.0"),l.createElement("option",{value:"8.4"},"8.4.3.0"),l.createElement("option",{value:"8.4"},"8.4.2.1"),l.createElement("option",{value:"8.4"},"8.4.1.1"),l.createElement("option",{value:"8.4"},"8.4.1.0"),l.createElement("option",{value:"8.3"},"8.3.1.0"),l.createElement("option",{value:"8.3"},"8.3.0.0"),l.createElement("option",{value:"8.2"},"8.2.8.0"),l.createElement("option",{value:"8.2"},"8.2.7.0"),l.createElement("option",{value:"8.2"},"8.2.6.0"),l.createElement("option",{value:"8.2"},"8.2.5.0"),l.createElement("option",{value:"8.2"},"8.2.0.0"),l.createElement("option",{value:"8.1"},"8.1.10.0"),l.createElement("option",{value:"8.1"},"8.1.9.0"),l.createElement("option",{value:"8.1"},"8.1.8.0"),l.createElement("option",{value:"8.1"},"8.1.7.0"),l.createElement("option",{value:"8.1"},"8.1.6.0"),l.createElement("option",{value:"8.1"},"8.1.5.0"),l.createElement("option",{value:"8.1"},"8.1.2.0"),l.createElement("option",{value:"8.1"},"8.1.1.0"),l.createElement("option",{value:"8.0"},"8.0.9.0"),l.createElement("option",{value:"8.0"},"8.0.8.0"),l.createElement("option",{value:"8.0"},"8.0.7.2"),l.createElement("option",{value:"8.0"},"8.0.7.1"),l.createElement("option",{value:"8.0"},"8.0.7.0"),l.createElement("option",{value:"8.0"},"8.0.6.1"),l.createElement("option",{value:"8.0"},"8.0.6.0"),l.createElement("option",{value:"8.0"},"8.0.5.1"),l.createElement("option",{value:"8.0"},"8.0.5.0"),l.createElement("option",{value:"8.0"},"8.0.1.0"),l.createElement("option",{value:"8.0"},"8.0.0.0"))," ",l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Note :")),l.createElement("input",{type:"checkbox",onClick:function(e){k(e.target.checked)},className:(0,m.Z)(c,"margin-right--sm"),checked:N})),l.createElement("p",null,l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Node name :")),l.createElement("input",{type:"text",onChange:function(e){U(e.target.value)},className:(0,m.Z)(c,"margin-right--sm"),value:_,placeholder:_})," "),l.createElement("p",null,l.createElement("details",null,l.createElement("summary",null,"Boot configuration"),l.createElement("p",{style:{marginLeft:"2em"}},l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"TFTP")),l.createElement("input",{type:"checkbox",onClick:function(e){S(e.target.checked)},className:(0,m.Z)(c,"margin-right--sm")})," ",l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"SSH")),l.createElement("input",{type:"checkbox",onClick:function(e){w(e.target.checked)},className:(0,m.Z)(c,"margin-right--sm")})))),l.createElement("p",null,l.createElement("details",null,l.createElement("summary",null,"Fabric SPBm"),l.createElement("p",{style:{marginLeft:"2em",marginTop:"1em"}},l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"SPBm")),l.createElement("input",{type:"checkbox",onClick:function(e){O(e.target.checked)},className:(0,m.Z)(c,"margin-right--sm")})," | ",l.createElement("button",{onClick:function(e){B([].concat(M,[{id:P,nickname:""}])),F(P+1)},className:(0,m.Z)(o,"margin-right--sm")},"Add interface")," "),l.createElement("p",{style:{marginLeft:"2em"}},l.createElement("details",{open:!0},l.createElement("summary",null,"ISIS / SPBm Configuration"),l.createElement("p",{style:{marginLeft:"2em"}},M.map((function(e){return l.createElement("div",null,l.createElement("details",null,l.createElement("summary",null,"SPBm ",e.id+1),l.createElement("p",{style:{marginLeft:"2em"}},l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Nick-name :")),l.createElement("input",{type:"text",onChange:G,className:(0,m.Z)(c,"margin-right--sm"),"data-instance":e.id,placeholder:"nick name"}))))}))))))),l.createElement("p",null,l.createElement("details",null,l.createElement("summary",null,"Management interface"),l.createElement("p",{style:{marginLeft:"2em"}},l.createElement("details",null,l.createElement("summary",null,"MGMT1"),l.createElement("p",{style:{marginLeft:"2em"}},l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"IP Address :")),l.createElement("input",{type:"text",onChange:function(e){X(e.target.value)},className:(0,m.Z)(c,"margin-right--sm"),placeholder:"1.1.1.1"})," ",l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Mask :")),l.createElement("select",{onChange:function(e){j(e.target.value)},className:(0,m.Z)(c,"margin-right--sm")},l.createElement("option",null,"-- mask --"),p(0,32).map((function(e){return l.createElement("option",{value:e},"/",e)})))))))),l.createElement("p",null,l.createElement("button",{onClick:function(e){i([].concat(r,[{id:t,slot:1,port:1,name:""}])),n(t+1)},className:(0,m.Z)(o,"margin-right--sm")},"Add interface"),l.createElement("br",null),l.createElement("br",null),r.map((function(e){return l.createElement("div",null,l.createElement("h4",null,"Configuration de l'interface ",e.id),l.createElement("p",{style:{marginLeft:"2em"}},l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Slot :")),l.createElement("select",{onChange:K,className:(0,m.Z)(c,"margin-right--sm"),"data-interface":e.id},p(1,8).map((function(e){return l.createElement("option",{value:e},e)})))," ",l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Port :")),l.createElement("select",{onChange:Q,className:(0,m.Z)(c,"margin-right--sm"),"data-interface":e.id},p(1,128).map((function(e){return l.createElement("option",{value:e},e)})))," ",l.createElement("label",null,l.createElement("strong",{className:"margin-right--sm"},"Name :")),l.createElement("input",{type:"text",onChange:Y,className:(0,m.Z)(c,"margin-right--sm"),"data-interface":e.id,placeholder:"name"})),l.createElement("p",{style:{textAlign:"right"}},l.createElement("button",{onClick:J,"data-interface":e.id},"Delete")),l.createElement("hr",null))}))),l.createElement(s.Z,{language:"bash",title:"Configuration"},"# Node type    : ",E,"\n","# Node version : ",v,"\n","\n","enable","\n","config terminal","\n","\n",(H="",D=!1,1==C&&(D=!0),1==x&&(D=!0),1==Z&&(D=!0),1==D&&(1==N&&(H+="#\n",H+="# BOOT CONFIGURATION\n",H+="#\n"),1==C&&(H+="boot config flags tftpd\n"),1==x&&(H+="boot config flags sshd\n"),1==Z&&(H+="boot config flags spbm-config-mode\n"),H+="\n",1==N&&(H+="#end boot flags\n",H+="\n")),H),function(){var e="",t=!1;return 1==Z&&(t=!0),1==t&&(1==N&&(e+="#\n",e+="# SPBM CONFIGURATION\n",e+="#\n"),e+="spbm\n",e+="spbm ethertype 0x8100\n",e+="\n"),e}(),function(){var e="",t=!1;return""!=_&&(t=!0),1==t&&(1==N&&(e+="#\n",e+="# CLI CONFIGURATION\n",e+="#\n"),""!=_&&(e=e+'prompt "'+_+'"\n'),e+="\n"),e}(),function(){var e="",t=!1;return 1==x&&(t=!0),1==t&&(1==N&&(e+="#\n",e+="# SSH CONFIGURATION\n",e+="#\n"),1==x&&(e+="ssh\n"),e+="\n"),e}(),function(){var e="";return e}(),function(){var e="",t=!1;return 1==Z&&(t=!0),1==t&&(1==N&&(e+="#\n",e+="# ISIS SPBM CONFIGURATION\n",e+="#\n"),e+="router isis\n",M.map((function(t){e=e+"spbm "+(t.id+1)+" nick-name "+t.nickname+"\n"})),e+="exit\n",e+="\n"),e}(),function(){var e="",t=!1;return""!=z&&(t=!0),1==t&&(1==N&&(e+="#\n",e+="# PORT CONFIGURATION - PHASE II\n",e+="#\n"),""!=z&&(e=(e+="interface mgmtEthernet mgmt\n")+"ip address "+z+" "+((24==W?"255.255.255.0":"255.255.255.255")+"\n"),e+="exit\n"),e+="\n"),e}(),function(){var e="",t=!1;return 1==Z&&(t=!0),1==t&&(1==N&&(e+="#\n",e+="# ISIS CONFIGURATION\n",e+="#\n"),e+="router isis\n",""!=_&&(e=e+'sys-name "'+_+'"\n'),e+="is-type l1\n",e+="exit\n",e+="\n"),e}()))}var p=["components"],g={sidebar_position:1},E="First node",d={unversionedId:"fabricspbm/fabric-deployment/first-node",id:"fabricspbm/fabric-deployment/first-node",title:"First node",description:"Config generator",source:"@site/docs/fabricspbm/4-fabric-deployment/1-first-node.mdx",sourceDirName:"fabricspbm/4-fabric-deployment",slug:"/fabricspbm/fabric-deployment/first-node",permalink:"/how-to-extremenetworks/en/docs/fabricspbm/fabric-deployment/first-node",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"fabricspbm",previous:{title:"Validation",permalink:"/how-to-extremenetworks/en/docs/fabricspbm/getting-started/validation"},next:{title:"Topology",permalink:"/how-to-extremenetworks/en/docs/fabricspbm/fabric-deployment/topology"}},f={},v=[{value:"Config generator",id:"config-generator",level:2}],h={toc:v};function b(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"first-node"},"First node"),(0,i.kt)("h2",{id:"config-generator"},"Config generator"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Available")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The configurations are only available on physical equipment, be careful with your choices"))),(0,i.kt)(u,{mdxType:"ConfigGenerator"}))}b.isMDXComponent=!0}}]);