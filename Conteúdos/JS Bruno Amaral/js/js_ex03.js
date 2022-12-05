/*o programa nao deve exibir numeros negativos*/

var frase, n1,n2, subtraçao;

frase="Aqui temos umas string"
alert(frase)


n1=parseInt(prompt("Entre com um valor"))
n2=parseInt(prompt("Entre com outro valor"))
subtraçao=n1-n2
document.write("<h2>"+subtraçao+"</h2>")

if(n1>2)
{
    subtraçao=n1-n2
    alert("O resultado"+subtraçao)
}
else{
    alert("O programa nao permite exibir resultado negativo")
}
