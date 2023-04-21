import db from "./connection.js"

const isDeleteMode = true



if(isDeleteMode){
    db.exec('DROP TABLE planets')
    db.exec('DROP TABLE people')
}

// DDL

db.exec(
`
CREATE TABLE IF NOT EXISTS planets(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    size INTEGER, 
    is_habitable BOOLEAN NOT NULL
)
`
)

db.exec(`
CREATE TABLE IF NOT EXISTS people(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    planet_id INTEGER,
    FOREIGN KEY (planet_id) REFERENCES planets (id)
)
`)



// seeding (DML)
if(isDeleteMode){
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Mercury', False)`)
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Earth', True)`)
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Jupiter', False)`)
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Uranus', False)`)
db.exec(`INSERT INTO planets (name, is_habitable) VALUES ('Venus', False)`)
}

// i cmd skriv sqllite3 .db
// og så .tables og skrive en get all 