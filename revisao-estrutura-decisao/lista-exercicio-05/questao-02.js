
//https://academia.iphac.org.br/mod/assign/view.php?id=119127

function calculateComission(id,code,unitPrice, quant){

    let totalSold = unitPrice * quant

    let saleComission = totalSold * 0.05

    return saleComission

}