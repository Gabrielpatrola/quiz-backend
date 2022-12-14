# 馃摎 Quiz App Backend

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
  <span> 路 </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> 路 </span>
  <a href="#-como-usar">Como usar</a>
  <span> 路 </span>
  <a href="#-material-de-apoio">Material de apoio</a>
  <span> 路 </span>
  <a href="#-como-contribuir">Como contribuir</a>
  <span> 路 </span>
  <a href="#-licen莽a">Licen莽a</a>
</h3>

## 馃挱 Sobre

Uma pequena aplica莽茫o de quiz usando a biblioteca React.

## 馃懆鈥嶐煉? Tecnologias Utilizadas


- <a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node</a> com <a href="https://docs.adonisjs.com/guides/introduction" target="_blank" rel="noopener">AdonisJs</a>
- <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a> para tipagem do projeto como um todo.

## 鈦? Como usar

### 馃 Pr茅-requisitos

Para conseguir utilizar a aplica莽茫o sem nenhum problema 茅 necess谩rio ter:

- O **<a href="https://nodejs.org/en/" target="_blank" rel="noopener">Node.js</a>** instalado no computador para a execu莽茫o do app
- Ter em sua m谩quina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplica莽茫o
- E n茫o menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o reposit贸rio em seu computador

### 馃摑 Passo a passo

Primeiro clone o reposit贸rio em seu computador, por meio do terminal utilizando o comando:

1. Clonando o reposit贸rio

```sh
  # Clone o reposit贸rio
  $ git clone https://github.com/Gabrielpatrola/growth-quiz-backend
  # Entre na pasta raiz da aplica莽茫o
  $ cd growth-quiz-backend
```

2. Crie um arquivo `.env`

Copie o arquivo `env.example` e crie um novo arquivo chamado `.env` e mude as vari谩veis caso necess谩rio

3. Instalando as depend锚ncias do projeto

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
  # Comando para rodar as migra莽玫es
  $ node ace migration:run 
  # Comando para rodar o seeder
  $ node ace db:seed
```

6. Inicie a aplica莽茫o

```sh
  # Comando para rodar as migra莽玫es
  $ yarn dev # ou npm run dev
```

Ap贸s seguir esses passos 茅 poss铆vel acessar a aplica莽茫o em http://localhost:3333

## 馃摎 Material de Apoio

- [Postman](/assets/Quiz-app.postman_collection.json) com as requisi莽玫es 

## 馃挭 Como contribuir

Basta criar um fork do projeto, realizar as modifica莽玫es que achar necess谩rio e depois fazer um Pull Request.
Toda ajuda 茅 bem vinda, caso veja algum erro, n茫o hesite em contribuir com o projeto!

## 馃搩 Licen莽a

Esse projeto est谩 sob a licen莽a MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

<sup> Feito com 馃挋 por <a href="https://github.com/gabrielpatrola" target="_blank" rel="noopener">Gabriel Patrola</a>
