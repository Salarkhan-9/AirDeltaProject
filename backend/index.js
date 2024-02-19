import express from 'express';
import mongoose from 'mongoose';
//These are middleware
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/airApplication.js';
import signUpRouter from './routes/signUp.js';
import loginRouter from './routes/login.js';

const app = express();
//
mongoose
  .connect('mongodb+srv://salar:salar2001@cluster0.czepkzc.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'));

app.listen(5000);
//middleware --sequence of this very important
//this below one must be used first
app.use(cors());
//this below one must be used second
app.use(bodyParser.json({ extended: true }));
//this below one must be used third
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/WhereToFly', router);
app.use('/CheckBookings', router);

//To create and login users
app.use('/signup', signUpRouter);
app.use('/login', loginRouter);
