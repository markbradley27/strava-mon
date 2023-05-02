FROM node:18-alpine as builder
WORKDIR app/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR app/
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist
CMD node .
