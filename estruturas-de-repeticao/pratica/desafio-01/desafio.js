
//https://academia.iphac.org.br/mod/assign/view.php?id=119088

function getTextByNum(){

    for(let i=1;i <= 299; i++){

        if(i%3 == 0 && i%5 == 0){
            console.log('VAMBORA')
        }else{
            if(i%3 == 0){
                console.log('VAMO')
            }

            if(i%5 == 0){
                console.log('BORA')
            }
        }

    }

}

getTextByNum()