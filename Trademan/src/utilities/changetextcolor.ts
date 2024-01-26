export const changetextcolor = (x:String, y:string, a:string, b:string) => {
    let number1 = Number(x)
    let number2 = Number(y)
    let number3 = Number(a)
    let number4 = Number(b)
    if (number3 === number1) {
        return 'text-ceiling'
    } else if (number4 === number1){
        return 'text-floor';
    } else if (number1 === number2) {
        return 'text-warning';
    } else if (number1 > number2) {
        return'text-primary';
    } else if (number1 < number2) {
        return 'text-error';
    }
}
