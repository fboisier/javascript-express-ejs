const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/publicdos"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/pancho", (req, res) => {  

    //codigo para buscar datos, a la base datos.
    let nombre = "FRANCISCO";
    let arr = ["toyota", "BMW", "suzuki"];

    let htmlAutos = "";

    for (const auto of arr) {
        htmlAutos += '<li>' + auto + '</li>'
    }
    
    res.send(`
                    <html>
                    <head>
                        
                    </head>
                    <h1>Hello Express ${nombre}</h1>
                    <ul>
                        ${htmlAutos}
                    </ul>
    
    `);
});

app.get("/panchoEJS", (req, res) => {  

    let nombre = "FRANCISCO";
    let arr = ["toyota", "BMW", "suzuki"];


    res.render('vistapancho', 
        {
            nombre: nombre, 
            arreglo: arr
        });

});

app.get("/otroEJS", (req, res) => {  

    let nombre = "Pancho";
    let arr = ["1112", "222", "3333"];

    res.render('vistapancho', 
        {
            nombre: nombre, 
            arreglo: arr
        });

});

app.get("/contacto", (req, res) => {  

    // esta linea toma la VISTA y le pasa las variables. 
    res.render('contacto',{});

});



app.get("/users", function (request, response){
    // hard-coded user data
    let users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"},
        {name: "Francisco", email: "pancho@codingdojo.com"}
    ];


    response.render('users', {users: users_array});
})

app.get("/personas", function (request, response){
    // hard-coded user data
    let arr_personas = [
        {name: "Javier", email: "javier@codingdojo.com"},
        {name: "Javier222", email: "javier222@codingdojo.com"},
    ];


    response.render('users', {users: arr_personas});
})






app.listen( port, () => {
    console.log(`Listening on port: ${port}`);
});