const mysql = require("mysql2");


const connection  = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "6384314946",
        database: "user_db"
    }

).promise();

connection.connect(
    (err) => {
        if (err) console.log(err);
        else console.log("connection established");
    }
)

module.exports = connection