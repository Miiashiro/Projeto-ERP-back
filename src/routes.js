import user from "./Controllers/ControllerStart/loginController.js"
import cadastro from "./Controllers/ControllerStart/userController.js"
import produto from "./Controllers/ControllerProduct/prodController.js"
import Express from "express"

const route = Express()

route.use('/user', user)
route.use('/cadastro', cadastro)
route.use('/produto', produto)

export default route