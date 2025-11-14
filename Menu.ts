import readline = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

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
        console.log("       7 - Dar pontos                       ");
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

                break;
            case 2:
                console.log("\n\nListar Clientes\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados do cliente - por id\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados de Cliente\n\n");

                break;
            case 5:
                console.log("\n\nApagar Cliente\n\n");

                break;
            case 6:
                console.log("\n\nIniciar Venda\n\n");

                break;
            case 7:
                console.log("\n\nDar pontos\n\n");

                break;
            case 8:
                console.log("\n\nTransferência de pontos\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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