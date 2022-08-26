//Fechas.js
const Hoy = new Date();
console.log(Hoy);
const Nacimiento = new Date(1997, 6, 25);
console.log(Nacimiento);

const fecha_mayor = Hoy > Nacimiento;
console.log(fecha_mayor);

const Dia_nacimiento = Nacimiento.getDate();
const Mes_nacimiento = Nacimiento.getMonth() +1;
const Anyo_nacimiento = Nacimiento.getFullYear();

console.log(Dia_nacimiento);
console.log(Mes_nacimiento);
console.log(Anyo_nacimiento);
