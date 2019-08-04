import Sequelize from 'sequelize';

import { sequelize } from '../database/database';
import descripcion_concepto from './descripcion_concepto.model';

const desc_concepto_tramite = sequelize.define('desc_concepto_tramite',{
    id_desc_concepto:{
        type: Sequelize.INTEGER
    },
    id_tramite:{
        type: Sequelize.INTEGER
    }
},
{
    timestamps: false,
    tableName: "desc_concepto_tramite"
});

descripcion_concepto.hasMany(desc_concepto_tramite, {foreignKey:'id_desc_concepto'});
desc_concepto_tramite.belongsTo(descripcion_concepto, {foreignKey: 'id_desc_concepto'});

tramite_tupa.hasMany(desc_concepto_tramite, {foreignKey:'id_tramite'});
desc_concepto_tramite.belongsTo(tramite_tupa, {foreignKey: 'id_tramite'});

export default desc_concepto_tramite;