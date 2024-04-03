const calculateTime =(weeks: number) => {
    // Количество дней в неделе, месяце и году
    const daysInWeek = 7;
    const daysInMonth = 30.44; // Среднее количество дней в месяце
    const daysInYear = 365.25; // Среднее количество дней в году (учитывая високосные годы)

    // Вычисляем общее количество дней
    const totalDays = weeks * daysInWeek;

    // Вычисляем количество лет, месяцев, дней и часов
    const years = Math.floor(totalDays / daysInYear);
    const months = Math.floor((totalDays % daysInYear) / daysInMonth);
    const days = Math.floor((totalDays % daysInMonth));
    const hours = Math.floor((totalDays % 1) * 24); // Остаток дней переводим в часы

    // Формируем строку с результатом
    let result = '';
    if (years > 0) {
        result += years + ' year' + (years > 1 ? 's' : '') + ', ';
    }
    if (months > 0) {
        result += months + ' month' + (months > 1 ? 's' : '') + ', ';
    }
    if (days > 0) {
        result += days + ' day' + (days > 1 ? 's' : '') + ', ';
    }
    if (hours > 0) {
        result += hours + ' hour' + (hours > 1 ? 's' : '');
    }

    // Удаляем запятую в конце строки, если она есть
    if (result.endsWith(', ')) {
        result = result.slice(0, -2);
    }

    return result;
}

export default calculateTime
