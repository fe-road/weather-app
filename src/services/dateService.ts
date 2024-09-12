export const getFormattedDate = (date: Date): string => {
    let currentDay: string | number = date.getDate();
    if (currentDay < 10) {
        currentDay = `0${currentDay}`;
    }
    let currentMonth: string | number = date.getMonth() + 1;
    if (currentMonth < 10) {
        currentMonth = `0${currentMonth}`;
    }

    return `${currentDay}/${currentMonth}`;
}