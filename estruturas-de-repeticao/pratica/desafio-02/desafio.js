
//https://academia.iphac.org.br/mod/assign/view.php?id=119091

function numberInfo(num){

    let newNumber = num

    if(newNumber < 350){
        newNumber += 5
    }

    if(newNumber%5 == 0){
        console.log('MÚLTIPLO DE 5')
    }

    if(newNumber%7 == 0){
        console.log('MÚLTIPLO DE 7')
    }

}