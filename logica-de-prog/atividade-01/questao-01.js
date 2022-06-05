
//https://academia.iphac.org.br/mod/assign/view.php?id=119137

function calculateCheckout(sale){

    let finalCheckout = 
    [sale.hamburguer*3.00, sale.cheeseburger*2.50, sale.fries*2.50, sale.soda*1.00, sale.milkshake*3.00]
    .reduce((sum, element)=>sum+element)

    console.log(finalCheckout)

}

calculateCheckout({
    hamburguer: 8,
    cheeseburger: 3,
    fries: 10,
    soda: 8,
    milkshake: 2
})