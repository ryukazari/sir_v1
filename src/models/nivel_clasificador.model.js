import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import clasificador from './clasificador.model';

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

nivel_clasificador.hasMany(clasificador, {foreignKey:'id_nivel'});
clasificador.belongsTo(nivel_clasificador, {foreignKey: 'id_nivel'});

export default nivel_clasificador;