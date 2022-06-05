//https://academia.iphac.org.br/mod/assign/view.php?id=119055

/*

2)      Tendo como dados de entrada a altura e o sexo de uma pessoa, faça uma função que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7   
(h = altura)

*/

let altura = 1.72
let genero = 'F'

function getIdealWeight(altura, genero){

    switch(genero){
        case 'M':
            return Math.round((72.7*altura) - 58)
        default:
            return Math.round((62.1*altura) - 44.7)
    }

}

console.log(getIdealWeight(1.72,'F'))