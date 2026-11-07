/**
 * Seed de feriados nacionais/pontes 2026 e eventos de canal (nov/2026).
 * Fonte: data/feriados-eventos-seed.json (espelho do calendário oficial GB).
 */
function getSeedPayload() {
  return {
    ano: 2026,
    times: [
      { id: 'interfaces-conversacionais', nome: 'Interfaces Conversacionais' },
      { id: 'experiencias', nome: 'Experiências' }
    ],
    feriados: [
      { date: '2026-01-01', name: 'Confraternização Universal', tipo: 'nacional' },
      { date: '2026-01-02', name: 'Ponte Confraternização Universal', tipo: 'ponte' },
      { date: '2026-02-16', name: 'Segunda-feira de Carnaval', tipo: 'nacional' },
      { date: '2026-02-17', name: 'Terça-feira de Carnaval', tipo: 'nacional' },
      { date: '2026-02-18', name: 'Quarta-feira de cinzas (meio período após 12h)', tipo: 'nacional' },
      { date: '2026-04-03', name: 'Sexta-feira da Paixão', tipo: 'nacional' },
      { date: '2026-04-20', name: 'Ponte Tiradentes', tipo: 'ponte' },
      { date: '2026-04-21', name: 'Tiradentes', tipo: 'nacional' },
      { date: '2026-05-01', name: 'Dia do Trabalhador', tipo: 'nacional' },
      { date: '2026-06-04', name: 'Corpus Christi', tipo: 'nacional' },
      { date: '2026-06-05', name: 'Ponte de Corpus Christi', tipo: 'ponte' },
      { date: '2026-09-07', name: 'Independência do Brasil', tipo: 'nacional' },
      { date: '2026-10-12', name: 'Nossa Senhora Aparecida', tipo: 'nacional' },
      { date: '2026-11-02', name: 'Finados', tipo: 'nacional' },
      { date: '2026-11-15', name: 'Proclamação da República', tipo: 'nacional' },
      { date: '2026-11-20', name: 'Dia Nacional de Zumbi e da Consciência Negra', tipo: 'nacional' },
      { date: '2026-12-25', name: 'Natal', tipo: 'nacional' },
      {
        date: '2026-12-26',
        endDate: '2026-12-31',
        name: 'Início recesso de final de ano (híbrido/remoto)',
        tipo: 'recesso'
      }
    ],
    eventos: [
      {
        start: '2026-11-02',
        end: '2026-11-02',
        name: 'Feriado de Finados',
        tipo: 'feriado'
      },
      {
        start: '2026-11-03',
        end: '2026-11-06',
        name: 'Semana de Cultura Antifraude',
        tipo: 'evento'
      },
      {
        start: '2026-11-06',
        end: '2026-11-06',
        name: 'Talentos IA - Vencedores da Janela II',
        tipo: 'evento'
      },
      {
        start: '2026-11-10',
        end: '2026-11-10',
        name: 'IA Labs - Live Workspace Studio',
        tipo: 'evento'
      },
      {
        start: '2026-11-12',
        end: '2026-11-12',
        name: 'CEO Talks (diretores)',
        tipo: 'evento'
      },
      {
        start: '2026-11-20',
        end: '2026-11-20',
        name: 'Feriado do Dia da Consciência Negra',
        tipo: 'feriado'
      },
      {
        start: '2026-11-23',
        end: '2026-11-27',
        name: 'Semana de Beauty Week',
        tipo: 'evento'
      },
      {
        start: '2026-11-30',
        end: '2026-11-30',
        name: 'Fim da isenção de coparticipação para exames preventivos',
        tipo: 'aviso'
      }
    ]
  };
}
