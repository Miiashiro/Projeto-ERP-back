import Express from "express";
import cors from "cors";
import routes from "./routes.js"

const port = 3333;

const api = Express();

api.use(cors());

api.use(Express.json());

api.use('/', routes);

api.listen(port, () => {
    console.log("funcionando")
});