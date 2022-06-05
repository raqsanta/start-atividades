
//https://academia.iphac.org.br/mod/assign/view.php?id=119091

function sequenciaSoma(){

    let index = 0
    let sequence = [0,1]

    while(index <= 100){

        index++

        if(sequence[index]){
            continue
        }else{
            sequence.push((sequence[index-1]+sequence[index-2]))
        }

    }

    console.log(sequence)

}

sequenciaSoma()