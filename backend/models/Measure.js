const { Schema, model } = require('mongoose');

const measureSchema = new Schema(
  {
    weight: Number, // peso
    height: Number, // estatura
    hip: Number, // cintura
    velocity: Number, // velocidad
    flexibility: Number, // flexibilidad
    lowerMass: Number, // masa inferior
    abdomen: Number, // abdomen
    upperMass: Number, // masa superior
    restingHeartRate: Number, // frecuencia cardiaca en reposo
    stressHeartRate: Number, // frecuencia cardiaca de esfuerzo
    heartRateRecovery: Number, // frecuencia cardiaca de recuperacion
    meters: Number, // metros recorridos
    power: Number, // potencia -> se calcula
    imc: Number, // imc -> se calcula
    abdominalFat: Number, // % de grasa abdominal -> se calcula
    ica: Number, //indice de capacidad aerobica -> se calcula
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Measure', measureSchema);
