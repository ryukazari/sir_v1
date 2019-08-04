import Sequelize from 'sequelize';

import { sequelize } from '../database/database';

const usuario = sequelize.define('usuario',{
    id_usuario:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    id_persona:{
        type: Sequelize.INTEGER,
    },
    id_sede:{
        type: Sequelize.INTEGER,
    },
    nombre_usuario:{
        type: Sequelize.STRING,
    },
    bloqueado:{
        type: Sequelize.INTEGER,
    },
    intentos_fallidos_login:{
        type: Sequelize.INTEGER,
    },
    password:{
        type: Sequelize.STRING,
    }
},
{
    timestamps: false,
    tableName: "usuario"
});

export default usuario;