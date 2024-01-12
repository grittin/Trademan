import arrowUp from '@/assets/icon/long_arrow_up.svg';
import arrowDown from '@/assets/icon/long_arrow_down.svg';

export const changearrowcolor = (x:String, y:string) => {
    let number1 = Number(x)
    let number2 = Number(y)
    if (number1 >= number2) {
        return  arrowUp;
    } else {
        return arrowDown;
    } 
}

