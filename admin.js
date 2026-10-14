let dados = {};

// Carregar dados ao abrir a página
document.addEventListener('DOMContentLoaded', carregarDados);

async function carregarDados() {
    try {
        const response = await fetch('dados.json');
        dados = await response.json();
        inicializarAdmin();
        mostrarMensagem('Dados carregados com sucesso!', 'sucesso');
    } catch (erro) {
        mostrarMensagem('Erro ao carregar dados: ' + erro.message, 'erro');
    }
}

function inicializarAdmin() {
    atualizarPaginas();
    atualizarMenu();
    atualizarLivros();
    atualizarVideos();
    atualizarConfiguracoes();
}

// ==================== ABAS ====================
function mudarAba(abaId) {
    // Esconder todas as abas
    document.querySelectorAll('.aba-conteudo').forEach(aba => {
        aba.classList.remove('ativo');
    });
    document.querySelectorAll('.aba-btn').forEach(btn => {
        btn.classList.remove('ativo');
    });

    // Mostrar aba selecionada
    document.getElementById(abaId).classList.add('ativo');
    event.target.classList.add('ativo');
}

// ==================== PÁGINAS ====================
function atualizarPaginas() {
    const seletor = document.getElementById('seletor-pagina');
    seletor.innerHTML = '<option value="">-- Selecione --</option>';

    Object.keys(dados.paginas).forEach(id => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = dados.paginas[id].titulo;
        seletor.appendChild(option);
    });
}

function carregarPagina() {
    const id = document.getElementById('seletor-pagina').value;
    if (!id) return;

    const pagina = dados.paginas[id];
    const form = document.getElementById('form-pagina');

    form.innerHTML = `
        <div class="form-group">
            <label>Título:</label>
            <input type="text" id="edit-titulo" value="${pagina.titulo}">
        </div>
        <div class="form-group">
            <label>Conteúdo (use quebras de linha):</label>
            <textarea id="edit-conteudo">${pagina.conteudo}</textarea>
        </div>
        <button class="btn" onclick="salvarPagina('${id}')">Salvar Página</button>
    `;
}

function salvarPagina(id) {
    dados.paginas[id].titulo = document.getElementById('edit-titulo').value;
    dados.paginas[id].conteudo = document.getElementById('edit-conteudo').value;
    mostrarMensagem('Página salva! Clique em "Salvar Tudo" para finalizar.', 'sucesso');
}

// ==================== MENU ====================
function atualizarMenu() {
    const lista = document.getElementById('lista-menu');
    lista.innerHTML = '';

    dados.menu.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item-list';
        div.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 10px; align-items: end;">
                <input type="text" placeholder="Nome" value="${item.nome}"
                       onchange="dados.menu[${index}].nome = this.value">
                <input type="text" placeholder="ID" value="${item.id}"
                       onchange="dados.menu[${index}].id = this.value">
                <button class="btn btn-remover btn-pequeno" onclick="removerMenu(${index})">Remover</button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function adicionarMenuItem() {
    dados.menu.push({
        nome: "Novo Item",
        id: "novo-item-" + Date.now()
    });
    atualizarMenu();
}

function removerMenu(index) {
    if (confirm('Tem certeza que quer remover este item?')) {
        dados.menu.splice(index, 1);
        atualizarMenu();
    }
}

// ==================== LIVROS ====================
function atualizarLivros() {
    const lista = document.getElementById('lista-livros');
    lista.innerHTML = '';

    dados.livros.forEach((livro, index) => {
        const div = document.createElement('div');
        div.className = 'item-list';
        div.innerHTML = `
            <h3>${livro.titulo}</h3>
            <div class="form-group">
                <label>Título:</label>
                <input type="text" value="${livro.titulo}"
                       onchange="dados.livros[${index}].titulo = this.value">
            </div>
            <div class="form-group">
                <label>Autor:</label>
                <input type="text" value="${livro.autor}"
                       onchange="dados.livros[${index}].autor = this.value">
            </div>
            <div class="form-group">
                <label>Descrição:</label>
                <input type="text" value="${livro.descricao}"
                       onchange="dados.livros[${index}].descricao = this.value">
            </div>
            <div class="form-group">
                <label>URL:</label>
                <input type="text" value="${livro.url}"
                       onchange="dados.livros[${index}].url = this.value">
            </div>
            <button class="btn btn-remover" onclick="removerLivro(${index})">Remover Livro</button>
        `;
        lista.appendChild(div);
    });
}

function adicionarLivro() {
    dados.livros.push({
        titulo: "Novo Livro",
        autor: "Autor",
        descricao: "Descrição",
        url: "https://exemplo.com"
    });
    atualizarLivros();
}

function removerLivro(index) {
    if (confirm('Tem certeza que quer remover este livro?')) {
        dados.livros.splice(index, 1);
        atualizarLivros();
    }
}

// ==================== VÍDEOS ====================
function atualizarVideos() {
    const lista = document.getElementById('lista-videos');
    lista.innerHTML = '';

    dados.videos.forEach((video, index) => {
        const div = document.createElement('div');
        div.className = 'item-list';
        div.innerHTML = `
            <h3>${video.titulo}</h3>
            <div class="form-group">
                <label>Título:</label>
                <input type="text" value="${video.titulo}"
                       onchange="dados.videos[${index}].titulo = this.value">
            </div>
            <div class="form-group">
                <label>Descrição:</label>
                <input type="text" value="${video.descricao}"
                       onchange="dados.videos[${index}].descricao = this.value">
            </div>
            <div class="form-group">
                <label>URL:</label>
                <input type="text" value="${video.url}"
                       onchange="dados.videos[${index}].url = this.value">
            </div>
            <button class="btn btn-remover" onclick="removerVideo(${index})">Remover Vídeo</button>
        `;
        lista.appendChild(div);
    });
}

function adicionarVideo() {
    dados.videos.push({
        titulo: "Novo Vídeo",
        descricao: "Descrição",
        url: "https://youtube.com/watch?v=VIDEO_ID"
    });
    atualizarVideos();
}

function removerVideo(index) {
    if (confirm('Tem certeza que quer remover este vídeo?')) {
        dados.videos.splice(index, 1);
        atualizarVideos();
    }
}

// ==================== CONFIGURAÇÕES ====================
function atualizarConfiguracoes() {
    document.getElementById('site-titulo').value = dados.site.titulo;
    document.getElementById('site-descricao').value = dados.site.descricao;
    document.getElementById('site-autor').value = dados.site.autor;
}

function salvarConfiguracoes() {
    dados.site.titulo = document.getElementById('site-titulo').value;
    dados.site.descricao = document.getElementById('site-descricao').value;
    dados.site.autor = document.getElementById('site-autor').value;
    mostrarMensagem('Configurações salvas! Clique em "Salvar Tudo" para finalizar.', 'sucesso');
}

// ==================== SALVAR E EXPORTAR ====================
function salvarTudo() {
    localStorage.setItem('dados-site', JSON.stringify(dados));
    mostrarMensagem('✅ Todos os dados foram salvos! Agora clique em "Exportar JSON".', 'sucesso');
}

function exportarJSON() {
    const dataStr = JSON.stringify(dados, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dados.json';
    link.click();
    mostrarMensagem('📥 Arquivo dados.json baixado! Substitua o antigo e faça git push.', 'sucesso');
}

function mostrarMensagem(texto, tipo) {
    const msg = document.getElementById('mensagem');
    msg.textContent = texto;
    msg.className = 'mensagem ' + tipo;
    setTimeout(() => {
        msg.className = 'mensagem';
    }, 5000);
}
