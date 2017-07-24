const Koa = require('koa');

const app = new Koa();

const router = require('koa-router')();


const controller = require('./controller');

app.use(controller());

// app.use(async(ctx, next)=>{
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
// });

// router.get('/hello/:name', async(ctx, next)=>{
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

// router.get('/', async(ctx, next)=>{
//     ctx.response.body =  '<h1>Index</h1>';
// });

// app.use(router.routes());

// // app.use(async (ctx, next)=>{
// //     await next();
// //     ctx.response.type = 'text/html';
// //     ctx.response.body = '<h1>Hello Koa2</h1>';
// //     console.log(ctx.request.path);
// // });

app.listen(3000);
console.log('app started at port 3000');

