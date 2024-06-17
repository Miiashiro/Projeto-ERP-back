import database from "../../Repository/connection.js"

//Criar usuario
async function createUser(name, email, password){
    const sql = "INSERT INTO tbl_users(name_user, email, password) VALUES(?, ?, ?)"
    const data = [name, email, password]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

//Login
async function loginUser(email, password){
    const sql = "SELECT * FROM tbl_users WHERE email = ? AND password = ?"
    const data = [email, password]

    const conn = await database.connect()
    const [rows] = await conn.query(sql, data)
    conn.end()

    return rows
}

async function checkEmail(email) {
    const sql = 'SELECT * FROM tbl_users WHERE email = ?'
    const data = [email]

    const conn = await database.connect()
    const [rows] = await conn.query(sql, data)
    conn.end()

    return rows
}

async function changePassword(email, newPassword) {
    const sql = 'UPDATE tbl_users SET password = ? WHERE email = ?'
    const dataNewPass = [newPassword, email]

    const conn = await database.connect()
    const [rows] = await conn.query(sql, dataNewPass)
    conn.end()

    return rows
}

export default {createUser, loginUser, checkEmail, changePassword}