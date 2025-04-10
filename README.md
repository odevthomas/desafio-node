
# 🚀 Desafio Node.js CI/CD com GitHub Actions

[![Node.js CI](https://github.com/odevthomas/desafio-node/actions/workflows/ci.yml/badge.svg)](https://github.com/odevthomas/desafio-node/actions/workflows/ci.yml)

Este repositório contém um projeto simples em Node.js configurado com integração contínua (CI) utilizando **GitHub Actions**.  
O objetivo é automatizar a instalação das dependências e a execução dos testes sempre que houver um push na branch `main`.

---

## 🎯 Desafio 1: Configuração Básica de Build e Teste

### 🔧 Objetivo

Configurar um workflow básico de CI/CD com GitHub Actions para um projeto em Node.js.

### 🛠️ O que foi feito

- Criado um repositório com um projeto simples em Node.js.
- Adicionado workflow em `.github/workflows/ci.yml`.
- Configurado o workflow para:
  - Rodar em cada push na branch `main`.
  - Configurar o ambiente com Node.js 18.
  - Instalar dependências com `npm install`.
  - Executar os testes com `npm test`.

---

## 📦 Requisitos

- Node.js 18 ou superior
- npm

---

## 💻 Como rodar localmente

```bash
npm install   # Instala as dependências
npm test      # Executa os testes automatizados
```

---

## ⚙️ CI com GitHub Actions

O workflow é disparado automaticamente em cada push para a branch `main` e realiza:

1. Checkout do código-fonte
2. Configuração do Node.js
3. Instalação das dependências
4. Execução dos testes

Você pode acompanhar as execuções na aba [Actions do repositório](https://github.com/odevthomas/desafio-node/actions).

---

## 📁 Estrutura do Projeto

```
.
├── .github
│   └── workflows
│       └── ci.yml
├── node_modules
├── package.json
├── sum.test.js
└── README.md
```

---

Desenvolvido para fins de aprendizado e prática com CI/CD usando GitHub Actions.
```

---

Depois de colar, salva o arquivo e roda:

```bash
git add README.md
git commit -m "docs: adiciona README explicativo com badge do CI"
git push
```
