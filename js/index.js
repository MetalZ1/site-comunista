const paginas = {
    inicio: {
        titulo: "Se todos fossem patrões, quem trabalharia?",
        conteudo: `<p>Todo mundo quer viver melhor. Ter uma casa, cuidar da família, aproveitar a vida e não passar os dias preocupado com as contas.</p>

<p>Muitos sonham em deixar de trabalhar para os outros e se tornarem patrões. Outros esperam um dia conseguir viver dos próprios investimentos.</p>

<p><em>Mas existe uma questão que raramente fazemos:</em></p>

<p><strong>Se todos fossem patrões, quem iria produzir tudo aquilo de que precisamos?</strong></p>`
    },

    "direita-esquerda": {
        titulo: "O que são \"direita\" e \"esquerda\"?",
        conteudo: `<p>Esses termos estão em toda parte atualmente, mas a verdade é que eles não querem dizer muita coisa. Direita e esquerda são termos sem conteúdo e variam bastante conforme a política de cada país e os partidos envolvidos. O que podemos afirmar é que ambas acreditam no capitalismo! Cada um à sua maneira...</p>

<p>No contexto do Brasil, os termos normalmente são utilizados no seguinte sentido:</p>

<p><strong>A Esquerda</strong> acredita que o mercado tem falhas que precisam ser consertadas pelo Estado! Ou seja, eles defendem uma maior intervenção para corrigir essas falhas e manter o capitalismo acontecendo, mesmo com todos os seus problemas.</p>

<p><strong>A Direita</strong>, por outro lado, acredita que o Estado deve agir o mínimo possível. Sendo o Estado uma entidade externa ao mercado, suas ações na maioria das vezes acabaria por perturbar a ordem natural do livre comércio e prejudicar a vida das pessoas.</p>

<p>Na prática, essa diferença não é tão grande, principalmente nos dias de hoje, mas isso é melhor tratado na aba "a importância do Estado no capitalismo atual", caso o leitor tenha interesse.</p>

<p>O que nós podemos ter certeza é o seguinte: os dois lados governam para que os ricos continuem a explorar nosso trabalho. Sabe essa sua impressão de que não importa o governo, os políticos nunca estão de fato do lado do povo? Pois é. Você também já tinha percebido!</p>

<h3>Pera aí, você ta me dizendo então que o Comunismo não é de esquerda?</h3>

<p>De certo modo, é isso mesmo! O comunismo não é uma maneira de tentar administrar o capitalismo. Nós sabemos que tanto a Esquerda quanto a Direita vão falhar em fornecer uma sociedade justa para 99% da população.</p>

<p>O que nós defendemos é uma mudança na forma em que a sociedade se organiza.</p>

<p>Eu sei que isso dá medo, mas calma! Todos nós já ouvimos os maiores absurdos sobre países comunistas e é normal ter esse receio. Mas se isso fosse verdade mesmo, porquê alguém em sã consciência defenderia essas ideias?</p>

<p>Neste site você terá todos os materiais disponíveis para tirar suas próprias conclusões sobre o tema, mesmo que seja para discordar de nós!</p>

<p>Nos vemos nos próximos materiais.<br>Até lá!</p>`
    },

    "trabalhadores-app": {
        titulo: "Trabalhadores de aplicativo: empreendedores ou trabalhadores assalariados?",
        conteudo: `<p>Você tem sua própria moto ou carro. Faz seus horários e decide quando ligar o aplicativo. Então, você é seu próprio patrão, não é mesmo?</p>

<p><strong>Pense melhor.</strong></p>

<p>Quem decide quanto você recebe por uma corrida? Quem estabelece as regras e pode bloquear seu acesso ao trabalho?</p>

<p>Você pode ser dono do carro, moto ou bicicleta, mas não controla o aplicativo que conecta você aos clientes. Sem o aplicativo, você não trabalha.</p>

<p>E o pior: ainda é você quem paga o combustível, a manutenção, a internet e os demais custos. Se o veículo quebra ou o movimento cai, o prejuízo é seu!</p>

<p>No final das contas, trabalhar nos aplicativos é apenas mais uma forma de trabalho assalariado. E a pior delas, sabia?</p>

<p>Karl Marx no século XIX já tinha se tocado disso. Na época, ele chamava de "trabalho por peça". Alguns trabalhadores ingleses trabalhavam de casa com seus próprios equipamentos e entregavam para a empresa a que estava vinculado as peças que havia produzido. O salário, então, era pago por cada peça.</p>

<p>E por que Marx falava que esse é a pior modalidade para o trabalhador? Porque para a empresa, ela é a melhor!</p>

<p>O empregador não mais precisa fornecer as máquinas e equipamentos de trabalho, não precisa gastar com manutenção, férias, 13º e, além de tudo, consegue transferir todo o risco para o trabalhador.</p>

<p>Caso você se machuque, nem um centavo lhe é direcionado. Mas quando tiver entrega a ser feita, a empresa sabe que pode contar com você para colocar o lucro no bolso dela, logo após te pagar uma mixaria.</p>

<p>A exploração nessa modalidade de trabalho é absurda. Tanto é que para manter níveis aceitáveis de remuneração os trabalhadores devem fazer jornadas cada vez maiores, aumentando muito o lucro da empresa e pouco o salário no final do dia.</p>

<h3>O que podemos fazer?</h3>

<p>O problema não se resolve com cada trabalhador tentando fazer mais corridas, trabalhar mais horas ou gastar menos.</p>

<p>Motoristas e entregadores dependem das mesmas plataformas e enfrentam problemas semelhantes. Por isso, podem se organizar coletivamente para exigir remuneração justa, transparência nas taxas e poder de decisão sobre as condições de trabalho.</p>

<p>Marx percebeu que o poder do capitalista sobre o trabalhador só existe enquanto o trabalhador deixar, sendo sua maior arma a organização! Leia mais sobre isso na seção "Qual foi a maior descoberta de Marx?".</p>

<p>Se milhares de trabalhadores são necessários para fazer essas empresas funcionarem, por que as regras são decididas tão longe de quem realiza o serviço?</p>

<p><strong>Leia. Questione. Organize-se.</strong></p>

<p>A riqueza é produzida por quem trabalha. Os rumos do trabalho também devem ser decididos por quem trabalha.</p>`
    }
};

function mostrarPagina(id) {
    const pagina = paginas[id];
    if (!pagina) return;

    document.getElementById('conteudo-principal').innerHTML = `<h2>${pagina.titulo}</h2>${pagina.conteudo}`;

    document.querySelectorAll('.menu-link').forEach(link => {
        link.classList.toggle('ativo', link.dataset.pagina === id);
    });

    window.scrollTo(0, 0);
}

function fecharPopup() {
    document.getElementById('popup-quiz').style.display = 'none';
}

function irParaQuiz() {
    window.location.href = 'quiz.html';
}

document.addEventListener('click', function(event) {
    if (event.target.id === 'popup-quiz') fecharPopup();
});

document.addEventListener('DOMContentLoaded', function() {
    mostrarPagina('inicio');
});
