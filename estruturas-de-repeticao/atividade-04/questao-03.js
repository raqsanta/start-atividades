//https://academia.iphac.org.br/mod/assign/view.php?id=119078

//3)      Faça uma função que recebe um número entre 12 e 20. Se a pessoa digitar um número diferente, mostrar a mensagem "número inválido". Se digitar corretamente, escrever no console o número recebido.

function printNumber(num){

    if(num >= 12 && num <= 20){
        console.log(num)
    }else{
        console.log('número inválido')
    }

}

printNumber(5)