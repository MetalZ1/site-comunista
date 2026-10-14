const questoes = [
    {
        numero: 1,
        pergunta: "Você acha que vivemos numa sociedade comunista no Brasil?",
        respostaCorreta: "nao",
        explicacao: "Vivemos num sistema capitalista. O Brasil é uma república democrática, mas a economia é baseada no lucro privado e na propriedade particular dos meios de produção."
    },
    {
        numero: 2,
        pergunta: "Todos de esquerda são comunistas?",
        respostaCorreta: "nao",
        explicacao: "Não! A esquerda é um espectro amplo. Existem socialistas, social-democratas, progressistas e muitas outras vertentes. Comunismo é uma ideologia específica dentro da esquerda."
    },
    {
        numero: 3,
        pergunta: "O comunismo é uma ditadura?",
        respostaCorreta: "nao",
        explicacao: "Comunismo é uma ideologia, não um regime. Ditadura é um sistema de governo. Alguns países comunistas tiveram ditaduras, mas nem todo comunismo é ditadura. É como confundir capitalismo com democracia."
    },
    {
        numero: 4,
        pergunta: "No comunismo, você seria dono da sua casa e do seu carro?",
        respostaCorreta: "sim",
        explicacao: "Sim! No comunismo, as pessoas têm propriedade pessoal (casa, roupas, carro). O que é coletivo é a propriedade dos meios de produção (fábricas, terras agrícolas, etc)."
    },
    {
        numero: 5,
        pergunta: "No comunismo todos recebem a mesma coisa?",
        respostaCorreta: "nao",
        explicacao: "Não é exatamente assim. A frase é 'de cada um segundo sua capacidade, a cada um segundo sua necessidade'. Ou seja, a distribuição leva em conta as diferentes necessidades das pessoas."
    }
];

let respostas = {};
let questaoAtual = 0;

// Inicializar o quiz
document.addEventListener('DOMContentLoaded', function() {
    construirQuiz();
    atualizarProgresso();
});

function construirQuiz() {
    const container = document.getElementById('questoes-container');
    container.innerHTML = '';

    questoes.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'questao' + (index === 0 ? '' : ' escondida');
        div.id = 'questao-' + (index + 1);

        div.innerHTML = `
            <div class="questao-numero">Questão ${q.numero} de ${questoes.length}</div>
            <h2>${q.pergunta}</h2>

            <div class="opcoes">
                <div class="opcao">
                    <input type="radio" id="sim-${index}" name="questao-${index}" value="sim"
                           onchange="selecionarResposta(${index}, 'sim')">
                    <label for="sim-${index}">Sim</label>
                </div>
                <div class="opcao">
                    <input type="radio" id="nao-${index}" name="questao-${index}" value="nao"
                           onchange="selecionarResposta(${index}, 'nao')">
                    <label for="nao-${index}">Não</label>
                </div>
            </div>

            <button class="btn-prosseguir" id="btn-${index}" disabled onclick="proximaQuestao(${index})">
                ${index === questoes.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}
            </button>
        `;

        container.appendChild(div);
    });
}

function selecionarResposta(index, resposta) {
    respostas[index] = resposta;

    // Habilitar botão de prosseguir
    document.getElementById('btn-' + index).disabled = false;
}

function proximaQuestao(index) {
    if (index === questoes.length - 1) {
        // Última questão - mostrar resultado
        mostrarResultado();
    } else {
        // Próxima questão
        document.getElementById('questao-' + (index + 1)).classList.add('escondida');
        document.getElementById('questao-' + (index + 2)).classList.remove('escondida');
        questaoAtual = index + 1;
        atualizarProgresso();
        window.scrollTo(0, 0);
    }
}

function atualizarProgresso() {
    const percentual = ((questaoAtual + 1) / questoes.length) * 100;
    document.getElementById('progresso').style.width = percentual + '%';
}

function mostrarResultado() {
    // Esconder questões
    document.getElementById('questoes-container').style.display = 'none';

    // Calcular pontuação
    let pontos = 0;
    const detalhes = [];

    questoes.forEach((q, index) => {
        const resposta = respostas[index];
        const acertou = resposta === q.respostaCorreta;

        if (acertou) {
            pontos++;
        }

        detalhes.push({
            numero: q.numero,
            pergunta: q.pergunta,
            respostaUsuario: resposta,
            respostaCorreta: q.respostaCorreta,
            acertou: acertou,
            explicacao: q.explicacao
        });
    });

    // Determinar mensagem baseada na pontuação
    let titulo, mensagem, feedback, cor;

    if (pontos === 5) {
        titulo = "🎉 Você está bem informado!";
        mensagem = `Parabéns! Você acertou todas as ${questoes.length} questões!`;
        feedback = "Você demonstra ter conhecimento sólido sobre o comunismo e as ideias associadas a ele. Continue estudando e compartilhando esse conhecimento!";
        cor = "#4caf50";
    } else if (pontos >= 4) {
        titulo = "👍 Conhecimento bom!";
        mensagem = `Você acertou ${pontos} de ${questoes.length} questões.`;
        feedback = "Você tem uma compreensão básica sobre o comunismo, mas há pontos que podem ser melhorados. Revise as respostas abaixo e continue estudando.";
        cor = "#2196f3";
    } else if (pontos >= 3) {
        titulo = "📚 Continue estudando!";
        mensagem = `Você acertou ${pontos} de ${questoes.length} questões.`;
        feedback = "Você tem uma noção geral, mas há conceitos importantes que precisam ser esclarecidos. Leia as explicações abaixo e explore mais sobre o assunto.";
        cor = "#ff9800";
    } else {
        titulo = "⚠️ Seus conhecimentos precisam melhorar";
        mensagem = `Você acertou apenas ${pontos} de ${questoes.length} questões.`;
        feedback = "Parece que você foi realmente enganado sobre o comunismo! Mas não se preocupe, isso é comum. Leia as explicações abaixo, acesse nossos recursos e descubra a verdade.";
        cor = "#f44336";
    }

    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('escondido');
    resultadoDiv.style.borderLeft = `6px solid ${cor}`;

    let html = `
        <h2>${titulo}</h2>
        <div class="resultado-pontos">${pontos}/${questoes.length}</div>
        <p class="resultado-mensagem">${mensagem}</p>
        <div class="resultado-feedback">${feedback}</div>

        <h3 style="margin-top: 40px; color: #B3121F;">Detalhamento das Respostas:</h3>
    `;

    detalhes.forEach(d => {
        const icone = d.acertou ? '✅' : '❌';
        const statusClass = d.acertou ? 'acertou' : 'errou';

        html += `
            <div class="resultado-feedback" style="margin-top: 20px;">
                <div style="font-weight: 600; margin-bottom: 10px;">
                    ${icone} Questão ${d.numero}: ${d.pergunta}
                </div>
                <p style="margin: 10px 0; font-size: 14px;">
                    <strong>Sua resposta:</strong> ${d.respostaUsuario.toUpperCase()}
                </p>
                <p style="margin: 10px 0; font-size: 14px;">
                    <strong>Resposta correta:</strong> ${d.respostaCorreta.toUpperCase()}
                </p>
                <p style="margin: 10px 0; font-style: italic; color: #333;">
                    ${d.explicacao}
                </p>
            </div>
        `;
    });

    html += `
        <button class="btn-voltar" onclick="voltarAoSite()">← Voltar ao Site</button>
    `;

    resultadoDiv.innerHTML = html;
    document.getElementById('progresso').style.width = '100%';
    window.scrollTo(0, 0);
}

function voltarAoSite() {
    window.location.href = 'index.html';
}
