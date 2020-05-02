(this["webpackJsonpp2p-videochat-platform-frontend"]=this["webpackJsonpp2p-videochat-platform-frontend"]||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(22),c=t.n(a),l=t(17),s=t(11),i=t(52),u=t(53),d={data:{id:"dummy-room-id",name:"Dummy Room",peers:["d7f7saim3","32mfdnmio"],connections:["d7f7saim3","32mfdnmio"],calls:["d7f7saim3","32mfdnmio"]},error:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CURRENT_ROOM":return{data:n.payload.room,error:null};case"SET_CURRENT_ROOM_ERROR":return{data:e.data,error:n.payload.error};case"SET_PEERS":var t=Object.keys(n.payload.peers);return{data:e.data,peers:t,error:null};case"ADD_CONNECTION":return e;case"SET_CALLS":var o=Object.keys(n.payload.calls);return{data:e.data,calls:o,error:null};default:return e}},f={data:{d7f7saim3:{nickname:"Andi",peerId:"dscdsv-csdvsdv-dvewvew-btrbrb3",connection:"efewfgrger",call:"fewfewfwef"},"32mfdnmio":{nickname:"Jimmy",peerId:"ztjzt-ckhjgvv-dvewvew-b3cddrv",connection:"vverberberb",call:"vewrverbe"}},error:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PEERS":return{peers:n.payload.peers,error:null};case"SET_PEERS_ERROR":return{data:e.data,error:n.payload.error};case"ADD_CONNECTION":case"SET_CALLS":default:return e}},v=t(15),E=t(18),b={data:{},error:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_CONNECTION":var t=n.payload.connection;return{data:Object(E.a)({},e.data,Object(v.a)({},t.connectionId,t)),error:null};case"REMOVE_CONNECTION":var o=Object.entries(e.data).filter((function(e){return e.connectionId!==n.payload.connectionId}));return{data:o,error:null};case"SET_CONNECTIONS_ERROR":return Object(E.a)({},e,{error:n.payload.error});default:return e}},g={data:{},error:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CALLS":return{calls:n.payload.calls,error:null};case"SET_CALLS_ERROR":return{data:e.data,error:n.payload.error};default:return e}},j=Object(s.combineReducers)({room:m,peers:p,calls:h,connections:O}),y=Object(s.createStore)(j,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(i.a))),w=t(16),R=t(12),S=function(){return r.a.createElement("div",null,"RoomLobby")},C=function(){return r.a.createElement("div",null,"Room")},I=function(){return r.a.createElement("div",null,"Home",r.a.createElement(w.b,{to:"test-room"},"TestRoom"))},N=function(){return r.a.createElement("div",null,"RoomCreateForm")},_=t(114),k=t(19),T=t.n(k),x=t(24),D=t(8),M=t(55),A=t.n(M),L=t(56),P=t.n(L),U=(Object(l.b)((function(e){return{connections:Object.values(e.connections.data)}}))((function(e){var n=e.localPeer,t=e.connections,a=Object(o.useState)([]),c=Object(D.a)(a,2),l=c[0],s=c[1],i=Object(o.useRef)(null),u=Object(o.useRef)(null),d=Object(o.useRef)(null),m=Object(o.useRef)(null),f=function(){var e=Object(x.a)(T.a.mark((function e(){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:n=e.sent,s(l.concat(n)),console.log("local stream started",l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error('stream couldnt be started via "startStream()"',e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){n&&n.id&&(n&&n.on("call",(function(e){console.log("incoming call. Answering automatically"),e.on("stream",(function(e){console.log("-------------------remote stream after call available",e),s(l.concat(e))}))})),f())}),[n]),Object(o.useEffect)((function(){console.log("useEffect streams",l,i);var e=[i,u,d,m];l.forEach((function(n,t){var o=e[t];o.current&&n&&(o.current.srcObject=n,o.current.oncanplay=function(){o.current.play(),o.current.muted=!1})}))}),[l]);return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){n&&l[0]&&t.forEach((function(e){console.log("calling",e.peer,"stream",l[0]),n.call(e.peer,l[0])}))}},"CALL all connections"),r.a.createElement("video",{ref:i}),r.a.createElement("video",{ref:u}),r.a.createElement("video",{ref:d}),r.a.createElement("video",{ref:m}))})),Object(l.b)((function(e){return{connections:e.connections.data}}),{addConnection:function(e){return function(n,t){e.peer&&e.connectionId&&n(function(e){return{type:"ADD_CONNECTION",payload:{connection:e}}}(e))}}})((function(e){var n=e.connections,t=e.addConnection,a=Object(o.useState)(null),c=Object(D.a)(a,2),l=c[0],s=c[1],i=Object(o.useState)(null),u=Object(D.a)(i,2),d=u[0],m=u[1],f=Object(o.useState)([]),p=Object(D.a)(f,2),b=(p[0],p[1],Object(o.useState)({message:"",roomId:"dummy-room-id",password:"dummy123"})),O=Object(D.a)(b,2),g=O[0],h=O[1],j=function(e){console.log("connection listeners",e),e.on("data",(function(e){var n=JSON.parse(e);console.log("parsed",n),n.textMessage&&console.log("%c MESSAGE - ".concat(n.textMessage.author,': "').concat(n.textMessage.text,'"'),"background: black; color: white; padding: 1rem")}))};Object(o.useEffect)((function(){!function(){var e,t=P()("".concat("localhost",":").concat("5002"),{query:(e={nickname:"andi"},Object.entries(e).map((function(e){var n=Object(D.a)(e,2),t=n[0],o=n[1];return"".concat(t,"=").concat(o)})).join("&"))});console.log("socket--------------",t),t.on("ready",(function(e){console.log("socket is ready-------------------------------------",e),s(t)})),t.on("user-join",(function(e){console.log("new user joined room, he will connect to you shortly")})),t.on("user-leave",(function(e){var t=n[e.peerId];console.log("user left room",e.peerId,t),t&&t.close()}))}()}),[]),Object(o.useEffect)((function(){d&&(console.log("peer initialized: ",d),d.on("open",(function(e){console.log("My peer ID is: "+d.id,d)})),d.on("connection",(function(e){console.log("on connection with",e),t(e),j(e)})))}),[d]),Object(o.useEffect)((function(){return l&&l.id&&function(){if(l){var e=l.id;console.log("init peer. peerId:",e);var n=new A.a(e,{host:"localhost",port:"5001",path:"/peer/signal",config:{iceServers:[{url:"stun:stun.l.google.com:19302"}]}});console.log("peer",n),m(n)}else console.log("could not create new Peer because the socket.io connection is not established yet")}(),function(){console.log("unmount",l),l&&l.emit("leave",g.roomId)}}),[l]);var y=function(){var e=Object(x.a)(T.a.mark((function e(n){var o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("connect with peer called",n),e.next=3,d.connect(n);case 3:o=e.sent,t(o),j(o);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Hello world",r.a.createElement("button",{onClick:function(e){l.emit("create",{name:"test room name",password:g.password,maxConnections:4},(function(e){e&&(console.log("room created",e),h(Object(E.a)({},g,{roomId:"dummy-room-id"})))}))}},"create room"),r.a.createElement("button",{onClick:function(e){console.log("join room handler");var n=g.roomId,t=g.password;l.emit("join",{roomId:n,password:t,peerId:d.id},(function(e){e&&(console.log("roomRef CB",e),e.room.joinedUsers.forEach((function(e){e!==d.id&&y(e)})))}))}},"join room"),r.a.createElement("button",{onClick:function(e){d.listAllPeers((function(e){console.log("peers",e)}))}},"listAllPeers room"),r.a.createElement(w.b,{to:"/"},"HOME")),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){if(d){console.log("send message try");var e={textMessage:{author:"derp",text:g.message}};Object.values(n).forEach((function(n){console.log("connection"),n.send(JSON.stringify(e))}))}}()}},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Send Message to Peers"),r.a.createElement("input",{type:"text","aria-label":"chat input",name:"message",value:g.message,onChange:function(e){return h(Object(E.a)({},g,Object(v.a)({},e.target.name,e.target.value)))},placeholder:"Hello Peer..."}),r.a.createElement("button",{type:"submit"},"send")))))}))),J=function(){return r.a.createElement(_.a,null,r.a.createElement(w.a,null,r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/",component:I}),r.a.createElement(R.a,{exact:!0,path:"/create-room",component:N}),r.a.createElement(R.a,{exact:!0,path:"/room-lobby/:roomId",component:S}),r.a.createElement(R.a,{path:"/rooms/:roomId",component:C}),r.a.createElement(R.a,{path:"/test-room",component:U}))))};c.a.render(r.a.createElement(o.StrictMode,null,r.a.createElement(l.a,{store:y},r.a.createElement(J,null))),document.getElementById("root"))},58:function(e,n,t){e.exports=t(102)},69:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=69},99:function(e,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.8eeaa0fa.chunk.js.map