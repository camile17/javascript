function clicou () {
var numero=parseInt(prompt("Insira um numero!"));
document.querySelector("p").innerHTML ="antecessor de" +numero+"é"+(numero-1)+"e o sucessor é"+(numero+1);
}