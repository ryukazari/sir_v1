import Sequelize from 'sequelize';

export const sequelize = new Sequelize('kddhmgyb', 'kddhmgyb', 'tY7uNo1zFoKmhigHQ4NLB-H_VHWIFPyN', {
    host: 'motty.db.elephantsql.com',
    dialect: 'postgres',
    pool:{
        max: 5,
        min: 0, 
        require:30000,
        idel: 10000
    },
    logging: false
});

