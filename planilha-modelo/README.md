# Planilha modelo — Gestor360

Fonte de dados do painel (Google Sheets). No MVP, o calendário já funciona com seed embutido em `SeedData.gs`; a planilha é o contrato para Fatias 2–3 (ausências, iniciativas, sync).

## Como usar

1. Crie uma planilha Google no Drive do time.
2. Crie as abas abaixo (nomes exatos recomendados).
3. Importe os CSVs desta pasta (**Arquivo → Importar → Substituir planilha / Inserir novas abas**) ou copie o cabeçalho e cole as linhas.
4. Compartilhe a planilha com as mesmas contas que terão acesso ao web app.
5. (Fatia futura) Em `Code.gs`, aponte o ID da planilha e leia as abas no lugar do seed.

## Abas e colunas

### Times

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | texto | Identificador estável (`interfaces-conversacionais`, `experiencias`) |
| `nome` | texto | Nome exibido |

Arquivo: [times.csv](times.csv)

### Pessoas

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | texto | Identificador da pessoa |
| `nome` | texto | Nome |
| `email` | texto | E-mail Google |
| `timeId` | texto | FK → `Times.id` |
| `ativo` | TRUE/FALSE | Se aparece no painel |

Arquivo: [pessoas.csv](pessoas.csv) (linhas de exemplo vazias de pessoas reais)

### Feriados

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `dataInicio` | data `YYYY-MM-DD` | Início |
| `dataFim` | data `YYYY-MM-DD` | Fim (igual ao início se for 1 dia) |
| `nome` | texto | Nome do feriado / ponte / recesso |
| `tipo` | texto | `nacional` · `ponte` · `recesso` · `municipal` · `estadual` |
| `origem` | texto | `gb-oficial` · `canal` · etc. |

Arquivo: [feriados.csv](feriados.csv) — seed nacionais/pontes 2026 + eventos de canal de novembro.

> Eventos de empresa também podem viver nesta aba com `tipo` = `evento` ou `aviso`, ou em aba própria no futuro. No CSV atual estão misturados para facilitar o import único.

### Ausencias

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | texto | Identificador |
| `pessoaId` | texto | FK → `Pessoas.id` |
| `tipo` | texto | `ferias` · `folga` · `outro` |
| `dataInicio` | data | Início |
| `dataFim` | data | Fim |
| `status` | texto | `planejado` · `aprovado` (visão apenas; aprovação no ClickGB) |
| `observacao` | texto | Opcional |

Arquivo: [ausencias.csv](ausencias.csv) — só cabeçalho (Fatia 2).

### Iniciativas

Modelo alinhado a um espelho Businessmap (sync automático depois).

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | texto | ID no Businessmap / espelho |
| `titulo` | texto | Nome da iniciativa |
| `timeId` | texto | FK → `Times.id` |
| `status` | texto | Coluna/status no Businessmap |
| `responsavel` | texto | Nome ou e-mail |
| `precisaAjuda` | TRUE/FALSE | Flag manual de pedido de ajuda |
| `motivoAjuda` | texto | Motivo (se `precisaAjuda`) |
| `urgencia` | texto | `baixa` · `media` · `alta` |
| `atualizadoEm` | data/hora | Última atualização do espelho |

Arquivo: [iniciativas.csv](iniciativas.csv) — só cabeçalho (Fatia 3).

### CulturaDocs

Documentos da aba **Cultura Time**.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | texto | Identificador estável |
| `titulo` | texto | Nome exibido |
| `descricao` | texto | Resumo curto |
| `url` | texto | Link Drive / Forms (preencher depois) |
| `ordem` | número | Ordenação na lista |

Arquivo: [cultura-docs.csv](cultura-docs.csv) — DoD Dor, Tenets, Pesquisa de pulso/clima.

## Times iniciais

- Interfaces Conversacionais (`interfaces-conversacionais`)
- Experiências (`experiencias`)
