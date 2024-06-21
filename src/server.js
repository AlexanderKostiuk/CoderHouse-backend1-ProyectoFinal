import express from 'express';
import handlebars from 'express-handlebars'
import morgan from 'morgan';
import userRouter from './routes/users.router.js';
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { initMongoDB } from './db/database.js';
import { __dirname } from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'))


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);

app.use(errorHandler);

initMongoDB();

const PORT = 8080;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));

