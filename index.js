const port = 1337;
const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');
app.use(express.urlencoded({ extended: true }));

app.engine('html', es6Renderer);
app.set('views','views');
app.set('view engine','html');

const session = require('express-session');
const fileStore = require('session-file-store')(session);

const gameRouter = require('./routes/games');
const congratsRouter = require('./routes/congrats');

app.use(session({
    store: new fileStore(),
    secret: "w234oon55oola00ddddzxccvrh3"
}))


app.use('/guess', gameRouter);


app.use('/congrats', congratsRouter)



app.listen(port, ()=>{
    console.log(`port:${port} `)
});