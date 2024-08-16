import database from "../../Repository/connection.js"

//Mostrar valor liquido recebido das vendas
async function lineChart() {
    const sql = "select 'Janeiro' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-01-01' and '2024-01-31') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-01-01' and '2024-01-31'), 2) as total " +
        " UNION ALL " +
        " select 'Fevereiro' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-02-01' and '2024-02-29') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-02-01' and '2024-02-29'), 2) as total " +
        " UNION ALL " +
        " select 'Março' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-03-01' and '2024-03-31') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-03-01' and '2024-03-31'), 2) as total " +
        " UNION ALL " +
        " select 'Abril' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-04-01' and '2024-04-30') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-04-01' and '2024-04-30'), 2) as total " +
        " UNION ALL " +
        " select 'Maio' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-05-01' and '2024-05-31') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-05-01' and '2024-05-31'), 2) as total " +
        " UNION ALL " +
        " select 'Junho' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-06-01' and '2024-06-30') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-06-01' and '2024-06-30'), 2) as total " +
        " UNION ALL " +
        " select 'Julho' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-07-01' AND '2024-07-31') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-07-01' AND '2024-07-31'), 2) as total " +
        " UNION ALL " +
        " select 'Agosto' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-08-01' and '2024-08-31') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-08-01' and '2024-08-31'), 2) as total " +
        " UNION ALL " +
        " select 'Setembro' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-09-01' and '2024-09-30') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-09-01' and '2024-09-30'), 2) as total " +
        " UNION ALL " +
        " select 'Outubro' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-10-01' and '2024-10-31') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-10-01' and '2024-10-31'), 2) as total " +
        " UNION ALL " +
        " select 'Novembro' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-11-01' and '2024-11-30') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-11-01' and '2024-11-30'), 2) as total " +
        " UNION ALL " +
        " select 'Dezembro' label, truncate((select coalesce(sum(total),0) from vw_sale where date_sale between '2024-12-01' and '2024-12-31') - " +
        " (select coalesce(sum(price),0) from tbl_bill where data_vencimento between '2024-12-01' and '2024-12-31'), 2) as total "

    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

export default { lineChart }