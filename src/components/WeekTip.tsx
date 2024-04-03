import calculateTime from "../countDateFromWeeks"

interface IWeekTipProps {
    weeks: number
}

const WeekTip = ({ weeks }: IWeekTipProps) => {
    const date = calculateTime(weeks)

    return (
        <div className="absolute top-[-90px] right-[-257px] flex w-[22.5rem]">
            <span className="bg-white p-4 borderRadiosForWeekTip z-50 cursor-default text-[1.6rem] shadow-lg tipText">
                {`You have already lived for ${date}`}
            </span>
        </div>
    )
}

export default WeekTip