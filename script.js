let msg = "hello world ";

const button1 = document.querySelector("#button1");
const countLabel = document.querySelector("#text");
let count = 0;

button1.onclick = click;

function click(){
    count++;
    countLabel.innerHTML = count;
}
