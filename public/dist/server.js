import express from 'express';
const app = express();
const port = 3000;
// Маршрут по умолчанию
app.get('/', (req, res) => {
    res.send('Hello, world!');
});
// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map