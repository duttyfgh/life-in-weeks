import { ChangeEvent, useState } from 'react';

interface IDateSelectorProps {
    setAge: (age: Date) => void
    setIsRememberedTheUserHandler: (userDateOfBorn: Date) => void
}

const DateSelector = ({ setAge, setIsRememberedTheUserHandler }: IDateSelectorProps) => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [isRememberMe, setISRememberMe] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState<string>()

    const createDate = () => {
        if (day === '' || month === '' || year === '') {
            setError(`Please select the following fields:
              ${(day === '') ? 'day' : ''} ${(month === '') ? 'month' : ''}  ${(year === '') ? 'year' : ''}`)
            setIsError(true)
        } else {
            const selectedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
            setAge(selectedDate)
            if (isRememberMe) {
                setIsRememberedTheUserHandler(selectedDate)
            }
        }
    }

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setISRememberMe(event.target.checked)
    }


    return (
        <div className='flex flex-col gap-16 items-center'>
            <div className='flex justify-between w-full'>
                <div>
                    <select value={day} onChange={(e) => setDay(e.target.value)} className='cursor-pointer'>
                        <option className='font-bold'>Day</option>
                        {generateDays()}
                    </select>
                </div>

                <div>
                    <select value={month} onChange={(e) => setMonth(e.target.value)} className='cursor-pointer'>
                        <option className='font-bold'>Month</option>
                        {generateMonths()}
                    </select>
                </div>

                <div>
                    <select value={year} onChange={(e) => setYear(e.target.value)} className='cursor-pointer'>
                        <option className='font-bold'>Year</option>
                        {generateYears()}
                    </select>
                </div>
            </div>
            <div className='w-full'>
                {isError && <span className='text-red-500 '>{error}</span>}
                <button
                    className='bg-black text-white rounded-xl py-4 w-full hover:scale-[1.01] mt-4'
                    onClick={createDate}>Confirm</button>
                <div className='flex gap-4 items-center mt-4'>
                    <span>Remember me</span>
                    <label className="checkbox style-c mt-[-1.4rem]">
                        <input type="checkbox" onChange={handleChange} />
                        <div className="checkbox__checkmark"></div>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default DateSelector
