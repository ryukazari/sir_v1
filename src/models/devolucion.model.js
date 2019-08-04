import Sequelize from 'sequelize';

import { sequelize } from '../database/database';

const devolucion = sequelize.define('devolucion',{
    id_devolucion:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    id_ingreso:{
        type: Sequelize.INTEGER
    },
    id_tipo_ingreso:{
        type: Sequelize.INTEGER
    },
    fecha_devolucion:{
        type: Sequelize.DATE
    },
    motivo_devolucion:{
        type: Sequelize.STRING
    },
    expediente_devolucion:{
        type: Sequelize.STRING
    },
    id_usuario_realiz:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    tableName: "devolucion"
});

export default devolucion;