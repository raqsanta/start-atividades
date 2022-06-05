
//https://academia.iphac.org.br/mod/assign/view.php?id=119107

function countGrains(){

    const grainsPerFrames = [1]

    let index = 0

    while(index<=64){

        index++

        if(grainsPerFrames[index]){
            continue
        }else{
            grainsPerFrames.push((grainsPerFrames[index-1])*2)
        }

    }

    let totalGrains = grainsPerFrames.reduce((sum, element)=>sum+element)

    console.log(totalGrains)

}

countGrains()