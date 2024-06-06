import user from "./Controllers/ControllerStart/loginController.js"
import cadastro from "./Controllers/ControllerStart/userController.js"
import produto from "./Controllers/ControllerProduct/prodController.js"
import fornecedor from "./Controllers/ControllerSupllier/supllierController.js"
import conta from "./Controllers/ControllerBill/billController.js"
import venda from "./Controllers/ControllerSale/saleController.js"
import lista from "./Controllers/ControllerSale/listController.js"
import Express from "express"
import lineChart from "./Controllers/ControllerGrafics/lineChartController.js"

const route = Express()

route.use('/user', user)
route.use('/cadastro', cadastro)
route.use('/produto', produto)
route.use('/fornecedor', fornecedor)
route.use('/conta', conta)
route.use('/venda', venda)
route.use('/lista', lista)
route.use('/lineChart', lineChart)

export default route