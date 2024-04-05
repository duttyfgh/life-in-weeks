import calculateTime from "../../countDateFromWeeks"

interface IWeekTipProps {
    weeks: number
}

const WeekTip = ({ weeks }: IWeekTipProps) => {
    const date = calculateTime(weeks)

    return (
        <div className="absolute top-[-80px] right-[-200px] flex w-[22.5rem]">
            <span className="bg-white p-4 borderRadiosForWeekTip z-50 cursor-default text-[1.6rem] shadow-lg tipText">
                {date ? `You have already lived for ${date}` : `This is your first day of life`}
            </span>
        </div>
    )
}

export default WeekTip