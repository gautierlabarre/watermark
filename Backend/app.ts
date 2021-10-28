import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import path from "path";
import routes from "./routes/routes";

const app: Application = express();
app.use(cors()); //enable cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8088;

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

export default app;