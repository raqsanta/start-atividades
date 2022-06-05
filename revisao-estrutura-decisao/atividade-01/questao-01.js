//https://academia.iphac.org.br/mod/assign/view.php?id=119055

//1)    Faça uma função para receber um número e mostrar o resultado conforme a tabela abaixo:

function number2size(num) {

    if (num < 10) {
        return 'O número é unidade'
    }
    else if(num >= 10 && num < 100){
        return 'O número é dezena'
    } 
    else if(num >= 100 && num < 1000){
        return 'O número é centena'
    } 

}

console.log(number2size(2))

