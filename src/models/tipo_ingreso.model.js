import Sequelize from 'sequelize';

import { sequelize } from '../database/database';
import devolucion from '../models/devolucion.model';

const tipo_ingreso = sequelize.define('tipo_ingreso',{
    id_tipo_ingreso:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    nombre_tipo_ingreso:{
        type: Sequelize.STRING
    },
    descripcion_tipo_ingreso:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: "tipo_ingreso"
});

tipo_ingreso.hasMany(devolucion, {foreignKey:'id_tipo_ingreso'});
devolucion.belongsTo(tipo_ingreso, {foreignKey: 'id_tipo_ingreso'});

export default tipo_ingreso;