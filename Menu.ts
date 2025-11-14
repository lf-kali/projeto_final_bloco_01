import readline = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Cliente } from "./src/model/Cliente";

export function main() {

    let cliente: Cliente = new Cliente(1, "Fulano", "fulano@fulano.com", 51929300293, 18903983729, 8);
    let cliente1: Cliente = new Cliente(1, "Ciclano", "ciclano@fulano.com", 51983329405, 87, 920);
    let cliente2: Cliente = new Cliente(1, "Beltrano", "beltrano@fulano.com", 827398239, 98379523, 8347);
    let cliente3: Cliente = new Cliente(1, "Onaluf", "Onaluf@fulano.com", 238749120, 932847, 12974);

    let clientes: Array<Cliente> = [cliente, cliente1, cliente2, cliente3] 

    let opcao: number;

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
        console.log("       6 - Iniciar venda                        ");
        console.log("       7 - Dar pontos                           ");
        console.log("       8 - Transferir pontos entre Clientes     ");
        console.log("       9 - Sair                                 ");
        console.log("                                                ");
        console.log("************************************************");
        console.log("                                                ",
            colors.reset);
        opcao = readline.questionInt("Opção: ");

        
        if (opcao === 9){
            console.log(colors.fg.greenstrong,
                "\nANTONIOFAGUNDE Informática - O rei do hardware!");
            sobre();
            console.log(colors.reset, "");
            break;
        }
        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Cliente\n\n");

                keyPress();
                break;
            case 2:
                for (let cliente of clientes){
                    cliente.visualizar();
                }

                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar dados do cliente - por id\n\n");

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar dados de Cliente\n\n");

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar Cliente\n\n");

                keyPress();
                break;
            case 6:
                console.log("\n\nIniciar Venda\n\n");

                keyPress();
                break;
            case 7:
                console.log("\n\nDar pontos\n\n");

                keyPress();
                break;
            case 8:
                console.log("\n\nTransferência de pontos\n\n");

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