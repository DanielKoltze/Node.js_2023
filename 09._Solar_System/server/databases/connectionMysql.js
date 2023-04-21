import mysql from "mysql2/promise"


const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'mro',
    user: 'root',
    password: 'password'
})

const data = await connection.query("SELECT * FROM categories")
console.log(data)