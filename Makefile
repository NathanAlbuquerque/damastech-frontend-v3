# Makefile para facilitar o gerenciamento do ambiente docker

# Comando para criar o projeto Next.js pela primeira vez

init:
	@echo "Iniciando a criação INTERATIVA do projeto Next.js..."
	@docker run -it --rm -v $(shell pwd):/app -w /app node:20-alpine sh -c "npx create-next-app@latest temp-app && mv temp-app/* temp-app/.[!.]* . && rm -rf temp-app"
	@echo "Projeto Next.js criado. Como próximo passo rode 'make init-shadcn' para configurar a UI."

# Comando para instalar/atualizar dependências (incluindo shadcn-ui)

deps:
	@docker compose run --rm dev npm install

# Comando para inicializar o shadcn-ui (executar apenas uma vez)

init-shadcn:
	@echo "Inicializando shadcn-ui... Responda às perguntas no terminal."
	@docker compose run --rm dev npx shadcn@latest init

# Comando para adicionar um novo componente do shadcn-ui

add-ui:
	@read -p "Qual componente do shadn-ui você quer adicionar? (ex: button): " component; \
	docker compose run --rm dev npx shadcn@latest add $$component

# Comando para iniciar o ambiente de desenvolvimento

dev:
	@echo "Iniciando ambiente de desenvolvimento em http://localhost:3000"
	@docker compose up dev

# Comando para parar os containers de desenvolvimento

down:
	@echo "Parando os containers de desenvolvimento..."
	@docker compose down

# Comando para construir a imagem de produção

build:
	@echo "Contruindo imagem de produção..."
	@docker compose build prod

# Comando para iniciar o ambiente de produção

prod:
	@echo "Iniciando ambiente de produção em http://localhost:8080"
	@docker compose up prod

# Comando para limpar tudo (CUIDADO: remove alguns volumes e imagens)

clean: down
	@docker system prune -af --volumes

.PHONY: init deps init-shadcn add-ui dev down build prod clean
