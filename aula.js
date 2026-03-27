////////////////////// OBJETOS ///////////////////
const prompt = require ("prompt-sync")();

// const pessoa = {
//     nome: "Vini" ,
//     idade: 25,
//     falar : function(){
//         console.log('Eaii,meu nome é ' + this.nome)
//     }
// };
// pessoa.falar()


//////////////////////// ATIVIDADES /////////////////////////

/////////////////////// 1 /////////////////////////////////

// const carro = {
//     modelo : "Onix Plus" ,
//     marca : "Chevrolet" , 
//     ano : 2019 ,

//     exibir : function(){
//         console.log("o modelo do carro é " + this.modelo)
//     }
// }

// carro.exibir()


//////////////////////2//////////////////////////

// const aluno = {
//     nome : "Vini" ,
//     idade : "16" ,
// }

// console.log(aluno.idade)

///////////////////////////3////////////////////

// const produto = {
//     nome: "Celular" ,
//     preco : "3.000",
//     exibir : function() {
//         console.log('O produto ' + this.nome + ' custa R$' + this.preco)
//     }
// }

// produto.exibir()


////////////////////////1//////////////////////////

// const pessoa = {
//     nome : "Vini",
//     idade : parseInt(prompt("Entre com a idade")),

//     exibir : function(){
//         console.log('O seu nome é ' + this.nome + ', e sua idade é ' + this.idade)
//     }
// }

// pessoa.exibir()


///////////////////////////////////////////////////

// const produto = {
//     valor1 : 50,
//     exibir : function(){
//         console.log('O valor é R$')
//     }
// }
// produto.exibir() = 80;


///////////////////// 3 /////////////////////

// const aluno = {
//     nome : "Vini" ,
//      
// }

// aluno.nota = 8;
// console.log(aluno.nota)



//////////////// 4 ////////////////////////

// const objeto = {
//     nome: "Celular" ,
//     marca : "Iphone" ,
// }

// console.log(objeto.nome)
// console.log(objeto["marca"])

/////////////////////6////////////////////

// const pessoa = {
//     nome: "Vini" ,
//     idade: 25,
//     falar : function(){
//         console.log('Eaii ' + this.nome)
//     }
// };
// pessoa.falar()


/////////////////////// 5 /////////////////

// const pessoa = {
//     nome: "Vini" ,
//     idade: 25,
//     mostar : function(){
//         console.log('Eaii,meu nome é ' + this.nome)
//     }
// };
// pessoa.mostar()



///////////////////// 6 ////////////////////

// const produto = {
//   nome: "Notebook",
//   preco: 3000,

//   desconto: function(porcentagem) {
//     const valorDesconto = this.preco * (porcentagem / 100);
//     this.preco -= valorDesconto;
//   }
// };


//////////////////// 7 //////////////////////

// const aluno = {
//   nome: "Vini",
//   notas: [9, 8, 7]
// };

// console.log(aluno.notas);


///////////////// 8 ////////////////////////

// const pessoa = {
//     nome: "Vini",
//     idade: 16,
//     cidade: "Caxias do Sul"
// }

// for(let chave in pessoa){
//     console.log(chave + ": " + pessoa[chave])
// }

//////////////////// 9 ///////////////////////

// const aluno = {
//   nome: "Ana",
//   notas: [9, 8, 7],

//   media() {
//     const soma = this.notas.reduce((total, nota) => total + nota, 0);
//     return soma / this.notas.length;
//   }
// };

// console.log(aluno.media());

///////////////////////10//////////////////

// const alunos = [
//   { nome: "Vini", nota: 8 },
//   { nome: "Lucas", nota: 9 },
//   { nome: "Vitor", nota: 5 },
//   { nome: "Gael", nota: 6 }
// ];

// function mostrarAprovados(lista) {
//   lista.forEach(aluno => {
//     if (aluno.nota >= 7) {
//       console.log(aluno.nome);
//     }
//   });
// }

// mostrarAprovados(alunos);

/////////////////////////11////////////////

// const conta = {
//   saldo: 50.00,

//   depositar(valor) {
//     this.saldo += valor;
//     console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
//   },

//   sacar(valor) {
//     if (valor > this.saldo) {
//       console.log("Saldo insuficiente.");
//     } else {
//       this.saldo -= valor;
//       console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
//     }
//   },

//   exibir() {
//     console.log(`Saldo atual: R$${this.saldo}`);
//   }
// };


// conta.exibir();   
// conta.depositar(30); 
// conta.sacar(20);     
// conta.exibir();      


////////////////12///////////////////////////

// const objeto = {
//   nome: "Vini",
//   admin: "admim",
//   senha: "1234"
// };


// const usuario = prompt("Entre com o usuário:");
// const S = prompt("Entre com a senha:");

// function mostrar(objeto) {
//   if (usuario === objeto.admin && S === objeto.senha) {
//     console.log("Logado");
//   } else {
//     console.log("Dados inválidos");
//   }
// }

// mostrar(objeto);

//////////////////////13///////////////////////

// const pessoa = {
//   nome: "Vini",
//   idade: 25,
//   endereco: {
//     cidade: "Caxias do Sul",
//     estado: "RS"
//   }
// };


// console.log(pessoa.endereco.cidade); 


//////////////////14///////////////////////////

// const produtos = [
//   { nome: "Camisa", preco: 80 },
//   { nome: "Tênis", preco: 150 },
//   { nome: "Jaqueta", preco: 200 },
//   { nome: "Meia", preco: 20 }
// ];


// const produtosCaros = produtos.filter(produto => produto.preco > 100);

// console.log(produtosCaros);


//////////////////15////////////////////////

// const sistema = {
//   usuarios: [],

//   adicionarUsuario(nome) {
//     if (nome) {
//       this.usuarios.push(nome);
//       console.log(`Usuário "${nome}" adicionado com sucesso!`);
//     } else {
//       console.log("Nome inválido.");
//     }
//   }
// };


// sistema.adicionarUsuario("Vini");
// sistema.adicionarUsuario("Lucas");

// console.log(sistema.usuarios); 


//////////////////////16///////////////////////////

// const sistema = {
//   usuarios: [],

//   adicionarUsuario(nome) {
//     if (!nome) {
//       console.log("Nome inválido.");
//       return;
//     }

    
//     if (this.usuarios.includes(nome)) {
//       console.log(`Usuário "${nome}" já existe!`);
//     } else {
//       this.usuarios.push(nome);
//       console.log(`Usuário "${nome}" adicionado com sucesso!`);
//     }
//   },

//   listarUsuarios() {
//     if (this.usuarios.length === 0) {
//       console.log("Nenhum usuário cadastrado.");
//     } else {
//       console.log("Lista de usuários:");
//       this.usuarios.forEach((usuario, index) => {
//         console.log(`${index + 1} - ${usuario}`);
//       });
//     }
//   }
// };


// sistema.adicionarUsuario("Vini");
// sistema.adicionarUsuario("Lucas");
// sistema.adicionarUsuario("Vini"); 
// sistema.listarUsuarios();


/////////////////////17///////////////////

// const carrinho = {
//   produtos: [],

  
//   adicionar(produto) {
//     if (produto && produto.nome && typeof produto.preco === "number") {
//       this.produtos.push(produto);
//       console.log(`Produto "${produto.nome}" adicionado!`);
//     } else {
//       console.log("Produto inválido.");
//     }
//   },

  
//   remover(nome) {
//     const index = this.produtos.findIndex(p => p.nome === nome);
//     if (index !== -1) {
//       const removido = this.produtos.splice(index, 1)[0];
//       console.log(`Produto "${removido.nome}" removido!`);
//     } else {
//       console.log(`Produto "${nome}" não encontrado.`);
//     }
//   },

  
//   total() {
//     const soma = this.produtos.reduce((acc, p) => acc + p.preco, 0);
//     console.log(`Total do carrinho: R$${soma}`);
//     return soma;
//   }
// };


// carrinho.adicionar({ nome: "Camisa", preco: 80 });
// carrinho.adicionar({ nome: "Tênis", preco: 150 });
// carrinho.total();      
// carrinho.remover("Camisa");
// carrinho.total();      


///////////////////////////18////////////////////////

// const sistemaNotas = {
//   alunos: [],

 
//   cadastrarAluno(nome, nota) {
//     if (!nome || typeof nota !== "number" || nota < 0 || nota > 10) {
//       console.log("Dados inválidos.");
//       return;
//     }
//     this.alunos.push({ nome, nota });
//     console.log(`Aluno "${nome}" cadastrado com nota ${nota}.`);
//   },

 
//   mediaTurma() {
//     if (this.alunos.length === 0) return 0;
//     const soma = this.alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
//     return soma / this.alunos.length;
//   },

  
//   mostrarAprovados() {
//     const aprovados = this.alunos.filter(aluno => aluno.nota >= 7);
//     if (aprovados.length === 0) {
//       console.log("Nenhum aluno aprovado.");
//     } else {
//       console.log("Alunos aprovados:");
//       aprovados.forEach(aluno => console.log(`${aluno.nome} - Nota: ${aluno.nota}`));
//     }
//   }
// };


// sistemaNotas.cadastrarAluno("Vini", 8);
// sistemaNotas.cadastrarAluno("Lucas", 6);
// sistemaNotas.cadastrarAluno("Gael", 9);

// console.log(`Média da turma: ${sistemaNotas.mediaTurma()}`); 
// sistemaNotas.mostrarAprovados();



///////////////////////19///////////////////////

// const banco = {
//   contas: [],

  
//   criarConta(nome, saldoInicial = 0) {
//     if (!nome) {
//       console.log("Nome inválido para a conta.");
//       return;
//     }
//     const conta = {
//       nome,
//       saldo: saldoInicial,

//       depositar(valor) {
//         if (valor > 0) {
//           this.saldo += valor;
//           console.log(`Depósito de R$${valor} realizado. Saldo de ${this.nome}: R$${this.saldo}`);
//         } else {
//           console.log("Valor inválido para depósito.");
//         }
//       },

//       sacar(valor) {
//         if (valor > this.saldo) {
//           console.log(`Saldo insuficiente na conta de ${this.nome}.`);
//         } else if (valor <= 0) {
//           console.log("Valor inválido para saque.");
//         } else {
//           this.saldo -= valor;
//           console.log(`Saque de R$${valor} realizado. Saldo de ${this.nome}: R$${this.saldo}`);
//         }
//       },

//       transferir(valor, contaDestino) {
//         if (valor <= 0) {
//           console.log("Valor inválido para transferência.");
//         } else if (valor > this.saldo) {
//           console.log(`Saldo insuficiente para transferir de ${this.nome} para ${contaDestino.nome}.`);
//         } else {
//           this.saldo -= valor;
//           contaDestino.saldo += valor;
//           console.log(`Transferência de R$${valor} de ${this.nome} para ${contaDestino.nome} realizada com sucesso.`);
//         }
//       }
//     };

//     this.contas.push(conta);
//     console.log(`Conta de ${nome} criada com saldo inicial de R$${saldoInicial}`);
//   },

 
//   listarContas() {
//     if (this.contas.length === 0) {
//       console.log("Nenhuma conta cadastrada.");
//     } else {
//       console.log("Contas do banco:");
//       this.contas.forEach(conta => {
//         console.log(`${conta.nome} - Saldo: R$${conta.saldo}`);
//       });
//     }
//   },

  
//   buscarConta(nome) {
//     return this.contas.find(conta => conta.nome === nome);
//   }
// };


// banco.criarConta("Vini", 500);
// banco.criarConta("Lucas", 300);

// const contaVini = banco.buscarConta("Vini");
// const contaLucas = banco.buscarConta("Lucas");

// contaVini.transferir(200, contaLucas); 
// banco.listarContas();



////////////////////////////////////////////////////////////////////////////////////////////



// const carro = {
//     marca : "Fiat" ,
//     cor : "Preto" ,
//     combustivel : 6.25,

    
//     media : function() {
//         console.log("O valor gasto será de : " + calc)
//     }
// }

// let km = parseFloat(prompt("Quantos km voce vai andar"));
// carro.km = km;

// let combustivel = 6.25;

// let calc = combustivel*km;

// carro.media()




/////////////////////

// const pessoas = {
//     peso : 0,
//     al : 0,

//     mostrar : function(){
//         console.log("Seu imc é de :" + cacl)
//     }
// }

// let al = parseFloat(prompt("Qual sua altura?"))
// al.pessoas = al;

// let peso = parseFloat(prompt("Qual seu peso"))
// peso.pessoas = peso


// let cacl = peso / (al*al);

// pessoas.mostrar()