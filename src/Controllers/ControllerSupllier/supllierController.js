import Express from "express"
import db from "../../Services/supllier/supllierService.js"

const routes = Express.Router()

routes.get('/', async(req, res) => {
    try{
        const results = await db.showSupllier()

        if(results.length == 0){
            res.status(204).send({ message: "Esperando entrada de dados" })
        } else{
            res.status(200).json(results)
        }
    }catch(err){
        res.status(500).send({ message: `Erro ao tentar buscar os dados` })
    }
})

routes.post('/', async(req, res) => {
    try{
        const {supllier, email, tel, cnpj, cep, address, neighborhood, city, country} = req.body

        await db.createSupllier(supllier, email, tel, cnpj, cep, address, neighborhood, city, country)

        res.status(200).send({ message: "Fornecedor criado." })
    }catch(err){
        res.status(500).send({ message: `Erro ao cadastrar. Erro ${err}` })
    }
})

export default routes