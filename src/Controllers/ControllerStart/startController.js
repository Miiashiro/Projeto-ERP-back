import Express from "express";
import { generatePassword } from "../../Helpers/helpActions.js";
import { generatedToken } from "../../Helpers/loginActions.js";
import db from "../../Services/Start/userService.js"

const routes = Express.Router()

routes.post('/login', async (req, res) => {
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

routes.post('/cadastrar', async (req, res) => {
    const { name, email, password } = req.body

    try{
        await db.createUser(name, email, password)

        res.status(200).send("Usuario criado")
    }catch(err){
        res.status(500).send({ message: `Erro no sistema. Erro: ${err}` })
    }
})

routes.post('/reset', async (req, res) => {
    const { email } = req.body

    try {
        const users = await db.checkEmail(email)

        if (users.length > 0) {
            const newPassword = generatePassword()

            await db.changePassword(email, newPassword)

            res.status(200).send({ message: "Senha alterada!"})
        } else {
            res.status(401).send({ message: "Usuário não encontrado" })
        }
    } catch (err) {
        res.status(500).send({ message: `Ocorreu um erro. Erro: ${err}` })
    }
})

export default routes