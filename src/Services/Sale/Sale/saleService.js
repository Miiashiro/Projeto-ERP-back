import database from "../../../Repository/connection.js"

//Mostrar vendas
async function showSale(){
    const sql = "SELECT * FROM vw_sale"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

//Deletar venda
async function deleteSale(id){
    const sql = "DELETE FROM tbl_sale WHERE id_sale = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Alterar venda
async function updateSale(id, prod, quant, date){
    const sql = "UPDATE tbl_sale SET product=?, quantidade=?, date_sale=? WHERE id_sale=?"
    const data = [prod, quant, date, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

export default {showSale, deleteSale, updateSale}