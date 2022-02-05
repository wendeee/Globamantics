const express = require('express');
const chalk = require("chalk");

const debug = require('debug')('app');
const morgan = require('morgan')
const path = require('path')

const app = express();

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public')))

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.get('/', (req, res)=> {
    res.send('Back')
})

app.listen(3000, ()=>{
    debug(`App is listening on port ${chalk.green('3000')}`)
})