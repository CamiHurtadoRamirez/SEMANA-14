function apostar(){
let b=101;
let intentos=0;
var a=Math.round(Math.random()*100)
//Ciclo while
while(a!=b){
    b=parseInt(prompt("INGRESE NÚMERO AL AZAR [0 A 100]"));
    //
    if(b>a){
        alert("EL NÚMERO ES MAS BAJO");
    }else{
        alert("EL NÚMERO ES MAS ALTO");
    }
    intentos++; //CONTADOR DE INTENTOS CONSUMIDO
    }
// AL ASERTAR EL NÚMERO RANDOM
document.getElementById("apostado").value=b;
document.getElementById("resultado").value=a;
document.getElementById("salida").value="Has consumido..."+intentos+"intentos";
swal("FELICITACIONES USUARIO","HAS ASERTADO DEL NÚMERO RANDOM","success");
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}
