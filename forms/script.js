var perguntas = [
    {
      pergunta: "Diversidade de Formatos: Uso apenas texto nas minhas postagens",
      opcoes: [
        "Uso apenas texto nas minhas postagens",
        "Utilizo imagens e/ou fotos para acompanhar o texto",
        "Produzo e compartilho vídeos ou lives regularmente",
        "Crio infográficos, apresentações e documentos para compartilhar"
      ]
    },
    {
      pergunta: "Frequência de Postagens: Posto menos de uma vez por semana",
      opcoes: [
        "Posto menos de uma vez por semana",
        "Posto pelo menos uma vez por semana",
        "Faço postagens várias vezes por semana",
        "Posto conteúdo todos os dias ou quase todos os dias"
      ]
    },
    {
      pergunta: "Engajamento e Interatividade: Recebo poucos ou nenhum comentário e curtidas",
      opcoes: [
        "Recebo poucos ou nenhum comentário e curtidas",
        "Recebo algum engajamento, como comentários e compartilhamentos",
        "Tenho um engajamento sólido com conversas regulares nos comentários",
        "Minhas postagens geram discussões extensas e muitos compartilhamentos"
      ]
    },
    {
      pergunta: "Qualidade e Relevância do Conteúdo: Meu conteúdo é básico e não se destaca",
      opcoes: [
        "Meu conteúdo é básico e não se destaca",
        "O conteúdo é informativo e ocasionalmente gera interesse",
        "Produzo conteúdo que é bem recebido e considerado útil por meus seguidores",
        "Meu conteúdo é considerado uma referência na minha área, gerando alto valor agregado"
      ]
    },
    {
      pergunta: "Consistência e Planejamento: Posto esporadicamente, sem planejamento",
      opcoes: [
        "Posto esporadicamente, sem planejamento",
        "Tenho uma programação básica, mas não sempre a sigo",
        "Sou consistente com meu calendário de postagens",
        "Planejo meu conteúdo estrategicamente com antecedência e mantenho consistência"
      ]
    },
    {
      pergunta: "Otimização de Perfil e SEO: Meu perfil está incompleto e não utilizo palavras-chave",
      opcoes: [
        "Meu perfil está incompleto e não utilizo palavras-chave",
        "Meu perfil está completo, mas não estou focado em SEO",
        "Incluo palavras-chave no meu perfil e em algumas postagens",
        "Meu perfil e conteúdos são otimizados para SEO, aumentando a visibilidade"
      ]
    },
    {
      pergunta: "Uso de Análises e Métricas: Não acompanho as métricas do LinkedIn",
      opcoes: [
        "Não acompanho as métricas do LinkedIn",
        "Olho ocasionalmente as métricas, mas não as uso estrategicamente",
        "Uso as métricas para entender o desempenho das postagens",
        "Analiso meticulosamente as métricas e as utilizo para otimizar meu conteúdo"
      ]
    },
    // Adicione mais perguntas conforme necessário
  ];
  
  var pontuacaoTotal = 0;
  var perguntaAtual = 0;
  
  function exibirPergunta() {
    var perguntaAtualObj = perguntas[perguntaAtual];
    document.getElementById("question").textContent = perguntaAtualObj.pergunta;
  
    var opcoesContainer = document.getElementById("options");
    opcoesContainer.innerHTML = "";
  
    for (var i = 0; i < perguntaAtualObj.opcoes.length; i++) {
      var botaoOpcao = document.createElement("button");
      botaoOpcao.textContent = perguntaAtualObj.opcoes[i];
      botaoOpcao.addEventListener("click", function (event) {
        var indiceOpcao = perguntaAtualObj.opcoes.indexOf(event.target.textContent);
        pontuacaoTotal += (indiceOpcao + 1) * 5; // Atribui pontos conforme o índice da opção
        perguntaAtual += 1;
  
        if (perguntaAtual === perguntas.length) {
          exibirResultado();
        } else {
          exibirPergunta();
        }
      });
      opcoesContainer.appendChild(botaoOpcao);
    }
  }
  
  function exibirResultado() {
    var resultadoDiv = document.getElementById("resultado");
  
    var mensagemResultado = "";
    if (pontuacaoTotal < 35) {
      mensagemResultado = "Iniciante – Você está começando. Concentre-se em aumentar a frequência e diversidade do seu conteúdo.";
    } else if (pontuacaoTotal <= 70) {
      mensagemResultado = "Intermediário – Você está no caminho certo. Busque melhorar a qualidade e o engajamento do seu conteúdo.";
    } else if (pontuacaoTotal <= 105) {
      mensagemResultado = "Avançado – Você tem uma boa estratégia de conteúdo. Continue inovando e otimizando seu perfil e postagens.";
    } else {
      mensagemResultado = "Especialista – Você é um líder de conteúdo no LinkedIn. Seu conteúdo é referência e você sabe como maximizar o engajamento e o alcance.";
    }
  
    resultadoDiv.innerHTML =
      "<h2>Resultado Final</h2>" +
      "<p>Sua pontuação total é: " +
      pontuacaoTotal +
      "</p><p>" +
      mensagemResultado +
      "</p>" +
      '<p><a href="https://wa.me/" target="_blank">Clique aqui para visitar o seu site</a></p>' +
      '<button onclick="reiniciarJogo()">Jogar Novamente</button>';
  
    document.getElementById("quiz").style.display = "none";
    resultadoDiv.style.display = "block";
  }
  
  function reiniciarJogo() {
    pontuacaoTotal = 0;
    perguntaAtual = 0;
    exibirPergunta();
    document.getElementById("resultado").style.display = "none";
    document.getElementById("quiz").style.display = "block";
  }
  
  // Iniciar a apresentação
  exibirPergunta();
  