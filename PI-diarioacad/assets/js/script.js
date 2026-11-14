/* ==========================================================================
   1. CAPTURA DOS ELEMENTOS DO HTML
   Aqui selecionamos os elementos da página que vamos manipular com o código.
   ========================================================================== */
const btnAluno = document.getElementById("btn-aluno");
const btnProfessor = document.getElementById("btn-professor");
const btnCoordenador = document.getElementById("btn-coordenador");

const labelIdentifier = document.getElementById("labelIdentifier");
const inputIdentifier = document.getElementById("identifier");
const loginForm = document.getElementById("loginForm");

/* Variável de controle para saber qual perfil está selecionado no momento */
let perfilAtual = "aluno";

/* ==========================================================================
   2. FUNÇÃO AUXILIAR PARA LIMPAR AS ABAS
   Remove a classe 'active' de todos os botões de perfil para garantir 
   que apenas o botão clicado fique destacado.
   ========================================================================== */
function limparSelecaoAbas() {
  btnAluno.classList.remove("active");
  btnProfessor.classList.remove("active");
  btnCoordenador.classList.remove("active");
}

/* ==========================================================================
   3. CONFIGURAÇÃO DE EVENTOS DE CLIQUE NAS ABAS
   Altera dinamicamente os textos e placeholders do campo de identificação 
   dependendo se o usuário clicou em Aluno, Professor ou Coordenador.
   ========================================================================== */

// Quando clica na aba Aluno
btnAluno.addEventListener("click", function () {
  limparSelecaoAbas();
  btnAluno.classList.add("active");

  perfilAtual = "aluno";
  labelIdentifier.textContent = "RA (Registro Acadêmico)";
  inputIdentifier.placeholder = "Digite seu RA";
  inputIdentifier.value = ""; // Limpa o campo ao trocar
});

// Quando clica na aba Professor
btnProfessor.addEventListener("click", function () {
  limparSelecaoAbas();
  btnProfessor.classList.add("active");

  perfilAtual = "professor";
  labelIdentifier.textContent = "Matrícula do Professor";
  inputIdentifier.placeholder = "Digite sua matrícula";
  inputIdentifier.value = "";
});

// Quando clica na aba Coordenador
btnCoordenador.addEventListener("click", function () {
  limparSelecaoAbas();
  btnCoordenador.classList.add("active");

  perfilAtual = "coordenador";
  labelIdentifier.textContent = "CPF / Identificador";
  inputIdentifier.placeholder = "Digite seu CPF ou ID";
  inputIdentifier.value = "";
});

/* ==========================================================================
   4. SIMULAÇÃO DO ENVIO DO FORMULÁRIO (LOGIN)
   Como vocês ainda não viram API ou Backend na faculdade, esta função 
   simula a autenticação e redireciona para a página correta de cada perfil.
   ========================================================================== */
loginForm.addEventListener("submit", function (event) {
  // Evita que a página recarregue ao enviar o formulário
  event.preventDefault();

  const identificador = inputIdentifier.value;
  const senha = document.getElementById("password").value;

  // Validação simples apenas para demonstração visual
  if (identificador === "" || senha === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Redireciona o usuário para a página específica baseada no perfil escolhido
  if (perfilAtual === "aluno") {
    alert("Login de Aluno realizado com sucesso!");
    window.location.href = "aluno.html"; // Vai para a tela do aluno
  } else if (perfilAtual === "professor") {
    alert("Login de Professor realizado com sucesso!");
    window.location.href = "professor.html"; // Vai para a tela do professor
  } else if (perfilAtual === "coordenador") {
    alert("Login de Coordenador realizado com sucesso!");
    window.location.href = "coordenador.html"; // Vai para a tela do coordenador
  }
});
