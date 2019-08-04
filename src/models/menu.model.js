import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const menu = sequelize.define('menu',{
    id_menu:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    id_menu_sup:{
        type: Sequelize.INTEGER
    },
    orden_menu:{
        type: Sequelize.INTEGER
    },
    nivel_menu:{
        type: Sequelize.INTEGER
    },
    propiedades_menu:{
        type: Sequelize.JSONB
    },
    url_menu:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: "menu"
});

export default menu;