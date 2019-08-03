import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const sede = sequelize.define('sede', {
    id_sede:{  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    codigo_sede:{
        type:Sequelize.STRING
    },
    nombre_sede:{
        type:Sequelize.STRING
    },
    desc_sede:{
        type:Sequelize.STRING
    },
    id_padre_sede:{
        type:Sequelize.STRING
    },
    codigo_inicial:{
        type:Sequelize.STRING
    },
    presupuesto_sede:{
        type:Sequelize.DECIMAL(15,2)
    },
    ejecutado_sede:{
        type:Sequelize.DECIMAL(15,2)
    }
},
{
    timestamps: false,
    tableName: "sede"
});

export default sede;