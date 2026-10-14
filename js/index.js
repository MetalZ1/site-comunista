// Conteúdo das páginas
const paginas = {
    inicio: {
        titulo: "Se todos fossem patrões, quem trabalharia?",
        conteudo: `<p>Todo mundo quer viver melhor. Ter uma casa, cuidar da família, aproveitar a vida e não passar os dias preocupado com as contas.</p>

<p>Muitos sonham em deixar de trabalhar para os outros e se tornarem patrões. Outros esperam um dia conseguir viver dos próprios investimentos.</p>

<p>Mas existe uma questão que raramente fazemos: <strong>Se todos fossem patrões, quem iria produzir tudo aquilo de que precisamos?</strong></p>`
    },

    "direita-esquerda": {
        titulo: "O que são \"direita\" e \"esquerda\"?",
        conteudo: `<p>Esses termos estão em toda parte atualmente, mas a verdade é que eles não querem dizer muita coisa. Direita e esquerda são termos sem conteúdo e variam bastante conforme a política de cada país e os partidos envolvidos. O que podemos afirmar é que ambas acreditam no capitalismo! Cada um à sua maneira...</p>

<p>No contexto do Brasil, os termos normalmente são utilizados no seguinte sentido:</p>

<h3>A Esquerda</h3>
<p>Acredita que o mercado tem falhas que precisam ser consertadas pelo Estado! Ou seja, eles defendem uma maior intervenção para corrigir essas falhas e manter o capitalismo acontecendo, mesmo com todos os seus problemas.</p>

<h3>A Direita</h3>
<p>Por outro lado, acredita que o Estado deve agir o mínimo possível. Sendo o Estado uma entidade externa ao mercado, suas ações na maioria das vezes acabaria por perturbar a ordem natural do livre comércio e prejudicar a vida das pessoas.</p>

<p>Na prática, essa diferença não é tão grande, principalmente nos dias de hoje. O que nós podemos ter certeza é o seguinte: os dois lados governam para que os ricos continuem a explorar nosso trabalho. Sabe essa sua impressão de que não importa o governo, os políticos nunca estão de fato do lado do povo? Pois é. Você também já tinha percebido!</p>

<h3>Pera aí, você ta me dizendo então que o Comunismo não é de esquerda?</h3>

<p>De certo modo, é isso mesmo! O comunismo não é uma maneira de tentar administrar o capitalismo. Nós sabemos que tanto a Esquerda quanto a Direita vão falhar em fornecer uma sociedade justa para 99% da população.</p>

<p>O que nós defendemos é uma mudança na forma em que a sociedade se organiza.</p>

<p>Eu sei que isso dá medo, mas calma! Todos nós já ouvimos os maiores absurdos sobre países comunistas e é normal ter esse receio. Mas se isso fosse verdade mesmo, porquê alguém em sã consciência defenderia essas ideias?</p>

<p>Neste site você terá todos os materiais disponíveis para tirar suas próprias conclusões sobre o tema, mesmo que seja para discordar de nós!</p>

<p><strong>Nos vemos nos próximos materiais.<br>Até lá!</strong></p>`
    },

    sobre: {
        titulo: "Sobre este site",
        conteudo: `<p>Este site é um espaço de educação política e reflexão sobre alternativas ao sistema capitalista.</p>

<p>A Frente Aberta acredita que é possível construir uma sociedade mais justa, onde o trabalho seja coletivo e equitativo.</p>

<p>Não se trata de eliminar o trabalho, mas de distribuí-lo justamente, eliminando a exploração e permitindo que as pessoas trabalhem por vocação, não por necessidade de sobrevivência.</p>`
    },

    reflexao: {
        titulo: "A Resposta",
        conteudo: `<p>A verdade é que <strong>alguém sempre precisará trabalhar</strong>. Nas sociedades capitalistas, criou-se uma ilusão: a de que qualquer um pode se tornar patrão e viver sem trabalhar.</p>

<p>Mas matematicamente, isso é impossível. Se 100% das pessoas fossem donas de empresa, quem seria o operário? Quem plantaria, construiria, fabricaria?</p>

<p>Uma sociedade comunista propõe algo diferente: que o trabalho seja coletivo e equitativo.</p>

<h3>Isso significa:</h3>
<ul>
<li>Distribuir o trabalho justamente entre todos</li>
<li>Eliminar a exploração - quem trabalha fica com o fruto de seu trabalho</li>
<li>Trabalhar menos - com eficiência e tecnologia, menos horas seriam necessárias</li>
<li>Escolher o que faz - trabalho por vocação, não por necessidade de sobrevivência</li>
</ul>

<p>Em vez de competir para ser o chefe, cooperamos para construir algo melhor para todos.</p>`
    },

    recursos: {
        titulo: "Recursos e Materiais",
        conteudo: `<p>Aqui você encontra livros, artigos e materiais em domínio público para aprofundar seus conhecimentos sobre comunismo e teorias sociais.</p>`
    },

    videos: {
        titulo: "Vídeos Recomendados",
        conteudo: `<p>Uma seleção de vídeos para ajudar você a entender melhor as ideias comunistas e alternativas ao capitalismo.</p>`
    }
};

// Livros
const livros = [
    {
        titulo: "O Manifesto Comunista",
        autor: "Karl Marx e Friedrich Engels",
        descricao: "O documento fundamental do comunismo, publicado em 1848.",
        url: "https://www.marxists.org/portugues/marx/1848/manifest/index.htm"
    },
    {
        titulo: "O Capital (Resumo)",
        autor: "Karl Marx",
        descricao: "Análise do sistema capitalista de produção.",
        url: "https://www.marxists.org/portugues/marx/index.htm"
    },
    {
        titulo: "Introdução ao Marxismo",
        autor: "Ernest Mandel",
        descricao: "Guia acessível para entender o marxismo.",
        url: "https://www.marxists.org/portugues/mandel/index.htm"
    }
];

// Vídeos
const videos = [
    {
        titulo: "O que é Comunismo?",
        descricao: "Vídeo introdutório sobre conceitos básicos do comunismo",
        url: "https://www.youtube.com/watch?v=VIDEO_ID_AQUI"
    },
    {
        titulo: "História do Comunismo",
        descricao: "Documentário sobre a história dos movimentos comunistas",
        url: "https://www.youtube.com/watch?v=VIDEO_ID_AQUI"
    },
    {
        titulo: "Capitalismo vs Comunismo",
        descricao: "Comparação entre os dois sistemas",
        url: "https://www.youtube.com/watch?v=VIDEO_ID_AQUI"
    }
];

// Função para mostrar página
function mostrarPagina(id) {
    const pagina = paginas[id];
    if (!pagina) return;

    // Atualizar conteúdo
    document.getElementById('conteudo-principal').innerHTML = `<h2>${pagina.titulo}</h2>${pagina.conteudo}`;

    // Mostrar/esconder seções
    document.getElementById('secao-livros').style.display = id === 'recursos' ? 'block' : 'none';
    document.getElementById('secao-videos').style.display = id === 'videos' ? 'block' : 'none';

    // Carregar livros e vídeos
    if (id === 'recursos') carregarLivros();
    if (id === 'videos') carregarVideos();

    // Atualizar menu ativo
    document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('ativo'));
    event.target.classList.add('ativo');

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Carregar livros
function carregarLivros() {
    const lista = document.getElementById('lista-livros');
    lista.innerHTML = livros.map(livro => `
        <div class="card-recurso">
            <h3>${livro.titulo}</h3>
            <p class="autor">por ${livro.autor}</p>
            <p>${livro.descricao}</p>
            <a href="${livro.url}" target="_blank" class="botao">Acessar</a>
        </div>
    `).join('');
}

// Carregar vídeos
function carregarVideos() {
    const lista = document.getElementById('lista-videos');
    lista.innerHTML = videos.map(video => `
        <div class="card-recurso">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
            <a href="${video.url}" target="_blank" class="botao">Assistir</a>
        </div>
    `).join('');
}

// Funções do pop-up
function fecharPopup() {
    document.getElementById('popup-quiz').style.display = 'none';
    localStorage.setItem('popup-fechado', 'true');
}

function irParaQuiz() {
    window.location.href = 'quiz.html';
}

// Fechar pop-up ao clicar fora
document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup-quiz');
    if (popup && event.target === popup) {
        fecharPopup();
    }
});

// Mostrar pop-up na primeira vez
function mostrarPopup() {
    if (!localStorage.getItem('popup-fechado')) {
        document.getElementById('popup-quiz').style.display = 'flex';
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    mostrarPagina('inicio');
    mostrarPopup();
});
