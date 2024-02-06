export const changeArrow = (mainValue:String, compareValue:string) => {
    let mainValueNumber = Number(mainValue)
    let compareValueNumber = Number(compareValue)
    if (mainValue > compareValue) {
        return '<svg viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-1 pb-1 h-6"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#00d136" transform="matrix(-1 0 0 -1 8.945 19.5)"/></svg>';
    } else if(mainValueNumber < compareValueNumber) {
        return '<svg viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg" class="inline-block mr-1 pb-1 h-6"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#e44840"/></svg>';
    }
}