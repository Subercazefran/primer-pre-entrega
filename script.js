
let nombre = prompt("Bienvenido,Ingrese su nombre")
let cantidad = parseInt(prompt("Ingrese cuantos kg de pan quieres"))
let opcion

while (opcion != 0){

    opcion=parseInt(prompt("Ingrese 1 para consultar los precios del pan\nIngrese 2 para calcular cuanto saldria sus kg de pan\ningrese 0 para salir"))
    
    if (opcion===1) {
        console.log("El precio del kg de pan es , 10 pesos por kg")
    }else if (opcion===2){
        console.log("el precio de la cantidad de pan que lleva es de ", (cantidad*10), " $ " )
    }else if (opcion==0){
        break
    }else{
        console.log("Opcion incorrecta")
    }
}

