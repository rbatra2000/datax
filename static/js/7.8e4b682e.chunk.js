(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[7],{133:function(e,a,t){e.exports=t.p+"static/media/face6.07adc9a9.jpg"},337:function(e,a,t){e.exports=t.p+"static/media/face1.42d41e61.jpg"},338:function(e,a,t){e.exports=t.p+"static/media/face5.d2417284.jpg"},339:function(e,a,t){e.exports=t.p+"static/media/face7.7af91f95.jpg"},354:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),r=t(14),c=t(13),m=t(15),d=t(0),s=t.n(d),E=t(1),u=t(3),i=t(8),o=t.n(i),b=t(10);var N=1e3;function g(e,a,t){var l=(e-a)/(t-a)*100;return Math.round(l*N)/N}function p(e,a){var t,l=e.min,n=e.now,r=e.max,c=e.label,m=e.srOnly,d=e.striped,i=e.animated,b=e.className,N=e.style,p=e.variant,h=e.bsPrefix,v=Object(u.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return s.a.createElement("div",Object(E.a)({ref:a},v,{role:"progressbar",className:o()(b,h+"-bar",(t={},t["bg-"+p]=p,t[h+"-bar-animated"]=i,t[h+"-bar-striped"]=i||d,t)),style:Object(E.a)({width:g(n,l,r)+"%"},N),"aria-valuenow":n,"aria-valuemin":l,"aria-valuemax":r}),m?s.a.createElement("span",{className:"sr-only"},c):c)}var h=s.a.forwardRef((function(e,a){var t=e.isChild,l=Object(u.a)(e,["isChild"]);if(l.bsPrefix=Object(b.b)(l.bsPrefix,"progress"),t)return p(l,a);var n=l.min,r=l.now,c=l.max,m=l.label,i=l.srOnly,N=l.striped,g=l.animated,h=l.bsPrefix,v=l.variant,y=l.className,w=l.children,f=Object(u.a)(l,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return s.a.createElement("div",Object(E.a)({ref:a},f,{className:o()(y,h)}),w?function(e,a){var t=0;return s.a.Children.map(e,(function(e){return s.a.isValidElement(e)?a(e,t++):e}))}(w,(function(e){return Object(d.cloneElement)(e,{isChild:!0})})):p({min:n,now:r,max:c,label:m,srOnly:i,striped:N,animated:g,bsPrefix:h,variant:v},a))}));h.displayName="ProgressBar",h.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var v=h;t.d(a,"BasicTable",(function(){return y}));var y=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"page-header"},s.a.createElement("h3",{className:"page-title"}," Basic Tables "),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Tables")),s.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Basic tables")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Basic Table"),s.a.createElement("p",{className:"card-description"}," Add className ",s.a.createElement("code",null,".table")),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Profile"),s.a.createElement("th",null,"VatNo."),s.a.createElement("th",null,"Created"),s.a.createElement("th",null,"Status"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Jacob"),s.a.createElement("td",null,"53275531"),s.a.createElement("td",null,"12 May 2017"),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-danger"},"Pending"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Messsy"),s.a.createElement("td",null,"53275532"),s.a.createElement("td",null,"15 May 2017"),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-warning"},"In progress"))),s.a.createElement("tr",null,s.a.createElement("td",null,"John"),s.a.createElement("td",null,"53275533"),s.a.createElement("td",null,"14 May 2017"),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-info"},"Fixed"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Peter"),s.a.createElement("td",null,"53275534"),s.a.createElement("td",null,"16 May 2017"),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-success"},"Completed"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Dave"),s.a.createElement("td",null,"53275535"),s.a.createElement("td",null,"20 May 2017"),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-warning"},"In progress"))))))))),s.a.createElement("div",{className:"col-lg-6 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Hoverable Table"),s.a.createElement("p",{className:"card-description"}," Add className ",s.a.createElement("code",null,".table-hover")),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"User"),s.a.createElement("th",null,"Product"),s.a.createElement("th",null,"Sale"),s.a.createElement("th",null,"Status"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Jacob"),s.a.createElement("td",null,"Photoshop"),s.a.createElement("td",{className:"text-danger"}," 28.76% ",s.a.createElement("i",{className:"mdi mdi-arrow-down"})),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-danger"},"Pending"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Messsy"),s.a.createElement("td",null,"Flash"),s.a.createElement("td",{className:"text-danger"}," 21.06% ",s.a.createElement("i",{className:"mdi mdi-arrow-down"})),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-warning"},"In progress"))),s.a.createElement("tr",null,s.a.createElement("td",null,"John"),s.a.createElement("td",null,"Premier"),s.a.createElement("td",{className:"text-danger"}," 35.00% ",s.a.createElement("i",{className:"mdi mdi-arrow-down"})),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-info"},"Fixed"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Peter"),s.a.createElement("td",null,"After effects"),s.a.createElement("td",{className:"text-success"}," 82.00% ",s.a.createElement("i",{className:"mdi mdi-arrow-up"})),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-success"},"Completed"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Dave"),s.a.createElement("td",null,"53275535"),s.a.createElement("td",{className:"text-success"}," 98.05% ",s.a.createElement("i",{className:"mdi mdi-arrow-up"})),s.a.createElement("td",null,s.a.createElement("label",{className:"badge badge-warning"},"In progress"))))))))),s.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Striped Table"),s.a.createElement("p",{className:"card-description"}," Add className ",s.a.createElement("code",null,".table-striped")),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table table-striped"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," User "),s.a.createElement("th",null," First name "),s.a.createElement("th",null," Progress "),s.a.createElement("th",null," Amount "),s.a.createElement("th",null," Deadline "))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"py-1"},s.a.createElement("img",{src:t(337),alt:"user icon"})),s.a.createElement("td",null," Herman Beck "),s.a.createElement("td",null,s.a.createElement(v,{variant:"success",now:25})),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",{className:"py-1"},s.a.createElement("img",{src:t(67),alt:"user icon"})),s.a.createElement("td",null," Messsy Adam "),s.a.createElement("td",null,s.a.createElement(v,{variant:"danger",now:75})),s.a.createElement("td",null," $245.30 "),s.a.createElement("td",null," July 1, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",{className:"py-1"},s.a.createElement("img",{src:t(68),alt:"user icon"})),s.a.createElement("td",null," John Richards "),s.a.createElement("td",null,s.a.createElement(v,{variant:"warning",now:90})),s.a.createElement("td",null," $138.00 "),s.a.createElement("td",null," Apr 12, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",{className:"py-1"},s.a.createElement("img",{src:t(66),alt:"user icon"})),s.a.createElement("td",null," Peter Meggik "),s.a.createElement("td",null,s.a.createElement(v,{variant:"primary",now:50})),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",{className:"py-1"},s.a.createElement("img",{src:t(338),alt:"user icon"})),s.a.createElement("td",null," Edward "),s.a.createElement("td",null,s.a.createElement(v,{variant:"danger",now:60})),s.a.createElement("td",null," $ 160.25 "),s.a.createElement("td",null," May 03, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",{className:"py-1"},s.a.createElement("img",{src:t(133),alt:"user icon"})),s.a.createElement("td",null," John Doe "),s.a.createElement("td",null,s.a.createElement(v,{variant:"info",now:65})),s.a.createElement("td",null," $ 123.21 "),s.a.createElement("td",null," April 05, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",{className:"py-1"},s.a.createElement("img",{src:t(339),alt:"user icon"})),s.a.createElement("td",null," Henry Tom "),s.a.createElement("td",null,s.a.createElement(v,{variant:"warning",now:20})),s.a.createElement("td",null," $ 150.00 "),s.a.createElement("td",null," June 16, 2015 ")))))))),s.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Bordered table"),s.a.createElement("p",{className:"card-description"}," Add className ",s.a.createElement("code",null,".table-bordered")),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," # "),s.a.createElement("th",null," First name "),s.a.createElement("th",null," Progress "),s.a.createElement("th",null," Amount "),s.a.createElement("th",null," Deadline "))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null," 1 "),s.a.createElement("td",null," Herman Beck "),s.a.createElement("td",null,s.a.createElement(v,{variant:"success",now:25})),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 2 "),s.a.createElement("td",null," Messsy Adam "),s.a.createElement("td",null,s.a.createElement(v,{variant:"danger",now:75})),s.a.createElement("td",null," $245.30 "),s.a.createElement("td",null," July 1, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 3 "),s.a.createElement("td",null," John Richards "),s.a.createElement("td",null,s.a.createElement(v,{variant:"warning",now:90})),s.a.createElement("td",null," $138.00 "),s.a.createElement("td",null," Apr 12, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 4 "),s.a.createElement("td",null," Peter Meggik "),s.a.createElement("td",null,s.a.createElement(v,{variant:"primary",now:50})),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 5 "),s.a.createElement("td",null," Edward "),s.a.createElement("td",null,s.a.createElement(v,{variant:"danger",now:35})),s.a.createElement("td",null," $ 160.25 "),s.a.createElement("td",null," May 03, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 6 "),s.a.createElement("td",null," John Doe "),s.a.createElement("td",null,s.a.createElement(v,{variant:"info",now:65})),s.a.createElement("td",null," $ 123.21 "),s.a.createElement("td",null," April 05, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 7 "),s.a.createElement("td",null," Henry Tom "),s.a.createElement("td",null,s.a.createElement(v,{variant:"warning",now:20})),s.a.createElement("td",null," $ 150.00 "),s.a.createElement("td",null," June 16, 2015 ")))))))),s.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Inverse table"),s.a.createElement("p",{className:"card-description"}," Add className ",s.a.createElement("code",null,".table-dark")),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table table-dark"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," # "),s.a.createElement("th",null," First name "),s.a.createElement("th",null," Amount "),s.a.createElement("th",null," Deadline "))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null," 1 "),s.a.createElement("td",null," Herman Beck "),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 2 "),s.a.createElement("td",null," Messsy Adam "),s.a.createElement("td",null," $245.30 "),s.a.createElement("td",null," July 1, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 3 "),s.a.createElement("td",null," John Richards "),s.a.createElement("td",null," $138.00 "),s.a.createElement("td",null," Apr 12, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 4 "),s.a.createElement("td",null," Peter Meggik "),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 5 "),s.a.createElement("td",null," Edward "),s.a.createElement("td",null," $ 160.25 "),s.a.createElement("td",null," May 03, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 6 "),s.a.createElement("td",null," John Doe "),s.a.createElement("td",null," $ 123.21 "),s.a.createElement("td",null," April 05, 2015 ")),s.a.createElement("tr",null,s.a.createElement("td",null," 7 "),s.a.createElement("td",null," Henry Tom "),s.a.createElement("td",null," $ 150.00 "),s.a.createElement("td",null," June 16, 2015 ")))))))),s.a.createElement("div",{className:"col-lg-12 stretch-card"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},"Table with contextual classNames"),s.a.createElement("p",{className:"card-description"}," Add className ",s.a.createElement("code",null,".table-{color}")),s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," # "),s.a.createElement("th",null," First name "),s.a.createElement("th",null," Product "),s.a.createElement("th",null," Amount "),s.a.createElement("th",null," Deadline "))),s.a.createElement("tbody",null,s.a.createElement("tr",{className:"table-info"},s.a.createElement("td",null," 1 "),s.a.createElement("td",null," Herman Beck "),s.a.createElement("td",null," Photoshop "),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",{className:"table-warning"},s.a.createElement("td",null," 2 "),s.a.createElement("td",null," Messsy Adam "),s.a.createElement("td",null," Flash "),s.a.createElement("td",null," $245.30 "),s.a.createElement("td",null," July 1, 2015 ")),s.a.createElement("tr",{className:"table-danger"},s.a.createElement("td",null," 3 "),s.a.createElement("td",null," John Richards "),s.a.createElement("td",null," Premeire "),s.a.createElement("td",null," $138.00 "),s.a.createElement("td",null," Apr 12, 2015 ")),s.a.createElement("tr",{className:"table-success"},s.a.createElement("td",null," 4 "),s.a.createElement("td",null," Peter Meggik "),s.a.createElement("td",null," After effects "),s.a.createElement("td",null," $ 77.99 "),s.a.createElement("td",null," May 15, 2015 ")),s.a.createElement("tr",{className:"table-primary"},s.a.createElement("td",null," 5 "),s.a.createElement("td",null," Edward "),s.a.createElement("td",null," Illustrator "),s.a.createElement("td",null," $ 160.25 "),s.a.createElement("td",null," May 03, 2015 "))))))))))}}]),a}(d.Component);a.default=y}}]);
//# sourceMappingURL=7.8e4b682e.chunk.js.map