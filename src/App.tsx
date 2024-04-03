import { useEffect, useState } from "react";
import ChoiceAge from "./components/ChoiceAge";
import Header from "./components/Header";
import Week from "./components/Week";
import { generateArray } from "./generateArray";

const App = () => {
  const [age, setAge] = useState<Date>(new Date())
  const [isSetDate, setIsSetDate] = useState(false)
  const [isRememberedTheUser, setIsRememberedTheUser] = useState<boolean>(!localStorage.getItem('usersDateOfBorn'))

  const data = generateArray(age)

  const rows = []
  for (let i = 0; i < data.length; i += 52) {
    rows.push(data.slice(i, i + 52))
  }

  const setDateHandler = (age: Date) => {
    setAge(age)
    setIsSetDate(true)
  }

  useEffect(() => {
    if (isSetDate) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [isSetDate])

  return (
    <div className={`h-screen ${isSetDate || 'overflow-hidden'}`}>
      <Header />

      <div className="flex justify-center items-center h-screen">
        <div className="w-[65rem] flex flex-wrap gap-1">
          {rows.map((row, index) => (
            <div key={index} className="flex gap-1">
              {row.map((week) => (
                <Week key={week.id} isBlack={week.isBlack} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {isRememberedTheUser && isSetDate || <ChoiceAge setAge={setDateHandler} />}
    </div>
  )
};

export default App;
