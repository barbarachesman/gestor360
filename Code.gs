/**
 * Gestor360 — painel do gestor (Apps Script)
 * Shell de navegação + calendário 2026/2027 + férias dos subordinados.
 */

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Gestor360')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Inclui HTML parcial (CSS/JS) no template.
 * Uso: <?!= include('Stylesheet'); ?>
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Seed do calendário (feriados/eventos) + ausências de férias.
 */
function getCalendarioSeed() {
  var seed = getSeedPayload();
  var ferias = getFeriasPayload();
  return {
    anos: seed.anos || [2026, 2027],
    times: seed.times || [],
    feriados: seed.feriados || [],
    eventos: seed.eventos || [],
    ausencias: (ferias && ferias.ausencias) || []
  };
}

/**
 * Painel de férias: pessoas, saldos e programações.
 */
function getFerias() {
  return getFeriasPayload();
}

/**
 * Iniciativas do Canva de Produto (planilha WhatsApp).
 */
function getIniciativas() {
  return getIniciativasPayload();
}

/**
 * Cultura Time — DoR, DoD e Tenets (Guia de trabalho).
 */
function getCultura() {
  return getCulturaPayload();
}
