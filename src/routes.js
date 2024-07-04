import Express from "express"
import user from "./Controllers/ControllerStart/startController.js"
import produto from "./Controllers/ControllerProduct/prodController.js"
import fornecedor from "./Controllers/ControllerSupllier/supllierController.js"
import conta from "./Controllers/ControllerBill/billController.js"
import venda from "./Controllers/ControllerSale/saleController.js"
import lista from "./Controllers/ControllerSale/listController.js"
import lineChart from "./Controllers/ControllerGrafics/lineChartController.js"
import barChart from "./Controllers/ControllerGrafics/barChartController.js"
import { verifyToken } from "./Middleware/jwt.js"

const route = Express()

route.use('/user', user)
route.use('/produto', verifyToken, produto)
route.use('/fornecedor', verifyToken, fornecedor)
route.use('/conta', verifyToken, conta)
route.use('/venda', verifyToken, venda)
route.use('/lista', lista)
route.use('/lineChart', lineChart)
route.use('/barChart', barChart)

export default route