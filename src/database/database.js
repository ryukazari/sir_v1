import Sequelize from 'sequelize';


export const sequelize = new Sequelize('kddhmgyb', 'kddhmgyb', 'tY7uNo1zFoKmhigHQ4NLB-H_VHWIFPyN', {
    host: 'motty.db.elephantsql.com',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        require: 50000,
        idle: 60
    },
    logging: false
});
/*
export const sequelize = new Sequelize('pichincha1', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        require: 50000,
        idle: 60
    },
    logging: false
});*/