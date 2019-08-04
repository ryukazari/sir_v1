import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const penalidad = sequelize.define('penalidad',{
    id_penalidad:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nombre_penalidad:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: "penalidad"
});

export default penalidad;