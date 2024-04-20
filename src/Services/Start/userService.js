import database from "../../Repository/connection.js"

async function createUser(name, email, password){
    const sql = "INSERT INTO tbl_users(name_user, email, password) VALUES(?, ?, ?)"
    const data = [name, email, password]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function loginUser(email, password){
    const sql = "SELECT * FROM tbl_users WHERE email = ? AND password = ?"
    const data = [email, password]

    const conn = await database.connect()
    const [rows] = await conn.query(sql, data)
    conn.end()

    return rows
}

export default {createUser, loginUser}