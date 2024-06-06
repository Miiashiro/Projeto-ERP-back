import database from "../../Repository/connection.js"

async function lineChart(){
    const sql = "SELECT 'Janeiro' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" + 
                                    " WHERE date_sale BETWEEN '2024-01-01' AND '2024-01-31'" +
                " UNION ALL" +
                " SELECT 'Fevereiro' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g " +
                                    " WHERE date_sale BETWEEN '2024-02-01' AND '2024-02-31'" +
                " UNION ALL" +
                " SELECT 'Março' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-03-01' AND '2024-03-01'" +
                " UNION ALL" +
                " SELECT 'Abril' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-04-01' AND '2024-04-31'" +
                " UNION ALL" +
                " SELECT 'Maio' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-05-01' AND '2024-05-31'" +
                " UNION ALL" +
                " SELECT 'Junho' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-06-01' AND '2024-07-31'" +
                " UNION ALL" +
                " SELECT 'Julho' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-07-01' AND '2024-07-31'" +
                " UNION ALL" +
                " SELECT 'Agosto' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-08-01' AND '2024-08-31'" +
                " UNION ALL" +
                " SELECT 'Setembro' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-09-01' AND '2024-09-31'" +
                " UNION ALL" +
                " SELECT 'Outubro' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-10-01' AND '2024-10-31'" +
                " UNION ALL" +
                " SELECT 'Novembro' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-11-01' AND '2024-11-31'" +
                " UNION ALL" +
                " SELECT 'Dezembro' label, truncate(sum(v.total) - sum(g.price), 2) AS resultado FROM vw_sale v, tbl_bill g" +
                                    " WHERE date_sale BETWEEN '2024-12-01' AND '2024-12-31'"
    
    const conn = await database.connect()
    const [ rows ] = await conn.query(sql)
    conn.end()

    return rows
}

export default {lineChart}