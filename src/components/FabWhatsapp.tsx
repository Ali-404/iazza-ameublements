import { Fab, Tooltip } from '@mui/material'
import { FC } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { phoneNumber } from '../data/info'

const FabWhatsapp:FC = () => {
  return (
     <div className="fixed bottom-0 right-0 m-8 z-50">
     <Tooltip title="Contact via WhatsApp">
       <Fab size="large" sx={{ bgcolor: "#5ee9b5" }} href={"https://wa.me/" + phoneNumber}  target="_blank" >
         <FaWhatsapp size={20} />
       </Fab>
     </Tooltip>
   </div>
  )
}

export default FabWhatsapp
