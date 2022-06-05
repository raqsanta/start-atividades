
//https://academia.iphac.org.br/mod/assign/view.php?id=119104

function somarMediaPares(){

    let numerosPares = []

    for(let i=70; i <= 100; i++){

        if(i%2 == 0){
            numerosPares.push(i)
        }

    }

    const media = (numerosPares.reduce((sum, element)=> sum + element)) / numerosPares.length

    console.log(media)

}

somarMediaPares()