FROM node:24-slim
WORKDIR /app/server
COPY /package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3001
CMD ["npm", "start"]