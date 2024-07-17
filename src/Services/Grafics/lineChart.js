import database from "../../Repository/connection.js"

//Mostrar valor liquido recebido das vendas
async function lineChart() {
    const sql = "select 'Janeiro' label, truncate((select sum(total) from vw_sale where date_sale between '2024-01-01' and '2024-01-31') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-01-01' and '2024-01-31'), 2) as total " +
        " from vw_sale group by 'Janeiro' " +
        " UNION ALL " +
        " select 'Fevereiro' label, truncate((select sum(total) from vw_sale where date_sale between '2024-02-01' and '2024-02-29') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-02-01' and '2024-02-29'), 2) as total " +
        " from vw_sale group by 'Fevereiro' " +
        " UNION ALL " +
        " select 'Março' label, truncate((select sum(total) from vw_sale where date_sale between '2024-03-01' and '2024-03-31') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-03-01' and '2024-03-31'), 2) as total " +
        " from vw_sale group by 'Março'" +
        " UNION ALL " +
        " select 'Abril' label, truncate((select sum(total) from vw_sale where date_sale between '2024-04-01' and '2024-04-30') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-04-01' and '2024-04-30'), 2) as total " +
        " from vw_sale group by 'Abril'" +
        " UNION ALL " +
        " select 'Maio' label, truncate((select sum(total) from vw_sale where date_sale between '2024-05-01' and '2024-05-31') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-05-01' and '2024-05-31'), 2) as total " +
        " from vw_sale group by 'Maio'" +
        " UNION ALL " +
        " select 'Junho' label, truncate((select sum(total) from vw_sale where date_sale between '2024-06-01' and '2024-06-30') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-06-01' and '2024-06-30'), 2) as total " +
        " from vw_sale group by 'Junho'" +
        " UNION ALL " +
        " select 'Julho' label, truncate((select sum(total) from vw_sale where date_sale between '2024-07-01' AND '2024-07-31') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-07-01' AND '2024-07-31'), 2) as total " +
        " from vw_sale group by 'Julho' " +
        " UNION ALL " +
        " select 'Agosto' label, truncate((select sum(total) from vw_sale where date_sale between '2024-08-01' and '2024-08-31') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-08-01' and '2024-08-31'), 2) as total " +
        " from vw_sale group by 'Agosto'" +
        " UNION ALL " +
        " select 'Setembro' label, truncate((select sum(total) from vw_sale where date_sale between '2024-09-01' and '2024-09-30') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-09-01' and '2024-09-30'), 2) as total " +
        " from vw_sale group by 'Setembro' " +
        " UNION ALL " +
        " select 'Outubro' label, truncate((select sum(total) from vw_sale where date_sale between '2024-10-01' and '2024-10-31') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-10-01' and '2024-10-31'), 2) as total " +
        " from vw_sale group by 'Outubro' " +
        " UNION ALL " +
        " select 'Novembro' label, truncate((select sum(total) from vw_sale where date_sale between '2024-11-01' and '2024-11-30') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-11-01' and '2024-11-30'), 2) as total " +
        " from vw_sale group by 'Novembro'" +
        " UNION ALL " +
        " select 'Dezembro' label, truncate((select sum(total) from vw_sale where date_sale between '2024-12-01' and '2024-12-31') - " +
        " (select sum(price) from tbl_bill where data_vencimento between '2024-12-01' and '2024-12-31'), 2) as total " +
        " from vw_sale group by 'Dezembro'"

    const conn = await database.connect()
    const [rows] = await conn.query(sql)
    conn.end()

    return rows
}

export default { lineChart }