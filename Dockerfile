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
RUN npm run build

EXPOSE 3000

# Команда для запуска Nginx в контейнере
CMD ["npm", "start"]