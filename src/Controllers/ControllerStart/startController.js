import Express from "express";
import { generatePassword } from "../../Helpers/helpActions.js";
import { generateToken } from "../../Helpers/helpActions.js";
import db from "../../Services/Start/userService.js"

const routes = Express.Router()

//Login
routes.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        //Checar se existe o usuario
        const users = await db.loginUser(email, password)

        //Se existir um usuario
        if (users.length > 0) {

            //Coletando dados para gerar token
            const id_user = users[0].id_user
            const name_user = users[0].name_user
            const email_user = users[0].email

            const token = generateToken(id_user, name_user, email_user)
            
            res.status(200).send({ message: "Login efetuado com sucesso!", token})
        } else {
            res.status(401).send({ message: "Login incorreto!" })
        }
    } catch (err) {
        res.status(500).send({ message: `Ocorreu um erro no banco de dados. ${err}` })
    }
})

//Cadastrar
routes.post('/cadastro', async (req, res) => {
    const { name, email, password } = req.body

    try{
        await db.createUser(name, email, password)

        res.status(200).send("Usuario criado.")
    }catch(err){
        res.status(500).send({ message: `Erro no sistema. Erro: ${err}` })
    }
})

//Nova senha
routes.post('/redefinir', async (req, res) => {
    const { name, email } = req.body

    try {
        //Checando email
        const users = await db.checkEmail(name, email)

        //Se email existe no banco de dados
        if (users.length > 0){

            //Gera nova senha
            const newPassword = generatePassword()

            //Atualiza a senha no banco
            await db.changePassword(name, email, newPassword)

            //Busca a nova senha gerada
            const result = await db.getPassword(name, email)

            res.status(200).send({ message: "Senha alterada!", result})
        } else {
            res.status(401).send({ message: "Usuário não encontrado!" })
        }
    } catch (err) {
        res.status(500).send({ message: `Ocorreu um erro. Erro: ${err}` })
    }
})

export default routes