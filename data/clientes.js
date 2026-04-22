/* =========================
   LISTA DE CLIENTES
========================= */
let clientes = [];


/* =========================
   CARREGAR CLIENTES
========================= */
function carregarClientes(){
  const dados = localStorage.getItem("clientes");
  if(dados){
    clientes = JSON.parse(dados);
  }
}

carregarClientes();


/* =========================
   SALVAR CLIENTE
========================= */
function salvarCliente(cliente){

  // 🚨 evitar duplicidade por telefone
  const existe = clientes.find(c => c.telefone === cliente.telefone);
  if(existe){
    alert("Já existe um cliente com esse telefone");
    return false;
  }

  const novoCliente = {
    id: Date.now(),

    nome: cliente.nome,
    telefone: cliente.telefone,
    endereco: cliente.endereco,
    senha: cliente.senha,
    foto: cliente.foto || "",

    status: "ativo", // ativo | bloqueado

    criadoEm: new Date().toISOString()
  };

  clientes.push(novoCliente);

  localStorage.setItem("clientes", JSON.stringify(clientes));

  return true;
}


/* =========================
   BUSCAR CLIENTE
========================= */
function buscarCliente(telefone){
  return clientes.find(c => c.telefone === telefone);
}


/* =========================
   ATUALIZAR CLIENTE
========================= */
function atualizarCliente(id, dadosAtualizados){

  clientes = clientes.map(c => {
    if(c.id === id){
      return { ...c, ...dadosAtualizados };
    }
    return c;
  });

  localStorage.setItem("clientes", JSON.stringify(clientes));
}


/* =========================
   BLOQUEAR CLIENTE
========================= */
function bloquearCliente(id){

  atualizarCliente(id, {
    status: "bloqueado"
  });

}


/* =========================
   REMOVER CLIENTE
========================= */
function removerCliente(id){

  clientes = clientes.filter(c => c.id !== id);

  localStorage.setItem("clientes", JSON.stringify(clientes));
}
