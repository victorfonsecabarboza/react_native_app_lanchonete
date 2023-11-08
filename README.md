<!-- ************************************* Logo ********************************************* -->
<div align="center">
  <img width="900px" alt="Logo" src="./assets/logo.png">
</div>

</br>

<!-- ************************************* Título ********************************************* -->
<h1> React Native com expo-router </h1>

<!-- ************************************* Descrição ********************************************* -->
## Sobre o Projeto
</br>

Este projeto consiste  em um App de uma lanchonete para listar os produtos consumindo um JSON Server de uma API Fake, utilizando router para gerenciar a navegação entre telas, axios para fazer chamadas da API REST, e os componentes carousel, dropdown picker e flat list. Ao rodar o projeto, cada componente utilizado ira apresentar os produtos de diferentes formas.

</br>

## Construído com

* [NodeJS](https://nodejs.org/en/) - Ambiente de execução Javascript
* [Vs Code](https://code.visualstudio.com/) - IDE
* [React Native](https://reactnative.dev/) - O framework Mobile usado
* [Expo](https://expo.io/) - Facilitador de visualização
* [Expo-Router](https://docs.expo.dev/routing/introduction/) - Navegação de telas
* [Axios](https://axios-http.com/ptbr/docs/intro) - cliente HTTP

</br>

<!-- ************************************* Rodar Projeto ********************************************* -->
## Rodando o projeto

- É Necessário : 
    - Ter o Expo Instalado no PC
    - Ter o Expo Instalado no Celular
    
```bash
# Clone este repositório
$ git clone https://github.com/victorfonsecabarboza/react_native_app_lanchonete.git

# Acesse a pasta do Projeto
$ cd react_native_app_lanchonete

# Baixar as dependências
$ npm install
ou
$ yarn install

# Instalar o axios
$ npm install axios
ou
$ yarn add axios

# Instalar o json-server
$ npm install -g json-server
ou
$ yarn globall add json-server

# Iniciar o servidor
$ json-server --watch db.json

# Iniciar o App
$ npm start
ou
$ yarn start
```
