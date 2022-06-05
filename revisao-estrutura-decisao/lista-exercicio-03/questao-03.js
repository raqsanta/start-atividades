
//https://academia.iphac.org.br/mod/assign/view.php?id=119111

function impares(){

    let numerosImpares = []

    for(let i=100; i <= 200; i++){

        if(i%2 != 0){
            numerosImpares.push(i)
        }
        
    }

    numerosImpares.forEach((element)=>{
        console.log(element)
    })

}

impares()