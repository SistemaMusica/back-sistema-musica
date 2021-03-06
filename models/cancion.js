const { Schema, model } = require('mongoose');

const CancionSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: false
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    link: {
        type: String,
        default: "https://www.youtube.com"
    },
    repertorio: {
        type: Schema.Types.ObjectId,
        ref: 'Repertorio',
        required: true
    },
    descripcion: { type: String },
    disponible: { type: Boolean, defult: true },
});


CancionSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Cancion', CancionSchema );
