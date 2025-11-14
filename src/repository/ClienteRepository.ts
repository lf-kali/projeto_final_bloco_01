import { Cliente } from "../model/Cliente";

export interface ClienteRepository {

    // CRUD
    procurarPorID(id: number): void;
    listarTodos():void;
    cadastrar(cliente: Cliente): void;
    atualizar(cliente: Cliente): void;
    deletar(id: number): void;

    // Métodos de Cliente
    darPontos(id: number,quantidade: number): void;
    transferePontos(idOrigem: number, idDestino: number, quantidade: number): void;

}