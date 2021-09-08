function calcularMediaAritmetica (lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ); //reduce suma uno a uno los elementos de un array

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}