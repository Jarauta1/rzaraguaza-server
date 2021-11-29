import express, { Application } from 'express';
import cors from 'cors';
import routes from './app-routes/app.routes';
import { nextTick } from 'process';

const app: Application = express();
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Acces-Control-Allow-Headers",
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