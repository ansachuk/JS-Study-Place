const t=()=>{const t=Number(prompt("How many minutes you have?")),e=t%60,o=Math.floor(t/60),n=o%24;return` You have ${Math.floor(o/24)} days, ${n} hours, ${e} minutes.`};document.querySelector("main").addEventListener("click",(e=>{if("BUTTON"===e.target.nodeName&&e.target.classList.contains("min-to-d")){document.querySelector(".min-to-d__par").textContent=t()}}));
//# sourceMappingURL=index.e4b66ba4.js.map
