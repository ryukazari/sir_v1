import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const familia_concepto = sequelize.define('familia_concepto', {
    id_familia_concepto:{  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nombre_familia_concepto:{
        type:Sequelize.STRING
    },
    desc_familia_concepto:{
        type:Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: "familia_concepto"
});

export default familia_concepto;