/* =========================
   LISTA DE MOTORISTAS
========================= */
let motoristas = [];


/* =========================
   CARREGAR MOTORISTAS
========================= */
function carregarMotoristas(){
  const dados = localStorage.getItem("motoristas");
  if(dados){
    motoristas = JSON.parse(dados);
  }
}

carregarMotoristas();


/* =========================
   SALVAR MOTORISTA (PÁGINA 4)
========================= */
function salvarMotorista(motorista){

  // 🚨 evitar duplicidade
  const existe = motoristas.find(m => m.telefone === motorista.telefone);
  if(existe){
    alert("Já existe um motorista com esse telefone");
    return false;
  }

  const novoMotorista = {
    id: Date.now(),

    // DADOS PESSOAIS
    nome: motorista.nome,
    telefone: motorista.telefone,
    endereco: motorista.endereco,
    cnh: motorista.cnh,
    senha: motorista.senha,

    // IMAGENS
    fotoPerfil: motorista.fotoPerfil || "",
    fotoCNH: motorista.fotoCNH || "",

    // DADOS VEÍCULO (página 5)
    placa: "",
    modelo: "",
    cor: "",
    renavan: "",
    fotoCRLV: "",

    // CONTROLE
    status: "pendente", // pendente | aprovado | bloqueado
    criadoEm: new Date().toISOString()
  };

  motoristas.push(novoMotorista);

  localStorage.setItem("motoristas", JSON.stringify(motoristas));

  // salva ID atual (fluxo para página 5)
  localStorage.setItem("motoristaAtualId", novoMotorista.id);

  return true;
}


/* =========================
   BUSCAR MOTORISTA
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
   ATUALIZAR MOTORISTA (PÁGINA 5)
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
   BLOQUEAR MOTORISTA
========================= */
function bloquearMotorista(id){

  atualizarMotorista(id, {
    status: "bloqueado"
  });

}


/* =========================
   APROVAR MOTORISTA
========================= */
function aprovarMotorista(id){

  atualizarMotorista(id, {
    status: "aprovado"
  });

}


/* =========================
   REMOVER MOTORISTA
========================= */
function removerMotorista(id){

  motoristas = motoristas.filter(m => m.id !== id);

  localStorage.setItem("motoristas", JSON.stringify(motoristas));
}


/* =========================
   MOTORISTA ATUAL (FLUXO)
========================= */
function getMotoristaAtualId(){
  return localStorage.getItem("motoristaAtualId");
}

function limparMotoristaAtual(){
  localStorage.removeItem("motoristaAtualId");
}
