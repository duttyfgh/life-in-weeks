import { useEffect, useState } from "react"
import Week from "./Week"
import cls from './Week.module.css'

interface IWeeksRowsProps {
    rows: { id: number; isBlack: boolean }[][]
    userWeeks: number
    isShowingPeriods: boolean
}

const WeeksRows = ({ rows, userWeeks, isShowingPeriods }: IWeeksRowsProps) => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsReady(true)
        }, 200)


        return () => clearTimeout(timeout)
    }, [])

    if (!isReady) {
        return <div className="absolute h-[100vh] w-full top-0 flex justify-center items-center z-20">
            <img
                src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif'
                alt="Loading..."
                className="w-[120px]" />
        </div>
    }

    return (
        <div className={`
         flex
         ${isShowingPeriods ? cls.WeeksRowsWhenShowingPeriodsWeight : cls.WeeksRowsWeight}
        `}>
            <div className={cls.WeeksContainer}>
                {rows.map((row, index) => (
                    <div key={index} className="flex gap-1">
                        {row.map((week) => (
                            <Week
                                key={week.id}
                                isBlack={week.isBlack}
                                path={week.id}
                                userWeeks={userWeeks}
                                isShowingPeriods={isShowingPeriods} />
                        ))}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeeksRows
