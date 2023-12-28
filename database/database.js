const Sequelize = require('sequelize')

const connection = new Sequelize('perguntas-respostas','root','123456',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    port: 3307
})

module.exports = connection;