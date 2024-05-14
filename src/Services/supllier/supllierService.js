import database from "../../Repository/connection.js"

async function showSupllier(){
    const sql = "SELECT * FROM tbl_supllier"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

async function createSupllier(supllier, email, tel, cnpj, cep, address, neighborhood, city, country){
    const sql = 
    "INSERT INTO tbl_supllier(supllier_name, email, tel, cnpj, cep, address, neighborhood, city, country) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
    const data = [supllier, email, tel, cnpj, cep, address, neighborhood, city, country]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function alterSupllier(id, supllier, email, tel, cnpj, cep, address, neighborhood, city, country){
    const sql =
    "UPDATE tbl_supllier SET supllier_name=?, email=?, tel=?, cnpj=?, cep=?, address=?, neighborhood=?, city=?, country=? WHERE id_supllier=?"
    const data = [supllier, email, tel, cnpj, cep, address, neighborhood, city, country, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function deleteSupllier(id){
    const sql = "DELETE FROM tbl_supllier WHERE id_supllier = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

export default {showSupllier, createSupllier, alterSupllier, deleteSupllier}