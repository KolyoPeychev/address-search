(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){e.exports=a(317)},128:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){},313:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),o=a.n(r),i=(a(128),a(20)),c=a(21),d=a(23),l=a(22),u=a(24),h=(a(130),a(132),a(319)),m=a(320),p=a(19),f=a(41),g=a(42),v=(a(138),a(67)),b=a(68),y=a.n(b),S="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest",O="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates",E="bg",j="POI,Address",w="pjson";p.b.add(g.b);var k=Object(v.asyncContainer)(v.Typeahead),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!1,query:"",options:[],results:[]},a.getSuggestions=function(e){a.setState({isLoading:!0}),y.a.get(S,{params:{countryCode:E,category:j,f:w,text:e}}).then(function(e){var t=e.data;a.setState({isLoading:!1,options:t.suggestions})})},a.getResults=function(){y.a.get(O,{params:{countryCode:E,langCode:E,category:j,f:w,SingleLine:a.state.query}}).then(function(e){var t=e.data;a.setState({results:t.candidates}),a.props.onResult(t.candidates)})},a.onFormSubmit=function(e){e.preventDefault(),a.getResults()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(h.a,{className:"SearchBar",onSubmit:this.onFormSubmit},s.a.createElement(k,{className:"mr-sm-2 asynctypeahead-flex",placeholder:"Search",isLoading:this.state.isLoading,onChange:function(t){t.length>0&&e.setState({query:t[0].text})},onInputChange:function(t){e.setState({query:t})},onSearch:function(t){e.getSuggestions(t)},labelKey:function(e){return e.text},options:this.state.options}),s.a.createElement(m.a,{variant:"primary",onClick:this.onFormSubmit},s.a.createElement(f.a,{icon:"search"})))}}]),t}(s.a.Component),L=(a(313),a(122)),A=a.n(L),R=a(120),x=a.n(R),N=a(121),W=a.n(N);a(315);function q(e){var t=e.listAddresses.map(function(e,t){return s.a.createElement(x.a,{key:t},s.a.createElement(W.a,{className:"list-item",md:{span:6,offset:3}},s.a.createElement("p",null,e.address),s.a.createElement("p",null,e.address)))});return s.a.createElement(A.a,null,t)}var B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={address:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){void 0!==this.props.addressList&&this.setState({address:this.props.addressList})}},{key:"componentWillReceiveProps",value:function(e){e.addressList!==this.state.address&&this.setState({address:e.addressList})}},{key:"render",value:function(){return s.a.createElement(q,{listAddresses:this.state.address})}}]),t}(s.a.Component);p.b.add(g.a);var F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={addresses:[]},a.handleOnResult=function(e){a.setState({addresses:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(f.a,{icon:"globe"}),s.a.createElement("p",null,"Search for an address"),s.a.createElement(C,{onResult:this.handleOnResult})),s.a.createElement(B,{addressList:this.state.addresses}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,2,1]]]);
//# sourceMappingURL=main.8060261c.chunk.js.map