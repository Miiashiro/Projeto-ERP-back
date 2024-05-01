import database from "../../Repository/connection.js"

async function showProduct(){
    const sql = "SELECT * FROM tbl_product"

    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

async function createProduct(name, desc, price, quant, quantMin, quantMax){
    const sql = "INSERT INTO tbl_product(product_name, description, quantity, price, quant_min, quant_max) VALUES(?, ?, ?, ?, ?, ?)"
    const data = [ name, desc, quant, price, quantMin, quantMax ]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

export default {showProduct, createProduct}