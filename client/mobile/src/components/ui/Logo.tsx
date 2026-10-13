import { Link } from 'expo-router';
import { Image } from 'react-native'

type logoProp = {
  classname?: string
}
function Logo({classname}:logoProp) {
  return (
        <Link href={'/'}>
          <Image source={require('../../../assets/images/logo.png')} className={`${classname}`}/>
        </Link>
  )
}

export default Logo