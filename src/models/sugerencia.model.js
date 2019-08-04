import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const sugerencia = sequelize.define('sugerencia',{
    id_sugerencia:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    texto_sugerencia:{
        type: Sequelize.STRING
    },
    id_usuario:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    tableName: "sugerencia"
});

export default sugerencia;