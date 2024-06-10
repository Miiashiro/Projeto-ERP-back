import database from "../../Repository/connection.js"

async function showBill(){
    const sql = "SELECT * FROM tbl_spent"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
} 

async function createBill(bill, price, date){
    const sql = "INSERT INTO tbl_spent(name_bill, price, data_vencimento) VALUES(?, ?, ?)"
    const data = [bill, price, date]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
} 

async function alterBill(id, bill, price, date){
    const sql = "UPDATE tbl_spent SET name_bill = ?, price = ?, data_vencimento = ? WHERE id_bill = ?"
    const data = [bill, price, date, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function deleteBill(id){
    const sql = "DELETE FROM tbl_spent WHERE id_bill = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}
export default {showBill, createBill, alterBill, deleteBill}