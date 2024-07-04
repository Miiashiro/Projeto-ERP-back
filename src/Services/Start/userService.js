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

//Checar nome e email
async function checkEmail(name, email) {
    const sql = "SELECT * FROM tbl_users WHERE name_user = ? and email = ?"
    const data = [name, email]

    const conn = await database.connect()
    const [rows] = await conn.query(sql, data)
    conn.end()

    return rows
}

//Atualizar senha
async function changePassword(name, email, newPassword) {
    const sql = "UPDATE tbl_users SET password = ? WHERE name_user = ? and email = ?"
    const newPass = [newPassword, name, email]

    const conn = await database.connect()
    await conn.query(sql, newPass)
    conn.end()
}

//buscar senha
async function getPassword(name, email){
    const sql = "SELECT password FROM tbl_users WHERE name_user = ? and email = ?"
    const data = [name, email]

    const conn = await database.connect()
    const [row] = await conn.query(sql, data)
    conn.end()

    return row
}

export default {createUser, loginUser, checkEmail, changePassword, getPassword}