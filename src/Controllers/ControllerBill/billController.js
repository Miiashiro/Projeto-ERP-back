import Express from "express";
import db from "../../Services/Bill/billService.js"

const routes = Express.Router()

routes.get('/', async(req, res) => {
    try{
        const results = await db.showBill()

        if (results.length == 0) {
            res.status(204).send("Esperando entrada de dados")
        } else {
            res.status(200).json(results)
        }
        
    } catch(err){
        res.status(500).send({ message: `Erro ao tentar buscar os dados` })
    }
})

routes.post('/', async(req, res) => {
    try{
        const { bill, price, date } = req.body

        await db.createBill(bill, price, date)

        res.status(200).send("Conta criado")

    }catch(err){
        res.status(500).send({ message: `Erro ao cadastrar` })
    }
})

export default routes