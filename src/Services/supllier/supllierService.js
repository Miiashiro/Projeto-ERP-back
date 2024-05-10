import database from "../../Repository/connection.js"

async function showSupllier(){
    const sql = "SELECT * FROM tbl_supllier"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

async function createSupllier(supllier, email, tel, cnpj, cep, address, neighborhood, city, country){
    const sql = "INSERT INTO tbl_supllier(supllier_name, email, tel, cnpj, cep, adress, neighborhood, city, country) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
    const data = [supllier, email, tel, cnpj, cep, address, neighborhood, city, country]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

export default {showSupllier, createSupllier}