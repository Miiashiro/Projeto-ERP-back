import database from "../../Repository/connection.js"

async function barChart(){
    const sql = "select product, sum(quantidade) total from tbl_sale" +
    " group by product"

    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

export default {barChart}