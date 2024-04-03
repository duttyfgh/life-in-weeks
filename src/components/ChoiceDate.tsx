import { useState } from 'react';

interface IDateSelectorProps {
    setAge: (age: Date) => void
}

const DateSelector = ({ setAge }: IDateSelectorProps) => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [isRememberMe, setISRememberMe] = useState(false)

    // Функція для створення нового об'єкта Date на основі введених даних
    const createDate = () => {
        const selectedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        setAge(selectedDate)
    }

    // Функція для генерації варіантів днів
    const generateDays = (): JSX.Element[] => {
        const days = []
        for (let i = 1; i <= 31; i++) {
            days.push(
                <option key={i} value={i.toString()}>
                    {i}
                </option>
            )
        }
        return days
    }

    // Функція для генерації варіантів місяців
    const generateMonths = (): JSX.Element[] => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        return months.map((month, index) => (
            <option key={index} value={(index + 1).toString()}>
                {month}
            </option>
        ))
    }

    // Функція для генерації варіантів років
    const generateYears = (): JSX.Element[] => {
        const years = []
        for (let i = 1970; i <= new Date().getFullYear(); i++) {
            years.push(
                <option key={i} value={i.toString()}>
                    {i}
                </option>
            )
        }
        return years;
    }

    return (
        <div className='flex flex-col gap-16 items-center'>
            <div className='flex justify-between w-full'>
                <div>
                    <p className='font-bold'>Day</p>
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        {generateDays()}
                    </select>
                </div>

                <div>
                    <p className='font-bold'>Month</p>
                    <select value={month} onChange={(e) => setMonth(e.target.value)}>
                        {generateMonths()}
                    </select>
                </div>

                <div>
                    <p className='font-bold'>Year</p>
                    <select value={year} onChange={(e) => setYear(e.target.value)}>
                        {generateYears()}
                    </select>
                </div>
            </div>
            <div className='w-full'>
                <button className='bg-black text-white rounded-xl py-4 w-full hover:scale-[1.01]' onClick={createDate}>Confirm</button>
                <div className='flex gap-4 items-center mt-4'>
                    <span>Remember me</span>
                    <label className="checkbox style-c mt-[-1.4rem]">
                        <input type="checkbox" />
                        <div className="checkbox__checkmark"></div>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default DateSelector
