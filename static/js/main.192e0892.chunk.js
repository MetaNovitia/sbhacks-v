(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/logo.a7b6a3d7.png"},38:function(e,t,a){e.exports=a(94)},43:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),i=a.n(s),l=a(104),o=(a(43),a(45),a(9)),r=a(10),u=a(13),m=a(11),h=a(12),d=a(99),p=a(96),b=(a(47),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return c.a.createElement(p.a,{className:"foot"},"Copyright \xa9 2019 [TEAM NAME]. All Rights Reserved.")}}]),t}(n.Component)),g=a(7),f=a(97),y=a(98),E=a(100),O=a(101),j=a(108),v=a(102),k=a(103),S=(a(51),a(105)),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={visible:!0},a.show=a.show.bind(Object(g.a)(Object(g.a)(a))),"success"===e.c?a.msg="Successfully marked message as spam!":"danger"===e.c?a.msg="Sorry! You are not authorized to do this!":a.msg="Successfully marked message as not spam!",a.onDismiss=a.onDismiss.bind(Object(g.a)(Object(g.a)(a))),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"show",value:function(){this.setState({visible:!0})}},{key:"render",value:function(){return c.a.createElement(S.a,{className:"rep",color:this.props.c,isOpen:this.state.visible,toggle:this.onDismiss},this.msg)}}]),t}(c.a.Component),C=a(32),N=a.n(C),T=(a(82),function(e){return 30*Math.log2(e.value)}),D=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(N.a,{data:this.props.data,fontSizeMapper:T,width:1e3,height:1e3})}}]),t}(n.Component),x=a(33),V=a.n(x),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={inputValue:"",collapse:!1,activeTab:"1"},a.toggled=a.toggled.bind(Object(g.a)(Object(g.a)(a))),a.toggleTab=a.toggleTab.bind(Object(g.a)(Object(g.a)(a))),a.setData=a.setData.bind(Object(g.a)(Object(g.a)(a))),a.processURL=a.processURL.bind(Object(g.a)(Object(g.a)(a))),a.notspam=a.notspam.bind(Object(g.a)(Object(g.a)(a))),a.spam=a.spam.bind(Object(g.a)(Object(g.a)(a))),a.data=[],a.cloudData=[],a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"toggled",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleTab",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"processURL",value:function(){this.state.inputValue.startsWith("https://www.youtube.com/watch?v=")||this.state.inputValue.startsWith("www.youtube.com/watch?v=")?V.a.ajax({url:"https://35.247.16.191:5000/comments/"+this.state.inputValue.split("v=")[1],context:document.body,crossDomain:!0}).done(this.setData):alert("Please enter a valid YouTube url!")}},{key:"setData",value:function(e){this.data=[];var t=e.items;this.cloudData=e.wordcloud;for(var a=0;a<t.length;a++)if(1===t[a].spam){var n=[221,113,113];n[1]=255-112*(t[a].spamprob-.4)*2,this.data.push(c.a.createElement(p.a,{key:t[a].id,id:t[a].id,className:"comment",style:{backgroundColor:"rgb("+n[0].toString()+","+n[1].toString()+","+n[2].toString()+")"}},c.a.createElement(f.a,{className:"photo cen"},c.a.createElement("img",{alt:"user img",className:"userpic",src:t[a].author.picture})),c.a.createElement(f.a,{className:"bodyuser cen"},c.a.createElement("div",{className:"author"},t[a].author.name),c.a.createElement("div",null,t[a].text)),c.a.createElement(f.a,{className:"spam cen"},c.a.createElement("div",null,c.a.createElement(y.a,{id:t[a].id,className:"spambtn",onClick:this.spam},"Spam")),c.a.createElement("div",null,c.a.createElement(y.a,{id:t[a].id,className:"spambtn",onClick:this.notspam},"Not Spam"))),c.a.createElement(f.a,{className:"rating cen"},Math.floor(100*t[a].spamprob).toString()+"%")))}this.toggled()}},{key:"spam",value:function(e){for(var t=e.target.id,a=0;a<this.data.length;a++)null===this.data[a].key&&this.data.splice(a,1);for(a=0;a<this.data.length;a++)if(this.data[a].key===t){this.data.splice(a,0,c.a.createElement(w,{key:a.toString()+t,c:"danger"}));break}this.toggled()}},{key:"notspam",value:function(e){for(var t=e.target.id,a=0;a<this.data.length;a++)null===this.data[a].key&&this.data.splice(a,1);for(a=0;a<this.data.length;a++)if(this.data[a].key===t){this.data.splice(a,1,c.a.createElement(w,{key:a.toString()+t,c:"info"}));break}this.toggled()}},{key:"render",value:function(){var e=this;return 0===this.data.length?c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement(O.a,{value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},placeholder:"Please enter a YouTube url!"}),c.a.createElement(j.a,{addonType:"append"},c.a.createElement(y.a,{color:"secondary",onClick:this.processURL},"Check Spam")))):c.a.createElement(d.a,null,c.a.createElement(E.a,null,c.a.createElement(O.a,{value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},placeholder:"Please enter a YouTube url!"}),c.a.createElement(j.a,{addonType:"append"},c.a.createElement(y.a,{color:"secondary",onClick:this.processURL},"Check Spam"))),c.a.createElement(d.a,null,c.a.createElement(f.a,null,c.a.createElement(y.a,{key:"1",id:"1",onClick:function(){e.toggleTab("1")},className:"topicbtn"},"Comments"),";",c.a.createElement(y.a,{key:"2",id:"2",onClick:function(){e.toggleTab("2")},className:"topicbtn"},"Word Cloud"),";",c.a.createElement(v.a,{activeTab:this.state.activeTab},c.a.createElement(k.a,{tabId:"1"},this.data),c.a.createElement(k.a,{tabId:"2"},c.a.createElement(D,{data:this.cloudData}))))))}}]),t}(n.Component),I=(a(84),a(35)),M=a.n(I),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).y=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{fluid:!0,className:"homep",style:{height:this.y.toString()+"px"}},c.a.createElement("div",null,c.a.createElement("img",{className:"logo",src:M.a,alt:""})),c.a.createElement("div",{style:{marginTop:((this.y-120)/2-140).toString()+"px",marginBottom:(this.y/3*2-120).toString()+"px"}},c.a.createElement(p.a,{className:"title center"},"[ SBAM detector ]"),c.a.createElement("br",null),c.a.createElement(p.a,{className:"subtitle center"},"by TheNewRandom")),c.a.createElement(p.a,{style:{marginBottom:"50px"}},c.a.createElement(R,null)),c.a.createElement(b,null))}}]),t}(n.Component),B=(a(86),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,"Test")}}]),t}(n.Component)),L=a(106),U=a(107),Y=(a(88),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(L.a,null,c.a.createElement(U.a,{exact:!0,path:"/",component:A}),c.a.createElement(U.a,{path:"/About",component:B}))}}]),t}(n.Component));document.body.style.backgroundColor="rgb(48, 47, 47)",i.a.render(c.a.createElement(l.a,null,c.a.createElement(Y,null)),document.getElementById("root"))}},[[38,2,1]]]);
//# sourceMappingURL=main.192e0892.chunk.js.map