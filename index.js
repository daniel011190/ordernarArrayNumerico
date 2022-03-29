//Recibir un array de numeros, ordenarlo y mostrarlo
//ordenar([1,2,45,5,6,3,1,8]) //[1,1,2,3,5,6,8,45]
//ordenar([100,5,5,8,3,7,8]) //[3,5,5,7,8,8,100]

function ordenarAscendente(arry){
     
    let num = arry.sort(function(a, b){
        return a - b
    });
    console.log(num)
}

ordenarAscendente([1,2,45,5,6,3,1,8])
//ordenar([100,5,5,8,3,7,8])

/*
function ordenarDescendente(arry){
     
    let num = arry.sort(function(a, b){
        return b - a
    });
    console.log(num)
}

ordenarDescendente([1,2,45,5,6,3,1,8]
//ordenarDescendente([100,5,5,8,3,7,8])
*/

