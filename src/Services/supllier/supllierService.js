import database from "../../Repository/connection.js"

async function showSupplier(){
    const sql = "SELECT * FROM tbl_supllier"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

export default {showSupplier}