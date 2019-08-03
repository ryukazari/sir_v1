import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const nivel_clasificador = sequelize.define('nivel_clasificador', {
    id_nivel_clasificador:{  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nomb_nivel_clasif:{
        type:Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: "nivel_clasificador"
});

export default nivel_clasificador;