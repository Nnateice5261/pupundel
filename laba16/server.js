const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Simulated API data (replace with your actual API call)
const apiData = {
    items: [
        { id: 1, name: "Item 1", description: "Description 1" },
        { id: 2, name: "Item 2", description: "Description 2" }
    ]
};

// Middleware for handling JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for authentication (replace with your actual authentication)
const authenticate = (req, res, next) => {
    const token = req.header('Authorization'); // Get token from Authorization header
    if (token === 'your_secret_token') { // Replace with your token verification logic
        next(); // If token is valid, proceed to the next middleware
    } else {
        res.status(401).json({ error: 'Unauthorized' }); // Unauthorized
    }
};

// GET route to fetch data from the API (simulated)
app.get('/api/items', authenticate, (req, res) => {
    res.json(apiData);
});
app.post('/save', (req, res) => {
    console.log('Полученные данные:', req.body); // Выводит полученные данные в консоль
    try {
        // Здесь можно обработать данные и сохранить их (в базу данных, файл, и т.д.)

        // Возвращаем ответ клиенту
        res.json({ message: 'Данные успешно получены' });
    } catch (error) {
        console.error('Ошибка при обработке данных:', error);
        res.status(500).json({ error: 'Ошибка сервера' }); // Отправляем ошибку 500 клиенту
    }
});
// POST route to save data (this is server-side, not directly interacting with localStorage)

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// 404 error handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
