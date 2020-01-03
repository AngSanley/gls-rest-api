const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_DATABASE || 'gls-rest-api', process.env.DB_USER || 'binus', process.env.DB_PASSWORD || 'maya', {
//     host: process.env.DB_HOST || 'localhost',
//     dialect: 'postgres',
//     port: process.env.DB_PORT || 5432
// });
const sequelize = new Sequelize(process.env.DATABASE_URL);
const Model = Sequelize.Model;
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production'

class Student extends Model {}

Student.init( {
    nim: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    faculty: {
        type: Sequelize.STRING
    },
    stream: {
        type: Sequelize.STRING
    },
    campus: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: 'student'
});

Student.sync({force:true}).then(() => {
    Student.create({
        nim: '2201762514',
        firstName: 'Budiman',
        lastName: 'Haryatno',
        faculty: 'School of Business',
        stream: 'Business Management',
        campus: 'Kemanggisan'
    });

    Student.create({
        nim: '2201762515',
        firstName: 'Lanco',
        lastName: 'Huangm',
        faculty: 'School of Computer Science',
        stream: 'Mobile Application & Technology',
        campus: 'Kemanggisan'
    });

    Student.create({
        nim: '2201762569',
        firstName: 'Hahaha',
        lastName: 'Hehehe',
        faculty: 'School of Computer Science',
        stream: 'Computer Science',
        campus: 'Alam Sutera'
    });

    Student.create({
        nim: '2201762517',
        firstName: 'Yud',
        lastName: 'Leng',
        faculty: 'School of Computer Science',
        stream: 'Cyber Security',
        campus: 'Kemanggisan'
    });

    Student.create({
        nim: '2301891726',
        firstName: 'Yudi',
        lastName: 'Lesmana',
        faculty: 'School of Computer Science',
        stream: 'Game Application & Technology',
        campus: 'Kemanggisan'
    });
});

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/students', (req, res) => {
    Student.findAll().then((students) => {
            res.send(students);
        }
    )
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
