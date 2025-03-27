import database from "../../Repository/connection.js"

//Mostrar produtos
async function showProduct(){
    const sql = "SELECT * FROM tbl_product;"

    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

//Criar produto
async function createProduct(name, desc, price, quant, quantMin, quantMax){
    const sql = "INSERT INTO tbl_product(product_name, description, price, quantity, quant_min, quant_max) VALUES(?, ?, ?, ?, ?, ?)"
    const data = [ name, desc, price, quant, quantMin, quantMax ]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Alterar produto
async function updateProduct(id, name, desc, price, quant, quantMin, quantMax){
    const sql = "UPDATE tbl_product SET product_name=?, description=?, price=?, quantity=?, quant_min=?, quant_max=? WHERE id_prod=?"
    const data = [name, desc, price, quant, quantMin, quantMax, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Deletar produto
async function deleteProd(id){
    const sql = "DELETE FROM tbl_product WHERE id_prod = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

export default {showProduct, createProduct, updateProduct, deleteProd}