import mysql from "mysql2/promise"

//Conectando ao banco de dados
async function connect() {
    const conneciton = await mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "2KjNL=y]R",
        database: "erp_system"
    })

    return conneciton
}

export default {connect}




/**async function connect(){
    const connection = await mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "2KjNL=y]R",
        database: "erp_system"
    })

    return connection
}

export default {connect} */