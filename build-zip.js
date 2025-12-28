#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para listar arquivos recursivamente
function getAllFiles(dirPath, arrayOfFiles = [], isRoot = false) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;
    
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    files.forEach(file => {
        const filePath = path.join(dirPath, file.name);
        if (file.isDirectory()) {
            // Ignorar node_modules e outras pastas desnecessárias
            if (!['node_modules', '.git', '.cursor'].includes(file.name)) {
                getAllFiles(filePath, arrayOfFiles, false);
            }
        } else {
            // Ignorar apenas arquivos desnecessários
            // Na raiz, incluir arquivos que começam com . (como .babelrc.json)
            // Em subpastas, ignorar arquivos ocultos exceto se necessário
            const shouldInclude = !file.name.endsWith('.log') && 
                                 file.name !== '.DS_Store' &&
                                 (isRoot || !file.name.startsWith('.') || file.name === '.editorconfig');
            
            if (shouldInclude) {
                arrayOfFiles.push(filePath);
            }
        }
    });

    return arrayOfFiles;
}

// Diretórios e arquivos a incluir
const includeDirs = ['assets', 'partials', 'members', 'locales'];
const includeFiles = ['*.hbs', 'package.json', 'LICENSE', 'README.md'];

let allFiles = [];

// Adicionar arquivos dos diretórios
includeDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        allFiles = getAllFiles(dir, allFiles, false);
    }
});

// Adicionar arquivos .hbs na raiz
const rootHbs = fs.readdirSync('.').filter(f => f.endsWith('.hbs'));
rootHbs.forEach(f => allFiles.push(f));

// Adicionar outros arquivos
['package.json', 'LICENSE', 'README.md', 'rollup.config.js', '.babelrc.json', '.editorconfig', 'renovate.json'].forEach(f => {
    if (fs.existsSync(f)) {
        allFiles.push(f);
    }
});

// Verificar se assets/built existe e tem arquivos
const builtPath = 'assets/built';
if (!fs.existsSync(builtPath)) {
    console.error('❌ ERRO: assets/built/ não existe! Execute "npm run build" primeiro.');
    process.exit(1);
}

const builtFiles = fs.readdirSync(builtPath);
if (builtFiles.length === 0) {
    console.error('❌ ERRO: assets/built/ está vazio! Execute "npm run build" primeiro.');
    process.exit(1);
}

// Verificar explicitamente se index.css e index.js existem
const hasIndexCss = builtFiles.includes('index.css');
const hasIndexJs = builtFiles.includes('index.js');

if (!hasIndexCss || !hasIndexJs) {
    console.error('❌ ERRO: assets/built/index.css ou index.js não foram encontrados!');
    console.error('   Arquivos em assets/built:', builtFiles);
    process.exit(1);
}

console.log(`📦 Incluindo ${allFiles.length} arquivos no ZIP...`);
console.log(`✅ assets/built/ encontrado com ${builtFiles.length} arquivo(s)`);
console.log(`✅ assets/built/index.css: ${hasIndexCss ? '✓' : '✗'}`);
console.log(`✅ assets/built/index.js: ${hasIndexJs ? '✓' : '✗'}`);

// Criar ZIP
try {
    execSync(`bestzip skullx.zip ${allFiles.join(' ')}`, { stdio: 'inherit' });
    console.log('✅ ZIP criado com sucesso: skullx.zip');
} catch (error) {
    console.error('❌ Erro ao criar ZIP:', error.message);
    process.exit(1);
}

