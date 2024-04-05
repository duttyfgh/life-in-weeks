interface IGenerateArray {
    (dateOfBorn: Date): { id: number; isBlack: boolean; }[]
}

interface ICountSundaysPassed {
    (startDate: Date): number;
}

//count how much weeks left form the date
export const countSundaysPassed: ICountSundaysPassed = (startDate: Date) => {
    const today = new Date()
    const millisecondsInDay = 1000 * 60 * 60 * 24
    const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / millisecondsInDay)

    // Определяем количество недель по количеству прошедших дней
    const weeksPassed = Math.floor(daysPassed / 7)

    return weeksPassed
}

export const generateArray: IGenerateArray = (dateOfBorn) => {
    const array = []
    const usersAge = countSundaysPassed(dateOfBorn)

    for (let i = 0; i < 4004; i++) {
        const id = i // Использование индекса массива в качестве id
        const isBlack = id > usersAge ? false : true // Расчет значения isBlack

        array.push({ id, isBlack })
    }

    return array
}


