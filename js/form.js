var botaoAdicionar = document.querySelector ('#adicionar-paciente');

    botaoAdicionar.addEventListener ('click', function(event){
                event.preventDefault();
                var form = document.querySelector ('#form-adiciona');
                var paciente = obtemPacienteDoFormulario(form);
                
                var pacienteTr = montaTr(paciente);

                var erros = validaPaciente (paciente);
                


               if (erros.length > 0 ){
                    exibeMensagemErro();
                    return;
               }



                var tabela = document.querySelector ('#tabela-pacientes');

                tabela.appendChild (pacienteTr);

                if (validaPaciente(paciente)){
                    console.log ('erro');
                    return;
                }

                form.reset();
              var mensagemDeErro= document.querySelector('#mensagem-erro');
              mensagemDeErro.innerHTML = "";
    });


function exibeMensagemErro (erros){
      var ul = document.querySelector ('#mensagem-erro');
        ul.innerHTML = "";
     erros.forEach(function (erro){
        var li = document.createElement ('li');
            li.textContent = erro;
            ul.appendChild ("li");
     })
}








    
    function obtemPacienteDoFormulario (form){

        var paciente = {
              nome: form.nome.value,
              peso: form.peso.value,
              altura: form.altura.value,
              gordura: form.gordura.value,
              imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr (paciente) {
    var pacienteTr = document.createElement ('tr');
    pacienteTr.classList.add ("paciente");


    
    var nome = form.nome.value;
                var peso = form.peso.value;
                var altura = form.altura.value;
                var gordura = form.gordura.value;

                console.log (nome);
                console.log ('fui clicado')

                

                var nomeTd = document.createElement ('td');
                var pesoTd = document.createElement ('td');
                var alturaTd = document.createElement ('td');
                var gorduraTd = document.createElement ('td');
                var imcTd = document.createElement ('td');


                nomeTd.textContent = paciente.nome;
                pesoTd.textContent = paciente.peso;
                alturaTd.textContent = paciente.altura;
                gorduraTd.textContent = paciente.gordura;
                imcTd.textContent = paciente.imc;


                pacienteTr.appendChild (montaTd (paciente.nome, "info-nome"));
                pacienteTr.appendChild (montaTd (paciente.peso, "info-peso"));
                pacienteTr.appendChild (montaTd (altura.altura, "info-altura"));
                pacienteTr.appendChild (montaTd (paciente.gordura, "info-gordura"));
                pacienteTr.appendChild (montaTd (paciente.imc, "info-imc"));

                return pacienteTr;
}

function montaTd (dado, classe){
    var td = document.createElement ('td');
    td.textContent = dado;
    td.classList.add (classe);
    
    return td;
}


function validaPaciente (paciente){
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push ("nome é invalido ou esta em branco");
       }


   if (!validaPeso(paciente.peso)){
    erros.push ("peso é invalido");
   }
   if (!validaAltura(paciente,altura)){
    erros.push("altura é invalida");
   }

   if (paciente.gordura.length == 0){
    erros.push ("gordura é invalido ou esta em branco");
   }

   if (paciente.peso.length == 0){
    erros.push ("peso é invalido ou esta em branco");
   }
   if (paciente.altura.length == 0){
    erros.push ("altura é invalido ou esta em branco");
   }
   return erros;
}