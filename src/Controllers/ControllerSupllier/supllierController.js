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

routes.put('/', async(req, res) => {
    try{
        const {id, supllier, email, tel, cnpj, cep, address, neighborhood, city, country} = req.body

        await db.alterSupllier(id, supllier, email, tel, cnpj, cep, address, neighborhood, city, country)

        res.status(200).send({ message: "Fornecedor alterado"})

    } catch(err){
        res.status(500).send({ message: `Erro ao alterar. Erro ${err}` })
    }
})

routes.delete('/:id', async(req, res) => {
    try{
        const { id } = req.params

        await db.deleteSupllier(id)

        res.status(200).send("Fornecedor deletado com sucesso")
    
    }catch(err){
        res.status(500).send({message: `Erro ao deletar. Erro ${err}`})
    }
})

export default routes