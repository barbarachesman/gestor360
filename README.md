# Gestor360

Painel do gestor para os times **Interfaces Conversacionais** e **Experiências**: visão de férias, calendário de feriados/eventos, iniciativas e pedidos de ajuda.

Stack: **HTML + JavaScript em Google Apps Script**, sem banco. Dados em **Google Sheets** (modelo em [`planilha-modelo/`](planilha-modelo/)). Aprovação de férias permanece no **ClickGB** — este app é só visão/planejamento.

## O que já existe (Fatias 0–1)

- Scaffold Apps Script (`Code.gs`, `SeedData.gs`, `Index.html`, `Stylesheet.html`, `JavaScript.html`, `appsscript.json`)
- Shell com 5 visões: Férias · Calendário · Iniciativas · Pedidos de ajuda · Cultura Time
- Cultura Time: atalhos para DoD Dor, Tenets e pesquisa de pulso/clima da semana
- **Férias**: status/saldos/programações da planilha `data/ferias-subordinados.xlsx` (também no calendário)
- Calendário 2026 + **2027** (feriados GB 2026 + nacionais 2027 + férias do time + eventos nov/2026)
- Planilha modelo documentada em `planilha-modelo/`
- Seeds em `data/`

Ainda **não** implementados: sync Businessmap, cadastro detalhado de ausências/férias, lista real de iniciativas/ajuda (stubs de navegação).

## Estrutura

```
Code.gs              # doGet + include + stubs de dados
SeedData.gs          # seed embutido do calendário 2026
Index.html           # shell e markup das 4 visões
Stylesheet.html      # CSS
JavaScript.html      # navegação + calendário mensal
appsscript.json      # timezone SP + web app DOMAIN
planilha-modelo/     # CSVs + contrato das abas
data/                # seed JSON + PDF/TXT do calendário GB
```

## Publicar com clasp (recomendado)

### Pré-requisitos

1. Node.js instalado
2. Conta Google do domínio GB
3. [Clasp](https://github.com/google/clasp): `npm install -g @google/clasp`
4. Login: `clasp login`
5. Ative a API Apps Script na conta Google ([script.google.com/home/usersettings](https://script.google.com/home/usersettings))

### Criar o projeto e enviar o código

Na raiz deste repositório:

```bash
clasp create --title "Gestor360" --type webapp --rootDir .
# gera .clasp.json com o scriptId

clasp push
```

Se o projeto Apps Script já existir, copie [`.clasp.json.example`](.clasp.json.example) para `.clasp.json` e preencha o `scriptId`.

Arquivos enviados pelo clasp: os `.gs`, `.html` e `appsscript.json` na raiz. Pastas `planilha-modelo/` e `data/` ficam só no Git (referência).

### Implantar o web app

1. Abra o projeto: `clasp open`
2. **Implantar → Nova implantação → Tipo: App da Web**
3. Descrição: `Gestor360 MVP`
4. Executar como: **Eu**
5. Quem tem acesso: **Qualquer pessoa do domínio** Grupo Boticário (ou contas específicas)
6. Copie a URL da implantação

Reimplantações: **Implantar → Gerenciar implantações → Editar → Nova versão**.

### Planilha

1. Crie uma Sheets e importe os CSVs de `planilha-modelo/` (veja o [README da planilha](planilha-modelo/README.md)).
2. Compartilhe com o mesmo público do web app.
3. Ligação automática planilha ↔ script entra nas próximas fatias; o calendário já roda com o seed embutido.

## Publicar só pelo editor (sem clasp)

1. [script.google.com](https://script.google.com) → Novo projeto → renomear para Gestor360
2. Cole o conteúdo de `Code.gs` e `SeedData.gs` em arquivos `.gs`
3. **Arquivo → Novo → Arquivo HTML** para `Index`, `Stylesheet` e `JavaScript` (sem extensão no nome do arquivo no editor)
4. **Projeto → Configurações** e alinhe timezone / manifesto se quiser (`appsscript.json`)
5. Implante como App da Web (mesmos passos acima)

## Como testar (Barbara)

1. Publique o web app (clasp ou editor) e abra a URL com a conta Google do domínio.
2. Confirme a marca **Gestor360** no topo e as 4 abas de navegação.
3. Em **Calendário**, o mês inicial é **novembro 2026**:
   - Finados (02), Consciência Negra (20), Proclamação (15)
   - Eventos: Cultura Antifraude, Talentos IA, IA Labs, CEO Talks, Beauty Week, aviso 30/11
4. Navegue para janeiro/abril/dezembro e confira nacionais, pontes e recesso 26–31/12.
5. Clique em um dia: painel lateral lista os itens; “Neste mês” resume o mês.
6. Abas **Férias**, **Iniciativas** e **Pedidos de ajuda** devem só trocar a visão (placeholders).

Prévia local do calendário (sem Apps Script): abra [`preview/local.html`](preview/local.html) no navegador.

## Fora de escopo neste PR

- Aprovação de férias (ClickGB)
- Sync automático Businessmap
- Feriados municipais/estaduais completos do PDF (priorizados nacionais + pontes + canal)
