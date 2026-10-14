let dados = {};
let paginaAtual = 'inicio';

// Carregar dados do JSON
async function carregarDados() {
    try {
        const response = await fetch('dados.json');
        dados = await response.json();
        inicializarSite();
    } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
        alert('Erro ao carregar os dados do site. Verifique o arquivo dados.json');
    }
}

// Inicializar o site
function inicializarSite() {
    // Atualizar título da página
    document.title = dados.site.titulo;
    document.getElementById('site-titulo').textContent = dados.site.titulo;
    document.getElementById('rodape-texto').textContent = `${dados.site.autor} - Educação Política e Construção Coletiva`;

    // Criar menu de navegação
    criarMenu();

    // Carregar página inicial
    carregarPagina('inicio');
}

// Criar menu de navegação
function criarMenu() {
    const menuNav = document.getElementById('menu-nav');
    menuNav.innerHTML = '';

    dados.menu.forEach(item => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = item.nome;
        link.className = item.id === paginaAtual ? 'ativo' : '';
        link.onclick = (e) => {
            e.preventDefault();
            carregarPagina(item.id);
        };
        menuNav.appendChild(link);
    });
}

// Carregar página
function carregarPagina(id) {
    paginaAtual = id;
    const pagina = dados.paginas[id];

    if (!pagina) {
        console.error(`Página ${id} não encontrada`);
        return;
    }

    // Atualizar conteúdo
    const conteudo = document.getElementById('conteudo-principal');
    conteudo.innerHTML = `
        <h2>${pagina.titulo}</h2>
        <p>${pagina.conteudo.split('\n').map(p => p.trim()).filter(p => p).join('</p><p>')}</p>
    `;

    // Mostrar/esconder seções de recursos
    document.getElementById('secao-livros').style.display = id === 'recursos' ? 'block' : 'none';
    document.getElementById('secao-videos').style.display = id === 'videos' ? 'block' : 'none';

    // Carregar livros se estiver na página de recursos
    if (id === 'recursos') {
        carregarLivros();
    }

    // Carregar vídeos se estiver na página de vídeos
    if (id === 'videos') {
        carregarVideos();
    }

    // Atualizar menu ativo
    document.querySelectorAll('#menu-nav a').forEach(link => {
        link.classList.remove('ativo');
    });
    document.querySelectorAll('#menu-nav a').forEach(link => {
        if (link.textContent === dados.menu.find(m => m.id === id)?.nome) {
            link.classList.add('ativo');
        }
    });

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Carregar livros
function carregarLivros() {
    const listaLivros = document.getElementById('lista-livros');
    listaLivros.innerHTML = '';

    dados.livros.forEach(livro => {
        const card = document.createElement('div');
        card.className = 'card-recurso';
        card.innerHTML = `
            <h3>${livro.titulo}</h3>
            <p class="autor">por ${livro.autor}</p>
            <p>${livro.descricao}</p>
            <a href="${livro.url}" target="_blank" class="botao">Acessar</a>
        `;
        listaLivros.appendChild(card);
    });
}

// Carregar vídeos
function carregarVideos() {
    const listaVideos = document.getElementById('lista-videos');
    listaVideos.innerHTML = '';

    dados.videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'card-recurso';
        card.innerHTML = `
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
            <a href="${video.url}" target="_blank" class="botao">Assistir</a>
        `;
        listaVideos.appendChild(card);
    });
}

// Funções do Pop-up do Quiz
function fecharPopup() {
    const popup = document.getElementById('popup-quiz');
    popup.style.display = 'none';
    localStorage.setItem('popup-quiz-fechado', 'true');
}

function irParaQuiz() {
    window.location.href = 'quiz.html';
}

// Mostrar pop-up apenas se não foi fechado antes
function mostrarPopupSeNecessario() {
    if (!localStorage.getItem('popup-quiz-fechado')) {
        document.getElementById('popup-quiz').style.display = 'flex';
    } else {
        document.getElementById('popup-quiz').style.display = 'none';
    }
}

// Fechar pop-up ao clicar fora dele
document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup-quiz');
    if (popup && event.target === popup) {
        fecharPopup();
    }
});

// Iniciar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    carregarDados();
    mostrarPopupSeNecessario();
});
