import mysql from 'mysql2'


const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'user',
    database: 'weblabs'
}).promise()

export async function getTours() {
    const [rows] = await pool.query("SELECT * FROM tourist_ticket;")
    return rows
}

export async function getTour(id) {
    const [rows] = await pool.query(`SELECT * FROM tourist_ticket WHERE id = ${id};`);
    return rows;
}

export async function createTour(country, duration, cost, description) {
    const [result] = await pool.query(`INSERT INTO tourist_ticket (country, duration, cost, description) VALUES (?, ?, ?, ?);`,
        [country, duration, cost, description])
    return getTours();
}

export async function findByCountry(country) {
    const [result] = await pool.query(`SELECT * FROM tourist_ticket WHERE country = ${country};`)
    return result
}

export async function deleteTour(id) {
    const [result] = await pool.query(`DELETE FROM tourist_ticket WHERE id = ${id};`)
    console.log(result)
    return getTours();
}

export async function updateTour(id, country, duration, cost, description ) {
    const [result] = await pool.query(`UPDATE tourist_ticket SET country = '${country}', duration = '${duration}', cost = '${cost}', description = '${description}' WHERE id = ${id};`)
    return getTours();
}

