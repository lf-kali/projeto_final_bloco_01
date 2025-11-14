import { Cliente } from "../model/Cliente";

import { ClienteRepository } from "../repository/ClienteRepository";

import { colors } from "../util/Colors";

export class ClienteController implements ClienteRepository {
    private listaClientes: Array<Cliente> = new Array<Cliente>();
    num: number = 0;

    public procurarPorID(id: number): void {
        let buscaCliente = this.buscarNoArray(id);

        if (buscaCliente != null){
            buscaCliente.visualizar()
        }
        else {
            console.log(colors.fg.red, `\nCliente com id ${id} não encontrado!`, colors.reset);            
        }
    }

    public listarTodos(): void {
        for (let cliente of this.listaClientes){
            cliente.visualizar();
        }
    }

    public cadastrar(cliente: Cliente): void {
        this.listaClientes.push(cliente);
        console.log(colors.fg.green, `\nCliente "${cliente.nome}", cadastrado com ID ${cliente.id}`, colors.reset);
    }

    public atualizar(cliente: Cliente): void {
        let buscaCliente = this.buscarNoArray(cliente.id);

        if (buscaCliente != null) {
            this.listaClientes[this.listaClientes.indexOf(buscaCliente)] = cliente;
            console.log(colors.fg.green, `\nDados do cliente ${cliente.id} atualizados com sucesso!`, colors.reset);
        }
    }

    public deletar(id: number): void {
        let buscaCliente = this.buscarNoArray(id);

        if(buscaCliente != null) {
            this.listaClientes.splice(this.listaClientes.indexOf(buscaCliente), 1);
            console.log(colors.fg.green,`Cliente ${id} removido do cadastro!`, colors.reset);
        }
        else {
            console.log(colors.fg.green,`Cliente ${id} não encontrado!`, colors.reset);
        }
    }


    public darPontos(id:number, quantidade: number): void {
        let buscaCliente = this.buscarNoArray(id)

        if(buscaCliente != null){
            buscaCliente.pontos += quantidade;
            console.log(`${buscaCliente.nome} Recebeu ${quantidade} pontos e agora tem ${buscaCliente.pontos}!`)
        }
        else{
            console.log(`Cliente de id ${id} não encontrado!`);
        }
    }

    public transferePontos(idOrigem: number, idDestino: number, quantidade: number): void {
        let clienteOrigem = this.buscarNoArray(idOrigem);
        let clienteDestino = this.buscarNoArray(idDestino);

        if (clienteOrigem != null && clienteDestino != null){
            if (clienteOrigem.pontos >= quantidade){
                clienteOrigem.pontos -= quantidade;
                clienteDestino.pontos += quantidade;
                
                console.log(colors.fg.green, `\n${quantidade} pontos transferidos do cliente "${clienteOrigem.nome}" para o cliente "${clienteDestino.nome}"`, colors.reset);
            }
            else console.log(colors.fg.red, `\n Um dos clientes não foi encontrado!`, colors.reset);
        }
    }

    public gerarID(): number{
        return ++ this.num;
    }

    public buscarNoArray(id: number): Cliente | null {

        for (let cliente of this.listaClientes){
            if (cliente.id === id) return cliente;
        }

        return null;
    }
}