import Sequelize from 'sequelize';
import { sequelize } from '../database/database'
//import transferencia_externa 

const transferencia_interna = sequelize.define('transferencia_interna',{
    id_transferencia_interna:{  
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    anio_transferencia_interna:{
        type: Sequelize.STRING
    },
    id_sede_origen:{
        type: Sequelize.INTEGER
    },
    id_sede_destino:{
        type: Sequelize.INTEGER
    },
    mes_transferencia_interna:{
        type: Sequelize.STRING
    },
    fecha_transferencia_interna:{
        type: Sequelize.DATE
    },
    desc_transferencia_interna:{
        type: Sequelize.STRING
    },
    expediente_transferencia_interna:{
        type: Sequelize.STRING
    },
    desc_transferencia_interna:{
        type: Sequelize.STRING
    },
    monto_transferencia_interna:{
        type: Sequelize.DECIMAL(15, 2)
    },
    id_detalle_pago:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    tableName: "transferencia_interna"
});

//transferencia_interna.hasMany(transferencia_externa, { foreignKey: 'id_transferencia_externa', sourceKey: 'Id' })
//transferencia_externa.belongsTo(transferencia_interna, { foreignKey: 'id_transferencia_interna', sourceKey: 'Id' })

export default transferencia_interna;