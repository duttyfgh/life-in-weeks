import { useEffect, useState } from "react"
import Buttons from "./components/Buttons/Buttons"
import ChoiceAge from "./components/ChoiseAge/ChoiceAge"
import Header from "./components/Header/Header"
import InformationAboutPeriods from "./components/InformationAboutPeriods/InformationAboutPeriods"
import WeeksRows from "./components/Week/WeeksRows"
import { countSundaysPassed, generateArray } from "./generateArray"

const App = () => {
  const [age, setAge] = useState<Date>(new Date())
  const [isSetDate, setIsSetDate] = useState(false)
  const [isRememberedTheUser, setIsRememberedTheUser] = useState<boolean>(!localStorage.getItem('usersDateOfBorn'))
  const [isShowingPeriods, setIsShowingPeriods] = useState(false)

  const userDateOfBorn = localStorage.getItem('usersDateOfBorn')
  const rows = []
  const userWeeks = countSundaysPassed(age)

  if (isSetDate) {
    const data = generateArray(age)

    //here we split our big array into lots of small arrays to render lots of rows namely 1 row qual 52 elements 
    for (let i = 0; i < data.length; i += 52) {
      rows.push(data.slice(i, i + 52))
    }
  }

  //here we just set Date of born
  const setDateHandler = (age: Date) => {
    setAge(age)
    setIsSetDate(true)
  }

  //it write down to localStorage data of user's Date of born by the key: usersDateOfBorn
  const setIsRememberedTheUserHandler = (userDateOfBorn: Date) => {
    localStorage.setItem('usersDateOfBorn', userDateOfBorn.toDateString())
    setIsRememberedTheUser(true)
  }

  const turnOnOfIsShowingPeriods = () => {
    setIsShowingPeriods(!isShowingPeriods)
    scrollToBottom()
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    })
  }

  //it's checking isRememberedTheUser and if it equal true this useEffect set age, isSetDate, isRememberedTheUser
  useEffect(() => {
    if (!isRememberedTheUser) {
      setAge(new Date(userDateOfBorn as string))

      setIsSetDate(true)
      setIsRememberedTheUser(true)
    }
  }, [])

  const forgetTheUser = () => {
    setIsRememberedTheUser(false)
    localStorage.removeItem('usersDateOfBorn')
    setIsSetDate(false)
  }

  //if date was changed i.e date set, it scroll to bottom
  useEffect(() => {
    if (isSetDate) {
      scrollToBottom()
    }
  }, [isSetDate])


  return (
    <div className={`h-screen ${isSetDate || 'overflow-hidden'}`}>
      <Header />

      <main>
        {isShowingPeriods && <InformationAboutPeriods />}
        <WeeksRows rows={rows} userWeeks={userWeeks} isShowingPeriods={isShowingPeriods} />
        {isSetDate &&
         <Buttons turnOnOfIsShowingPeriods={turnOnOfIsShowingPeriods} isShowingPeriods={isShowingPeriods} forgetTheUser={forgetTheUser} />}
      </main>

      {isRememberedTheUser && isSetDate ||
        <ChoiceAge setAge={setDateHandler} setIsRememberedTheUserHandler={setIsRememberedTheUserHandler} />}
    </div>
  )
};

export default App
