(function(){"use strict";var e={2102:function(e,a,t){t(6992),t(8674),t(9601),t(7727);var i=t(9567),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Header"),t("body",[t("Franqueado")],1)],1)},s=[],l=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("header",{attrs:{id:"header"}},[i("div",{attrs:{id:"logo"}},[i("img",{attrs:{src:t(4068)}})])])}],u=t(1001),r={},m=(0,u.Z)(r,l,o,!1,null,"03adabfa",null),c=m.exports,v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("body",[t("h1",[e._v("Franqueado")]),t("div",{staticClass:"input-values"},[t("h2",[e._v("Quantidade de pessoas")]),t("a",[e._v("Empresas")]),t("b-form-input",{attrs:{placeholder:"Quantidade Empresas",type:"number"},model:{value:e.companies,callback:function(a){e.companies=a},expression:"companies"}}),t("a",[e._v("Pessoas")]),t("b-form-input",{attrs:{placeholder:"Quantidade de Pessoas",type:"number"},model:{value:e.persons,callback:function(a){e.persons=a},expression:"persons"}})],1),t("div",{staticClass:"actions"},[t("h2",[e._v("Ações Recomendadas")]),t("b-list-group",[t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Enriquecimento")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("enriquecimentoPF",2)))+" por CPF. ")]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("enriquecimentoPJ",2)))+" por CNPJ. ")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Acionamento por Email")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(4*e.retrieveValue("acionamentoEmail",2)))+" por pessoa. ")]),t("p",{staticClass:"mb-1"},[e._v(" 4 emails por pessoa. ")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Acionamento por SMS")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(2*e.retrieveValue("acionamentoSms",2)))+" por pessoa. ")]),t("p",{staticClass:"mb-1"},[e._v(" 2 SMSs por pessoa. ")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Acionamento por WhatsApp")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(2*e.retrieveValue("acionamentoWhatsapp",2)))+" por pessoa. ")]),t("p",{staticClass:"mb-1"},[e._v(" 2 acionamentos por pessoa. ")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Acionamento por carta simples")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("carta",2)))+" por pessoa. ")]),t("p",{staticClass:"mb-1"},[e._v(" 1 carta por pessoa. ")])])],1)],1),t("div",{staticClass:"actions"},[t("h2",[e._v("Outras Ações")]),t("b-list-group",[t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Consulta Simples")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("consultaPFsimples",2)))+" por CPF. ")]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("consultaPJsimples",2)))+" por CNPJ. ")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Consulta Detalhada")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("consultaPFdetalhada",2)))+" por CPF. ")]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("consultaPJdetalhada",2)))+" por CNPJ. ")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Protesto")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("protesto",2)))+" por pessoa. ")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start"},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v("Negativação")])]),t("p",{staticClass:"mb-1"},[e._v(" R$ "+e._s(e.numeral(e.retrieveValue("negativacao",2)))+" por pessoa. ")])])],1)],1),t("div",{staticClass:"tabela-valores"},[t("h2",[e._v("Valores")]),t("b-table-simple",{attrs:{hovers:"",small:"",responsive:""}},[t("b-thead",[t("b-tr",[t("b-th",[e._v("Tipo")]),t("b-th",[e._v("Total")])],1)],1),t("b-tbody",[t("b-tr",[t("b-th",[e._v("Valor de Referencia")]),t("b-td",{attrs:{colspan:"4"}},[e._v("R$"+e._s(e.numeral(e.tired(2))))])],1),t("b-tr",[t("b-th",[e._v("Valor do Franqueado")]),t("b-td",{attrs:{colspan:"4"}},[e._v("R$"+e._s(e.numeral(.3*e.tired(2))))])],1)],1)],1)],1)])])},d=[],f=(t(4553),t(9826),t(1539),JSON.parse('[[{"value":0,"item":"processamentoPF","key":"f"},{"value":0,"item":"processamentoPJ","key":"f"},{"value":0.02,"item":"enriquecimentoEmail","key":"fj"},{"value":2.31,"item":"carta","key":"fj"},{"value":1.49,"item":"enriquecimentoPJ","key":"j"},{"value":0.99,"item":"enriquecimentoPF","key":"f"},{"value":0,"item":"validacaoEmail","key":"fj"},{"value":0.2,"item":"negativacao","key":"fj"},{"value":0.15,"item":"acionamentoWhatsapp","key":"fj"},{"value":0.15,"item":"acionamentoSms","key":"fj"},{"value":0.02,"item":"acionamentoEmail","key":"fj"},{"value":1.01,"item":"indicadoresPJ","key":"j"},{"value":0.76,"item":"indicadorePF","key":"f"},{"value":0.33,"item":"consultaPFsimples","key":"f"},{"value":0.44,"item":"consultaPFdetalhada","key":"f"},{"value":0.5,"item":"consultaPJsimples","key":"j"},{"value":0.83,"item":"consultaPJdetalhada","key":"j"},{"value":0,"item":"protesto","key":"fj"}],[{"value":0.3,"item":"processamentoPF","key":"f"},{"value":0.4,"item":"processamentoPJ","key":"j"},{"value":0.15,"item":"enriquecimentoEmail","key":"fj"},{"value":3.8,"item":"carta","key":"fj"},{"value":3.1,"item":"enriquecimentoPJ","key":"j"},{"value":2.5,"item":"enriquecimentoPF","key":"f"},{"value":0.15,"item":"validacaoEmail","key":"fj"},{"value":4,"item":"negativacao","key":"fj"},{"value":0.5,"item":"acionamentoWhatsapp","key":"fj"},{"value":0.25,"item":"acionamentoSms","key":"fj"},{"value":0.15,"item":"acionamentoEmail","key":"fj"},{"value":2.5,"item":"indicadoresPJ","key":"j"},{"value":2,"item":"indicadorePF","key":"f"},{"value":0.82,"item":"consultaPFsimples","key":"f"},{"value":1.1,"item":"consultaPFdetalhada","key":"f"},{"value":1.25,"item":"consultaPJsimples","key":"j"},{"value":2.07,"item":"consultaPJdetalhada","key":"j"},{"value":7,"item":"protesto","key":"fj"}],[{"value":0.6,"item":"processamentoPF","key":"f"},{"value":0.8,"item":"processamentoPJ","key":"j"},{"value":0.25,"item":"enriquecimentoEmail","key":"fj"},{"value":4.2,"item":"carta","key":"fj"},{"value":4.1,"item":"enriquecimentoPJ","key":"j"},{"value":3.5,"item":"enriquecimentoPF","key":"f"},{"value":0.2,"item":"validacaoEmail","key":"fj"},{"value":8,"item":"negativacao","key":"fj"},{"value":0.8,"item":"acionamentoWhatsapp","key":"fj"},{"value":0.65,"item":"acionamentoSms","key":"fj"},{"value":0.5,"item":"acionamentoEmail","key":"fj"},{"value":3,"item":"indicadoresPJ","key":"j"},{"value":2.5,"item":"indicadorePF","key":"f"},{"value":1.15,"item":"consultaPFsimples","key":"f"},{"value":1.54,"item":"consultaPFdetalhada","key":"f"},{"value":1.75,"item":"consultaPJsimples","key":"j"},{"value":2.9,"item":"consultaPJdetalhada","key":"j"},{"value":10,"item":"protesto","key":"fj"}]]')),p=JSON.parse('[[{"value":0,"item":"processamentoPF","key":"f"},{"value":0,"item":"processamentoPJ","key":"f"},{"value":0.02,"item":"enriquecimentoEmail","key":"fj"},{"value":2.31,"item":"carta","key":"fj"},{"value":1.49,"item":"enriquecimentoPJ","key":"j"},{"value":0.99,"item":"enriquecimentoPF","key":"f"},{"value":0,"item":"validacaoEmail","key":"fj"},{"value":0.15,"item":"acionamentoWhatsapp","key":"fj"},{"value":0.15,"item":"acionamentoSms","key":"fj"},{"value":0.02,"item":"acionamentoEmail","key":"fj"}],[{"value":0.3,"item":"processamentoPF","key":"f"},{"value":0.4,"item":"processamentoPJ","key":"j"},{"value":0.15,"item":"enriquecimentoEmail","key":"fj"},{"value":3.8,"item":"carta","key":"fj"},{"value":3.1,"item":"enriquecimentoPJ","key":"j"},{"value":2.5,"item":"enriquecimentoPF","key":"f"},{"value":0.15,"item":"validacaoEmail","key":"fj"},{"value":0.5,"item":"acionamentoWhatsapp","key":"fj"},{"value":0.25,"item":"acionamentoSms","key":"fj"},{"value":0.15,"item":"acionamentoEmail","key":"fj"}],[{"value":0.6,"item":"processamentoPF","key":"f"},{"value":0.8,"item":"processamentoPJ","key":"j"},{"value":0.25,"item":"enriquecimentoEmail","key":"fj"},{"value":4.2,"item":"carta","key":"fj"},{"value":4.1,"item":"enriquecimentoPJ","key":"j"},{"value":3.5,"item":"enriquecimentoPF","key":"f"},{"value":0.2,"item":"validacaoEmail","key":"fj"},{"value":0.8,"item":"acionamentoWhatsapp","key":"fj"},{"value":0.65,"item":"acionamentoSms","key":"fj"},{"value":0.5,"item":"acionamentoEmail","key":"fj"}]]'),y={methods:{calculateCostAction:function(e,a){for(var t=0,i=0;i<10;i++)"acionamentoEmail"===p[e][i].item||"enriquecimentoEmail"===p[e][i].item||"validacaoEmail"===p[e][i].item?t+=4*p[e][i].value:"acionamentoSms"===p[e][i].item||"acionamentoWhatsapp"===p[e][i].item?t+=2*p[e][i].value:"enriquecimentoPF"===p[e][i].item?t+=p[e][i].value:a!==p[e][i].key&&"fj"!==p[e][i].key||(t+=p[e][i].value);return t}}},k={methods:{retrieveValue:function(e,a){for(var t=0;t<19;t++)if(e===f[a][t].item)return f[a][t].value}}},b=18,h={mixins:[y,k],data:function(){return{costs:["processamentoPF","processamentoPJ"],values:[],dados:[{id:0,key:"validacaoEmail",value:null,title:"Validação de Email",label:"Quantidade de validações"},{id:1,key:"acionamentoEmail",value:null,title:"Acionamento por Email",label:"Quantidade de acionamentos"},{id:2,key:"acionamentoSms",value:null,title:"Acionamento por SMS",label:"Quantidade de acionamentos"},{id:3,key:"acionamentoWhatsapp",value:null,title:"Acionamento por WhatsApp",label:"Quantidade de acionamentos"},{id:4,key:"carta",value:null,title:"Acionamento por Carta",label:"Quantidade de acionamentos"},{id:5,key:"negativacao",value:null,title:"Negativação",label:"Quantidade de negativações"},{id:6,key:"indicadoresPJ",value:null,title:"Indicadores PJ",label:"Quantidade de empresas que terão indicadores"},{id:7,key:"indicadorePF",value:null,title:"Indicadores PF",label:"Quantidade de pessoas que terão indicadores"},{id:8,key:"enriquecimentoPJ",value:null,title:"Enriquecimento PJ",label:"Quantidade de empresas para enriquecer"},{id:9,key:"enriquecimentoPF",value:null,title:"Enriquecimento PF",label:"Quantidade de pessoas para enriquecer"},{id:10,key:"enriquecimentoEmail",value:null,title:"Enriquecimento de Email",label:"Quantidade de emails para enriquecer"}],costRecommended:[],choice:!0,email:null,companies:null,persons:null,recommended:"true",relative:"true"}},methods:{tired:function(e){var a=parseInt(this.companies),t=parseInt(this.persons);return a>0||t>0?(this.calculateCostAction(e,"f")*(t/2)+this.calculateCostAction(e,"j")*(t/2)+this.trueValue("negativacao",2,t/2)+this.trueValue("protesto",2,.2*t))*a:0},trueValue:function(e,a,t){return this.retrieveValue(e,a)*t},sum:function(e,a){var t=parseInt(e),i=parseInt(a);return t>0&&i>0?parseInt(t)+parseInt(i):0===t&&i>0?i:t>0&&null===i?t:1},cost:function(e,a){for(var t=0,i=0;i<this.costs.length;i++)for(var n=0;n<b;n++)this.costs[i]!==f[a][n].item||f[a][n].key!==e&&"fj"!==f[a][n].key||("acionamentoEmail"===f[a][n].item&&(t+=f[a][n].value*this.email),"negativacao"===f[a][n].item&&a>0?t+=f[a][n].value*this.negativacao(this.costs):t+=f[a][n].value);return t},costImproved:function(e,a){for(var t=this,i=0,n=function(n){for(var s=0;s<b;s++)if(t.costs[n]===f[a][s].item&&(f[a][s].key===e||"fj"===f[a][s].key)){var l=t.dados.findIndex((function(e){return e.key===t.costs[n]}));l>=0&&("negativacao"===f[a][s].item&&a>0?(i+=f[a][s].value*t.dados[l].value*t.negativacao(t.costs),console.log(f[a][s].value)):i+=f[a][s].value*t.dados[l].value,console.log(f[a][s].value))}},s=0;s<this.costs.length;s++)n(s);return i>=0?i:0},negativacao:function(e){return 3===e.length?1:.4},numeral:function(e){return e.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:3})},findInArray:function(e){var a=this.costs.find((function(a){return a===e}));return void 0!==a}}},j=h,P=(0,u.Z)(j,v,d,!1,null,"db7da300",null),_=P.exports,C={name:"App",components:{Header:c,Franqueado:_}},g=C,E=(0,u.Z)(g,n,s,!1,null,null,null),q=E.exports,F=t(8262),J=t(3266);t(44);i["default"].use(F.XG7),i["default"].use(J.A7),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(q)}}).$mount("#app")},4068:function(e,a,t){e.exports=t.p+"img/maisLogo.d19aa46a.png"}},a={};function t(i){var n=a[i];if(void 0!==n)return n.exports;var s=a[i]={exports:{}};return e[i](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,i,n,s){if(!i){var l=1/0;for(m=0;m<e.length;m++){i=e[m][0],n=e[m][1],s=e[m][2];for(var o=!0,u=0;u<i.length;u++)(!1&s||l>=s)&&Object.keys(t.O).every((function(e){return t.O[e](i[u])}))?i.splice(u--,1):(o=!1,s<l&&(l=s));if(o){e.splice(m--,1);var r=n();void 0!==r&&(a=r)}}return a}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[i,n,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var n,s,l=i[0],o=i[1],u=i[2],r=0;if(l.some((function(a){return 0!==e[a]}))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(u)var m=u(t)}for(a&&a(i);r<l.length;r++)s=l[r],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(m)},i=self["webpackChunkfranqueado"]=self["webpackChunkfranqueado"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(2102)}));i=t.O(i)})();
//# sourceMappingURL=app-legacy.cee1d939.js.map