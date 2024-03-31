# Используем официальный образ Node в качестве базового образа
FROM node:14 AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта внутрь контейнера
COPY . .

# Собираем React приложение с помощью Craco
RUN npm run build:craco

# Используем lightweight образ nginx для production stage
FROM nginx:alpine

# Копируем статические файлы React приложения из build stage
COPY --from=build /app/build /usr/share/nginx/html

# Экспонируем порт 80, на котором будет работать Nginx
EXPOSE 80

# Команда для запуска Nginx в контейнере
CMD ["nginx", "-g", "daemon off;"]