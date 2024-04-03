import { useState } from "react"
import WeekTip from "./WeekTip"

interface IWeekProps {
    isBlack?: boolean
    path: number
}

const Week = ({ isBlack, path }: IWeekProps) => {
    const [isShowingKey, setIsShowingKey] = useState<boolean>(false)
    const showTHeCurrentWeek = () => {
        setIsShowingKey(true)
    }

    const removeTHeCurrentWeek = () => {
        setIsShowingKey(false)
    }
    return (
        <div
            className={`w-[12px] h-[12px] rounded ${isBlack || 'Border'} ${isBlack && 'bg-black'} hover:scale-125 hover:bg-red-600`}
            onMouseMove={showTHeCurrentWeek}
            onMouseLeave={removeTHeCurrentWeek}
        >
            <div className="relative">
                {isShowingKey &&
                    <WeekTip weeks={path} />
                }
            </div>
        </div>
    )
}

export default Week