/*Fazer um programa que exibe se um valor é maior que o outro*/
var n1,n2

n1=parseInt(prompt("Entre com um valor"));
n2=parseInt(prompt("Entre com um valor"));

if(n1<n2)
{
   alert(n1+" é menor que "+n2)
}
else if(n1>n2){
   alert(n1+" é maior que "+n2)
}
else{
   alert(n1+" é igual ao"+n2)
}