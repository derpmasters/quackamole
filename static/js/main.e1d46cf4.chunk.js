(this["webpackJsonpp2p-videochat-platform-frontend"]=this["webpackJsonpp2p-videochat-platform-frontend"]||[]).push([[0],{135:function(e,t,n){e.exports=n(181)},137:function(e,t,n){},148:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=148},178:function(e,t){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=(n(137),n(9)),c=n.n(r),l=n(17),i=n(32),u=n(110),s=n(111),m={data:{id:"dummy-room-id",name:"Dummy Room",peers:["d7f7saim3","32mfdnmio"],connections:["d7f7saim3","32mfdnmio"],calls:["d7f7saim3","32mfdnmio"]},error:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_ROOM":return{data:t.payload.room,error:null};case"SET_CURRENT_ROOM_ERROR":return{data:e.data,error:t.payload.error};case"SET_PEERS":var n=Object.keys(t.payload.peers);return{data:e.data,peers:n,error:null};case"ADD_CONNECTION":return e;case"SET_CALLS":var a=Object.keys(t.payload.calls);return{data:e.data,calls:a,error:null};default:return e}},f={data:{d7f7saim3:{nickname:"Andi",peerId:"dscdsv-csdvsdv-dvewvew-btrbrb3",connection:"efewfgrger",call:"fewfewfwef"},"32mfdnmio":{nickname:"Jimmy",peerId:"ztjzt-ckhjgvv-dvewvew-b3cddrv",connection:"vverberberb",call:"vewrverbe"}},error:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PEERS":return{peers:t.payload.peers,error:null};case"SET_PEERS_ERROR":return{data:e.data,error:t.payload.error};case"ADD_CONNECTION":case"SET_CALLS":default:return e}},E=n(45),g=n(42),b={data:{},error:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONNECTION":var n=t.payload.connection;return{data:Object(g.a)({},e.data,Object(E.a)({},n.connectionId,n)),error:null};case"REMOVE_CONNECTION":var a=Object(g.a)({},e.data),o=t.payload.connection;return delete a[o.connectionId],{data:a,error:null};case"SET_CONNECTIONS_ERROR":return Object(g.a)({},e,{error:t.payload.error});default:return e}},v={data:{},error:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CALLS":return{calls:t.payload.calls,error:null};case"SET_CALLS_ERROR":return{data:e.data,error:t.payload.error};default:return e}},O=Object(i.combineReducers)({room:d,peers:p,calls:y,connections:h}),w=Object(i.createStore)(O,Object(s.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),x=n(21),j=n(37),S=n(8),C=n(209),k=n(211),N=n(117),I=Object(N.a)({palette:{primary:{main:"#E53935"},secondary:{main:"#FB8C00"}}}),R=n(225),D=n(213),T=n(69),P=n(229),M=n(218),L=n(64),_=n.n(L),B=Object(C.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#FB8C00"},nicknameStyle:{width:"616px",margin:"16px"},textfieldLink:{width:"616px",marginRight:"16px",marginLeft:"16px"},nextButton:{color:"white",boxShadow:"none",width:"422px"},alignbutton:{display:"flex",justifyContent:"center",marginTop:"24px"}}),A=function(){var e=o.a.useState(""),t=Object(S.a)(e,2),n=t[0],a=t[1],r=o.a.useState(""),c=Object(S.a)(r,2),l=c[0],i=c[1],u=B();return o.a.createElement(k.a,{theme:I},o.a.createElement(R.a,{display:"flex",height:63,bgcolor:"#E53935",alignItems:"center",paddingLeft:"36px"},o.a.createElement(x.b,{to:"/",style:{textDecoration:"none",color:"white"}},o.a.createElement(_.a,null))),o.a.createElement(D.a,{className:u.containerStyle},o.a.createElement(R.a,{display:"flex",flexDirection:"column",width:648,height:307,borderRadius:"5px",bgcolor:"white"},o.a.createElement(T.a,{variant:"h4",className:u.titleStyle},"Enter the rooom"),o.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Nickname",variant:"outlined",value:n,className:u.nicknameStyle,onChange:function(e){a(e.target.value)}}),o.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Room ID",variant:"outlined",value:l,className:u.textfieldLink,onChange:function(e){i(e.target.value)}}),o.a.createElement("div",{className:u.alignbutton},o.a.createElement(M.a,{size:"large",color:"secondary",variant:"contained",className:u.nextButton},"join")))))},F=n(22),z=n.n(F),U=n(35),q=n(228),J=n(217),W=n(221),K=n(184),X=n(219),Z=n(220),G=n(84),H=n.n(G),V=n(85),Q=n.n(V),Y=n(116),$=n.n(Y),ee=Object(C.a)({list:{width:250},fullList:{width:"auto"},menuIcon:{margin:"8px"}}),te=function(){var e=ee(),t=o.a.useState(!1),n=Object(S.a)(t,2),a=n[0],r=n[1],c=function(e){"keydown"!==e.type&&r(!a)};return o.a.createElement(k.a,{theme:I},o.a.createElement("div",null,o.a.createElement($.a,{onClick:c,color:"primary",fontSize:"large",className:e.menuIcon}),o.a.createElement(q.a,{open:a,onClose:c},o.a.createElement("div",{className:e.list,role:"presentation",onClick:c,onKeyDown:c},o.a.createElement(J.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,t){return o.a.createElement(K.a,{button:!0,key:e},o.a.createElement(X.a,null,t%2===0?o.a.createElement(H.a,null):o.a.createElement(Q.a,null)),o.a.createElement(Z.a,{primary:e}))}))),o.a.createElement(W.a,null),o.a.createElement(J.a,null,["All mail","Trash","Spam"].map((function(e,t){return o.a.createElement(K.a,{button:!0,key:e},o.a.createElement(X.a,null,t%2===0?o.a.createElement(H.a,null):o.a.createElement(Q.a,null)),o.a.createElement(Z.a,{primary:e}))})))))))},ne=function(){return o.a.createElement(R.a,{bgcolor:"salmon",flexGrow:1},"Plugin Content")},ae=n(222),oe=function(e){return Object.entries(e).map((function(e){var t=Object(S.a)(e,2),n=t[0],a=t[1];return"".concat(n,"=").concat(a)})).join("&")},re=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e.current&&t&&(e.current.srcObject=t,e.current.oncanplay=function(){e.current.play(),e.current.muted=n})},ce=Object(C.a)((function(e){return{root:{display:"flex"},media:{width:"100%"}}})),le=function(e){var t=e.stream,n=e.muted,r=void 0!==n&&n,c=e.user,l=ce(),i=Object(a.useRef)(null),u=c.nickname;c.peerId;return Object(a.useEffect)((function(){re(i,t,r)}),[t]),o.a.createElement(ae.a,null,o.a.createElement("video",{ref:i,className:l.media}),u)},ie=function(e){var t=e.localPeer,n=e.localStream,r=e.connection,c=Object(a.useState)(null),l=Object(S.a)(c,2),i=l[0],u=l[1],s=Object(a.useRef)(null),m=function(e){e.on("stream",(function(e){console.log("ONSTREAM",e),u(e)}))};Object(a.useEffect)((function(){t&&t.id&&(t.on("call",(function(e){console.log("-----------------ONCALL",e),e.peer===r.peer?(e.answer(n),m(e)):console.log("call doesnt match connectionId, call:",e,"connection:",r)})),d(),console.log("UE handlestartcall"))}),[t]),Object(a.useEffect)((function(){re(s,i,!1)}),[i]);var d=function(){if(t){var e=t.call(r.peer,n);m(e)}};return o.a.createElement(le,{stream:i,user:{nickname:"remote"}})},ue=Object(l.b)((function(e){return{connections:Object.values(e.connections.data)}}))((function(e){var t=e.localPeer,n=e.localStream,a=e.connections;return o.a.createElement(o.a.Fragment,null,t&&n&&a&&a.map((function(e){return o.a.createElement(ie,{key:e.connectionId,localPeer:t,localStream:n,connection:e})})))})),se=function(e){var t=e.localPeer,n=Object(a.useState)(null),r=Object(S.a)(n,2),c=r[0],l=r[1],i=Object(a.useRef)(null),u=function(){var e=Object(U.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:t=e.sent,l(t),window.localStream=t,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error('local stream couldnt be started via "startStream()"',e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return function(){window.localStream&&window.localStream.getTracks().forEach((function(e){return e.stop()}))}}),[]),Object(a.useEffect)((function(){t&&t.id&&u()}),[t]),Object(a.useEffect)((function(){c&&re(i,c,!0)}),[c]),o.a.createElement(R.a,{bgcolor:"lightblue",width:"20%",minWidth:"150px"},o.a.createElement(le,{stream:c,muted:!0,user:{nickname:"local"}}),o.a.createElement(ue,{localPeer:t,localStream:c}))},me=n(66),de=n.n(me),fe="derpmasters.online",pe=n(67),Ee=n.n(pe),ge=function(e){return function(t,n){e.peer&&e.connectionId&&t({type:"ADD_CONNECTION",payload:{connection:e}})}},be=function(e){return function(t,n){e.connectionId&&(console.log("remove connection action",e),t({type:"REMOVE_CONNECTION",payload:{connection:e}}))}},he=Object(l.b)((function(e){return{connections:e.connections.data}}),{addConnection:ge,removeConnection:be})((function(e){var t=e.connections,n=e.addConnection,r=e.removeConnection,c=e.match,l=Object(a.useState)(null),i=Object(S.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)(null),d=Object(S.a)(m,2),f=d[0],p=d[1],E=function(e){e.on("data",(function(e){var t=JSON.parse(e);t.textMessage&&console.log("%c MESSAGE - ".concat(t.textMessage.author,': "').concat(t.textMessage.text,'"'),"background: black; color: white; padding: 1rem")})),e.on("close",(function(){return r(e)}))};Object(a.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Ee()("https://".concat(fe,":").concat("5002"),{secure:!0,query:oe(e)});t.on("ready",(function(e){s(t)})),t.on("user-join",(function(e){console.log("new user joined room, he will connect to you shortly")}))}({nickname:"andi"})}),[]),Object(a.useEffect)((function(){if(f){console.log("peer initialized: ",f),f.on("open",(function(e){console.log("My peer ID is: "+f.id,f)})),f.on("connection",(function(e){console.log("on connection with",e,"metadata: ",e.metaData,e.metadata),n(e),E(e)})),f.on("disconnected",(function(e){console.log("-------DISCONNECTED",e),n(e),E(e)}));var e=c.params.roomId;g(e,"dummy123")}}),[f]),Object(a.useEffect)((function(){return u&&u.id&&(console.log("socket",u),function(e){if(e){var t=e.id,n=new de.a(t,{host:fe,port:"5001",path:"/peer/signal",config:{iceServers:[{url:"stun:stun.l.google.com:19302"}]}});console.log("peer",t,n),p(n)}else console.log("could not create new Peer because the socket.io connection is not established yet")}(u)),function(){var e=c.params.roomId;u&&u.emit("leave",e),t&&Object.values(t).forEach((function(e){return e.close()}))}}),[u]);var g=function(e,t){console.log("join room",e),u.emit("join",{roomId:e,password:t,peerId:f.id},(function(e){e&&(console.log("joined room",e),e.room.joinedUsers.forEach((function(e){e!==f.id&&b(e)})))}))},b=function(){var e=Object(U.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.connect(t,{metadata:{nickname:"test-metadata"}});case 2:a=e.sent,n(a),E(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(te,null),o.a.createElement(R.a,{display:"flex",flexDirection:"row",width:1,height:"100%",border:1,justifyContent:"space-between"},o.a.createElement(ne,null),o.a.createElement(se,{localPeer:f})))})),ve=Object(C.a)({titleStyle:{color:"white",fontWeight:"bold",marginTop:"98px"},buttonStyle:{borderRadius:"50px",width:"106px",fontWeight:"bold",border:"2px solid #E53935","&:hover":{color:"white",backgroundColor:"#E53935"},"&:focus":{outline:0}}}),ye=function(){var e=ve();return o.a.createElement(k.a,{theme:I},o.a.createElement(R.a,{height:63,bgcolor:"#E53935"}," "),o.a.createElement(R.a,{height:640,display:"flex"},o.a.createElement(R.a,{display:"flex",flexDirection:"column",width:"50%",height:"100%",bgcolor:"#FDD835",alignItems:"center"},o.a.createElement(T.a,{variant:"h3",className:e.titleStyle,gutterBottom:!0}," Create a new room"),o.a.createElement(x.b,{to:"/create-room",style:{textDecoration:"none"}},o.a.createElement(M.a,{size:"large",color:"primary",className:e.buttonStyle},"Create"))),o.a.createElement(R.a,{display:"flex",flexDirection:"column",width:"50%",height:"100%",bgcolor:"#FB8C00",alignItems:"center"},o.a.createElement(T.a,{variant:"h3",className:e.titleStyle,gutterBottom:!0}," Join a room"),o.a.createElement(M.a,{size:"large",color:"primary",className:e.buttonStyle},"Join"))),o.a.createElement(x.b,{to:"/test-room"},"Debug Testroom"))},Oe=n(230),we=n(223),xe=n(216),je=n(226),Se=Object(C.a)({containerStyle:{display:"flex",justifyContent:"center",paddingTop:"128px"},titleStyle:{display:"flex",justifyContent:"center",padding:"16px",color:"white",fontWeight:"bold",backgroundColor:"#FB8C00"},formControl:{width:"20%",margin:"16px"},select:{borderColor:"#FB8C00","&:before":{borderColor:"#FB8C00"},"&:after":{borderColor:"#f57c00"}},textfield:{width:"616px",marginLeft:"16px"},textfieldLink:{width:"506px",marginRight:"16px",marginLeft:"16px"},alignButton:{display:"flex",justifyContent:"flex-end",margin:"16px"},myButton:{color:"white",boxShadow:"none"},paper:{padding:I.spacing(2),textAlign:"center",color:I.palette.text.secondary},copyLink:{display:"flex",alignItems:"center",marginTop:"16px"},nextButton:{color:"white",boxShadow:"none",margin:"32px",width:"576px"},subtitle:{display:"flex",justifyContent:"center",marginTop:"16px"}}),Ce=function(){var e=o.a.useState(""),t=Object(S.a)(e,2),n=t[0],a=t[1],r=o.a.useState(""),c=Object(S.a)(r,2),l=c[0],i=c[1],u=o.a.useState("https://www.figma.com/file/By2kgyeP0jIK0txwX2ZF0 https://www.figma.com/file/By2kgyeP0jIK0txwX2ZF0 https://www.figma.com/file/By2kgyeP0jIK0txwX2ZF0 https://www.figma.com/file/By2kgyeP0jIK0txwX2ZF0"),s=Object(S.a)(u,2),m=s[0],d=(s[1],o.a.useState(!0)),f=Object(S.a)(d,2),p=f[0],E=f[1],g=Se(),b=function(e){i(e.target.value)};return o.a.createElement(k.a,{theme:I},o.a.createElement(R.a,{display:"flex",height:63,bgcolor:"#E53935",alignItems:"center",paddingLeft:"36px"},o.a.createElement(x.b,{to:"/",style:{textDecoration:"none",color:"white"}},o.a.createElement(_.a,null))),o.a.createElement(D.a,{className:g.containerStyle},p?o.a.createElement(R.a,{display:"flex",flexDirection:"column",width:648,height:307,borderRadius:"5px",bgcolor:"white"},o.a.createElement(T.a,{variant:"h4",className:g.titleStyle},"Create a new room"),o.a.createElement(xe.a,{variant:"outlined",className:g.formControl},o.a.createElement(Oe.a,{id:"demo-simple-select-outlined-label"},"Status"),o.a.createElement(je.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:n,onChange:function(e){a(e.target.value)},label:"Status",className:g.select},o.a.createElement(we.a,{value:"Privat"},"Privat"),o.a.createElement(we.a,{value:"Public"},"Public"))),o.a.createElement(P.a,{required:!0,id:"outlined-required",label:"Room name",variant:"outlined",value:l,onChange:b,className:g.textfield}),o.a.createElement("div",{className:g.alignButton},o.a.createElement(M.a,{size:"large",color:"secondary",variant:"contained",className:g.myButton,onClick:function(){l.length>0&&n.length>0?(E(!1),console.log(n,l)):console.log("error")}},"create"))):o.a.createElement(R.a,{display:"flex",flexDirection:"column",width:648,height:307,borderRadius:"5px",bgcolor:"white"},o.a.createElement(T.a,{variant:"h4",className:g.titleStyle},"Room was created"),o.a.createElement("div",{className:g.copyLink},o.a.createElement(P.a,{variant:"outlined",value:m,onChange:b,className:g.textfieldLink}),o.a.createElement(M.a,{size:"large",color:"secondary",variant:"contained",className:g.myButton,onClick:function(){navigator.clipboard.writeText(m)}},"copy")),o.a.createElement(T.a,{variant:"h6",className:g.subtitle}," Share your link and invite someone to your room"),o.a.createElement(x.b,{to:"/room-lobby/1",style:{textDecoration:"none"}},o.a.createElement(M.a,{size:"large",color:"secondary",variant:"contained",className:g.nextButton},"next")))))},ke=n(224),Ne=function(e){var t=e.localPeer,n=e.localStream,r=e.connection,c=Object(a.useState)(null),l=Object(S.a)(c,2),i=l[0],u=l[1],s=Object(a.useRef)(null),m=function(e){e.on("stream",(function(e){console.log("ONSTREAM",e),u(e)}))};Object(a.useEffect)((function(){t&&t.id&&(t.on("call",(function(e){console.log("-----------------ONCALL",e),e.peer===r.peer?(e.answer(n),m(e)):console.log("call doesnt match connectionId, call:",e,"connection:",r)})),d())}),[t]),Object(a.useEffect)((function(){re(s,i,!1)}),[i]);var d=function(){if(t){var e=t.call(r.peer,n);m(e)}};return o.a.createElement("div",null,console.log("videoCard rerender, connection",r),o.a.createElement("video",{ref:s}))},Ie=Object(l.b)((function(e){return{connections:Object.values(e.connections.data)}}))((function(e){var t=e.localPeer,n=e.connections,r=Object(a.useState)(null),c=Object(S.a)(r,2),l=c[0],i=c[1],u=Object(a.useRef)(null),s=function(){var e=Object(U.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:t=e.sent,i(t),window.localStream=t,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error('local stream couldnt be started via "startStream()"',e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return console.log("mount TestStreamManager"),function(){console.log("unmount TestStreamManager, disable localStream:",l,window.localStream),window.localStream&&window.localStream.getTracks().forEach((function(e){return e.stop()}))}}),[]),Object(a.useEffect)((function(){t&&t.id&&s()}),[t]),Object(a.useEffect)((function(){l&&re(u,l,!0)}),[l]),o.a.createElement("div",null,o.a.createElement("video",{ref:u}),l&&n&&n.map((function(e){return o.a.createElement(Ne,{key:e.connectionId,localPeer:t,localStream:l,connection:e})})))})),Re=Object(l.b)((function(e){return{connections:e.connections.data}}),{addConnection:ge,removeConnection:be})((function(e){var t=e.connections,n=e.addConnection,r=e.removeConnection,c=Object(a.useState)(null),l=Object(S.a)(c,2),i=l[0],u=l[1],s=Object(a.useState)(null),m=Object(S.a)(s,2),d=m[0],f=m[1],p=Object(a.useState)([]),b=Object(S.a)(p,2),h=(b[0],b[1],Object(a.useState)({message:"",roomId:"dummy-room-id",password:"dummy123",nickname:""})),v=Object(S.a)(h,2),y=v[0],O=v[1],w=function(e){e.on("data",(function(e){var t=JSON.parse(e);t.textMessage&&console.log("%c MESSAGE - ".concat(t.textMessage.author,': "').concat(t.textMessage.text,'"'),"background: black; color: white; padding: 1rem")})),e.on("close",(function(){return r(e)}))};Object(a.useEffect)((function(){!function(){var e=Ee()("https://".concat(fe,":").concat("5002"),{secure:!0,query:oe({nickname:y.nickname||"default nickname"})});e.on("ready",(function(t){u(e)})),e.on("user-join",(function(e){console.log("new user joined room, he will connect to you shortly")})),e.on("user-leave",(function(e){var n=t[e.peerId];console.log("user left room",e.peerId,n),n&&n.close()}))}()}),[]),Object(a.useEffect)((function(){d&&(console.log("peer initialized: ",d),d.on("open",(function(e){console.log("My peer ID is: "+d.id,d)})),d.on("connection",(function(e){console.log("on connection with",e,"metadata: ",e.metaData,e.metadata),n(e),w(e)})),d.on("disconnected",(function(e){console.log("-------DISCONNECTED",e),n(e),w(e)})))}),[d]),Object(a.useEffect)((function(){return i&&i.id&&function(){if(i){var e=i.id,t=new de.a(e,{host:fe,port:"5001",path:"/peer/signal",config:{iceServers:[{url:"stun:stun.l.google.com:19302"}]}});console.log("peer",e,t),f(t)}else console.log("could not create new Peer because the socket.io connection is not established yet")}(),function(){i&&i.emit("leave",y.roomId),t&&Object.values(t).forEach((function(e){return e.close()}))}}),[i]);var j=function(){var e=Object(U.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.connect(t,{metadata:{nickname:"test-metadata"}});case 2:a=e.sent,n(a),w(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){return O(Object(g.a)({},y,Object(E.a)({},e.target.name,e.target.value)))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Hello world",o.a.createElement("button",{onClick:function(e){i.emit("create",{name:"test room name",password:y.password,maxConnections:4},(function(e){e&&O(Object(g.a)({},y,{roomId:"dummy-room-id"}))}))}},"create room"),o.a.createElement("button",{onClick:function(e){var t=y.roomId,n=y.password;i.emit("join",{roomId:t,password:n,peerId:d.id},(function(e){e&&(console.log("joined room",e),e.room.joinedUsers.forEach((function(e){e!==d.id&&j(e)})))}))}},"join room"),o.a.createElement("button",{onClick:function(e){d.listAllPeers((function(e){console.log("peers",e)}))}},"listAllPeers room"),o.a.createElement(x.b,{to:"/"},"HOME")),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){if(d){var e={textMessage:{author:"derp",text:y.message}};Object.values(t).forEach((function(t){console.log("send message to",t.peer),t.send(JSON.stringify(e))}))}}()}},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Send Message to Peers"),o.a.createElement("input",{type:"text","aria-label":"chat input",name:"message",value:y.message,onChange:C,placeholder:"Hello Peer..."}),o.a.createElement("button",{type:"submit"},"send"))),o.a.createElement("input",{type:"text","aria-label":"chat input",name:"nickname",value:y.nickname,onChange:C,placeholder:"Enter your nickname"})),o.a.createElement(Ie,{localPeer:d}))})),De=function(){return o.a.createElement(ke.a,null,o.a.createElement(x.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{exact:!0,path:"/",component:ye}),o.a.createElement(j.a,{exact:!0,path:"/create-room",component:Ce}),o.a.createElement(j.a,{exact:!0,path:"/room-lobby/:roomId",component:A}),o.a.createElement(j.a,{path:"/rooms/:roomId",component:he}),o.a.createElement(j.a,{path:"/test-room",component:Re}))))};c.a.render(o.a.createElement(a.StrictMode,null,o.a.createElement(l.a,{store:w},o.a.createElement(De,null))),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.e1d46cf4.chunk.js.map