!function(){var t=function(){for(var t=56;t<70;)console.log(t),t+=1;return"Your hotel are full!You have ".concat(t," clients in Your hotel!")},o=function(){var t="";do{t=prompt("Enter password more 4 litters","")}while(t.length<5);return"Your password:, ".concat(t)},e=function(){target=prompt("Enter any number");for(var t=0,o=0;o<=target;o+=1)t+=o;return"Summ of all numbers from 0 to your number = ".concat(t," ")},r=function(){var t=prompt("Enter your word:");switch(t){case null:return"Operation is cancelled!";case"":return"You not enter a word!";default:var o="",e=t.split(""),r=!0,n=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var i=u.value;o+=i===i.toUpperCase()?i.toLowerCase():i.toUpperCase()}}catch(t){n=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(n)throw a}}return o}},n=[1,17,23,2,14,76,3],a=function(t){var o=0,e=!0,r=!1,n=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var c=a.value;c%2==0&&(o+=c)}}catch(t){r=!0,n=t}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}return"Sum of even elements of array = ".concat(o)};document.querySelector("main").addEventListener("click",(function(u){if("BUTTON"===u.target.nodeName){var c,i,s,l,m,f,d,y;if(u.target.classList.contains("min-to-d"))document.querySelector(".min-to-d__output").textContent=(c=Number(prompt("How many minutes you have?")),i=Math.floor(c/60)," You have ".concat(Math.floor(i/24)," days, ").concat(i%24," hours, ").concat(c%60," minutes."));if(u.target.classList.contains("d-to-min"))document.querySelector(".d-to-min__output").textContent=(s=Number(prompt("How many days?")),l=Number(prompt("How many hours?")),m=Number(prompt("How many minutes?")),"You have ".concat(1440*s+60*l+m," minutes!"));if(u.target.classList.contains("while"))document.querySelector(".while__output").textContent=t();if(u.target.classList.contains("do-while"))document.querySelector(".do-while__output").textContent=o();if(u.target.classList.contains("for"))document.querySelector(".for__output").textContent=e();if(u.target.classList.contains("arrays-methods_1"))document.querySelector(".arrays-methods_1__output").textContent=r();if(u.target.classList.contains("for-of"))document.querySelector(".for-of__output").textContent=a(n);if(u.target.classList.contains("functions"))document.querySelector(".functions__output").textContent=(d=7,y=9,"Result of multiply of ".concat(f=3,",").concat(d,",").concat(y," is ").concat(f*d*y,"  "))}}))}();
//# sourceMappingURL=index.194a8615.js.map