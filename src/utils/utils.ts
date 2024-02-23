export const changeTimerString = (time: number) => {
    return String(time).padStart(2, "0")
};