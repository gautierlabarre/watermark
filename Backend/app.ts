import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';
import routes from './routes/routes';

const app: Application = express();
app.use(cors()); // enable cors
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8088;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});

export default app;
