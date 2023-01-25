"use strict";(self.webpackChunkdg=self.webpackChunkdg||[]).push([[786],{9786:(Y,Z,l)=>{l.r(Z),l.d(Z,{DashboardModule:()=>I});var r=l(9808),T=l(2697),g=l(3600),e=l(5e3),A=l(7234),u=l(5330);let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-google-name"]],decls:15,vars:0,consts:[[2,"font-weight","600","font-size","24px"],[2,"color","#4285F4","font-weight","600","font-size","24px"],[2,"color","#DB4437","font-weight","600","font-size","24px"],[2,"color","#F4B400","font-weight","600","font-size","24px"],[2,"color","#0F9D58","font-weight","600","font-size","24px"]],template:function(o,n){1&o&&(e.TgZ(0,"span",0),e._uU(1,"CanH"),e.qZA(),e._uU(2,"\xa0\n"),e.TgZ(3,"span",1),e._uU(4,"G"),e.qZA(),e.TgZ(5,"span",2),e._uU(6,"o"),e.qZA(),e.TgZ(7,"span",3),e._uU(8,"o"),e.qZA(),e.TgZ(9,"span",1),e._uU(10,"g"),e.qZA(),e.TgZ(11,"span",4),e._uU(12,"l"),e.qZA(),e.TgZ(13,"span",2),e._uU(14,"e"),e.qZA())},encapsulation:2}),t})();var d=l(3075),q=l(1424),h=l(845);function v(t,a){1&t&&(e.TgZ(0,"small",4),e._uU(1,"Enter valid Column name."),e.qZA())}let _=(()=>{class t{constructor(o,n){this.policyService=o,this.ref=n,this.loading=!0,this.hasData=!1,this.showError=!1}ngOnInit(){this.policyService.getPolicies().then(o=>{this.policies=o})}searchData(){var o,n;this.hasData=!1;for(let i=0;i<this.policies.length;i++){const c=this.policies[i];if((null===(o=null==c?void 0:c.key)||void 0===o?void 0:o.toLowerCase().replace(" ",""))==(null===(n=this.searchValue)||void 0===n?void 0:n.toLowerCase().replace(" ",""))){this.ref.close(this.policies[i]),this.hasData=!0;break}}console.log(this.hasData),this.hasData||(this.showError=!0)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(A.d),e.Y36(u.E7))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-search-box"]],decls:5,vars:2,consts:[[1,"mb-3","text-center"],["type","text","placeholder","Search Column name","pInputText","",1,"w-100",3,"ngModel","ngModelChange"],["id","searchValue-help","class","p-error",4,"ngIf"],["pButton","","type","button","label","Search",1,"float-right","mt-3",3,"click"],["id","searchValue-help",1,"p-error"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"app-google-name"),e.qZA(),e.TgZ(2,"input",1),e.NdJ("ngModelChange",function(i){return n.searchValue=i}),e.qZA(),e.YNc(3,v,2,0,"small",2),e.TgZ(4,"button",3),e.NdJ("click",function(){return n.searchData()}),e.qZA()),2&o&&(e.xp6(2),e.Q6J("ngModel",n.searchValue),e.xp6(1),e.Q6J("ngIf",n.showError))},directives:[p,d.Fj,q.o,d.JJ,d.On,r.O5,h.Hq],encapsulation:2}),t})();var m=l(9783),U=l(8061),C=l(8952),b=l(7376),y=l(4297);function x(t,a){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td",16),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.qZA()),2&t){const o=a.$implicit,n=e.oxw(2);e.xp6(2),e.Oqu(null==o?null:o.header),e.xp6(2),e.Oqu(n.filteredPolicies[null==o?null:o.field])}}function D(t,a){1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"Table Name"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Keys"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Indexes"),e.qZA(),e.qZA())}function S(t,a){1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2,"Table 1"),e.qZA(),e.TgZ(3,"td"),e._uU(4,"Primary Key"),e.qZA(),e.TgZ(5,"td"),e._uU(6,"Clustered Indexes"),e.qZA(),e.qZA(),e.TgZ(7,"tr"),e.TgZ(8,"td"),e._uU(9,"Table 2"),e.qZA(),e.TgZ(10,"td"),e._uU(11,"Alternate Key"),e.qZA(),e.TgZ(12,"td"),e._uU(13,"Filtered Indexes"),e.qZA(),e.qZA(),e.TgZ(14,"tr"),e.TgZ(15,"td"),e._uU(16,"Table 3"),e.qZA(),e.TgZ(17,"td"),e._uU(18,"Foreign Key\tNon"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Non Clustered"),e.qZA(),e.qZA(),e.TgZ(21,"tr"),e.TgZ(22,"td"),e._uU(23,"Table 4"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Composite Key"),e.qZA(),e.TgZ(26,"td"),e._uU(27,"Non Clustered"),e.qZA(),e.qZA(),e.TgZ(28,"tr"),e.TgZ(29,"td"),e._uU(30,"Table 5"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Candidate Key"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Filtered Index"),e.qZA(),e.qZA(),e.TgZ(35,"tr"),e.TgZ(36,"td"),e._uU(37,"Table 6"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"NA"),e.qZA(),e._UZ(40,"td"),e.qZA(),e.TgZ(41,"tr"),e.TgZ(42,"td"),e._uU(43,"Table 7"),e.qZA(),e.TgZ(44,"td"),e._uU(45,"NA"),e.qZA(),e._UZ(46,"td"),e.qZA(),e.TgZ(47,"tr"),e.TgZ(48,"td"),e._uU(49,"Table 8"),e.qZA(),e.TgZ(50,"td"),e._uU(51,"NA"),e.qZA(),e._UZ(52,"td"),e.qZA())}function N(t,a){1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"th"),e._uU(2,"Stored Procedures Name"),e.qZA(),e.qZA())}function B(t,a){1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2,"SP1"),e.qZA(),e.qZA(),e.TgZ(3,"tr"),e.TgZ(4,"td"),e._uU(5,"SP2"),e.qZA(),e.qZA(),e.TgZ(6,"tr"),e.TgZ(7,"td"),e._uU(8,"SP3"),e.qZA(),e.qZA(),e.TgZ(9,"tr"),e.TgZ(10,"td"),e._uU(11,"SP4"),e.qZA(),e.qZA(),e.TgZ(12,"tr"),e.TgZ(13,"td"),e._uU(14,"SP5"),e.qZA(),e.qZA())}function M(t,a){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"p-panel",4),e.TgZ(2,"div",0),e.TgZ(3,"div",5),e.TgZ(4,"p-table",6),e.YNc(5,x,5,2,"ng-template",7),e.qZA(),e.qZA(),e._UZ(6,"p-divider",8),e.TgZ(7,"div",9),e.TgZ(8,"div",10),e.TgZ(9,"p-table",11),e.YNc(10,D,7,0,"ng-template",12),e.YNc(11,S,53,0,"ng-template",7),e.qZA(),e.qZA(),e.TgZ(12,"div",13),e.TgZ(13,"p-table",11),e.YNc(14,N,3,0,"ng-template",12),e.YNc(15,B,15,0,"ng-template",7),e.qZA(),e.qZA(),e.TgZ(16,"div",1),e.TgZ(17,"h3",14),e._uU(18,"Database Sructure and Design"),e.qZA(),e._UZ(19,"img",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("header","Column Name ("+(null==o.filteredPolicies?null:o.filteredPolicies.key)+")"),e.xp6(3),e.Q6J("value",o.columns),e.xp6(5),e.Q6J("value",o.data),e.xp6(4),e.Q6J("value",o.data)}}function F(t,a){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"p-card"),e._uU(2,' Please search using "'),e._UZ(3,"app-google-name"),e._uU(4,'" button to proceed '),e.qZA(),e.qZA())}const P=[{path:"",component:(()=>{class t{constructor(o,n){this.messageService=o,this.dialogService=n,this.hasData=!1}ngOnInit(){this.data=[{}],this.columns=[{field:"dataFieldOwner",header:"Data Field Owner"},{field:"sourceSystemFieldName",header:"Source System Field Name"},{field:"sourceTableName",header:"Source Table Name"},{field:"sourceSystemName",header:"Source System Name"},{field:"dataEntryMethodology",header:"Data Entry Methodology"},{field:"referenceDataCheck",header:"Reference Data Check (Y/N)"},{field:"transformationRule",header:"Transformation Rules"},{field:"createdBy",header:"Created By"},{field:"dateCreated",header:"Date Created"},{field:"modifiedBy",header:"Modified By"},{field:"dateModified",header:"Date Modified"}],this.filteredPolicies||this.search()}search(){this.ref=this.dialogService.open(_,{width:"70%",contentStyle:{"max-height":"500px",overflow:"auto"},baseZIndex:1e4}),this.ref.onClose.subscribe(o=>{(null==o?void 0:o.key.length)>0&&(this.filteredPolicies=o)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.ez),e.Y36(u.xA))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:5,vars:2,consts:[[1,"grid"],[1,"col-12"],["type","button","pButton","","icon","pi pi-search","label","CanH Google",1,"float-right",3,"click"],[4,"ngIf"],[1,"p-panel-info",3,"header"],[1,"col-5"],[1,"w-100",3,"value"],["pTemplate","body"],["layout","vertical"],[1,"col-6","grid"],[1,"col-8"],[1,"table-border",3,"value"],["pTemplate","header"],[1,"col-4"],[1,"text-center"],["src","assets/layout/images/diagram.png","width","500"],[1,"text-bold"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return n.search()}),e.qZA(),e.qZA(),e.qZA(),e.YNc(3,M,20,4,"div",3),e.YNc(4,F,5,0,"div",3)),2&o&&(e.xp6(3),e.Q6J("ngIf",n.filteredPolicies),e.xp6(1),e.Q6J("ngIf",!n.filteredPolicies))},directives:[h.Hq,r.O5,U.s,C.iA,m.jx,b.i,y.Z,p],encapsulation:2}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(P)],g.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,T.n,J]]}),t})()}}]);