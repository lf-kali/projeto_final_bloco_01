import readline = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Cliente } from "./src/model/Cliente";
import { ClienteController } from "./src/controller/ClienteController";

export function main() {
    let clientes: ClienteController = new ClienteController();
    
    let opcao, id, telefone, cpf, pontos, idOrigem, idDestino, quantidade, pagamento: number;
    
    let nome, email: string;

    let cl1: Cliente = new Cliente(clientes.gerarID(), "Fulano", "fulano@fulano.com", 5140028922, 74893802875, 200);
    clientes.cadastrar(cl1);

    let cl2: Cliente = new Cliente(clientes.gerarID(), "Ciclano", "ciclano@ciclano.com", 48976543210, 19203645930, 748);
    clientes.cadastrar(cl2);

    clientes.listarTodos()

    while(true){

        console.log(colors.bg.black, colors.fg.yellow,
                  "\n************************************************");
        console.log("                                                ");
        console.log("           ANTONIOFAGUNDE INFORMÁTICA           ");
        console.log("                                                ");
        console.log("************************************************");
        console.log("                                                ");
        console.log("       1 - Cadastrar cliente                    ");
        console.log("       2 - Listar Clientes                      ");
        console.log("       3 - Buscar Cliente por id                ");
        console.log("       4 - Atualizar dados de Cliente           ");
        console.log("       5 - Apagar Cliente                       ");
        // console.log("       6 - Iniciar venda                        ");
        console.log("       6 - Dar pontos                           ");
        console.log("       7 - Transferir pontos entre Clientes     ");
        console.log("       8 - Sair                                 ");
        console.log("                                                ");
        console.log("************************************************");
        console.log("                                                ",
            colors.reset);
        opcao = readline.questionInt("Opção: ");

        
        if (opcao === 8){
            console.log(colors.fg.greenstrong,
                "\nANTONIOFAGUNDE Informática - O rei do hardware!");
            sobre();
            console.log(colors.reset, "");
            break;
        }
        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Cliente\n\n");

                console.log("\nNome do/a Cliente: ");
                nome = readline.question("");

                console.log("\nEmail: ")
                email = readline.question("");

                console.log("\nTelefone: ");
                telefone = readline.questionInt("");

                console.log("\n CPF: ");
                cpf = readline.questionInt("");

                console.log("\nPontos Iniciais: ");
                pontos = readline.questionInt("");

                clientes.cadastrar(
                    new Cliente(clientes.gerarID(), nome, email, telefone, cpf, pontos)
                )

                console.log("");

                keyPress();
                break;
            case 2:
                console.log("\n\nListar Clientes\n\n");

                clientes.listarTodos()

                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados do cliente - por id\n\n");
                
                console.log("Digite o id do cliente: ");
                id = readline.questionInt("");
                clientes.procurarPorID(id);

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados de Cliente\n\n");

                console.log("Digite o id do cliente: ");
                id = readline.questionInt("");

                let cliente = clientes.buscarNoArray(id);

                if (cliente != null) {
                    console.log("\nDigite o nome do Cliente: ");
                    nome = readline.question("");

                    console.log("\nE-mail: ");
                    email = readline.question("");

                    console.log("\nTelefone do Cliente: ");
                    telefone = readline.questionInt("");

                    console.log("\nCPF: ");
                    cpf = readline.questionInt("");

                    console.log("\nPontos Do cliente: ");
                    pontos = readline.questionInt("");

                    clientes.atualizar(new Cliente(id, nome, email, telefone, cpf, pontos))
                    
                }
                else {
                    console.log(colors.fg.red,`Conta com o id ${id} não encontrada!`, colors.reset);
                }

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar Cliente\n\n");

                console.log("Digite o id do Cliente: ");
                id = readline.questionInt("");

                clientes.deletar(id);

                keyPress();
                break;
            // case 6:
            //     console.log("\n\nIniciar Venda\n\n");

            //     keyPress();
            //     break;
            case 6:
                console.log("\n\nDar pontos\n\n");

                console.log("Digite o id do Cliente: ");
                id = readline.questionInt("");

                console.log("Quantidade de pontos adicionais: ");
                quantidade = readline.questionInt("");

                clientes.darPontos(id, quantidade);

                keyPress();
                break;
            case 7:
                console.log("\n\nTransferência de pontos\n\n");
                
                console.log("Digite o id de origem: ")
                idOrigem = readline.questionInt("");

                console.log("Digite o id de destino: ");
                idDestino = readline.questionInt("");

                console.log("Quantos pontos você quer transferir?");
                quantidade = readline.questionInt("");

                clientes.transferePontos(idOrigem, idDestino, quantidade);

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Kali França - cbjk.kali@gmail.com");
    console.log("github.com/lf-kali");
    console.log("************************************************\n");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main()