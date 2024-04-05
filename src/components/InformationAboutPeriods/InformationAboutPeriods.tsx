import cls from './InformationAboutPeriods.module.css'

const InformationAboutPeriods = () => {
    return (
        <div className={cls.InformationAboutPeriodsContainer}>

            <div className="flex items-center gap-4">
                <div className={`bg-[#ffe24f] ${cls.block} rounded-xl`}></div>
                <span>-</span>
                <span>childhood</span>
            </div>

            <div className="flex items-center gap-4">
                <div className={`bg-[#93ff55] ${cls.block} rounded-xl`}></div>
                <span>-</span>
                <span>school</span>
            </div>

            <div className="flex items-center gap-4 ">
                <div className={`bg-[#de79ff] ${cls.block} rounded-xl`}></div>
                <span>-</span>
                <span>university</span>
            </div>

            <div className="flex items-center gap-4">
                <div className={`bg-[#90a7f3] ${cls.block} rounded-xl`}></div>
                <span>-</span>
                <span>work</span>
            </div>

            <div className="flex items-center gap-4">
                <div className={`bg-[#f39090] ${cls.block} rounded-xl`}></div>
                <span>-</span>
                <span>pension</span>
            </div>

            <div className="flex items-center gap-4 ">
                <div className={`bg-[#000000] ${cls.block} rounded-xl`}></div>
                <span>-</span>
                <span>you are here</span>
            </div>


        </div>
    )
}

export default InformationAboutPeriods