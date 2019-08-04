import Sequelize from 'sequelize';

import { sequelize } from '../database/database';

const descripcion_concepto = sequelize.define('descripcion_concepto',{
    id_desc_concepto:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    descripcion:{
        type: Sequelize.STRING
    },
    monto:{
        type: Sequelize.DECIMAL(15,2)
    },
    id_concepto_pago:{
        type: Sequelize.INTEGER
    },
    estado:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    tableName: "descripcion_concepto"
});



export default descripcion_concepto;