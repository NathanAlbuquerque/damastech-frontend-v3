# Projeto Frontend - Damas Tech

![Logotipo do Damas Tech](./public/damastech-seo.webp)

O **Damas Tech** é uma iniciativa que promove a inclusão de mulheres no mercado de trabalho, oferecendo programas de treinamento e bootcamps em parceria com empresas. Este projeto inclui a criação de uma interface para gerenciar informações relacionadas aos programas, empresas parceiras e participantes, conectando mulheres a oportunidades profissionais.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Estratégia de Branches](#estratégia-de-branches)
- [Equipe](#equipe)
- [Links Úteis](#links-úteis)
- [Licença](#licença)

---

## Sobre o Projeto

O projeto **Damas Tech** busca conectar mulheres ao mercado de trabalho por meio de programas de capacitação. A plataforma permitirá:

- Inscrições de participantes em programas.
- Visualização de informações sobre bootcamps disponíveis.
- Gerenciamento de parcerias com empresas que oferecem oportunidades de emprego.

### Objetivos:

1. Criar uma interface acessível para participantes e empresas parceiras.
2. Facilitar o acesso a programas de treinamento e vagas de trabalho.
3. Integrar eficientemente com a API de backend.

### Principais Telas:

- **Home LP**: Página de captação.
- **Plataforma de Usuária**: Área de estudo para participantes.
- **Plataforma de Empresas**: Gerenciamento para parceiros.
- **Administração**: Área de controle interno.

---

## Tecnologias Utilizadas

- **[ReactJS](https://reactjs.org/)**: Biblioteca para interfaces dinâmicas.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida.

---

## Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/Damas-Tech/frontend_damas_tech.git
   ```

2. Acesse o diretório e instale as dependências:

   ```bash
   cd frontend_damas_tech
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## Estratégia de Branches: Como Colaborar

O modelo **Git Flow** organiza o trabalho em equipe com regras claras para criar, atualizar e integrar código. Veja como colaborar de forma eficiente:

### 1. **Criação de Funcionalidades (`feature`)**

- Sempre crie uma branch específica para cada nova funcionalidade ou tarefa, partindo da branch `develop`:
  ```bash
  git checkout develop
  git checkout -b feature/nova-funcionalidade
  ```
- Realize commits regulares enquanto desenvolve e envie para o repositório remoto:
  ```bash
  git add .
  git commit -m "Descrição da alteração"
  git push origin feature/nova-funcionalidade
  ```
- Quando terminar, abra um _pull request_ para integrar sua branch à `develop` e solicite uma revisão de outro membro do time.

---

### 2. **Sincronizando seu Trabalho**

- Antes de começar ou continuar uma tarefa, atualize sua branch local com as mudanças mais recentes para evitar conflitos:
  ```bash
  git pull origin develop
  ```
- Caso outros membros tenham feito alterações enquanto você trabalhava, resolva os conflitos localmente e envie a versão corrigida:
  ```bash
  git add .
  git commit -m "Resolvendo conflitos"
  git push origin feature/nova-funcionalidade
  ```

---

## Equipe

- **Scrum Master**: [Aloisio Gonçalves](https://github.com/Aloisio-Doerl)
- **Desenvolvedor Frontend**: [Nathan Albuquerque](https://github.com/NathanAlbuquerque)
- **Desenvolvedora Frontend**: [Andressa Silva](https://github.com/AndressaSilva0)
- **Desenvolvedor Frontend**: [Diego Bogea](https://github.com/bogeadiego)
- **Desenvolvedor Frontend**: [Artur Cordeiro](https://github.com/codartur)

---

## Links Úteis

- **[API Damas Tech](https://github.com/Damas-Tech/api_damas_tech/)**
- **[Frontend Damas Tech](https://github.com/Damas-Tech/frontend_damas_tech/)**
- **[Jira do Projeto](https://damastech.atlassian.net/jira/people/team/cfb1ad1f-4d03-4470-bf40-58ff1017b1a0)**
- **[Documentação do ReactJS](https://reactjs.org/docs/getting-started.html)**
- **[Documentação do Vite](https://vitejs.dev/guide/)**

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT). Consulte o arquivo `LICENSE` para mais detalhes.
