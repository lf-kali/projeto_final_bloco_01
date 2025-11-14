import { ClienteAbstract } from "./ClienteAbstract";

export class Cliente extends ClienteAbstract{
    constructor(id:number, nome:string, email: string, telefone: number, cpf:number, pontos: number){
        super(id, nome, email, telefone, cpf, pontos)
    }
}