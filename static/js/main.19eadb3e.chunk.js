(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),s=(n(15),n(1)),i=n.n(s),u=n(7),h=n(3),l=n(4),d=n(2),m=n(6),f=n(5),p=(n(17),n(18),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={countries:[]},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("select",{className:"select",onChange:this.handleChange},this.state.countries.map((function(e){return r.a.createElement("option",{className:"option",key:e,value:e},e," ")})))))}},{key:"handleChange",value:function(e){this.props.onCountryChange(e.target.value)}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19api.com/countries",e.next=3,fetch("https://api.covid19api.com/countries").then((function(e){return e.json()})).then((function(e){return t.setState({countries:e.map((function(e){return e.Country})).sort()})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(r.a.Component)),v=(n(19),function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(h.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Box"},this.props.name," ",r.a.createElement("h2",null," ",this.props.number," "))}}]),n}(r.a.Component)),b=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={country:"",deaths:0,confirmed:0,recovered:0,date:""},a.handleCountryChange=a.handleCountryChange.bind(Object(d.a)(a)),a.fetchData=a.fetchData.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("p",null,"COVID 19")),r.a.createElement(p,{onCountryChange:this.handleCountryChange}),r.a.createElement("body",{className:"body"},r.a.createElement(v,{name:"recovered",number:this.state.recovered}),r.a.createElement(v,{name:"confirmed",number:this.state.confirmed}),r.a.createElement(v,{name:"deaths",number:this.state.deaths})),r.a.createElement("footer",{className:"footer"},"Update date: ",this.state.date))}},{key:"handleCountryChange",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({country:t});case 2:return e.next=4,this.fetchData();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.covid19api.com/live/country/"+this.state.country,console.log(t),e.next=4,fetch(t).then((function(e){return e.json()})).then((function(e){return e.length?n.setState({deaths:e[e.length-1].Deaths,confirmed:e[e.length-1].Confirmed,recovered:e[e.length-1].Recovered,date:e[e.length-1].Date}):n.setState({deaths:0,confirmed:0,recovered:0,date:""})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.19eadb3e.chunk.js.map