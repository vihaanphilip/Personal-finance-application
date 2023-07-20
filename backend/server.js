require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

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

//connect to db
// print(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => { 
            console.log('connected to db & listening for requests on port', process.env.PORT)
        });
    })
    .catch((err) => {
        console.log(err);
    });

