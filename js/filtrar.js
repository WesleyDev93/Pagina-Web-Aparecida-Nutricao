var campoFiltro = document.querySelector ('#filtrar-tabela');

console.log (campoFiltro);

campoFiltro.addEventListener ('input', function(){
     var paciente = document.querySelectorAll ('.paciente');

    if (this.value.length > 0 ){
           
        for (let i = 0; i < paciente.length; i++) {
            var paciente = pacientes [i];
            var tdnome = paciente.querySelector ('.info-nome');
             var nome = paciente.textContent;
             var expressao = new RegExp (this.value, "i");
             if (! expressao.test(nome)){
                 paciente.classList.add('.invisivel');
     
             }else{
                 paciente.classList.remove('invisivel');
             }
          }


    }else{
        for (let i = 0; i < paciente.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove ('invisivel')
        }
    }


     
})
