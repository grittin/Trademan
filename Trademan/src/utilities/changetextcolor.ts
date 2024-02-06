export const changeTextColor = (mainValue?:String, compareValue?:string, Ceiling?:string, Floor?:string) => {
    // let mainValueNumber = Number(mainValue)
    // let compareValueNumber = Number(compareValue)
    // let ceilingNumber = Number(Ceiling)
    // let FloorNumberNumber = Number(Floor)
    if(mainValue === "0.00"){
        return 'text-warning'
    }else if (Ceiling === mainValue) {
        return 'text-ceiling'
    } else if (Floor === mainValue){
        return 'text-floor';
    } else if (mainValue === compareValue) {
        return 'text-warning';
    } else if (mainValue > compareValue) {
        return'text-primary';
    } else if (mainValue < compareValue) {
        return 'text-error';
    }
}
