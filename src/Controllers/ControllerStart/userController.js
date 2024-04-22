import Express from "express"
import db from "../../Services/Start/userService.js"

const routes = Express.Router()

routes.post('/', async (req, res) => {
    const { name, email, password } = req.body

    await db.createUser(name, email, password)

    res.status(200).send("Usuario criado")
})

export default routes