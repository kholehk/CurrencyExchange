(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],[,,,,function(e,t,n){},,function(e){e.exports=JSON.parse('{"valid":true,"timestamp":1582195447,"base":"USD","rates":{"AED":3.67338,"AFN":77.8079,"ALL":113.23065,"AMD":478.14251,"ANG":1.78845,"AOA":493.9822,"ARS":61.66319,"AUD":1.50684,"AWG":1.8,"AZN":1.7,"BAM":1.811,"BBD":2.01732,"BCH":0.0026295030239284773,"BDT":84.88116,"BGN":1.81119,"BHD":0.37698,"BIF":1883.9902,"BMD":1,"BND":1.39136,"BOB":6.90982,"BRL":4.36582,"BSD":0.99917,"BTC":0.00010430672016906032,"BTG":0.09900990099009901,"BWP":10.99162,"BZD":2.01399,"CAD":1.32493,"CDF":1686.1,"CHF":0.98284,"CLP":796.23,"CNH":7.02971,"CNY":7.029,"COP":3385.67,"CRC":567.00515,"CUC":1,"CUP":0.99899,"CVE":102.10001,"CZK":23.16515,"DASH":0.009672115291614276,"DJF":177.729,"DKK":6.9152,"DOP":53.33415,"DZD":120.936,"EGP":15.59628,"EOS":0.25144581342720645,"ETB":31.8418,"ETH":0.003866976024748646,"EUR":0.92612,"FJD":2.20721,"GBP":0.77471,"GEL":2.82515,"GHS":5.32477,"GIP":0.81292,"GMD":50.8725,"GNF":9519.70895,"GTQ":7.62428,"GYD":208.40372,"HKD":7.7788,"HNL":24.61633,"HRK":6.89836,"HTG":97.52467,"HUF":312.74,"IDR":13810.6405,"ILS":3.433,"INR":71.589,"IQD":1192.91165,"IRR":42107.1,"ISK":127.7165,"JMD":140.87825,"JOD":0.70914,"JPY":111.969,"KES":101.365,"KGS":69.85239,"KHR":4088.4324,"KMF":456.473,"KRW":1204.77,"KWD":0.30657,"KYD":0.83261,"KZT":376.44802,"LAK":8895.31975,"LBP":1510.69955,"LKR":181.84229,"LRD":196.88485,"LSL":14.9805,"LTC":0.014191442560136236,"LYD":1.41237,"MAD":9.73535,"MDL":17.71963,"MKD":57.00696,"MMK":1449.7425,"MOP":7.99818,"MUR":37.80151,"MVR":15.451,"MWK":735.9364,"MXN":18.6494,"MYR":4.18231,"MZN":64.79825,"NAD":14.9805,"NGN":363.52,"NIO":33.70534,"NOK":9.3031,"NPR":114.13431,"NZD":1.57555,"OMR":0.38502,"PAB":0.99919,"PEN":3.38092,"PGK":3.40646,"PHP":50.71804,"PKR":154.11631,"PLN":3.9613,"PYG":6521.64205,"QAR":3.6412,"RON":4.42872,"RSD":108.8855,"RUB":63.7281,"RWF":950.17481,"SAR":3.75094,"SBD":8.23524,"SCR":13.70598,"SDG":52.7525,"SEK":9.8036,"SGD":1.4,"SLL":9720.5,"SOS":585.53,"SRD":7.45835,"SVC":8.74283,"SZL":14.93506,"THB":31.44455,"TJS":9.69119,"TMT":3.5,"TND":2.85165,"TOP":2.31662,"TRY":6.08567,"TTD":6.75088,"TWD":30.32302,"TZS":2309.815,"UAH":24.50375,"UGX":3662.2281,"USD":1,"UYU":37.89638,"UZS":9514.8477,"VND":23237.66,"XAF":607.31356,"XAG":0.054838090537687484,"XAU":0.0006214673465519438,"XCD":2.70269,"XLM":14.204545454545453,"XOF":607.31356,"XRP":3.663003663003663,"YER":250.3625,"ZAR":15.0978,"ZMW":14.66231}}')},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(5),i=n.n(a),u=(n(13),n(2)),D=(n(14),n(6)),j=function(){return Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(c.jsxs)("div",{className:"lds-facebook",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})},o=n(7);function O(e){var t=e.currency,n=Object(o.a)({},t),r=n.base,s=n.timestamp,a=new Date(1e3*s),i=["0"+a.getDay(),"0"+a.getMonth()].reduce((function(e,t){return e+(t.substr(-2)+".")}),"")+a.getFullYear();return Object(c.jsx)("h3",{children:"".concat(r," / ").concat(i)})}n(4);function b(e){var t=e.item;return Object(c.jsxs)("li",{className:"exchange_list_item",children:[Object(c.jsxs)("b",{children:[t.curr,": "]}),Math.round(1e4*t.exch)/1e4]})}function l(e){var t=e.exchange;return Object(c.jsx)("ul",{className:"exchange_list",children:t.map((function(e){return Object(c.jsx)(b,{item:e},e.curr)}))})}var S=function(){var e=s.a.useState({}),t=Object(u.a)(e,2),n=t[0],a=t[1],i=s.a.useState([]),o=Object(u.a)(i,2),b=o[0],S=o[1],R=s.a.useState(!0),d=Object(u.a)(R,2),h=d[0],N=d[1];return Object(r.useEffect)((function(){(function(e){return new Promise((function(t,n){"object"===typeof e&&null!==e?t(e):n(new Error("Error input data"))}))})(D).then((function(e){setTimeout((function(){return N(!1)}),2e3),a(e),S(Object.keys(e.rates).map((function(t){return{curr:t,exch:e.rates[t]}})))}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Exchange currency"})}),h&&Object(c.jsx)(j,{}),h?null:Object(c.jsxs)("main",{children:[Object(c.jsx)(O,{currency:n}),Object(c.jsx)(l,{exchange:b})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),R()}],[[15,1,2]]]);
//# sourceMappingURL=main.5125ad39.chunk.js.map