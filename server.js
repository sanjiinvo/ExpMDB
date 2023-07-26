const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes')
const postApiRoutes = require('./routes/api-post-routes')
const contactRoutes = require('./routes/contact-routes')
const groupApiRoutes = require('./routes/api-group-routes')
const rusIshiApiRoutes = require('./routes/api-rush-ishi-routes')
const kazishiApiRoutes = require('./routes/api-kazishi-routes')
const kazishiApiRoutesZaoch = require('./routes/api-kazishi-zaoch-routes')
const rusAldyApiRoutes = require('./routes/api-rus-aldy-routes')
const rusAldyZaochApiRoutes = require('./routes/api-rus-aldy-zaoch-routes')
const kazAldyApiRoutes = require('./routes/api-kaz-aldy-routes ')
const kazAldyZaochApiRoutes = require('./routes/api-kaz-aldy-zaoch-routes ')
const dipkokApiRoutes = require('./routes/api-dipkok-routes ')
const hookalist = require('./routes/api-hookatastes-routes')
const hookalistIDs = require('./routes/api-hookatastesIDs-routes')
const agentinfo = require('./routes/api-agent-routes ')
const createPath = require('./helpers/create-path');




mongoose
    .connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));


app.set('view engine', 'ejs')



app.listen(process.env.PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on port ${process.env.PORT}`); 
})

app.use(cors());

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
app.use(postApiRoutes);
app.use(groupApiRoutes);
app.use(kazishiApiRoutes);
app.use(rusAldyApiRoutes);
app.use(kazAldyApiRoutes);
app.use(dipkokApiRoutes);
app.use(agentinfo);
app.use(hookalist)
app.use(hookalistIDs)
app.use(rusIshiApiRoutes)
app.use(kazishiApiRoutesZaoch)
app.use(rusAldyZaochApiRoutes)
app.use(kazAldyZaochApiRoutes)

app.use((req, res) => {
    const title = 'Error';
    res
    .status(404)
    .render(createPath('error'),{title});
})