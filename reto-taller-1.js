//Taller N° 1 - Reto

function esIsosceles (lado1, lado2, lado3) {
    if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return true;
    } else {
        return false;
    }

}

function alturaTrianguloIsosceles(lado1, lado2, lado3) {
    const respuesta = esIsosceles(lado1, lado2, lado3);
    if ( respuesta == true) {
        if(lado1 == lado2) {
            const altura = Math.sqrt(lado2**2 -(lado3/2)**2);
            return altura;
        } else{
            if(lado3 == lado2) {
                const altura = Math.sqrt(lado2**2 -(lado1/2)**2);
                return altura;
            } else {
                if(lado1 == lado3) {
                    const altura = Math.sqrt(lado1**2 -(lado2/2)**2);
                    return altura;
                }
            }
        }
    } else {
        return "No es Isósceles, prueba con otro triángulo";
    }
}

// Interacción con HTML

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputLado3");
    const value3 = input3.value;
    // console.log(value1);
    // console.log(value2);
    // console.log(value3);

    const alturaIsosceles = alturaTrianguloIsosceles(value1,value2,value3);
    alert(alturaIsosceles);
    
}