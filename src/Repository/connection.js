import mysql from "mysql2/promise"

//Conectando ao banco de dados
async function connect(){
    const connection = await mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "root",
        database: "ERP_System"
    })

    return connection
}

export default {connect}