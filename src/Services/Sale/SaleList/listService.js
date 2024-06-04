import database from "../../../Repository/connection.js"

async function showSaleList(){
    const sql = "select s.id_sale, p.product_name, s.quantidade, s.date_sale, p.price, (s.quantidade * p.price) as total" + 
    " from tbl_false s, tbl_product p" +
    " where p.id_prod = s.id_prod_fk" +
    " group by s.id_sale, p.product_name, s.quantidade, s.date_sale, p.price;"
    
    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

async function createList(id_prod, quant, dateSale){
    const sql = "INSERT INTO tbl_false(id_prod_fk, quantidade, date_sale) VALUES(?, ?, ?)"
    const data = [id_prod, quant, dateSale]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function deleteList(){
    const sql = "DELETE FROM tbl_false"

    const conn = await database.connect()
    conn.query(sql)
    conn.end()
}

async function deleteDataList(id){
    const sql = "DELETE FROM tbl_false WHERE id_sale = ?"
    const data = [id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function createSale(){
    const sql = "insert into tbl_sale(id_sale, id_prod_fk, quantidade, date_sale) select id_sale, id_prod_fk, quantidade, date_sale from tbl_false;"

    const conn = await database.connect()
    conn.query(sql)
    conn.end()
}

export default {showSaleList, createList, deleteList, deleteDataList, createSale}