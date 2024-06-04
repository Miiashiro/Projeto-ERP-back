import Express from "express"
import db from "../../Services/Sale/Sale/saleService.js"

const routes = Express.Router()

//Mostrar dados da tabela venda
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

routes.put('/', async(req, res) => {
    try{
        const {id, prod, quant, date} = req.body

        await db.updateSale(id, prod, quant, date)

        res.status(200).send({message: "Venda atualizada"})
    }catch(err){
        res.status(500).send({message: `Erro ao atualizar. Erro ${err}`})
    }
})

//Deletar dados da lista
routes.delete('/:id', async(req, res) => {
    try{
        const { id } = req.params

        await db.deleteSale(id)

        res.status(200).send("Venda deletada com sucesso")
    
    }catch(err){
        res.status(500).send({message: `Erro ao deletar. Erro ${err}`})
    }
})

export default routes