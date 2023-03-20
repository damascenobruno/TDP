function coletarDados(){

let peso = Number(document.getElementById("peso").value)
let altura = Number(document.getElementById("altura").value)

calcularIMC(peso, altura)
}

function calcularIMC(argpeso, argaltura){

    let imc = Number(argpeso / (argaltura*argaltura))

    document.getElementById("res").innerHTML = (imc)

classificarIMC(imc)
}

function classificarIMC(imc){

    if(imc <= 18.5){

    document.getElementById("status").innerHTML = "Desnutrição"

    }
    else if(imc > 18.5 && imc <=25){

    document.getElementById("status").innerHTML = "Peso Nomral"

    }
    else{

    document.getElementById("status").innerHTML = "Sobrepeso"

    }

}

/*
    IMC menor ou igual a 18.5 = Desnutrição
    IMC maior que 18.5 e menor ou igual a 25 = Peso normal 
    IMC maior que e 25 e menor ou igual a 30 = sobrepeso 

*/



