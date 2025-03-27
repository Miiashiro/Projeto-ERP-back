import Express from "express"
import user from "./Controllers/ControllerLogin/startController.js"
import product from "./Controllers/ControllerProduct/prodController.js"

const route = Express();

route.use('/user', user);
route.use('/product', product)

export default route;