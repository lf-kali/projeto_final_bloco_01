import { Cliente } from "../model/Cliente";
import { Produto } from "../model/Produto";

export interface ClienteRepository {

    // CRUD
    procurarPorID(id: number): void;
    listarTodos():void;
    cadastrar(cliente: Cliente): void;
    atualizar(cliente: Cliente): void;
    deletar(id: number): void;

    // Métodos de Cliente
    comprar(produto: Produto, quantidade: number, pagamento: number ): boolean
    aplicarDesconto(): void;
    darPontos(quantidade: number): void;
    transferePontos(idOrigem: number, idDestino: number, quantidade: number): void;

}