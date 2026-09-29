import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@phosphor-icons/react'
function BackButton() {
    const navigate = useNavigate()
  return (
    <button aria-label="back" className="cursor-pointer" onClick={()=> navigate(-1)}>
          <ArrowLeftIcon size={20} weight="bold"/>
    </button>
  )
}

export default BackButton