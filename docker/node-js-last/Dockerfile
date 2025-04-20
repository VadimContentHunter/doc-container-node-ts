# Используем последнюю версию Node.js
FROM node:latest

# Устанавливаем рабочую директорию в контейнере в /var/www/doc-container-node-ts
WORKDIR /var/www/doc-container-node-ts

# Копируем файл package.json в рабочую директорию
COPY ./public/package.json /var/www/doc-container-node-ts/

# Устанавливаем зависимости
RUN npm install

# Копируем весь контент из папки public в рабочую директорию
COPY ./public /var/www/doc-container-node-ts/

# Открываем порты
EXPOSE 9003

# Устанавливаем команду для запуска приложения
CMD ["npm", "start"]
