/* =========================
   LISTA DE MOTORISTAS
========================= */
let motoristas = [];


/* =========================
   CARREGAR DADOS
========================= */
function carregarMotoristas(){
  const dados = localStorage.getItem("motoristas");
  if(dados){
    motoristas = JSON.parse(dados);
  }
}

carregarMotoristas();


/* =========================
   SALVAR MOTORISTA
========================= */
function salvarMotorista(motorista){

  // 🚨 TELEFONE DUPLICADO
  const telefoneExiste = motoristas.find(m => m.telefone === motorista.telefone);
  if(telefoneExiste){
    alert("Esse número já está cadastrado");
    return false;
  }

  // 🚨 CNH DUPLICADA
  const cnhExiste = motoristas.find(m => m.cnh === motorista.cnh);
  if(cnhExiste){
    alert("Essa CNH já está cadastrada");
    return false;
  }

  const novoMotorista = {
    id: Date.now(),

    nome: motorista.nome,
    telefone: motorista.telefone,
    endereco: motorista.endereco,
    cnh: motorista.cnh,
    senha: motorista.senha,

    fotoPerfil: motorista.fotoPerfil || "",
    fotoCNH: motorista.fotoCNH || "",

    // VEÍCULO (página 5)
    placa: "",
    modelo: "",
    cor: "",
    ano: "",
    renavan: "",
    fotoVeiculo: "",
    fotoCRLV: "",

    status: "pendente",
    criadoEm: new Date().toISOString()
  };

  motoristas.push(novoMotorista);

  localStorage.setItem("motoristas", JSON.stringify(motoristas));

  // guarda motorista atual (para página 5)
  localStorage.setItem("motoristaAtualId", novoMotorista.id);

  return true;
}


/* =========================
   BUSCAR POR TELEFONE
========================= */
function buscarMotorista(telefone){
  return motoristas.find(m => m.telefone === telefone);
}


/* =========================
   BUSCAR POR ID
========================= */
function getMotoristaPorId(id){
  return motoristas.find(m => m.id == id);
}


/* =========================
   ATUALIZAR MOTORISTA
========================= */
function atualizarMotorista(id, dadosAtualizados){

  motoristas = motoristas.map(m => {
    if(m.id == id){
      return { ...m, ...dadosAtualizados };
    }
    return m;
  });

  localStorage.setItem("motoristas", JSON.stringify(motoristas));
}


/* =========================
   APROVAR MOTORISTA
========================= */
function aprovarMotorista(id){
  atualizarMotorista(id, { status: "aprovado" });
}


/* =========================
   BLOQUEAR MOTORISTA
========================= */
function bloquearMotorista(id){
  atualizarMotorista(id, { status: "bloqueado" });
}


/* =========================
   REMOVER MOTORISTA
========================= */
function removerMotorista(id){

  motoristas = motoristas.filter(m => m.id !== id);

  localStorage.setItem("motoristas", JSON.stringify(motoristas));
}


/* =========================
   LOGIN MOTORISTA
========================= */
function loginMotorista(telefone, senha){

  const motorista = motoristas.find(m => m.telefone === telefone && m.senha === senha);

  if(!motorista){
    alert("Telefone ou senha inválidos");
    return null;
  }

  if(motorista.status === "bloqueado"){
    alert("Conta bloqueada");
    return null;
  }

  if(motorista.status === "pendente"){
    alert("Cadastro em análise");
    return null;
  }

  localStorage.setItem("motoristaLogadoId", motorista.id);

  return motorista;
}


/* =========================
   MOTORISTA LOGADO
========================= */
function getMotoristaLogado(){
  const id = localStorage.getItem("motoristaLogadoId");
  if(!id) return null;
  return getMotoristaPorId(id);
}


/* =========================
   LOGOUT
========================= */
function logoutMotorista(){
  localStorage.removeItem("motoristaLogadoId");
}


/* =========================
   FLUXO CADASTRO (PÁG 5)
========================= */
function getMotoristaAtualId(){
  return localStorage.getItem("motoristaAtualId");
}

function limparMotoristaAtual(){
  localStorage.removeItem("motoristaAtualId");
}
