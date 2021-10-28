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

app.use("/", routes);

export default app;