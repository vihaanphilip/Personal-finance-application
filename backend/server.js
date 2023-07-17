require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();


// middleware & static files
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
// app.get('/', (req, res) => {
//     res.json({ msg: 'Welcome to the app haha' });
// });
app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => { 
    console.log('listening for requests on port', process.env.PORT)
});