var express = require('express')
var app = express()

//establecemos ejs como motor de vistas
app.set('view engine','ejs')

//utilizamos res.render para cargar un archivo de vista ejs
//index
app.get('/', function(req,res){
    //res.render('pages/index')
    var heroes = [
        {nombre: 'Spider-Man', identidad: 'Peter Parker', empresa: 'Marvel'},
        {nombre: 'Batman', identidad: 'Bruce Wayne', empresa: 'DC'},
        {nombre: 'Dr. Strange', identidad: 'Stephen Strange', empresa: 'Marvel'},
    ];
    var titulo = "Superhéroes"
    res.render('pages/index', {
        heroes: heroes,
        titulo: titulo
    })
})

//pagina acerca de (opcional)
app.get('/about', function(req,res){
    res.render('pages/about')
})

app.listen(3000)
console.log('Conectado en el puerto 3000')