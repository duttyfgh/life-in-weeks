import cls from './InformationAboutPeriods.module.css'

const periodsInformation = [
    {
        title: 'childhood',
        color: '#ffe24f'
    },
    {
        title: 'school',
        color: '#93ff55'
    },
    {
        title: 'university',
        color: '#de79ff'
    },
    {
        title: 'work',
        color: '#90a7f3'
    },
    {
        title: 'pension',
        color: '#f39090'
    },
    {
        title: 'you are here',
        color: '#000000'
    },
]

const InformationAboutPeriods = () => {
    return (
        <div className={cls.InformationAboutPeriodsContainer}>
            {periodsInformation.map(per => (
                <div className="flex items-center gap-4" key={per.title}>
                    <div className={`bg-[${per.color}] ${cls.block} rounded-xl`}></div>
                    <span>-</span>
                    <span>{per.title}</span>
                </div>
            ))}
        </div>
    )
}

export default InformationAboutPeriods