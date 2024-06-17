import Express from "express";
import db from "../../Services/product/prodService.js"

const routes = Express.Router()

routes.get('/', async (req, res) => {
    try {
        const results = await db.showProduct()

        if (results.length == 0) {
            res.status(204).send("Esperando entrada de dados")
        } else {
            res.status(200).json(results)
        }

    } catch (err) {
        res.status(500).send({ message: `Erro ao tentar buscar os dados` })
    }
})

routes.post('/', async (req, res) => {
    try {
        const { name, desc, price, quant, quantMin, quantMax } = req.body

        await db.createProduct(name, desc, price, quant, quantMin, quantMax)

        res.status(200).send("Produto criado")
    } catch (err) {
        res.status(500).send({ message: `Erro ao cadastrar. Erro ${err}` })
    }
})

routes.put('/', async (req, res) => {
    try {
        const { id, name, desc, price, quant, quantMin, quantMax } = req.body

        await db.updateProduct(id, name, desc, price, quant, quantMin, quantMax)

        res.status(200).send("Produto alterado com sucesso")
    } catch (err) {
        res.status(500).send({ message: `Erro ao atualizar. Erro ${err}` })
    }
})

routes.delete('/:id', async(req, res) => {
    try{
        const {id} = req.params

        await db.deleteProd(id)

        res.status(200).send("Produto deletado com sucesso")
    }catch(err){
        res.status(500).send({message: `Erro ao deletar. Erro ${err}`})
    }
})

export default routes