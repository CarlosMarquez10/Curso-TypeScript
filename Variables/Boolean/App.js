"use strict";
let data = true || null;
let data2 = false;
const Bln = document.getElementById("Boolean");
const Bln2 = document.getElementById("Boolean2");
if (data) {
    Bln.innerHTML = `El dato es : ${data}`;
}
if (data2 === false) {
    Bln2.innerHTML = `El dato 2 es : ${data2}`;
}
