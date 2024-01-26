export const changebarcolor = (x:String, y:string, a:string, b:string) => {
    let number1 = Number(x)
    let number2 = Number(y)
    let number3 = Number(a)
    let number4 = Number(b)
    if (number3 === number1) {
        return 'bg-ceiling'
    } else if (number4 === number1){
        return 'bg-floor';
    } else if (number1 === number2) {
        return 'bg-warning';
    } else if (number1 > number2) {
        return'bg-primary';
    } else if (number1 < number2) {
        return 'bg-error';
    }
 }