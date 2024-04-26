import database from "../../Repository/connection.js"

async function showProduct(){
    const sql = "SELECT * FROM tbl_product"

    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

export default {showProduct}