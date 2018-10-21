const Koa = require('koa');
const Router = require('koa-router');
const send = require('koa-send');
const path = require('path');

const app = new Koa();
const router = new Router();

const publicPath = path.join(__dirname, '..', '..', 'public');

router.get('**', async (ctx: any, next: Function) => {
  console.log('sending');
  await send(ctx, '/Users/mrod/code/cooking-companion/public/index.html');
});

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000);