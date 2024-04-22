import user from "./Controllers/ControllerStart/loginController.js"
import cadastro from "./Controllers/ControllerStart/userController.js"
import Express from "express"

const route = Express()

route.use('/user', user)
route.use('/cadastro', cadastro)

export default route