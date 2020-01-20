const Koa = require('koa');
const indexRoutes = require('./routes/index');
const brokersRoutes = require('./routes/brokers');
const searchRoutes = require('./routes/search');

const app = new Koa();

const PORT = process.env.PORT || 8080;

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// routes

app.use(indexRoutes.routes());
app.use(brokersRoutes.routes());
app.use(searchRoutes.routes());

const server = app.listen(PORT, async () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;