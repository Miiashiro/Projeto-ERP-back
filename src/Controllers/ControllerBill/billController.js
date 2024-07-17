import Express from "express";
import db from "../../Services/Bill/billService.js"

const routes = Express.Router()

//Buscar contas
routes.get('/', async(req, res) => {
    try{
        const results = await db.showBill()

        if (results.length == 0) {
            res.status(204).send("Esperando entrada de dados.")
        } else {
            res.status(200).json(results)
        }
        
    } catch(err){
        res.status(500).send({ message: `Erro ao tentar buscar os dados. Erro: ${err}` })
    }
})

//Cadastrar conta
routes.post('/', async(req, res) => {
    const { bill, price, date } = req.body

    // Validacao
    if(!bill){
        return res.status(422).json({message: "O campo de nome da conta é obrigatório."})
    }
    if(!price){
        return res.status(422).json({message: "O campo de preço é obrigatório"})
    }

    try{
        await db.createBill(bill, price, date)

        res.status(200).send("Conta criada!")

    }catch(err){
        res.status(500).send({ message: `Erro ao cadastrar conta. Erro: ${err}` })
    }
})

//Atualizar conta
routes.put('/', async(req, res) => {
    try{
        const { id, bill, price, date } = req.body

        await db.updateBill(id, bill, price, date)

        res.status(200).send("Conta atualizada!")

    }catch(err){
        res.status(500).send({ message: `Erro ao atualizar conta. Erro: ${err}` })
    }
})

//Deletar conta
routes.delete('/:id', async(req, res) => {
    try{
        const {id} = req.params

        await db.deleteBill(id)

        res.status(200).send("Conta deletada!")
    }catch(err){
        res.status(500).send({message: `Erro ao deletar. Erro: ${err}`})
    }
})

export default routes