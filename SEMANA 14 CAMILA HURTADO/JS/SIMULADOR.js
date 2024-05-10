function calcular(){
    //Proceso de transferencia del formulario al javascript
    var n1=document.getElementById("valorc").value;
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    //Proceso de calcularen JavaScript
    var ValorA=parseFloat(n1)*parseFloat(n3);//Formula para calcular el valor en pesos a pagar cada mes
    var ValorB=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3))); //Formula para calcular el valor total del crédito en pesos
    //Proceso de transferencia del JavaScript al formulario
    document.getElementById("valora").value=ValorA;
    document.getElementById("valorb").value=ValorB.toFixed(0);
}
function limpiar(){
    document.getElementById("valorc").value=" ";//borrar input
    document.getElementById("numc").value=" ";//borrar input
    document.getElementById("interes").value=" ";//borrar input
}