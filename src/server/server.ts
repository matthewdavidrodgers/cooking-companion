require('@babel/polyfill');

const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 8080;

const publicPath = path.join(__dirname, '..', '..', 'dist', 'public');

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(publicPath));

app.listen(PORT);

console.log(`server listening on port ${PORT}`);