const http = require('http');
const { sumar, restar } = require('./index');
 
const PORT = process.env.PORT || 3000;
 
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const a = Number(url.searchParams.get('a'));
  const b = Number(url.searchParams.get('b'));
  let datos = { mensaje: 'Calculadora CESA7000' };
  if (url.pathname === '/sumar') datos = { resultado: sumar(a, b) };
  if (url.pathname === '/restar') datos = { resultado: restar(a, b) };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(datos));
}).listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
