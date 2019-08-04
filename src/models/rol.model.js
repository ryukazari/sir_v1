import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const rol = sequelize.define('rol',{
    id_rol:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nombre_rol:{
        type: Sequelize.STRING
    },
    descripcion_rol:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: "rol"
});

export default rol;