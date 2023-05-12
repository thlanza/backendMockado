// Produtos com os reviews relacionados http://localhost:3000/products?_embed=reviews -> produto e filhos
// Produto 1 com reviews relacionados http://localhost:3000/1?_embed=reviews -> produto e filhos
// Review com seu produto relacionado http://localhost:3000/reviews?_expand=product -> reviews e pais
// Review 1 com seu producto relacionado http://localhost:3000/reviews/1?_expand=product  
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);