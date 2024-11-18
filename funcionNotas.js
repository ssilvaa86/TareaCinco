const notas = [6,8,9,2,5,10];


console.log("Su nota es:", notas);

function sumarNotas(notas){
    let resultadoSuma = 0;
    for(let i=0; i<notas.length; i++){
        
        resultadoSuma +=notas[i];
 

    }
    return resultadoSuma;

}

function promediarNotas(notas){
    return sumarNotas(notas)/notas.length;

}

console.log("El promedio de las notas es:", promediarNotas(notas).toFixed(1));