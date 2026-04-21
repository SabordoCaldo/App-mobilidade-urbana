function toggleSenha(){
  const input = document.getElementById("senha");
  const icone = document.getElementById("iconeSenha");

  if(input.type === "password"){
    input.type = "text";
    icone.innerHTML = "🙈";
    icone.style.color = "red";
  } else {
    input.type = "password";
    icone.innerHTML = "👁";
    icone.style.color = "#999";
  }
}
