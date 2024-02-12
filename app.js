const operacionAritmetica = function () {
    const operando1 = (document.getElementById("operando1").value);
    const operando2 = (document.getElementById("operando2").value);
  

    let resultado = 0;
let n1=0;
let n2=0;
n1=operando1.length;
n2=operando2.length;

document.getElementById("resultado").innerHTML = "la palabra mas larga es: "+ n1;

if (n1>n2){
document.getElementById("resultado").innerHTML = "la palabra mas larga es: "+ operando1;

   
}

if (n2>n1){
    document.getElementById("resultado").innerHTML = "la palabra mas larga es: "+ operando2;
    
       
    }
    if (n2==n1){
        document.getElementById("resultado").innerHTML = "las palabras son de igual tamaño";
        
           
        }  





}