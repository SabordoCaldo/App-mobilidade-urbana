let clientes = [];

function salvarCliente(cliente){
  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

function carregarClientes(){
  const dados = localStorage.getItem("clientes");
  if(dados){
    clientes = JSON.parse(dados);
  }
}

carregarClientes();
