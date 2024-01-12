export const changebarcolor = (x:String, y:string) => {
    let number1 = Number(x)
    let number2 = Number(y)
    if (number1 === number2) {
        return 'bg-warning';
    } else if (number1 > number2) {
        return'bg-primary';
    } else if (number1 < number2) {
        return 'bg-error';
    }
}
