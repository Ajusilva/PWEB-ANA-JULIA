const prompt = require('prompt-sync')({sigint: true});
const { v4: uuidv4 } = require('uuid'); 

let Tarefas = [];


function menu() {
    console.log("----------Menu de Tarefas:----------");
    console.log("1. Adicionar tarefa");
    console.log("2. Remover tarefa");  
    console.log("3. Concluir tarefa");
    console.log("4. Listar tarefas");
    console.log("5. Filtrar tarefas");
    console.log("6. Buscar tarefa por ID");
    console.log("0. Sair");
    console.log("------------------------------------");
} 

function main() {
    let opcao;
    do {
        menu();
        opcao = prompt("Escolha uma opção: ");
        switch (opcao) {
            case "1":
                const txt = prompt("Digite a tarefa: ");
                addTarefas(txt);
                break;
            case "2":
                // Removido o parseInt(), pois o UUID é uma string
                const idRemover = prompt("Digite o ID (UUID) da tarefa que deseja remover: ");
                remTarefa(idRemover);
                break;
            case "3":
                // Removido o parseInt()
                const idConcluir = prompt("Digite o ID (UUID) da tarefa que deseja concluir: ");
                concluirTarefa(idConcluir);
                break;
            case "4":
                listTarefas();
                break;
            case "5":
                const feitas = prompt("Deseja filtrar tarefas feitas? (s/n): ").toLowerCase() === 's';
                const tarefasFiltradas = filtTarefas(feitas);
                
                console.log(`\n--- Tarefas ${feitas ? 'Concluídas' : 'Pendentes'} ---`);
                if (tarefasFiltradas.length === 0) {
                    console.log("Nenhuma tarefa encontrada para este filtro.");
                } else {
                    tarefasFiltradas.forEach((tarefa) => {
                        let status = tarefa.feita ? "[ :) ]" : "[    ]";
                        console.log(`[ID: ${tarefa.id}] ${status} ${tarefa.txt}`);
                    });
                }
                console.log("---------------------------------\n");
                break;
            case "6":
                // Removido o parseInt()
                const idBuscar = prompt("Digite o ID (UUID) da tarefa que deseja buscar: ");
                const encontrada = buscarPorId(idBuscar);
                if (encontrada) {
                    let status = encontrada.feita ? "[ :) ]" : "[    ]";
                    console.log(`Busca por ID: [ID: ${encontrada.id}] ${status} ${encontrada.txt}`);
                } else {
                    console.log("Tarefa não encontrada.");
                }
                break;
            case "0":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== "0");
}

function addTarefas(txt) {
   const novaTarefa = {
       id: uuidv4(), 
       txt: txt,
       feita: false
   };
   Tarefas.push(novaTarefa);
   console.log(`Tarefa adicionada com sucesso! ID: ${novaTarefa.id}`);
}

function remTarefa(id) {
   const index = Tarefas.findIndex(t => t.id === id);
   if (index !== -1) {
       Tarefas.splice(index, 1);
       console.log(`Tarefa ${id} removida com sucesso!`);
   } else {
       console.log("Tarefa não encontrada para remoção.");
   }
}

function concluirTarefa(id) {
   const tarefa = buscarPorId(id);
   if (tarefa) {
       tarefa.feita = true;
       console.log(`Tarefa ${id} concluída, parabéns!`);
   } else {
       console.log("Tarefa não encontrada.");
   }
}

function listTarefas() {
   console.log("------------Lista de Tarefas------------");
   if (Tarefas.length === 0) {
       console.log("Nenhuma tarefa cadastrada ainda.");
       return;
   }
   
   Tarefas.forEach((tarefa) => {
       let status = tarefa.feita ? "[ :) ]" : "[    ]";
       console.log(`${status} ${tarefa.txt}`);
   });
   console.log("------------------------\n");
}

function filtTarefas(feitas) {
   console.log("------------Lista de Tarefas filtradas------------");
   return Tarefas.filter(t => t.feita === feitas);
}

function buscarPorId(id) {
   return Tarefas.find(t => t.id === id);
}

main();
