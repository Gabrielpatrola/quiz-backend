# 📚 Quiz App Backend

<h1 align="center">
    <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a> | <a href="https://docs.adonisjs.com/guides/introduction" target="_blank" rel="noopener">AdonisJS</a> 
</h1>

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20by-Gabriel%20Patrola-blue?style=flat&logo=Awesome-Lists">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabrielpatrola/growth-quiz-backend?color=informational&style=flat&logo=GitHub-Actions">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gabrielpatrola/growth-quiz-backend?color=important&style=flat&logo=TypeScript">
  <img alt="Made By" src="https://img.shields.io/github/license/gabrielpatrola/growth-quiz-backend?&style=flat&logo=Google-Sheets">
<p>

<h3 align="center">
  <a href="#-sobre">Sobre</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> · </span>
  <a href="#-como-usar">Como usar</a>
  <span> · </span>
  <a href="#-material-de-apoio">Material de apoio</a>
  <span> · </span>
  <a href="#-como-contribuir">Como contribuir</a>
  <span> · </span>
  <a href="#-licença">Licença</a>
</h3>

## 💭 Sobre

Uma pequena aplicação de quiz usando a biblioteca React.

## 👨‍💻 Tecnologias Utilizadas


- <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node</a> com <a href="https://docs.adonisjs.com/guides/introduction" target="_blank" rel="noopener">AdonisJs</a>
- <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a> para tipagem do projeto como um todo.

## ⁉ Como usar

### 🤔 Pré-requisitos

Para conseguir utilizar a aplicação sem nenhum problema é necessário ter:

- O **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>** instalado no computador para a execução do app
- Ter em sua máquina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplicação
- E não menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o repositório em seu computador

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/Gabrielpatrola/growth-quiz-backend
  # Entre na pasta raiz da aplicação
  $ cd growth-quiz-backend
```

2. Crie um arquivo `.env`

Copie o arquivo `env.example` e crie um novo arquivo chamado `.env` e mude as variáveis caso necessário

3. Instalando as dependências do projeto

```sh
  $ yarn # ou npm install
```

4. Inicie o docker

```sh
  # Inicie o docker
  $ docker-compose up -d
```

5. Rode as migrations e seeders

```sh
  # Comando para rodar as migrações
  $ node ace migration:run 
  # Comando para rodar o seeder
  $ node ace db:seed
```

6. Inicie a aplicação

```sh
  # Comando para rodar as migrações
  $ yarn dev # ou npm run dev
```

Após seguir esses passos é possível acessar a aplicação em http://localhost:3333

## 📚 Material de Apoio

- [Postman](/Quiz-app.postman_collection) com as requisições 

## 💪 Como contribuir

Basta criar um fork do projeto, realizar as modificações que achar necessário e depois fazer um Pull Request.
Toda ajuda é bem vinda, caso veja algum erro, não hesite em contribuir com o projeto!

## 📃 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

<sup> Feito com 💙 por <a href="https://github.com/gabrielpatrola" target="_blank" rel="noopener">Gabriel Patrola</a>
