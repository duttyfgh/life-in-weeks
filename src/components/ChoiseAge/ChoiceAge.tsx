import DateSelector from "./ChoiceDate"
import cls from './ChoiceAge.module.css'

interface IChoiceAgeProps {
  setAge: (age: Date) => void
  setIsRememberedTheUserHandler: (userDateOfBorn: Date) => void
}

const ChoiceAge = ({ setAge, setIsRememberedTheUserHandler }: IChoiceAgeProps) => {

  return (
    <div className="absolute z-10 w-[100%] h-[100vh] overflow-hidden bg-[#000000d9] flex justify-center items-center top-0">
      <div className={`flex flex-col gap-28 p-8 bg-white rounded-xl ${cls.ChoiceAge}`}>
        <span className='roboto uppercase text-[4rem]'>Choice your date of born</span>
        <DateSelector setAge={setAge} setIsRememberedTheUserHandler={setIsRememberedTheUserHandler} />
      </div>
    </div>
  )
}

export default ChoiceAge