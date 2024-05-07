import Express from "express"
import db from "../../Services/supllier/supllierService.js"

const routes = Express.Router()

routes.get('/', async(req, res) => {
    try{
        const results = await db.showSupplier()

        if(results.length == 0){
            res.status(204).send("Esperando entrada de dados")
        } else{
            res.status(200).json(results)
        }
    }catch(err){
        res.status(500).send({ message: `Erro ao tentar buscar os dados` })
    }
})

export default routes