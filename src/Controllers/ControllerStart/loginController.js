import Express from "express";
import { generatedToken } from "../../Helpers/loginActions.js";
import db from "../../Services/Start/userService.js"

const routes = Express.Router()

routes.post('/', async (req, res) => {
    const { email, password } = req.body

    try {
        const users = await db.loginUser(email, password)

        if (users.length > 0) {

            const id_user = users[0].id_user
            const name_user = users[0].name_user
            const email_user = users[0].email

            const token = generatedToken(id_user, name_user, email_user)
            
            res.status(200).send({ message: "Login efetuado com sucesso", token})

            console.log(">>>>>", token)
        } else {
            res.status(401).send({ message: "Login incorreto" })
        }
    } catch (err) {
        res.status(500).send({ message: `Ocorreu um erro no banco de dados. ${err}` })
    }
})

export default routes