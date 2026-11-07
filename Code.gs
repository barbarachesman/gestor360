/**
 * Gestor360 — painel do gestor (Apps Script)
 * Fatias 0–1: shell de navegação + calendário com seed 2026.
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
 * Dados iniciais do calendário (seed embutido).
 * Depois: ler abas Feriados / Eventos da planilha modelo.
 */
function getCalendarioSeed() {
  return getSeedPayload();
}

/**
 * Stub para Fatia 2+: ausências/férias da planilha.
 */
function getAusencias() {
  return [];
}

/**
 * Stub para Fatia 3: iniciativas espelhadas do Businessmap.
 */
function getIniciativas() {
  return [];
}
