import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@phosphor-icons/react'
function BackButton() {
    const navigate = useNavigate()
  return (
    <div className="cursor-pointer" onClick={()=> navigate(-1)}>
          <ArrowLeftIcon size={20} weight="bold"/>
    </div>
  )
}

export default BackButton