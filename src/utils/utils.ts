export function changeTimerString(time: number): string{
    return String(time).padStart(2, "0")
};

export function limitValue(value: number): string{
    if(value < 0){
        return "00";
    }else if(value > 59){
        return "59";
    }else{
        return changeTimerString(value);
    }
}