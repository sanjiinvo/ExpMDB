const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const db = 'mongodb+srv://SanzharSattybaev:Sanzharsanalismid98@cluster0.26rogan.mongodb.net/?retryWrites=true&w=majority'
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes')
const contactRoutes = require('./routes/contact-routes')
const createPath = require('./helpers/create-path');



mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));


app.set('view engine', 'ejs')

const port = 3000;


app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Server is running on port ${port}`); 
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded({extended: false}));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    const title = 'Home';

    res.render(createPath('index'), {title});
})



app.get('/aboutus', (req, res) => {
    res.redirect('contacts');
})

app.use(postRoutes);
app.use(contactRoutes);

app.use((req, res) => {
    const title = 'Error';
    res
    .status(404)
    .render(createPath('error'),{title});
})