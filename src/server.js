const express = require("express");
const server = express();
const routes = require("./routes")

server.set('view engine', 'ejs');

//habilita arquivos statics
server.use(express.static("public"));

//rotas
server.use(routes);

server.listen(3000, () => console.log('rodando'));