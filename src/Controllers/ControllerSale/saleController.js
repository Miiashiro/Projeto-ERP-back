import Express from "express"
import db from "../../Services/Sale/saleService.js"

const routes = Express.Router()

routes.get('/', async(req, res) => {
    try{
        const results = await db.showSale()

        if(results.length == 0){
            res.status(204).send("Esperando entrada de dados")
        } else {
            res.status(200).json(results)
        }
    }catch(err){
        res.status(500).send({ message: `Erro ao tentar buscar os dados` })
    }
})

routes.post('/adicionar', async(req, res) => {
    try{
        const {id_prod, quant, dateSale} = req.body

        await db.createList(id_prod, quant, dateSale)

        res.status(200).send("Venda inserida")
    }catch(err){
        res.status(500).send({message: `Erro ao inserir venda`})
    }
})

routes.post('/salvar', async(req, res) => {
    try{
        await db.createSale()

        res.status(200).json({ message: 'Dados cadastrados com sucesso' })

    }catch(err){
        res.status(500).send({message: `Erro ao cadastrar. Erro ${err}`})
    }
})

routes.delete('/lista', async (req, res) => {
    try {
        await db.deleteList()

        res.status(200).send({ message: "Venda deletada com sucesso!" })

    } catch (err) {
        res.status(500).send({ message: `Erro ao deletar. Erro ${err}` })
        
    }
})

export default routes