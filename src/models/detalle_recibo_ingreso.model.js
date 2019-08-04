import Sequelize from 'sequelize';

import { sequelize } from '../database/database';
import recibo_ingreso from './recibo_ingreso.model';

const detalle_recibo_ingreso = sequelize.define('detalle_recibo_ingreso', {
    id_detalle_recibo_ingreso:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    id_recibo_ingreso:{
        type:Sequelize.INTEGER
    },
    anio_recibo:{
        type:Sequelize.STRING
    },
    id_sede:{
        type:Sequelize.INTEGER
    },
    tipo_moneda:{
        type:Sequelize.STRING
    },
    tipo_cambio:{
        type:Sequelize.DECIMAL(15,2)
    },
    monto_item:{
        type:Sequelize.DECIMAL(15,2)
    },
    monto_final_item:{
        type:Sequelize.DECIMAL(15,2)
    },
    descripcion:{
        type:Sequelize.STRING
    }
},{
    timestamps: false,
    tableName: "detalle_recibo_ingreso"
});

detalle_recibo_ingreso.belongsTo(recibo_ingreso, {foreignKey: 'id_recibo_ingreso'});
recibo_ingreso.hasMany(detalle_recibo_ingreso, {foreignKey:'id_recibo_ingreso'});

export default detalle_recibo_ingreso;