function clicou(){
    var n1=parseFloat(prompt("Digite o primeiro numero"));
    var n2=parseFloat(prompt("Digite o segundo numero!"));
    document.querySelector("#somar").innerHTML ="Seu resultado é:"+(n1+n2);
    document.querySelector("#subtrair").innerHTML ="Seu resultado é:"+(n1-n2);
    document.querySelector("#dividir").innerHTML ="Seu resultado é:"+(n1%n2);
    document.querySelector("#multiplicar").innerHTML ="Seu resultado é:"+(n1*n2);
 }