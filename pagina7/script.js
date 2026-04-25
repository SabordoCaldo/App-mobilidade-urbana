document.addEventListener("DOMContentLoaded", function(){

  const dados = JSON.parse(localStorage.getItem("motoristas")) || [];

  if(dados.length === 0) return;

  const m = dados[dados.length - 1];

  // STATUS
  if(m.status === "aprovado"){
    window.location.href = "../pagina8/index.html";
    return;
  }

  // DADOS
  document.getElementById("nome").innerText = m.nome;
  document.getElementById("telefone").innerText = m.telefone;
  document.getElementById("endereco").innerText = m.endereco;
  document.getElementById("cnh").innerText = m.cnh;

  document.getElementById("placa").innerText = m.placa;
  document.getElementById("modelo").innerText = m.modelo;
  document.getElementById("cor").innerText = m.cor;
  document.getElementById("ano").innerText = m.ano;
  document.getElementById("renavan").innerText = m.renavan;

  document.getElementById("fotoPerfil").src = m.fotoPerfil || "foto/avatar-padrao.png";

});
