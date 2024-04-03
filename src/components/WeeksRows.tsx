import { useEffect, useState } from "react"
import Week from "./Week"

interface IWeeksRowsProps {
    rows: { id: number; isBlack: boolean }[][]
}

const WeeksRows = ({ rows }: IWeeksRowsProps) => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsReady(true)
        }, 200)


        return () => clearTimeout(timeout)
    }, [])

    if (!isReady) {
        return null
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[65rem] flex flex-wrap gap-1">
                {rows.map((row, index) => (
                    <div key={index} className="flex gap-1">
                        {row.map((week) => (
                            <Week key={week.id} isBlack={week.isBlack} path={week.id} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeeksRows
