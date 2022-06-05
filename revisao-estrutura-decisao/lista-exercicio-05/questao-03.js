
//https://academia.iphac.org.br/mod/assign/view.php?id=119127

function solveOperations(a = "5", b = "4", c = "3", d="6"){

    console.log('a) ('+a+' > '+c+') AND ('+c+' <= '+d+') -> '+((a > c) && (c <= d)))
    console.log('b) ('+a+' + '+b+') > 10 OR ('+a+' + '+b+') = ('+c+' + '+d+') -> '+((a + b) > 10 || (a + b) == (c + d)))
    console.log('c) ('+a+' >= '+c+') AND ('+d+' >= '+c+') -> '+((a >= c) && (d >= c)))
    console.log('d) ('+b+' > '+d+') AND ('+a+' <= '+c+') -> '+((b > d) && (a <= c)))
    console.log('e) ('+d+' <= '+a+') OR ('+c+' >= '+b+') -> '+((d <= a) || (c >= b)))

}

solveOperations()

/*

a) (5 > 3) AND (3 <= 6) -> true
b) (5 + 4) > 10 OR (5 + 4) = (3 + 6) -> true
c) (5 >= 3) AND (6 >= 3) -> true
d) (4 > 6) AND (5 <= 3) -> false
e) (6 <= 5) OR (3 >= 4) -> false

*/