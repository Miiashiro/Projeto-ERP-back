import Express from "express";
import db from "../../Services/product/prodService.js"

const routes = Express.Router()

//Buscar produtos
routes.get('/', async (req, res) => {
    try {
        const results = await db.showProduct()

        if (results.length == 0) {
            res.status(204).send({ message: "Esperando entrada de dados." })
        } else {
            res.status(200).json(results)
        }

    } catch (err) {
        res.status(500).send({ message: `Erro ao tentar buscar os dados. Erro ${err}` })
    }
})

//Criar produto
routes.post('/', async (req, res) => {
    const { name, desc, price, quant, quantMin, quantMax } = req.body

    // validacao
    if (!name) {
        return res.status(422).json({ messagem: "O campo nome do produto é obrigatório." })
    }

    if (!price) {
        return res.status(422).json({ messagem: "O campo preço é obrigatório." })
    }

    try {
        await db.createProduct(name, desc, price, quant, quantMin, quantMax)

        res.status(200).send({ message: "Produto criado." })

    } catch (err) {
        res.status(500).send({ message: `Erro no sistema. Erro: ${err}` })
    }
})

//Atualizar produto
routes.put('/', async (req, res) => {
    try {
        const { id, name, desc, price, quant, quantMin, quantMax } = req.body

        await db.updateProduct(id, name, desc, price, quant, quantMin, quantMax)

        res.status(200).send({ message: "Produto alterado." })
    } catch (err) {
        res.status(500).send({ message: `Erro ao atualizar. Erro: ${err}` })
    }
})

//Deletar produto
routes.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        await db.deleteProd(id)

        res.status(200).send({ message: "Produto deletado." })
    } catch (err) {
        res.status(500).send({ message: `Erro ao deletar. Erro ${err}` })
    }
})

export default routes