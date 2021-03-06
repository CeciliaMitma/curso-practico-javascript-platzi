// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado =  5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triangulo");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// const ladoTriangulo1 =  6;
// const ladoTriangulo2 =  6;
// const baseTriangulo =  4;

// console.log("Los lados del triángulo miden: "+ ladoTriangulo1 + "cm, "+ladoTriangulo2+ "cm, "+baseTriangulo+ "cm" );
// const alturaTriangulo =  5.5;
// console.log("La altura del triángulo es de: "+ alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: "+ radioCirculo + "cm");

//Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: "+ diametroCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: "+ PI);

//Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: "+ perimetroCirculo + "cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//Area
// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log("El área del círculo es: "+ areaCirculo + "cm^2");
function areaCirculo(radio) {
    return (radio * radio) * PI;    
}


console.groupEnd();




//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}