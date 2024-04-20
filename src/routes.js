import user from "./Controllers/ControllerStart/loginController.js"
import Express from "express"

const route = Express()

route.use('/user', user)

export default route