import database from "../../Repository/connection.js"

//Mostrar contas
async function showBill(){
    const sql = "SELECT * FROM tbl_bill"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
} 

//Criar conta
async function createBill(bill, price, date){
    const sql = "INSERT INTO tbl_bill(name_bill, price, data_vencimento) VALUES(?, ?, ?)"
    const data = [bill, price, date]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
} 

//Alterar conta
async function updateBill(id, bill, price, date){
    const sql = "UPDATE tbl_bill SET name_bill = ?, price = ?, data_vencimento = ? WHERE id_bill = ?"
    const data = [bill, price, date, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Deletar conta
async function deleteBill(id){
    const sql = "DELETE FROM tbl_bill WHERE id_bill = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}
export default {showBill, createBill, updateBill, deleteBill}