import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

type logoProp = {
  classname?: string
}
function Logo({classname}:logoProp) {
  return (
    // <div className={`text-Primary-text dark:text-dark-Primary-text`}>
      // <span className='px-4 w-14 h-8'>
        <Link to={'/'}>
          <img src={logo} alt="logo" className={`${classname}`}/>
        </Link>
      // </span>
        // Memory
    // </div>
  )
}

export default Logo