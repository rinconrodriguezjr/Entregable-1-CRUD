const express = require("express");

const db = require('./utils/database');
const Todos = require('./models/todos.model');
const todosRoutes = require('./routes/todo.routes');
const PORT = 8000;
Todos;

db.authenticate()
.then(() =>{
    console.log('conexion a base de datos ok');
})
.catch((error) => {
    console.log(error)
});

db.sync()
.then(() => {
    console.log("base de datos sincronizada");
})
.catch((error) => {
    console.log(error);
})

const app = express();
app.use(express.json());
app.use(todosRoutes);


// app.get('/', (req, res) => {
//     res.send("bienvenido a mi servidor");
// });

app.listen(PORT, ()=> {
    console.log(`servidor escuchanto en el puerto ${PORT}`);
})

