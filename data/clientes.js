/* =========================
   LISTA DE CLIENTES
========================= */
let clientes = [];


/* =========================
   CARREGAR
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

  // 🚨 TELEFONE DUPLICADO
  const telefoneExiste = clientes.find(c => c.telefone === cliente.telefone);
  if(telefoneExiste){
    alert("Esse número já está cadastrado");
    return false;
  }

  const novoCliente = {
    id: Date.now(),

    nome: cliente.nome,
    telefone: cliente.telefone,
    endereco: cliente.endereco,
    senha: cliente.senha,

    fotoPerfil: cliente.fotoPerfil || "",

    status: "ativo",
    criadoEm: new Date().toISOString()
  };

  clientes.push(novoCliente);

  localStorage.setItem("clientes", JSON.stringify(clientes));
  localStorage.setItem("clienteAtualId", novoCliente.id);

  return true;
}


/* =========================
   BUSCAR
========================= */
function buscarCliente(telefone){
  return clientes.find(c => c.telefone === telefone);
}

function getClientePorId(id){
  return clientes.find(c => c.id == id);
}


/* =========================
   ATUALIZAR
========================= */
function atualizarCliente(id, dadosAtualizados){

  clientes = clientes.map(c => {
    if(c.id == id){
      return { ...c, ...dadosAtualizados };
    }
    return c;
  });

  localStorage.setItem("clientes", JSON.stringify(clientes));
}


/* =========================
   REMOVER
========================= */
function removerCliente(id){

  clientes = clientes.filter(c => c.id !== id);

  localStorage.setItem("clientes", JSON.stringify(clientes));
}


/* =========================
   LOGIN
========================= */
function loginCliente(telefone, senha){

  const cliente = clientes.find(c => c.telefone === telefone && c.senha === senha);

  if(!cliente){
    alert("Telefone ou senha inválidos");
    return null;
  }

  localStorage.setItem("clienteLogadoId", cliente.id);

  return cliente;
}


/* =========================
   SESSÃO
========================= */
function getClienteLogado(){
  const id = localStorage.getItem("clienteLogadoId");
  if(!id) return null;
  return getClientePorId(id);
}

function logoutCliente(){
  localStorage.removeItem("clienteLogadoId");
}


/* =========================
   FLUXO
========================= */
function getClienteAtualId(){
  return localStorage.getItem("clienteAtualId");
}

function limparClienteAtual(){
  localStorage.removeItem("clienteAtualId");
}
