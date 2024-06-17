import Express from "express"
import db from "../../Services/supllier/supllierService.js"

const routes = Express.Router()

//buscar fornecedores
routes.get('/', async(req, res) => {
    try{
        const results = await db.showSupllier()

        if(results.length == 0){
            res.status(204).send({ message: "Esperando entrada de dados." })
        } else{
            res.status(200).json(results)
        }
    }catch(err){
        res.status(500).send({ message: `Erro ao tentar buscar os dados. Erro ${err}` })
    }
})

//Criar fornecedor
routes.post('/', async(req, res) => {
    try{
        const {supllier, email, tel, cnpj, cep, address, neighborhood, city, state} = req.body

        await db.createSupllier(supllier, email, tel, cnpj, cep, address, neighborhood, city, state)

        res.status(200).send({ message: "Fornecedor criado." })

    }catch(err){
        res.status(500).send({ message: `Erro ao cadastrar. Erro: ${err}` })
    }
})

//Atualizar fornecedor
routes.put('/', async(req, res) => {
    try{
        const {id, supllier, email, tel, cnpj, cep, address, neighborhood, city, state} = req.body

        await db.updateSupllier(id, supllier, email, tel, cnpj, cep, address, neighborhood, city, state)

        res.status(200).send({ message: "Fornecedor alterado!"})

    } catch(err){
        res.status(500).send({ message: `Erro ao alterar. Erro: ${err}` })
    }
})

//Deletar fornecedor
routes.delete('/:id', async(req, res) => {
    try{
        const { id } = req.params

        await db.deleteSupllier(id)

        res.status(200).send("Fornecedor deletado!")
    
    }catch(err){
        res.status(500).send({message: `Erro ao deletar. Erro: ${err}`})
    }
})

export default routes