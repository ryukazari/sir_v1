import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const persona = sequelize.define('persona',{
    id_persona:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nro_doc_per:{
        type: Sequelize.STRING
    },
    ape_pat_per:{
        type: Sequelize.STRING
    },
    ape_mat_per:{
        type: Sequelize.STRING
    },
    nomb_per:{
        type: Sequelize.STRING
    },
    fech_nac_per:{
        type: Sequelize.DATE
    },
    correo_per:{
        type: Sequelize.STRING
    },
    nro_celular:{
        type: Sequelize.STRING
    },
    nro_telefono:{
        type: Sequelize.STRING
    },
    aud_fech_creac:{
        type: Sequelize.DATE
    }
},
{
    timestamps: false,
    tableName: "persona"
});

export default persona;