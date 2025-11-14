export abstract class Cliente {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: number;
    private _cpf: number;
    private _pontos: number;

    constructor(id: number, nome: string, email: string, telefone: number, cpf: number, pontos: number ){
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._cpf = cpf;
        this._pontos = pontos;
    }

    // getters e setters
    public get id(){
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get email(){
        return this._email;
    }

    public set email(email: string){
        this._email = email;
    }

    public get telefone(){
        return this._telefone;
    }

    public set telefone(telefone: number){
        this._telefone = telefone;
    }

    public get cpf(){
        return this._cpf;
    }

    public set cpf(cpf: number){
        this._cpf = cpf;
    }

    public get pontos(){
        return this._pontos;
    }

    public set pontos(pontos: number){
        this._pontos = pontos;
    }

    // Métodos de cliente
    public aplicarDesconto(): boolean{
        console.log("vazio");
        return false;
    }

    public darPontos(quantidade: number): void{
        console.log("vazio")
    }

}