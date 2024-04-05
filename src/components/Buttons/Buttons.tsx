import cls from './Buttons.module.css'

interface IButtonsProps {
  turnOnOfIsShowingPeriods: () => void
  forgetTheUser: () => void
  isShowingPeriods: boolean
}

const Buttons = ({ turnOnOfIsShowingPeriods, isShowingPeriods, forgetTheUser }: IButtonsProps) => {
  return (
    <div className={cls.ButtonsContainer}>
      <div className='flex flex-col gap-4'>
        <button onClick={turnOnOfIsShowingPeriods} className='p-4 Border rounded-xl hover:scale-x-105 w-[100%]'>
          {isShowingPeriods ? 'Close the schema' : 'Open Schema'}
        </button>
        <button className='p-4 bg-black text-white rounded-xl hover:scale-x-105 w-[100%]' onClick={forgetTheUser}>
          Change age
        </button>
      </div>
    </div>
  )
}

export default Buttons