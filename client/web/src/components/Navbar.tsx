import { Link } from "react-router-dom" 
function Navbar() {
  const navLinks = ["home", "explore", "library", "profile"]
  return (
    <div>
        <Link to={"/home"}>
          <div></div>
        </Link>
        <Link to={}>
          <div></div>
        </Link>
        <Link to={}>
          <div></div>
        </Link>
        <Link to={}>
          <div></div>
        </Link>
    </div>
  )
}

export default Navbar