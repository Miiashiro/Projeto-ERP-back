import database from "../../../Repository/connection.js"

//Mostrar lista de venda
async function showSaleList(){
    const sql = "select f.*, p.price, truncate((f.quantidade * p.price),2) total from tbl_false f, tbl_product p" +
    " where f.product = p.product_name"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

//Adicionar vendas a lista
async function createList(id_prod, quant, dateSale){
    const sql = "INSERT INTO tbl_false(product, quantidade, date_sale) VALUES(?, ?, ?)"
    const data = [id_prod, quant, dateSale]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Deletar lista
async function deleteList(){
    const sql = "DELETE FROM tbl_false"

    const conn = await database.connect()
    conn.query(sql)
    conn.end()
}

//Deletar dados da lista
async function deleteDataList(id){
    const sql = "DELETE FROM tbl_false WHERE id_sale = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Salvar lista
async function saveSale(){
    const sql = "insert into tbl_sale(id_sale, product, quantidade, date_sale) select id_sale, product, quantidade, date_sale from tbl_false;"

    const conn = await database.connect()
    conn.query(sql)
    conn.end()
}

export default {showSaleList, createList, deleteList, deleteDataList, saveSale}