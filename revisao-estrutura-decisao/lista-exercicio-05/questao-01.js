
//https://academia.iphac.org.br/mod/assign/view.php?id=119127

function fourSquares(a,b,c,d){

    let squares = [a^2, b^2, c^2, d^2]

    let totalSum = squares.reduce((sum, element)=>sum+element)

    console.log(totalSum)

}