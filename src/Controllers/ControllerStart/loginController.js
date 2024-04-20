import Express from "express";
import db from "../../Services/Start/userService.js"

const routes = Express.Router()

routes.post('/', async(req, res) => {
    const {email, password} = req.body

    try{
        const users = await db.loginUser(email, password)

        if(users.length > 0){
            res.status(200).send({message: "Login efetuado com sucesso"})
        } else{
            res.status(401).send({message: "Login incorreto"})
        }
    } catch(err){
        res.status(500).send({message: `Ocorreu um erro no banco de dados. ${err}`})
    }
})

export default routes