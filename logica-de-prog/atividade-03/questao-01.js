
//https://academia.iphac.org.br/mod/assign/view.php?id=119144

function getFeelingByTempo(interval) {

    //PRIMEIRO DÍGITO
    if (interval.firstDay > interval.secondDay <= interval.thirdDay){

        return 'Feliz'

    }

    //SEGUNDO DÍGITO
    if (interval.firstDay < interval.secondDay >= interval.thirdDay){

        return 'Triste'

    }

    //TERCEIRO DÍGITO
    if (interval.firstDay < interval.secondDay < interval.thirdDay
        && (interval.thirdDay - interval.secondDay) < (interval.secondDay - interval.firstDay)
    ){

        return 'Triste'

    }

    //QUARTO DÍGITO
    if (interval.firstDay < interval.secondDay < interval.thirdDay
        && (interval.thirdDay - interval.secondDay) >= (interval.secondDay - interval.firstDay)
    ){

        return 'Feliz'

    }

    //QUINTO DÍGITO
    if (interval.firstDay > interval.secondDay > interval.thirdDay
        && (interval.secondDay - interval.thirdDay) < (interval.firstDay - interval.secondDay)
    ){

        return 'Feliz'

    }

    //SEXTO DÍGITO
    if (interval.firstDay > interval.secondDay > interval.thirdDay
        && (interval.secondDay - interval.thirdDay) >= (interval.firstDay - interval.secondDay)
    ){

        return 'Triste'

    }

    //SÉTIMO E OITAVO DÍGITOS
    if (interval.firstDay == interval.secondDay) {

        if (interval.thirdDay > interval.secondDay) {
            return 'Feliz'
        } else {
            return 'Triste'
        }

    }

}

console.log(

    getFeelingByTempo({
        firstDay: 20,
        secondDay: 22,
        thirdDay: 18
    })

)