import express, { Application } from 'express';
import cors from 'cors';
import routes from './app-routes/app.routes';

const app: Application = express();
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();  
});

app.get('/', (req, res) => {
    res.send('hola')
})

app.use('/rzaraguaza', express.json(), routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})