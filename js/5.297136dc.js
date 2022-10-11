(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{e9dd:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e._self._c;e._self._setupProxy;return a("div",[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{label:"Home"}}),a("q-breadcrumbs-el",{attrs:{label:"Cenário"}}),a("q-breadcrumbs-el",{attrs:{label:"Novo"}})],1)],1),a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Cenário")]),a("div",{staticClass:"text-subtitle2"},[e._v(e._s(e.cenarioInput.descricao))])]),a("q-card-section",[a("div",{staticClass:"q-pa-md q-gutter-md"},[a("q-input",{attrs:{outlined:"",label:"Descrição do cenario",focus:"",rules:[e=>e&&e.length>0||"Campo de preenchimento obrigatório"]},model:{value:e.cenarioInput.descricao,callback:function(a){e.$set(e.cenarioInput,"descricao",a)},expression:"cenarioInput.descricao"}}),a("q-select",{attrs:{outlined:"",options:e.mapeamentos,label:"Mapeamento"},on:{input:e.mapeamentoSelecionado},model:{value:e.mapeamentoId,callback:function(a){e.mapeamentoId=a},expression:"mapeamentoId"}}),a("q-select",{attrs:{outlined:"",options:e.personas,label:"Persona"},on:{input:e.pessoaSelecionada},model:{value:e.personaId,callback:function(a){e.personaId=a},expression:"personaId"}}),e.cenarioInput.mapeamentoTemplatePersonaCenarioItens.length>0?a("div",e._l(e.cenarioInput.mapeamentoTemplatePersonaCenarioItens,(function(e){return a("div",{key:e.mapeamentoItem.mapeamentoItemId,staticClass:"text-h6",staticStyle:{"margin-top":"10px"}},[a("cenario-mapeamento-template-persona-component",{attrs:{mapeamentoTemplatePersonaCenario:e}})],1)})),0):e._e()],1)]),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",[a("q-btn",{attrs:{color:"primary",icon:"check",label:"Salvar",flat:""},on:{click:function(a){return e.adicionar()}}}),a("q-btn",{attrs:{icon:"arrow_back",label:"Voltar",flat:""},on:{click:function(a){return e.voltar()}}})],1)],1)],1)])},o=[],r=t("1b40"),i=t("2587"),s=t("ec43"),c=t("dc7e"),p=t("c647"),l=t("934f"),m=function(e,a,t,n){var o,r=arguments.length,i=r<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(r<3?o(i):r>3?o(a,t,i):o(a,t))||i);return r>3&&i&&Object.defineProperty(a,t,i),i};let d=class extends r["c"]{constructor(){super(...arguments),this.mapeamentoId="",this.personaId="",this.mapeamentos=[],this.mapeamentoInput={templateId:"",tipoMapeamentoItem:0,template:{},mapeamentoItens:[]},this.cenarioInput={descricao:"",mapeamentoId:"",templateId:"",templateDescricao:"",personaId:"",persona:{},mapeamentoTemplatePersonaCenarioItens:[]},this.personaSelecionada={},this.personas=[]}adicionar(){this._cenarioService.adicionar(this.cenarioInput).then((e=>{this.$q.notify(e.notificacao),this.editar(e.data._id)})).catch((e=>{this.$q.notify(e.notificacao)})).finally((()=>{this.$q.loading.hide()}))}recuperaMapeamentos(){this._mapeamentoService.listar().then((e=>{this.mapeamentos=e.map((e=>{var a;return{label:null!==(a=e.template.descricao)&&void 0!==a?a:"",value:e._id,data:e}}))})).catch((e=>{this.$q.notify(e)})).finally((()=>{this.$q.loading.hide()}))}recuperaMapeamentoPorId(e){this._mapeamentoService.recuperaPorId(e).then((e=>{console.log(e),this.cenarioInput.mapeamentoTemplatePersonaCenarioItens=e.mapeamentoItens.map((e=>{let a={mapeamentoTemplatePersonaCenarioItensId:e.mapeamentoItemId,mapeamentoItem:e,value:null};return a})),this.montaValueDoMapeamentoPorPersona()})).catch((e=>{this.$q.notify(e)})).finally((()=>{this.$q.loading.hide()}))}recuperaPersonas(){this._personaService.listar().then((e=>{this.personas=e.map((e=>{var a,t;let n={};return e.persona["nome"]&&(n={label:null!==(a=e.persona.nome)&&void 0!==a?a:"",value:e._id,data:e.persona}),{label:null!==(t=e.persona.nome)&&void 0!==t?t:"",value:e._id,data:e.persona}}))})).catch((e=>{this.$q.notify(e)})).finally((()=>{this.$q.loading.hide()}))}pessoaSelecionada(e){this.personaSelecionada=e,this.cenarioInput.persona=e.data,this.cenarioInput.personaId=e.value,this.montaValueDoMapeamentoPorPersona()}mapeamentoSelecionado(e){this.cenarioInput.mapeamentoId=e.data._id,this.cenarioInput.templateId=e.data.templateId,this.cenarioInput.templateDescricao=e.data.template.descricao,this.recuperaMapeamentoPorId(e.data._id)}montaValueDoMapeamentoPorPersona(){this.cenarioInput.personaId&&this.cenarioInput.mapeamentoId&&this.cenarioInput.mapeamentoTemplatePersonaCenarioItens.forEach((e=>{e.mapeamentoItem.pathPersona&&(e.value=l["a"].recuperar(this.cenarioInput.persona,e.mapeamentoItem.pathPersona))}))}created(){this._mapeamentoService=new s["a"],this._personaService=new c["a"],this._cenarioService=new i["a"],this.recuperaMapeamentos(),this.recuperaPersonas()}voltar(){this.$router.replace({name:"cenario"})}editar(e){this.$router.replace({path:`cenarioEdit/${e}`})}};d=m([Object(r["a"])({components:{CenarioMapeamentoTemplatePersonaComponent:p["a"]}})],d);var u=d,h=u,I=t("2877"),b=t("ead5"),f=t("079e"),v=t("f09f"),q=t("a370"),P=t("27f9"),_=t("ddd8"),C=t("eb85"),y=t("4b7e"),S=t("9c40"),g=t("eebe"),$=t.n(g),k=Object(I["a"])(h,n,o,!1,null,null,null);a["default"]=k.exports;$()(k,"components",{QBreadcrumbs:b["a"],QBreadcrumbsEl:f["a"],QCard:v["a"],QCardSection:q["a"],QInput:P["a"],QSelect:_["a"],QSeparator:C["a"],QCardActions:y["a"],QBtn:S["a"]})}}]);