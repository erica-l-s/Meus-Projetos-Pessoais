const buttonAddTarefa = document.querySelector('.formularioTarefa button');
const campoAddTarefa = document.getElementById('inputadicionarTarefa');

const listaTarefas = document.querySelector('ul');


buttonAddTarefa.addEventListener('click', adicionarNovaTarefa);

function adicionarNovaTarefa(){
const conteudoCampo = campoAddTarefa.value;


    const tarefa = document.createElement('li');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const botaoFinalizarTarefa = document.createElement('button');
    const botaoExcluirTarefa = document.createElement('button');
    const img = document.createElement('img');
    inputadicionarTarefa.value = '';
           
    h2.innerText = conteudoCampo;

    botaoFinalizarTarefa.classList.add('click', 'botaoFinalizarTarefa');
    botaoExcluirTarefa.classList.add('click', 'botaoExcluirTarefa');
   
    botaoFinalizarTarefa.addEventListener('click', finalizarTarefa);
    botaoExcluirTarefa.addEventListener('click', removerTarefa);
    
    img.src = './trash.svg';
    img.alt = 'imagem botao remover tarefa';

    botaoExcluirTarefa.appendChild(img);

        
    div.appendChild(botaoFinalizarTarefa);
    div.appendChild(botaoExcluirTarefa);

    tarefa.appendChild(h2);
    tarefa.appendChild(div);

    listaTarefas.appendChild(tarefa);

    }

       
      function removerTarefa(evento){
        const buttonClicado = evento.currentTarget;
        const tarefaClicada = buttonClicado.closest('li');
    
        tarefaClicada.remove();
    }
    
    function finalizarTarefa(evento){
        const buttonClicado = evento.currentTarget;
        const tarefaClicada = buttonClicado.closest('li');
    
        tarefaClicada.classList.toggle('tarefaFinalizada');
    }
    
      window.onload = function () {
      const btn1 = document.getElementById("btn1");
      const modoNoturno = document.getElementsByTagName("body");
      btn1.addEventListener("change", function () {
        if (btn1.checked == true) {
          modoNoturno[0].classList.add("dark");
                    
          } else {
          modoNoturno[0].classList.remove("dark");
          }
                 
        
      })

     }




