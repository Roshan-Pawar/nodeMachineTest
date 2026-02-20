const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'locahost',
    user: 'root',
    password: 'root',
    database: 'nimap_project'
});

connection.connect((err) => {
    if (err) {
        console.error('DB connection failed:', err);
    } else {
        console.log('Connected to DB');
    }
});

module.exports = connection;