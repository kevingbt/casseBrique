import terser from '@rollup/plugin-terser';
import html from '@rollup/plugin-html';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Template HTML pour la distribution
function makeHtmlAttributes(attributes) {
  if (!attributes) return '';
  return Object.keys(attributes)
    .map(key => `${key}="${attributes[key]}"`)
    .join(' ');
}

function htmlTemplate({
  attributes,
  bundle,
  files,
  publicPath,
  title
}) {
  // Lire le fichier HTML source
  const sourceHtml = readFileSync(join(__dirname, 'src/index.html'), 'utf-8');

  // Extraire le contenu entre les balises body (sans les scripts)
  const bodyMatch = sourceHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';

  // Retirer les balises script et style du body
  bodyContent = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  bodyContent = bodyContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  // Extraire les styles inline
  const styleMatch = sourceHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  const styleContent = styleMatch ? styleMatch[1] : '';

  // Extraire le titre
  const titleMatch = sourceHtml.match(/<title[^>]*>([\s\S]*?)<\/title>/);
  const pageTitle = titleMatch ? titleMatch[1] : 'Casse-Brique';

  // Générer les scripts pour le bundle
  const scripts = files.js
    .map(({ fileName }) => `<script src="${fileName}"></script>`)
    .join('\n    ');

  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <style>
        ${styleContent.trim()}
    </style>
</head>
<body>
    ${bodyContent.trim()}
    ${scripts}
</body>
</html>`;
}

export default {
  input: 'src/js/index.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'iife',
    name: 'CasseBriqueGame',
    sourcemap: true
  },
  plugins: [
    terser({
      compress: {
        drop_console: true, // Supprime les console.log en production
        drop_debugger: true
      },
      mangle: {
        toplevel: true
      },
      format: {
        comments: false
      }
    }),
    html({
      fileName: 'index.html',
      template: htmlTemplate
    })
  ]
};