import "./Navbar.scss"
import logo from "../../helper/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" width={80} />
      <ul>
        <li>HOROSCOPE</li>
        <li>DAILY</li>
        <li>TAROT</li>
        <li>ARTICLE</li>
        <li>CONTACT</li>
      </ul>
      <i className="fa-solid fa-bars icon"></i>
    </div>
  )
}

export default Navbar