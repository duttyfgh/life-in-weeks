interface IWeekProps {
    isBlack?: boolean
}

const Week = ({ isBlack }: IWeekProps) => {
    return (
        <div className={`w-[12px] h-[12px] rounded ${isBlack || 'Border'} ${isBlack && 'bg-black'}`}></div>
    )
}

export default Week