import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const tramite_tupa = sequelize.define('tramite_tupa', {
    id_tramite:{  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nombre_tramite:{
        type:Sequelize.STRING
    },
    desc_tramite:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: "tramite_tupa"
});

export default tramite_tupa;