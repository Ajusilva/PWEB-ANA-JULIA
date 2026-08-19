let escolhasDoUsuario = [1, 2, 3, 4, 0];
let i = 0;
let opcao;

do {
    opcao = escolhasDoUsuario[i];
    i++;

    console.log("\n===== SISTEMA =====");
    console.log("1 - Cadastrar usuário");
    console.log("2 - Listar usuários");
    console.log("3 - Buscar usuário");
    console.log("4 - Excluir usuário");
    console.log("0 - Sair");

    switch (opcao) {
        case 1:
            console.log("Usuário cadastrado com sucesso!");
            break;

        case 2:
            console.log("Lista de usuários:\n...");
            break;

        case 3:
            console.log("Digite o nome do usuário:");
            console.log("Usuário encontrado!");
            break;

        case 4:
            console.log("Usuário excluído com sucesso!");
            break;

        case 0:
            console.log("Encerrando o sistema...");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 0);