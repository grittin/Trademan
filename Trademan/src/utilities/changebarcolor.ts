export const changeBarColor = (mainValue:String, compareValue:string, Ceiling:string, Floor:string) => {
    let mainValueNumber = Number(mainValue)
    let compareValueNumber = Number(compareValue)
    let ceilingNumber = Number(Ceiling)
    let FloorNumberNumber = Number(Floor)
    if (ceilingNumber === mainValueNumber) {
        return 'bg-ceiling'
    } else if (FloorNumberNumber === mainValueNumber){
        return 'bg-floor';
    } else if (mainValueNumber === compareValueNumber) {
        return 'bg-warning';
    } else if (mainValueNumber > compareValueNumber) {
        return'bg-primary';
    } else if (mainValueNumber < compareValueNumber) {
        return 'bg-error';
    }
 }