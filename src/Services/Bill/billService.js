import database from "../../Repository/connection.js"

async function createBill(bill, price, date){
    const sql = "INSERT INTO tbl_bill(name_bill, price, data_vencimento) VALUES(?, ?, ?)"
    const data = [bill, price, date]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
} 

export default {createBill}