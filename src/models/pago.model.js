import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const pago = sequelize.define('pago', {
    id_pago:{  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    id_usuario:{
        type:Sequelize.INTEGER
    },
    fecha_vencimiento:{
        type:Sequelize.DATE
    },
    contrapartida:{
        type:Sequelize.STRING
    },
    referencia_adicional:{
        type:Sequelize.STRING
    },
    moneda_importe:{
        type:Sequelize.STRING
    },
    estado:{
        type:Sequelize.INTEGER
    },
    codigo_pago:{
        type:Sequelize.STRING
    },
    fecha_pago:{
        type:Sequelize.STRING
    },
    hora_pago:{
        type:Sequelize.STRING
    },
    codigo_operacion_banco:{
        type:Sequelize.STRING
    },
    nombre_banco:{
        type:Sequelize.STRING
    },
    canal_banco:{
        type:Sequelize.INTEGER
    }
},
{
    timestamps: false,
    tableName: "pago"
});

export default pago;