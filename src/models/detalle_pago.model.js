import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const detalle_pago = sequelize.define('detalle_pago', {
    id_detalle_pago:{  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    id_pago:{
        type:Sequelize.INTEGER
    },
    id_concepto_pago:{
        type:Sequelize.INTEGER
    },
    monto:{
        type:Sequelize.DECIMAL(15,2)
    },
    cantidad:{
        type:Sequelize.INTEGER
    },
    estado:{
        type:Sequelize.INTEGER
    },
    fecha_maxima:{
        type:Sequelize.DATE
    },
    costo_penalidad:{
        type:Sequelize.DECIMAL(15,2)
    },
    id_penalidad:{
        type:Sequelize.INTEGER
    },
    monto_total:{
        type:Sequelize.DECIMAL(15,2)
    }
},
{
    timestamps: false,
    tableName: "detalle_pago"
});

export default detalle_pago;