const Koa = require('koa');
const KoaStatic = require('koa-static');

const app = new Koa();

app.use(KoaStatic('../client/index.html'));