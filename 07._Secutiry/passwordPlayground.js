import bcrypt from "bcrypt"


const passwordPlainText = "hunter42"
const passwordPlainText2 = "notHunter"
const hashedPassword = "$2b$12$.mBUmplQhmdEcBcfDbzrs.QMa9HGv0aoLmW3ahAsZm/t2jyylUAky"

const encryptedPassword = await bcrypt.hash(passwordPlainText,12)

console.log(encryptedPassword)

const isSame = await bcrypt.compare(passwordPlainText2,hashedPassword)
console.log(isSame)


//Gemmer hashedpassword i databasen og compare det brugeren skriver me hashen