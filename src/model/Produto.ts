export class Produto {

    private _id: number;
    private _nome: string;
    private _categoria: string;
    private _preco: number;
    private _estoque: number;

    constructor(id: number, nome:string, categoria:string, preco: number, estoque: number){
        this._id = id;
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._estoque = estoque;
    }

    
    // Getters/setters
    public get id() : number {
        return this._id
    }
    
    public set id(id : number) {
        this._id = id;
    }

    public get nome() : string {
        return this._nome;
    }
    
    public set nome(nome : string) {
        this._nome = nome.toUpperCase();
    }
    
    public get categoria() : string {
        return this._categoria;
    }
    
    public set categoria(categoria : string) {
        this._categoria = categoria;
    }
    
    public get preco() : number {
        return this._preco;
    }
    
    public set preco(preco : number) {
        this._preco = preco;
    }
    
    public get estoque() {
        return this._estoque
    }

    public set estoque(estoque: number){
        this._estoque = estoque;
    }
    
    // Métodos de produto
    public vender(quantidade: number): void {
        console.log("vazio");
    }

    public repor(quantidade: number): void{
        console.log("vazio");
    }
    
    public visualizar(): void {

        console.log("\n*****************************************");
        console.log(`Dados do produto: ${this._nome}`);
        console.log("*****************************************");
        console.log(`Id do produto: ${this._id}`);
        console.log(`Agência: ${this._categoria}`);
        console.log(`Preço: ${this._preco}`);
        console.log(`Estoque: ${this._estoque}`);
        console.log("\n*****************************************\n");
    }
    
    
    
    


}