var titulo = document.querySelector ('.titulo');
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll ('.paciente');

for (var i = 0; i < pacientes.length; i++) {
   
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector ('.info-peso');

    var peso = tdPeso.textContent;
    
    var tdAltura = document.querySelector ('.info-altura');
    
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector ('.info-imc');
    
    var pesoEvalido = true;
    var alturaEvalida = true;
    
    
    if (alturaEvalida && pesoEvalido){
    var imc = peso / (altura* altura);
   
    }
    
    tdImc.textContent = imc.toFixed(2);
    
    
    if (peso < 0 || peso > 1000){
        console.log (" peso invalido !");
        pesoEvalido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.style.color = "red";
        paciente.classList.add('paciente-invalido');
    }
    
    if (altura < 0 || altura > 3.00){
        console.log (" altura invalida !");
        alturaEvalido = false;
        tdImc.textContent = " Altura Invalida";
        paciente.style.color = "red";
       
    }
    
    
    
}

