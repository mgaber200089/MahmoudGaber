let counter = document.querySelector('h1');
let count = 1;

setInterval(()=>{

counter.innerText = count;
count++


},1000)