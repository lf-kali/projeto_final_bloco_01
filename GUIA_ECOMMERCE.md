# Guia de Implementação: E-commerce com Base no Projeto Bancário

## 🎯 Abordagem Recomendada

Mantenha a estrutura 1:1 do projeto bancário, mas com pequenas adaptações. Isso garante consistência, escalabilidade e facilita a manutenção.

---

## 📁 Estrutura de Pastas Proposta

```
src/
  model/
    Cliente.ts              (substitui Conta - dados do cliente)
    Produto.ts              (novo - dados do produto)
    Pedido.ts               (novo - lista de itens do pedido)
    ItemPedido.ts           (novo - item individual com produto + quantidade)
  
  repository/
    ClienteRepository.ts    (substitui ContaRepository)
    ProdutoRepository.ts    (novo)
    PedidoRepository.ts     (novo)
  
  controller/
    ClienteController.ts    (substitui ContaController)
    ProdutoController.ts    (novo - CRUD de produtos)
    PedidoController.ts     (novo - gerencia pedidos)
  
  util/
    colors.ts               (reutiliza do projeto anterior)
```

---

## ✅ Por que funciona bem

1. **Reutiliza seu padrão**: Mesma estrutura MVC (Model/Repository/Controller)
2. **Escalável**: Cada controller gerencia seu próprio array de dados
3. **Simples**: Apenas o necessário, sem overhead
4. **De fácil entendimento**: Lógica clara e separada por responsabilidade

---

## 🔄 Equivalências Conceituais

| Conceito Bancário | E-commerce |
|---|---|
| Conta | Cliente (ID, nome, email, endereço) |
| Saldo | Saldo de crédito/carteira |
| Sacar | Usar crédito em uma compra |
| Depositar | Adicionar saldo/crédito |
| Transferência | Transferência de saldo entre clientes |
| Agência | Categoria de cliente (Bronze, Prata, Ouro) |

---

## 📋 Escopo Mínimo Viável (1º Módulo)

### ✅ O que DEVE ter:
- **Cliente**: CRUD básico (criar, buscar, listar, atualizar, deletar)
- **Produto**: CRUD + gerenciamento de estoque simples
- **Pedido**: 
  - Criar pedido para um cliente
  - Adicionar itens ao pedido
  - Calcular total
  - Listar pedidos de um cliente
  - Confirmar/Cancelar pedido

### ❌ O que DEIXAR PRA DEPOIS:
- Pagamento integrado (gateway)
- Relatórios complexos/analytics
- Autenticação/Login
- Notificações por email
- Cupons/Descontos avançados
- Devolução de produtos

---

## 🏗️ Estrutura das Classes

### Cliente.ts
```typescript
export abstract class Cliente {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _cpf: string;
    private _endereco: string;
    private _saldo: number; // saldo de crédito/carteira

    constructor(id: number, nome: string, email: string, cpf: string, endereco: string, saldo: number) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._cpf = cpf;
        this._endereco = endereco;
        this._saldo = saldo;
    }

    // getters/setters
    public get id() { return this._id; }
    public get nome() { return this._nome; }
    public get email() { return this._email; }
    public get saldo() { return this._saldo; }

    // métodos bancários
    public sacar(valor: number): boolean { ... }
    public depositar(valor: number): void { ... }
    public visualizar(): void { ... }
}
```

### Produto.ts
```typescript
export class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _estoque: number;
    private _descricao: string;

    constructor(id: number, nome: string, preco: number, estoque: number, descricao: string) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
        this._descricao = descricao;
    }

    // getters/setters
    // verificarEstoque()
    // reduzirEstoque(quantidade)
    // visualizar()
}
```

### ItemPedido.ts
```typescript
export class ItemPedido {
    private _produto: Produto;
    private _quantidade: number;

    constructor(produto: Produto, quantidade: number) {
        this._produto = produto;
        this._quantidade = quantidade;
    }

    public get quantidade() { return this._quantidade; }
    public get produto() { return this._produto; }

    public get subtotal(): number {
        return this._produto.preco * this._quantidade;
    }

    public visualizar(): void { ... }
}
```

### Pedido.ts
```typescript
export class Pedido {
    private _id: number;
    private _clienteId: number;
    private _itens: Array<ItemPedido>;
    private _status: string; // "pendente", "confirmado", "cancelado"
    private _data: Date;

    constructor(id: number, clienteId: number) {
        this._id = id;
        this._clienteId = clienteId;
        this._itens = new Array<ItemPedido>();
        this._status = "pendente";
        this._data = new Date();
    }

    // getters
    public get id() { return this._id; }
    public get clienteId() { return this._clienteId; }
    public get status() { return this._status; }
    public get itens() { return this._itens; }

    // métodos
    public adicionarItem(item: ItemPedido): void { ... }
    public removerItem(indice: number): void { ... }
    public calcularTotal(): number { ... }
    public confirmar(): void { ... }
    public cancelar(): void { ... }
    public visualizar(): void { ... }
}
```

---

## 🎮 Padrão dos Controllers

Reutilize o padrão do `ContaController`:

```typescript
export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produto> = new Array<Produto>();
    private idProduto: number = 0;

    public cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, `Produto ${produto.nome} criado com sucesso!`, colors.reset);
    }

    public procurarPorId(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id) return produto;
        }
        return null;
    }

    public listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    // ... outros métodos CRUD
}
```

---

## 📊 Fluxo Básico de Uso

```
1. Criar Clientes
   → ClienteController.cadastrar()

2. Criar Produtos
   → ProdutoController.cadastrar()

3. Cliente faz Pedido
   → PedidoController.criar(clienteId)
   → PedidoController.adicionarItem(produtoId, quantidade)
   → PedidoController.confirmarPedido()

4. Sistema desconta saldo/estoque
   → ClienteController.sacar()
   → ProdutoController.reduzirEstoque()

5. Consultas
   → ClienteController.procurarPorId()
   → PedidoController.listarPedidosCliente()
```

---

## 💡 Dicas Importantes

### ✨ Boas Práticas

1. **Use arrays para dados em memória** (não adicione banco de dados agora)
2. **Mantenha IDs auto-incrementáveis** com método gerador igual ao projeto bancário
3. **Valide tudo** (estoque, saldo, dados vazios)
4. **Use a classe `colors`** para output padronizado
5. **Crie interfaces** (repositories) antes das implementações
6. **Documente com comentários** suas escolhas de design

### ⚠️ O que NÃO fazer

- Não misture lógica de múltiplos domínios em um controller
- Não adicione banco de dados (fica pro próximo módulo)
- Não crie muitas subclasses (mantenha simples)
- Não ignore validações para "ganhar tempo"

---

## 🚀 Próximos Passos

1. Renomear `Conta.ts` → `Cliente.ts` (adapte o código)
2. Criar `Produto.ts` e `ItemPedido.ts`
3. Criar `Pedido.ts`
4. Criar repositories (interfaces)
5. Criar controllers
6. Adaptar `Menu.ts` para fluxo de e-commerce
7. Testar tudo

---

## 📚 Referência de Padrões

Este guia segue o padrão **MVC (Model-View-Controller)**:

- **Model** (`Conta.ts`, `Produto.ts`): Representa os dados
- **Repository** (Interface): Define contrato de operações
- **Controller** (Implementação): Executa operações sobre dados
- **View** (`Menu.ts`): Interface com usuário

---

**Boa sorte com o projeto! 🎉**
