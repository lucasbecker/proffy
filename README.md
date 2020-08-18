<div align="center" style="background-color:#8257E5; border-radius:10px; padding: 15px 0" >
    <div>
        <img alt="Logo da plataforma Proffy" width="50%" src="logo.svg"/>
    </div>
</div>

> Projeto desenvolvido durante a Next Level Week #2 da [Rocketseat](https://rocketseat.com.br/).

## Overview
O projeto Proffy é uma plataforma criada para conectar professores e alunos. Através da aplicação web e mobile os professores são capazes de oferecerem aulas, cadastrando a disciplina e os seus horários disponíveis e os alunos são capazes de encontrarem professores para determinada disciplina e horário.

## Front-end
### Web
<div align="center" >
    <div>
        <img alt="Logo da plataforma Proffy" width="100%" src="web.svg"/>
    </div>
</div>

O front-end web da plataforma foi desenvolvido com **React**, inicializado com Create React App, estilizado para ser responsivo e utilizando React Router DOM para que possibilite ser uma Single Page Application para uma melhor experiência do usuário final. Para mais detalhes veja o arquivo [package.json](https://github.com/lucasbecker/proffy/blob/master/web/package.json) no diretório web.

### Mobile
<div align="center">
    <div>
        <img alt="Logo da plataforma Proffy" width="100%" src="mobile.svg"/>
    </div>
</div>

O front-end mobile da plataforma foi desenvolvido com **React Native** em conjunto do **Expo** e utilizando pacotes como: React Navigation, Axios e outros. Para mais detalhes veja o arquivo [package.json](https://github.com/lucasbecker/proffy/blob/master/mobile/package.json) no diretório mobile.

## Back-end
O back-end de ambas aplicações, web e mobile, foi desenvolvida com **NodeJS** e é uma API Rest. O banco de dados utilizado foi **SQLite** através do **Knex**. Para mais detalhes veja o arquivo [package.json](https://github.com/lucasbecker/proffy/blob/master/server/package.json) no diretório server.

As funcionalidades da API são:
* Criar nova conexão;
* Listar o total de conexões realizadas;
* Criar "aula";
* Listar aulas cadastradas;
  * Filtrar por disciplina, dia da semana e horário.

## Setup
Primeiramente, tenha o [NodeJS](https://nodejs.org/) instalado ou faça o download e a instalação. Com o NodeJS instalado, realize o download do projeto, abra o terminal no diretório desejado e para instalar o restante dos pacotes digite:
```sh
    npm install
```
No diretório `server` para criar o banco de dados padrão digite:
```sh
    npm run knex:migrate
```
No diretório `server`, `web` e `mobile` para inciar as aplicações digite:
```sh
  npm start
```
O servidor estará executando em [localhost:3333](http://localhost:3333), a aplicação web abrirá em [localhost:3000](http://localhost:3000) e a aplicação mobile executará em [localhost:19002](http://localhost:19002/). Para abrir a aplicação mobile em seu próprio dispositivo físico ou em algum emulador é preciso ter o aplicativo Expo instalado.

## [Next Steps](https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970)
- [ ] Autenticação de usuários
- [ ] Recuperação de senhas
- [ ] Perfil do proffy
- [ ] Splash Screen no React Native com Expo
- [ ] Paginação na listagem de proffys
- [ ] Exibindo horários disponíveis dos proffys
- [ ] Salvando seus proffys favoritos
- [ ] Logout da aplicação
- [ ] Deploy da aplicação

## License
[MIT License](./LICENSE) | [Rocketseat](https://rocketseat.com.br/) | [Lucas Becker](http://lucasbecker.github.io/)