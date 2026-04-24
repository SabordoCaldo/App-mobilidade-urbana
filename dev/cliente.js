let clientes = [];

function carregarClientes(){
  const dados = localStorage.getItem("clientes");
  if(dados){
    clientes = JSON.parse(dados);
  }
}

carregarClientes();


function salvarCliente(cliente){

  const novoCliente = {
    id: Date.now(),

    nome: cliente.nome,
    telefone: cliente.telefone,
    endereco: cliente.endereco,
    senha: cliente.senha,

    fotoPerfil: cliente.fotoPerfil,

    status: "ativo"
  };

  clientes.push(novoCliente);

  localStorage.setItem("clientes", JSON.stringify(clientes));
  localStorage.setItem("clienteAtualId", novoCliente.id);

  return true;
}


function getClienteAtualId(){
  return localStorage.getItem("clienteAtualId");
}

function limparClienteAtual(){
  localStorage.removeItem("clienteAtualId");
}
