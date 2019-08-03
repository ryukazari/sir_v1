import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const clasificador = sequelize.define('clasificador',{
    id_clasificador:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    cod_clasificador:{
        type: Sequelize.STRING
    },
    nomb_clasificador:{
        type: Sequelize.STRING
    },
    activo_clasificador:{
        type: Sequelize.INTEGER
    },
    desc_clasificador:{
        type: Sequelize.STRING
    },
    id_nivel:{
        type: Sequelize.INTEGER
        //required: true,
        //allowNull: false
    }
},
{
    timestamps: false,
    tableName: "clasificador"
});

export default clasificador;