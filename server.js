const express = require('express');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars')

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const controllers = require('./controllers');
app.use(controllers);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
})