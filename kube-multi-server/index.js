var cors = require('cors');
const { Pool } = require('pg');
var express = require('express');

var app = express();

// Set up CORS
app.use(cors({
    origin: true, // "true" will copy the domain of the request back to the reply.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking pre-flight OPTIONS requests
}));

app.get('/data', function (req, res) {
    res.send(getData());
});

app.get('/employees', function (req, res) {
    showEmployees(res);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});

function getData() {
    return [{
        id: 1,
        name: 'First',
        gender: 'Male'
    }, {
        id: 2,
        name: 'Second',
        gender: 'Female'
    }, {
        id: 3,
        name: 'Third',
        gender: 'Female'
    }, {
        id: 4,
        name: 'Fourth',
        gender: 'Male'
    }];
}

function showEmployees(res) {
    const dbConfig = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    };

    console.log(dbConfig);

    const pool = new Pool(dbConfig);

    pool.query('select * from employees', (err, response) => {
        console.log(err);
        if (err) {
            res.status(200).send('Error: ', err);
        } else {
            res.status(200).send(response.rows);
        }

        pool.end();
    });
}