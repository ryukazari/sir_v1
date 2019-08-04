import Sequelize from 'sequelize';

import { sequelize } from '../database/database';

const recibo_ingreso = sequelize.define('recibo_ingreso', {
    id_recibo_ingreso:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    num_impreso_recibo:{
        type:Sequelize.STRING
    },
    anio_recibo:{
        type:Sequelize.STRING
    },
    id_sede:{
        type:Sequelize.INTEGER
    },
    mes_recibo:{
        type:Sequelize.STRING
    },
    fecha_recibo:{
        type:Sequelize.DATE
    },
    num_referencia_recibo:{
        type:Sequelize.STRING
    },
    tipo_moneda_recibo:{
        type:Sequelize.STRING
    },
    monto_recibo:{
        type:Sequelize.DECIMAL(15,2)
    },
    id_usuario:{
        type:Sequelize.INTEGER
    }

},{
    timestamps: false,
    tableName: "recibo_ingreso"
});

export default recibo_ingreso;