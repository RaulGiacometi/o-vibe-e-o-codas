// Captura dos elementos do HTML
const btnAluno = document.getElementById("btn-aluno");
const btnProfessor = document.getElementById("btn-professor");
const btnCoordenador = document.getElementById("btn-coordenador");

const labelIdentifier = document.getElementById("labelIdentifier");
const inputIdentifier = document.getElementById("identifier");

// Função auxiliar para remover a classe 'active' de todos os botões
function limparSelecao() {
    btnAluno.classList.remove("active");
    btnProfessor.classList.remove("active");
    btnCoordenador.classList.remove("active");
}

// Eventos de clique para alterar a interface
btnAluno.addEventListener("click", function () {
    limparSelecao();
    btnAluno.classList.add("active");
    labelIdentifier.textContent = "RA (Registro Acadêmico)";
    inputIdentifier.placeholder = "Digite seu RA";
});

btnProfessor.addEventListener("click", function () {
    limparSelecao();
    btnProfessor.classList.add("active");
    labelIdentifier.textContent = "Matrícula do Professor";
    inputIdentifier.placeholder = "Digite sua matrícula";
});

btnCoordenador.addEventListener("click", function () {
    limparSelecao();
    btnCoordenador.classList.add("active");
    labelIdentifier.textContent = "CPF / Identificador";
    inputIdentifier.placeholder = "Digite seu CPF ou ID";
});
