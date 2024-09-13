export const isToday = (date: Date): boolean => {
    const today = new Date();
    return today.getDate() === date.getDate() &&
        today.getMonth() === date.getMonth() &&
        today.getFullYear() === date.getFullYear();
}

export const getFormattedDate = (date: Date): string => {
    if (isToday(date)) {
        return 'Today';
    }

    let currentDay: string | number = date.getDate();
    if (currentDay < 10) {
        currentDay = `0${currentDay}`;
    }
    let currentMonth: string | number = date.getMonth() + 1;
    if (currentMonth < 10) {
        currentMonth = `0${currentMonth}`;
    }

    return `${currentDay}/${currentMonth}`;
};

export const getFormattedTemperature = (temperature: number): string => {
    return `${Math.round(temperature)}º`
};