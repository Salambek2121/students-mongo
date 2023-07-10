const mongoose = require('mongoose');

const express = require('express')

const app = express()


app.use(express.json());
app.use(require('./routes/students.route'));

mongoose.connect( 'mongodb+srv://admin:1998@intocode.6gsnoaz.mongodb.net/Students', {

}).then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
    console.log('сервер запущен успешно')
})