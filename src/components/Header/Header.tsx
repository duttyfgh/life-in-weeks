import cls from './Header.module.css'

const Header = () => {
  return (
    <header className={`roboto ${cls.header}`}>
        <span className={cls.headerText}>YOUR LIFE IN WEEKS</span>
    </header>
  )
}

export default Header