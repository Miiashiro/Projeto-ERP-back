import Express from "express";
import db from "../../Services/Grafics/barChart.js"

const routes = Express.Router()

//Mostrar dados
routes.get('/', async(req, res) => {
    try{
        const results = await db.barChart()

        if(results.length == 0){
            res.status(204).send({message: "Esperando entrada de dados."})
        } else {
            res.status(200).json(results)
        }
    }catch(err){
        res.status(500).send({message: `Erro ao tentar buscar dados. Erro: ${err}`})
    }
})

export default routes 