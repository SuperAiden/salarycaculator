(this.webpackJsonpsalarycaculator=this.webpackJsonpsalarycaculator||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,l,r,o,c,u,i,d,m,s,E,y,g,x,h,p,v,T,b,f,N,C,_,F,S,k,j,I,O,D=a(0),B=a.n(D),w=a(3),H=a.n(w),A=(a(14),a(15),a(4)),W=a(5),L=a(7),M=a(6),R=a(8),P=a(1),q=function(){return console.log("Result \uc2e4\ud589"),B.a.createElement(B.a.Fragment,null,B.a.createElement("h1",null,"Result : "),B.a.createElement("h3",{id:"waiting"},"waiting for input"),B.a.createElement("div",{id:"result"},B.a.createElement("table",null,B.a.createElement("thead",null,B.a.createElement("tr",null,B.a.createElement("td",null,"Item"),B.a.createElement("td",null,"Hours"),B.a.createElement("td",null,"Rate/Perc"),B.a.createElement("td",null,"Amount"),B.a.createElement("td",null,"Date Worked"))),B.a.createElement("tbody",null,B.a.createElement("tr",null,B.a.createElement("td",{id:"item"}),B.a.createElement("td",{id:"hours"}),B.a.createElement("td",{id:"rate"}),B.a.createElement("td",{id:"amount"}),B.a.createElement("td",{id:"date_worked"})),B.a.createElement("tr",null,B.a.createElement("td",null,"Addition")),B.a.createElement("tr",null,B.a.createElement("td",{id:"loading"}),B.a.createElement("td",{id:"loading_hours"}),B.a.createElement("td",{id:"loading_rate"}),B.a.createElement("td",{id:"loading_amount"}),B.a.createElement("td",{id:"loading_date"})))),B.a.createElement("table",null,B.a.createElement("thead",null,B.a.createElement("tr",null,B.a.createElement("td",null,"Item"),B.a.createElement("td",null,"This pay"))),B.a.createElement("tbody",null,B.a.createElement("tr",null,B.a.createElement("td",null,"Taxable Income",B.a.createElement("br",null),"Tax",B.a.createElement("br",null),"NET PAY"),B.a.createElement("td",{id:"this_pay"}))))))},J=function(){var e=Object(D.useState)(0),t=Object(P.a)(e,2),a=t[0],n=t[1],l=Object(D.useState)(0),r=Object(P.a)(l,2),o=r[0],c=r[1],u=Object(D.useState)(0),i=Object(P.a)(u,2),d=i[0],m=i[1],s=Object(D.useState)(0),E=Object(P.a)(s,2),y=E[0],g=E[1],x=Object(D.useState)(0),h=Object(P.a)(x,2),p=h[0],v=h[1],T=Object(D.useState)(0),b=Object(P.a)(T,2),f=b[0],N=b[1],C=Object(D.useState)(0),_=Object(P.a)(C,2),F=_[0],S=_[1];return console.log("TimeTable \uc2e4\ud589"),B.a.createElement(B.a.Fragment,null,B.a.createElement("form",{className:"time-form"},B.a.createElement("table",{className:"time-table"},B.a.createElement("caption",null,"salray caculation"),B.a.createElement("thead",null,B.a.createElement("tr",null,B.a.createElement("th",null,"Mon"),B.a.createElement("th",null,"Tue"),B.a.createElement("th",null,"Wed"),B.a.createElement("th",null,"Thu"),B.a.createElement("th",null,"Fri"),B.a.createElement("th",null,"Sat"),B.a.createElement("th",null,"Sun"))),B.a.createElement("tbody",null,B.a.createElement("tr",null,B.a.createElement("td",null,B.a.createElement("input",{className:"input_",type:"text",value:a,onChange:function(e){var t=e.target.value;n(t)}}),"Hours"),B.a.createElement("td",null,B.a.createElement("input",{className:"input_",type:"text",value:o,onChange:function(e){var t=e.target.value;c(t)}}),"Hours"),B.a.createElement("td",null,B.a.createElement("input",{className:"input_",type:"text",value:d,onChange:function(e){var t=e.target.value;m(t)}}),"Hours"),B.a.createElement("td",null,B.a.createElement("input",{className:"input_",type:"text",value:y,onChange:function(e){var t=e.target.value;g(t)}}),"Hours"),B.a.createElement("td",null,B.a.createElement("input",{className:"input_",type:"text",value:p,onChange:function(e){var t=e.target.value;v(t)}}),"Hours"),B.a.createElement("td",null,B.a.createElement("input",{className:"input_",type:"text",value:f,onChange:function(e){var t=e.target.value;N(t)}}),"Hours"),B.a.createElement("td",null,B.a.createElement("input",{className:"input_",type:"text",value:F,onChange:function(e){var t=e.target.value;S(t)}}),"Hours")),B.a.createElement("tr",null,B.a.createElement("td",{id:"Mon",className:"day"},"Normal Day"),B.a.createElement("td",{id:"Tue",className:"day"},"Normal Day"),B.a.createElement("td",{id:"Wed",className:"day"},"Normal Day"),B.a.createElement("td",{id:"Thu",className:"day"},"Normal Day"),B.a.createElement("td",{id:"Fri",className:"day"},"Normal Day"),B.a.createElement("td",null,"Saturday 50%"),B.a.createElement("td",null,"Sunday 100%")),B.a.createElement("tr",null,B.a.createElement("td",null,B.a.createElement("button",{id:"submit_",type:"submit"},"Caculation")))))),B.a.createElement(q,null))},$=(a(16),{Mon:"Normal Day",Tue:"Normal Day",Wed:"Normal Day",Thu:"Normal Day",Fri:"Normal Day",Sat:"saturday",Sun:"sunday"}),V=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Y=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(L.a)(this,Object(M.a)(t).call(this,e))).updateHR=function(e){var t=e.target.value;a.setState({hr:t})},a.updateTax=function(e){var t=e.target.value;a.setState({tax:t})},a.dayClicked=function(e){var t=e.target;t.classList.toggle("day_clicked"),"Normal Day"===t.innerText?(t.innerText="Public Holiday",$[e.target.id]="Public Holiday"):(t.innerText="Normal Day",$[e.target.id]="Normal Day"),console.log(e.target),console.log("days target",$[e.target.id])},a.caculation=function(e){console.log("caculation"),console.log(e),e.preventDefault(),b=parseFloat(r.value),N=parseFloat((.25*b).toFixed(2)),F=_=b+N,f=(.15*_).toFixed(2),C=(.5*_).toFixed(2),S=parseFloat(o.value)/100,0,v=0,T=[],j=[],I=0,O=0,c.innerText="",u.innerText="",i.innerText="",d.innerText="",m.innerText="",E.innerText="",y.innerText="",g.innerText="",x.innerText="",h.innerText="",s.innerText="";for(var t=e.target,n=0;n<7;n++){var l=parseFloat(t[n].value);T.push(l),l>0&&(a.normalCar(l),c.innerText+="Normal Hours (Normal)\n",u.innerText+="".concat(l,"\n"),i.innerText+="".concat(b,"\n"),m.innerText+="".concat(V[n],"\n"),"Normal Day"===$[V[n]]?a.loadingCal("Afternoon 15% on other rates\n",f,l):"saturday"===$[V[n]]?a.loadingCal("Saturday 50% based on other rates\n",C,l):"sunday"===$[V[n]]?a.loadingCal("Sunday 100% based on other rates\n",_,l):a.loadingCal("public holiday 100%\n",F,l),a.loadingCal("Casual Loading 25%\n",N,l),E.innerText+="".concat(l,"\n").concat(l,"\n"),x.innerText+="".concat(V[n],"\n").concat(V[n],"\n"))}c.innerText+="\n",u.innerText+="".concat(v.toFixed(2),"\n"),i.innerText+="\n",d.innerText+="".concat(I.toFixed(2),"\n"),m.innerText+="\n";var D=parseFloat((I+O).toFixed(2));k=parseFloat((D*S).toFixed(2)),h.innerText+="".concat(D,"\n-").concat(k,"\n").concat((D-k).toFixed(2)),g.innerText+=O.toFixed(2),s.innerText+="\n",E.innerText+="\n",y.innerText+="\n",x.innerText+="\n",p.classList.add("hide")},a.normalCar=function(e){v+=e;var t=(e*b).toFixed(2);console.log(t),j.push(t),d.innerText+=t+"\n",I+=parseFloat(t)},a.loadingCal=function(e,t,a){var n=(a*t).toFixed(2);s.innerText+=e,y.innerText+=t+"\n",g.innerText+=n+"\n",O+=parseFloat(n)},a.isNumber=function(e){console.log("keycode : ",e.keyCode),(e.keyCode<48||e.keyCode>57)&&(13===e.keyCode?console.log(" \uc5d4\ud130 "):46!=e.keyCode&&(e.returnValue=!1,window.alert("Enter correct number~!!!")))},a.state={hr:20.13,tax:15},console.log("Calcul constructor"),a}return Object(R.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Calcul componentDidMount"),document.querySelector(".time-form").addEventListener("submit",this.caculation),n=document.querySelectorAll(".input_"),l=document.querySelectorAll(".day"),r=document.getElementById("hourly_rate"),o=document.getElementById("tax_percent"),c=document.getElementById("item"),u=document.getElementById("hours"),i=document.getElementById("rate"),d=document.getElementById("amount"),m=document.getElementById("date_worked"),s=document.getElementById("loading"),E=document.getElementById("loading_hours"),y=document.getElementById("loading_rate"),g=document.getElementById("loading_amount"),x=document.getElementById("loading_date"),h=document.getElementById("this_pay"),p=document.getElementById("waiting"),document.getElementById("result"),n.forEach((function(t){t.addEventListener("keypress",e.isNumber)})),l.forEach((function(t){t.addEventListener("click",e.dayClicked)})),console.log(r)}},{key:"render",value:function(){return console.log("Calcul render"),B.a.createElement("div",null,B.a.createElement("div",null,B.a.createElement("h1",null,"salray caculation"),B.a.createElement("b",null,"Hourly Rate : $"),B.a.createElement("input",{onChange:this.updateHR,className:"input_",type:"text",value:this.state.hr,id:"hourly_rate"}),B.a.createElement("b",null," Tax : ")," ",B.a.createElement("input",{onChange:this.updateTax,className:"input_",type:"text",value:this.state.tax,id:"tax_percent"}),"%"),B.a.createElement("div",null,B.a.createElement(J,null)))}}]),t}(B.a.Component);var z=function(){return B.a.createElement("div",{className:"App"},B.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));H.a.render(B.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c585dd7a.chunk.js.map