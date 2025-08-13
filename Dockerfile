# Dockerfile multi-stage

# Estágio 1: Ambiente de desenvolvimento

FROM node:20-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# ---

# Estágio 2: Builder para produção

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ---

# Estágio 3: Ambiente de produção final

FROM node:20-alpine AS production

WORKDIR /app

# Copia os arquivos de build do estágio anterior
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]
