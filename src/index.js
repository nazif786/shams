const path = require('path')
const http = require('http')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const { urlencoded } = require('express')
require('dotenv').config()


//app.engine('handlebars', engine)
app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 

// Configure template Engine and Main Template File
app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))
// app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')))

// setting static files 
// app.use('/static', express.static('public'));
// app.use('/static', express.static(path.join(__dirname,'')));

const routes = require('./routes/main')
app.use('/', routes)


const port = process.env.PORT;
const hostname = process.env.HOST;
http.createServer(app).listen(port, (err) => {
  if (err)
        throw err
    else
        console.log(`server is running at port no http://localhost:${port}`)
})
