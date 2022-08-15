var titulo = document.querySelector ('.titulo');
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll ('.paciente');

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }

        

        if(pesoEhValido && alturaEhValida){
            var imc = calculaImc (peso,altura);   
           
        }
    }        

    

function calculaImc (peso,altura){
      imc = peso / (altura*altura);
      return imc.toFixed (2);
}