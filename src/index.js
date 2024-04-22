import  Express  from "express"
import cors from "cors"
import routes from "./routes.js"

const api = Express()

api.use(cors())

api.use(Express.json())

api.use('/', routes)

api.listen(3333, () => {
    console.log("Funcionando")
})