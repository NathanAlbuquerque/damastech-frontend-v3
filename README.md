# 🚀 Projeto Frontend - Damas Tech

<img src="https://github.com/user-attachments/assets/7d01dd3e-ef36-4b8d-9063-286a73c608ae" alt="Texto alternativo" width="300" height="300">


O **Damas Tech** é uma iniciativa que visa promover a inclusão de mulheres no mercado de trabalho, oferecendo programas de treinamento e bootcamps em parceria com empresas. A API desenvolvida permitirá a gestão de informações relacionadas aos programas, empresas parceiras e participantes, criando uma plataforma de conexão entre as mulheres e oportunidades profissionais.


## 📚 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Equipe](#equipe)
- [Links Úteis](#links-úteis)
- [Dashboard](#dashboard)
- [Licença](#licença)

## 💡 Sobre o Projeto

O projeto **Damas Tech** busca conectar mulheres ao mercado de trabalho por meio de programas de capacitação e treinamento desenvolvidos em parceria com empresas de diversos setores. A API será a base para gerenciar:

- 🎓 Inscrições de participantes nos programas.
- 🏢 Informações sobre os bootcamps disponíveis.
- 🤝 Parcerias com empresas que oferecem oportunidades de contratação para mulheres treinadas no Damas Tech.

### 🎯 Objetivos do projeto:
1. Criar uma interface amigável e acessível para as participantes e empresas parceiras.
2. Facilitar o acesso a programas de treinamento e oportunidades de emprego.
3. Integrar de maneira eficiente com a API do projeto (backend).

### 🔑 Telas principais:
- ✅ Criação da Landing Page
- ✅ Tela de Login
- ✅ Exibição dos programas de treinamento.
- ✅ Cadastro e autenticação de usuárias.
- ✅ Página de perfil da usuária.
- ✅ Exibição de empresas parceiras e vagas disponíveis.

## 🛠️ Tecnologias Utilizadas
- **[ReactJS](https://reactjs.org/)** - Biblioteca JavaScript para a criação de interfaces de usuário.
- **[Sass](https://sass-lang.com/)** - Pré-processador CSS para estilização avançada.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build rápida para desenvolvimento de frontends modernos.
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)** - Linguagem de programação para o desenvolvimento de interações dinâmicas.
- **[NodeJS](https://nodejs.org/)** - Ambiente de execução para JavaScript.
- **[NPM](https://www.npmjs.com/)** - Gerenciador de pacotes utilizado para instalar dependências.


## 📥 Instalação e Configuração

1. Clone o repositório:
    ```bash
    git clone https://github.com/Damas-Tech/fronten_damas_tech.git
    cd fronten_damas_tech
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4. Acesse o projeto no navegador:
    - O projeto será iniciado em `http://localhost:3000`.

## 🌳 Estratégia de Branches

Para garantir um fluxo de trabalho eficiente e colaborativo, utilizamos uma estratégia de branches na organização **Damas Tech**. A branch principal para o desenvolvimento frontend é a `develop`.

### 🏗️ Fluxo de Trabalho:

1. **Branch Principal**:
   - `develop`: Branch onde todas as novas funcionalidades e correções de bugs são integradas. É a base para o desenvolvimento do frontend.

2. **Criação de Branches de Funcionalidades**:
   - Ao iniciar uma nova feature ou correção, crie uma nova branch a partir da `develop`:
     ```bash
     git checkout develop
     git checkout -b minha-nova-feature
     ```

3. **Merge e Pull Request**:
   - Após concluir o desenvolvimento na branch da funcionalidade, faça um pull request para a `develop` para revisão e integração.

4. **Sincronização**:
   - Mantenha sua branch atualizada com a `develop` para evitar conflitos:
     ```bash
     git checkout develop
     git pull origin develop
     git checkout minha-nova-feature
     git rebase develop
     ```


## 👩‍💻 Equipe

- **Desenvolvedor Frontend**: [Artur Cordeiro](https://github.com/codartur) 🌟
- **Desenvolvedor  Frontend**: [Nathan Albuquerque](https://github.com/NathanAlbuquerque) 🌟
- **Desenvolvedor Frontend**: [Diego Bogea](https://github.com/bogeadiego) 🌟
- **Scrum Master**: [Aloisio Gonçalves](https://github.com/Aloisio-Doerl) 🌟

## 🔗 Links Úteis

- [API Damas Tech - GitHub](https://github.com/Damas-Tech/api_damas_tech/)
- [Front Damas Tech - GitHub](https://github.com/Damas-Tech/fronten_damas_tech/)
- [Jira do Projeto](https://damastech.atlassian.net/jira/people/team/cfb1ad1f-4d03-4470-bf40-58ff1017b1a0)
- [Documentação do ReactJS](https://reactjs.org/docs/getting-started.html)
- [Documentação do Vite](https://vitejs.dev/guide/)

## Dashboard
  ## Estatísticas
* **Issues:** [![GitHub issues](https://img.shields.io/github/issues/Damas-Tech/api_damas_tech.svg)](https://github.com/Damas-Tech/frontend_damas_tech/issues)
* **Pull Requests:** [![GitHub pull requests](https://img.shields.io/github/pulls/Damas-Tech/api_damas_tech.svg)](https://github.com/Damas-Tech/frontend_damas_tech/pulls)

## Status do Projeto
* **Build:** [![CI/CD pipeline status](https://github.com/Damas-Tech/api_damas_tech/actions/workflows/main.yml/badge.svg)](https://github.com/Damas-Tech/frontend_damas_tech/actions)
* **Cobertura de código:** [![codecov](https://codecov.io/gh/Damas-Tech/api_damas_tech/branch/main/graph/badge.svg?token=YOUR_TOKEN)](https://codecov.io/gh/Damas-Tech/frontend_damas_tech)

## 📝 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT) - veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com 💻 por [Andressa Silva](https://github.com/AndressaSilva0).
