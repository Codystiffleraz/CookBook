const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.use(express.static((__dirname, 'public')));



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', function(req,res){
    res.render('login')
})









app.listen(3000, () => {
    console.log("Up on 3k")
})
module.exports = app
