const t=()=>{const t=Number(prompt("How many minutes you have?")),e=Math.floor(t/60);return` You have ${Math.floor(e/24)} days, ${e%24} hours, ${t%60} minutes.`},e=()=>{let t=56;for(;t<70;)console.log(t),t+=1;return`Your hotel are full!You have ${t} clients in Your hotel!`},o=()=>{let t="";do{t=prompt("Enter password more 4 litters","")}while(t.length<5);return`Your password:, ${t}`},r=()=>{target=prompt("Enter any number");let t=0;for(let e=0;e<=target;e+=1)t+=e;return`Summ of all numbers from 0 to your number = ${t} `},n=()=>{const t=prompt("Enter your word:");switch(t){case null:return"Operation is cancelled!";case"":return"You not enter a word!";default:let e="";const o=t.split("");for(const t of o)e+=t===t.toUpperCase()?t.toLowerCase():t.toUpperCase();return e}},u=[1,17,23,2,14,76,3],s=function(t){let e=0;for(let o of t)o%2==0&&(e+=o);return`Sum of even elements of array = ${e}`};document.querySelector("main").addEventListener("click",(a=>{if("BUTTON"===a.target.nodeName){if(a.target.classList.contains("min-to-d")){document.querySelector(".min-to-d__output").textContent=t()}if(a.target.classList.contains("d-to-min")){document.querySelector(".d-to-min__output").textContent=`You have ${1440*Number(prompt("How many days?"))+60*Number(prompt("How many hours?"))+Number(prompt("How many minutes?"))} minutes!`}if(a.target.classList.contains("while")){document.querySelector(".while__output").textContent=e()}if(a.target.classList.contains("do-while")){document.querySelector(".do-while__output").textContent=o()}if(a.target.classList.contains("for")){document.querySelector(".for__output").textContent=r()}if(a.target.classList.contains("arrays-methods_1")){document.querySelector(".arrays-methods_1__output").textContent=n()}if(a.target.classList.contains("for-of")){document.querySelector(".for-of__output").textContent=s(u)}if(a.target.classList.contains("functions")){document.querySelector(".functions__output").textContent=`Result of multiply of ${i=3},${l=7},${c=9} is ${i*l*c}  `}var i,l,c}}));
//# sourceMappingURL=index.1491b774.js.map