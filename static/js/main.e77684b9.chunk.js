(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,o){e.exports=o(60)},59:function(e,t,o){},60:function(e,t,o){"use strict";o.r(t);var i=o(21),n=o.n(i),a=o(33),s=o.n(a),l=o(49),r=o(45),c=o(46),d=o(50),f=o(47),h=o(51),y=o(1),m=o(67),p=o(36),u=o(65),x=o(66),N=o(7),g=[{id:"Action",shape:{type:"UmlActivity",shape:"Action"}},{id:"Decision",shape:{type:"UmlActivity",shape:"Decision"}},{id:"MergeNode",shape:{type:"UmlActivity",shape:"MergeNode"}},{id:"InitialNode",shape:{type:"UmlActivity",shape:"InitialNode"}},{id:"FinalNode",shape:{type:"UmlActivity",shape:"FinalNode"}},{id:"ForkNode",shape:{type:"UmlActivity",shape:"ForkNode"}},{id:"JoinNode",shape:{type:"UmlActivity",shape:"JoinNode"}},{id:"TimeEvent",shape:{type:"UmlActivity",shape:"TimeEvent"}}],b={Action:[{offset:{x:0,y:.5},text:"IN - 1"},{offset:{x:1,y:.5},text:"OUT - 1"},{offset:{x:.5,y:1},text:"OUT - 2"},{offset:{x:.5,y:0},text:"IN - 2"}],Decision:[{offset:{x:0,y:.5},text:"OUT - 1"},{offset:{x:1,y:.5},text:"OUT - 2"},{offset:{x:.5,y:1},text:"IN - 1"},{offset:{x:.5,y:0},text:"OUT - 3"}],MergeNode:[{offset:{x:0,y:.5},text:"OUT - 1"},{offset:{x:1,y:.5},text:"OUT - 2"},{offset:{x:.5,y:1},text:"IN - 1"},{offset:{x:.5,y:0},text:"OUT - 3"}],InitialNode:[{offset:{x:1,y:.5},text:"OUT - 1"}],FinalNode:[{offset:{x:0,y:.5},text:"IN - 1"}],ForkNode:[{offset:{x:.5,y:1},text:"IN - 1"},{offset:{x:.5,y:0},text:"OUT - 1"}],JoinNode:[{offset:{x:0,y:.5},text:"IN - 1"},{offset:{x:1,y:.5},text:"OUT - 1"}],TimeEvent:[{offset:{x:.5,y:1},text:"IN - 1"},{offset:{x:.5,y:0},text:"OUT - 1"}]},w=function(e){function t(){var e,o;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(o=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={selectedItem:null},o.enrichNode=function(e){e.constraints=(y.k.Default|y.k.HideThumbs)&~y.k.Resize&~y.k.Rotate,e.oldProperties.id&&(e.ports=Object(l.a)(b[e.oldProperties.id]),e.ports.forEach(o.enrichPort))},o.enrichPort=function(e){e.style={fill:"#95adbe",strokeColor:"#95adbe"},e.width=10,e.height=10,e.constraints=y.l.Default|y.l.Draw,e.visibility=y.m.Visible,e.shape="Circle"},o.enrichConnector=function(e){e.type="Orthogonal",e.style={strokeColor:"#574f7d",strokeWidth:1},e.targetDecorator={width:5,height:5,style:{fill:"#c",strokeColor:"#574f7d"}}},o.enrichSymbol=function(e){switch(e.id){case"JoinNode":e.width=20,e.height=50;break;case"ForkNode":e.width=50,e.height=20;break;case"Decision":case"MergeNode":e.width=50,e.height=40;break;default:e.width=50,e.height=50}"InitialNode"!==e.id&&"FinalNode"!==e.id&&"JoinNode"!==e.id&&"ForkNode"!==e.id||(e.style.fill="#dff0ea"),e.style.strokeColor="#95adbe"},o}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"ui equal height stretched grid internally celled"},n.a.createElement("div",{className:"ui three wide column"},n.a.createElement(m.a,{id:"symbolpalette",expandMode:"Multiple",palettes:[{id:"nodes",expanded:!0,symbols:g,title:"\u8282\u70b9"}],getNodeDefaults:this.enrichSymbol,symbolHeight:80,symbolWidth:80,symbolMargin:{left:15,right:15,top:15,bottom:15},getSymbolInfo:function(){return{fit:!0}}},n.a.createElement(p.b,{services:[u.a]}))),n.a.createElement("div",{className:"ui ten wide column"},n.a.createElement(x.a,{id:"diagram",ref:function(e){e},selectionChange:v,snapSettings:{constraints:0},getNodeDefaults:this.enrichNode,getConnectorDefaults:this.enrichConnector})),n.a.createElement("div",{className:"ui three wide column"}))}}]),t}(n.a.Component),v=function(e){"Changed"===e.state&&e.newValue&&e.newValue[0]instanceof N.q&&console.log(e.newValue[0])},k=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(59);s.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.e77684b9.chunk.js.map