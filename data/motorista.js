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

    // VEÍCULO
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
  localStorage.setItem("motoristaAtualId", novoMotorista.id);

  return true;
}


/* =========================
   BUSCAR
========================= */
function buscarMotorista(telefone){
  return motoristas.find(m => m.telefone === telefone);
}

function getMotoristaPorId(id){
  return motoristas.find(m => m.id == id);
}


/* =========================
   ATUALIZAR
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
   STATUS
========================= */
function aprovarMotorista(id){
  atualizarMotorista(id, { status: "aprovado" });
}

function bloquearMotorista(id){
  atualizarMotorista(id, { status: "bloqueado" });
}


/* =========================
   REMOVER
========================= */
function removerMotorista(id){

  motoristas = motoristas.filter(m => m.id !== id);

  localStorage.setItem("motoristas", JSON.stringify(motoristas));
}


/* =========================
   LOGIN
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
   SESSÃO
========================= */
function getMotoristaLogado(){
  const id = localStorage.getItem("motoristaLogadoId");
  if(!id) return null;
  return getMotoristaPorId(id);
}

function logoutMotorista(){
  localStorage.removeItem("motoristaLogadoId");
}


/* =========================
   FLUXO CADASTRO
========================= */
function getMotoristaAtualId(){
  return localStorage.getItem("motoristaAtualId");
}

function limparMotoristaAtual(){
  localStorage.removeItem("motoristaAtualId");
    }
