import cls from './Buttons.module.css'

interface IButtonsProps {
  turnOnOfIsShowingPeriods: () => void
  isShowingPeriods: boolean
}

const Buttons = ({ turnOnOfIsShowingPeriods, isShowingPeriods }: IButtonsProps) => {
  return (
    <div className={cls.ButtonsContainer}>
      <button onClick={turnOnOfIsShowingPeriods} className='p-4 Border rounded-xl hover:scale-x-105'>
        {isShowingPeriods ? 'Close the schema' : 'Open Schema'}
      </button>
    </div>
  )
}

export default Buttons