const server = require('../src/server');
 
let base;
 
beforeAll((done) => {
  server.listen(0, () => {
    base = `http://localhost:${server.address().port}`;
    done();
  });
});
 
afterAll((done) => {
  server.closeAllConnections();
  server.close(done);
});

describe('servidor HTTP', () => {
  test('GET /sumar devuelve el resultado', async () => {
    const res = await fetch(`${base}/sumar?a=2&b=3`);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ resultado: 5 });
  });
 
  test('GET /restar devuelve el resultado', async () => {
    const res = await fetch(`${base}/restar?a=5&b=1`);
    expect(await res.json()).toEqual({ resultado: 4 });
  });
 
  test('la raíz devuelve el mensaje en JSON', async () => {
    const res = await fetch(base);
    expect(res.headers.get('content-type')).toBe('application/json');
    expect(await res.json()).toEqual({ mensaje: 'Calculadora CESA7000' });
  });
});
