import { useState } from "react"
import WeekTip from "./WeekTip"

interface IWeekProps {
    isBlack?: boolean
    path: number
    userWeeks: number
    isShowingPeriods: boolean
}

const Week = ({ isBlack, path, userWeeks, isShowingPeriods }: IWeekProps) => {
    const [isShowingKey, setIsShowingKey] = useState<boolean>(false)


    const showTHeCurrentWeek = () => {
        setIsShowingKey(true)
    }

    const removeTHeCurrentWeek = () => {
        setIsShowingKey(false)
    }
    return (
        <div
            className={` 
            w-[10.5px] 
            h-[10.5px] 
            rounded 
            ${isShowingPeriods || isBlack && 'bg-black'}
            ${isShowingPeriods && (path < 344) && 'bg-[#ffe24f] Border'}
            ${isShowingPeriods && ((path < 920) && (path > 343)) && 'bg-[#93ff55] Border'} 
            ${isShowingPeriods && ((path < 1248) && (path > 919)) && 'bg-[#de79ff] Border'} 
            ${isShowingPeriods && ((path < 3276) && (path > 919)) && 'bg-[#90a7f3] Border'} 
            ${isShowingPeriods && (path > 3275) && 'bg-[#f39090] Border'}
            hover:scale-125 
          hover:bg-red-600`}
            onMouseMove={showTHeCurrentWeek}
            onMouseLeave={removeTHeCurrentWeek}
            style={{ 'backgroundColor': `${(path === userWeeks) && '#000000'}` }}
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