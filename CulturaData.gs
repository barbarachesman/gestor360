/**
 * Cultura Time — DoR, DoD, Tenets e pesquisa de clima (TeamCulture).
 * Fonte guia: https://docs.google.com/document/d/1JKUz1m-qacMtSHQU3r0u_RAapaB0r1BhHG-9uij_f8Y/edit
 * Fonte clima: data/clima-teamculture-semana-1-novembro.pdf
 */
function getCulturaPayload() {
  return {
  "fonte": "https://docs.google.com/document/d/1JKUz1m-qacMtSHQU3r0u_RAapaB0r1BhHG-9uij_f8Y/edit?tab=t.0",
  "nomeDocumento": "Guia de trabalho — Interfaces Conversacionais · ChatBot CVM",
  "aviso": "As propostas do guia ainda não foram aprovadas. Até lá, continuam valendo as regras atuais.",
  "secoes": [
    {
      "id": "dor",
      "badge": "DoR",
      "titulo": "DoR: antes de começar",
      "resumo": "Evitar que uma demanda entre em desenvolvimento sem o necessário para avançar.",
      "url": "https://docs.google.com/document/d/1JKUz1m-qacMtSHQU3r0u_RAapaB0r1BhHG-9uij_f8Y/edit?tab=t.0#heading=h.3zzy1s5bzgvw",
      "checklistLabel": "Checklist",
      "checklist": [
        "Sabemos qual problema resolver e o que está dentro e fora da entrega?",
        "Os critérios de aceite e os principais cenários estão claros?",
        "Temos design, contratos e dependências necessários?",
        "Há algum bloqueio que impede começar?",
        "Sabemos quem vai implementar e qual é a previsão?"
      ],
      "nota": "PM, TL e quem vai desenvolver alinham esses pontos no refinamento ou no card.",
      "ondeAplicar": [
        "PBI: Pronto para Design → Pronto para Refinamento Técnico → Pronto para Desenvolvimento",
        "Épico: problema/prioridade antes da descoberta; solução e dependências antes da quebra",
        "Atendimento: na Triagem, tipo, impacto, prioridade, responsável e próximo passo",
        "Kaizen: problema, melhoria proposta, responsável e como avaliar o resultado"
      ]
    },
    {
      "id": "dod",
      "badge": "DoD",
      "titulo": "DoD: antes de concluir",
      "resumo": "Diferenciar “pronto para publicar” de “entregue e funcionando”.",
      "url": "https://docs.google.com/document/d/1JKUz1m-qacMtSHQU3r0u_RAapaB0r1BhHG-9uij_f8Y/edit?tab=t.0#heading=h.3zzy1s5bzgvw",
      "checklistLabel": "Checklist",
      "checklist": [
        "Os critérios de aceite foram atendidos?",
        "As PRs foram revisadas e os testes, a cobertura e a segurança passaram?",
        "A mudança foi homologada e a combinação que entrará em main foi validada?",
        "Documentação, acompanhamento e plano de retorno estão adequados à mudança?",
        "A mudança está em produção, foi verificada e comunicada?",
        "Se ficou alguma pendência permitida, há responsável e prazo?"
      ],
      "nota": "Uma correção testada em HML ainda não é entrega concluída em produção. Mudança de prompt ou configuração também precisa de confirmação de publicação.",
      "ondeAplicar": [
        "PBI: Code Review → Homologação → Deploy → Concluído (em produção, verificado e comunicado)",
        "Épico: filhos concluídos e entrega disponível em produção",
        "Atendimento: solução ou encaminhamento aceito, com retorno ao solicitante",
        "Kaizen: registrar o resultado e decidir se vale manter, ajustar ou encerrar"
      ]
    },
    {
      "id": "tenets",
      "badge": "Tenets",
      "titulo": "Tenets: princípios do time",
      "resumo": "Princípios para orientar decisões do dia a dia — não mais um checklist.",
      "url": "https://docs.google.com/document/d/1JKUz1m-qacMtSHQU3r0u_RAapaB0r1BhHG-9uij_f8Y/edit?tab=t.0#heading=h.3zzy1s5bzgvw",
      "principios": [
        {
          "titulo": "Entender o problema antes de escolher a solução",
          "texto": "Antes de implementar, confirmar quem precisa da mudança, qual problema ela resolve e como saberemos se deu certo."
        },
        {
          "titulo": "Ajudar a concluir antes de começar mais trabalho",
          "texto": "Antes de puxar outro card, olhar se podemos ajudar em uma revisão, homologação ou bloqueio."
        },
        {
          "titulo": "Conversar com produto, design e engenharia antes de implementar",
          "texto": "Alinhar comportamento, experiência e viabilidade enquanto ainda é simples ajustar a ideia."
        },
        {
          "titulo": "Registrar a decisão uma vez e compartilhar o link",
          "texto": "Manter decisões e evidências no card ou documento. No Slack, compartilhar o link."
        },
        {
          "titulo": "Testar conforme o impacto da mudança",
          "texto": "Dar atenção aos cenários que podem afetar o consumidor ou a operação — inclusive prompt e configuração."
        },
        {
          "titulo": "Rever os combinados quando deixarem de ajudar",
          "texto": "Usar a Retro e a Flow Review para ajustar acordos, respeitando os controles obrigatórios."
        }
      ]
    }
  ],
  "clima": {
    "id": "semana-1-novembro-2026",
    "titulo": "Pesquisa de clima — semana 1 novembro",
    "plataforma": "TeamCulture",
    "urlPlataforma": "https://beta.teamculture.com.br/engagement/climate",
    "arquivoFonte": "data/clima-teamculture-semana-1-novembro.pdf",
    "grupo": "Ger Engenharia - Experiências",
    "grupoId": "90024338",
    "atualizadoEm": "2026-11-05",
    "periodoNotas": "últimos 90 dias",
    "variacaoJanela": "12 meses",
    "resumo": {
      "mediaEngajamento": 7.59,
      "escala": "Muito bom",
      "variacao360d": -1.43,
      "rank": "Bronze",
      "melhorQueEmpresasPct": 24.36,
      "participacaoPct": 75,
      "participacaoVariacaoPct": -5,
      "opinionesRespondidasPct": 95.46,
      "opinionesVariacaoPct": -1.49,
      "comparativos": {
        "grupo": 7.8,
        "grupoBoticario": 8.86,
        "benchmarkTeamCulture": 8.53
      }
    },
    "pilares": [
      {
        "nome": "Relacionamento com a equipe",
        "nota": 8.96,
        "variacao": -0.62
      },
      {
        "nome": "Vestir a camisa",
        "nota": 8.25,
        "variacao": -1.08
      },
      {
        "nome": "Crescimento pessoal",
        "nota": 7.82,
        "variacao": -1.56
      },
      {
        "nome": "Liderança",
        "nota": 7.8,
        "variacao": -0.91
      },
      {
        "nome": "Cultura de Inovação",
        "nota": 7.69,
        "variacao": -1.57
      },
      {
        "nome": "Feedback",
        "nota": 7.68,
        "variacao": -1.22
      },
      {
        "nome": "Satisfação",
        "nota": 7.53,
        "variacao": -1.66
      },
      {
        "nome": "Alinhamento",
        "nota": 7.28,
        "variacao": -1.96
      },
      {
        "nome": "Diversidade",
        "nota": 7.08,
        "variacao": -2.36
      },
      {
        "nome": "Felicidade",
        "nota": 7.06,
        "variacao": -2.27
      },
      {
        "nome": "Reconhecimento",
        "nota": 6.93,
        "variacao": -0.39
      },
      {
        "nome": "Bem-estar",
        "nota": 6.6,
        "variacao": -2.61
      }
    ],
    "atencao": "Nenhum pilar em estado de atenção no momento.",
    "enps": {
      "score": 50,
      "variacao": -46,
      "rank": "Bronze",
      "melhorQueEmpresasPct": 32.94,
      "promotoresPct": 75,
      "promotoresVariacaoPct": -20.8,
      "passivosPct": 0,
      "passivosVariacaoPct": -4.2,
      "detratoresPct": 25,
      "detratoresVariacaoPct": 25,
      "opiniones": [
        "Não me sinto seguro mais aqui",
        "O cuidado com as pessoas, os benefícios pensando no bem estar, preocupação com nossa evolução profissional. A atenção dada ao funcionário é diferente das outras empresas.",
        "Recomendo o GB como um ótimo lugar para trabalhar principalmente pela cultura que estimula a colaboração, pela autonomia que temos para propor soluções e pela oportunidade de atuar em projetos inovadores e desafiadores. O time é um dos grandes diferenciais. Ao mesmo tempo, o último ciclo de gente e os desligamentos em massa trouxeram incerteza e exigiram muito da liderança — reforçando a importância de transparência, previsibilidade e tempo de adaptação."
      ]
    },
    "lnps": {
      "score": 0,
      "variacao": -96,
      "rank": "Bronze",
      "melhorQueEmpresasPct": 11.64,
      "promotoresPct": 33.3,
      "promotoresVariacaoPct": -62.9,
      "passivosPct": 33.3,
      "passivosVariacaoPct": 29.5,
      "detratoresPct": 33.3,
      "detratoresVariacaoPct": 33.3,
      "opiniones": [
        "Minha percepção é que ela pratica uma escuta ativa. Isso torna o ambiente mais acolhedor e agradável.",
        "Defender mais o time, priorizar melhor as demandas",
        "Tive muita sorte em ter ótimas lideranças diretas aqui no GB. A última foi a Babi Chesman — inteligente, dedicada, disponível e humana.",
        "Os dois líderes (TM e TL) são inteligentes, objetivos, humanos e participativos. Isso nos confere tranquilidade e autonomia no trabalho."
      ]
    },
    "recomendacoes": [
      {
        "acao": "Atividades para integração do time",
        "pilar": "Felicidade"
      },
      {
        "acao": "Cinco palavras ou menos",
        "pilar": "Vestir a camisa"
      },
      {
        "acao": "Reunião Mensal de Time",
        "pilar": "Satisfação"
      },
      {
        "acao": "Reuniões em movimento",
        "pilar": "Liderança"
      },
      {
        "acao": "Aprendizagem entre pares",
        "pilar": "Relacionamento com a equipe"
      },
      {
        "acao": "Reconhecimento a partir de valores",
        "pilar": "Reconhecimento"
      },
      {
        "acao": "Reuniões 1-a-1",
        "pilar": "Feedback"
      },
      {
        "acao": "Planos de carreira",
        "pilar": "Crescimento pessoal"
      },
      {
        "acao": "Dia silencioso",
        "pilar": "Bem-estar"
      }
    ]
  }
};
}
