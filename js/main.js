var titulo = document.querySelector ('.titulo');
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector ('#primeiropaciente');

var tdPeso = paciente.querySelector ('.info-peso');

var peso = tdPeso.textContent;

var tdAltura = document.querySelector ('.info-altura');

var altura = tdAltura.textContent;

var tdImc = paciente.querySelector ('.info-imc');



var imc = peso / (altura* altura);
console.log (imc);


tdImc.textContent = imc;


if (peso < 0 || peso > 1000){
    console.log (" peso invalido !");
}