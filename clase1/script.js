let nota = parseFloat(prompt("Ingrese la nota parcial: "));
let final = parseFloat(prompt("Ingrese la nota final: "));

let prom = (nota + final) / 2;

if (prom >= 7) {
    alert(`El promedio es ${prom}, esta APROBADO`);
} else {
    alert("Tu promedio es menor a 7, DESAPROBADO");
}
