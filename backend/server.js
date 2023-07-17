require('dotenv').config();

const express = require('express');

// express app
const app = express();

// middleware & static files
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the app haha' });
});

// listen for requests
app.listen(process.env.PORT, () => { 
    console.log('listening for requests on port', process.env.PORT)
});