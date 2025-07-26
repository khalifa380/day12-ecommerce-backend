const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.use(bodyParser.json());

// ===========================
// Products Logic
// ===========================
let products = [
    { id: 1, name: 'Shoes', price: 500 },
    { id: 2, name: 'T-Shirt', price: 300 }
];

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Add a product
app.post('/api/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.json({ message: 'Product added', product });
});

// ===========================
// Users Logic
// ===========================
let users = [
    { id: 1, username: 'admin', password: 'admin123' }
];

// Login route
app.post('/api/users/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'Login successful', userId: user.id });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// ===========================
// Cart Logic
// ===========================
let cart = [];

app.post('/api/cart', (req, res) => {
    const { productId } = req.body;
    cart.push(productId);
    res.json({ message: 'Product added to cart', cart });
});

// ===========================
// Payment (Mock)
// ===========================
app.post('/api/payment', (req, res) => {
    res.json({ message: 'Payment successful!' });
});

// ===========================
// Server Setup
// ===========================
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
