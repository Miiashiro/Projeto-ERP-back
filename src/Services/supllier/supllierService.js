import database from "../../Repository/connection.js"

//Mostrar Fornecedores
async function showSupllier(){
    const sql = "SELECT * FROM tbl_supllier"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

//Criar fornecedor
async function createSupllier(supllier, email, tel, cnpj, cep, address, neighborhood, city, state){
    const sql = 
    "INSERT INTO tbl_supllier(supllier_name, email, tel, cnpj, cep, address, neighborhood, city, state) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
    const data = [supllier, email, tel, cnpj, cep, address, neighborhood, city, state]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Modificar fornecedor
async function updateSupllier(id, supllier, email, tel, cnpj, cep, address, neighborhood, city, state){
    const sql =
    "UPDATE tbl_supllier SET supllier_name=?, email=?, tel=?, cnpj=?, cep=?, address=?, neighborhood=?, city=?, state=? WHERE id_supllier=?"
    const data = [supllier, email, tel, cnpj, cep, address, neighborhood, city, state, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Deletar fornecedor
async function deleteSupllier(id){
    const sql = "DELETE FROM tbl_supllier WHERE id_supllier = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

export default {showSupllier, createSupllier, updateSupllier, deleteSupllier}