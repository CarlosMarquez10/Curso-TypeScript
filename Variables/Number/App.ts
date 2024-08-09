let Num: Number = 5;
let Num2: Number = 2;
let data: HTMLElement = document.getElementById("Numbers");
let data2: HTMLElement = document.getElementById("Numbers2")

function Validator(dato: number, dato2: number): void {
    data.innerHTML = dato;
    data2.innerHTML = dato2;

}

Validator(Num, Num2)
