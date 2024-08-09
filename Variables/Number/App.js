"use strict";
let Num = 5;
let Num2 = 2;
let data = document.getElementById("Numbers");
let data2 = document.getElementById("Numbers2");
function Validator(dato, dato2) {
    data.innerHTML = dato;
    data2.innerHTML = dato2;
}
Validator(Num, Num2);
