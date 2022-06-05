//https://academia.iphac.org.br/mod/assign/view.php?id=119078

//1)      Faça uma função que exibe todos os números menores que 1000 que são múltiplos de 100.

function printNumbers(){

    for(let i=0; i < 1000; i++){

        if(i%100 == 0){

            console.log(i)

        }

    }

}

printNumbers()