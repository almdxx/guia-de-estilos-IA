// Carrega os dados assim que a página abre para não ficar vazio
window.onload = () => {
    carregarTodosDados();
};

function carregarTodosDados() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        resultados += criarCardHTML(dado);
    }

    section.innerHTML = resultados;
}

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo estiver vazio, recarrega todos os dados
    if (!campoPesquisa) {
        carregarTodosDados();
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tagsString = Array.isArray(dado.tags) ? dado.tags.join(" ").toLowerCase() : dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tagsString.includes(campoPesquisa)) {
            resultados += criarCardHTML(dado);
        }
    }

    if (!resultados) {
        resultados = `
            <div style="text-align:center; color: #666; margin-top: 2rem;">
                <p>Nenhum estilo encontrado com esse nome.</p>
                <button onclick="carregarTodosDados()" style="margin-top:10px; background:transparent; border:1px solid #444; color:#aaa; padding:8px 16px; border-radius:4px; cursor:pointer;">
                    Ver todos os estilos
                </button>
            </div>
        `;
    }

    section.innerHTML = resultados;
}

// Função para os botões de atalho (Chips)
function botaoBusca(valor) {
    document.getElementById("campo-pesquisa").value = valor;
    pesquisar();
}

// Função auxiliar para criar o HTML do card (evita repetição de código)
function criarCardHTML(dado) {
    let tagsHTML = "";
    if (Array.isArray(dado.tags)) {
        for (let tag of dado.tags) {
            tagsHTML += `<span class="tag">#${tag}</span>`;
        }
    }

    return `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            
            <div class="prompt-box">
                <span class="prompt-label">Prompt Sugerido:</span>
                <p class="prompt-text">${dado.prompt}</p>
                <button class="btn-copy" onclick="copiarPrompt('${dado.prompt}')" title="Copiar Prompt" aria-label="Copiar prompt">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>

            <div class="tags-container">
                ${tagsHTML}
            </div>

            <a href="${dado.link}" target="_blank" class="btn-link">
                Saiba mais sobre o estilo <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    `;
}

// Função ATUALIZADA para copiar com Toast Notification
function copiarPrompt(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        // Pega a div do toast
        let toast = document.getElementById("toast");
        
        // Adiciona a classe que torna visível
        toast.className = "show";
        
        // Depois de 3 segundos, remove a classe para sumir
        setTimeout(function(){ 
            toast.className = toast.className.replace("show", ""); 
        }, 3000);
    });
}