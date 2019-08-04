import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const concepto_pago = sequelize.define('concepto_pago',{
    id_concepto_pago:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    codigo_final:{
        type: Sequelize.STRING,
        required: true
    },
    desc_concepto_pago:{
        type: Sequelize.STRING
    },
    id_sede:{
        type: Sequelize.INTEGER
    },
    id_clasificador:{
        type: Sequelize.INTEGER
    },
    id_familia_concepto:{
        type: Sequelize.INTEGER
    },
    monto:{
        type: Sequelize.DECIMAL(15,2)

    }
},
{
    timestamps: false,
    tableName: "concepto_pago"
});

export default concepto_pago;