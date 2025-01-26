import { Button, IconButton } from "@mui/material"
import { FC } from "react"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { phoneNumber } from "../data/info"

const Navbar:FC = () => {
  return (
    <div className="bg-slate-900 text-white  p-4 lg:px-40 md:px-20 flex items-center justify-between shadow-md">
      <img src="/images/logo.png" alt="logo" className="w-[40px]" />

        
        {/* icons */}
        <div className="flex items-center gap-4">
            <Button href={"https://wa.me/" + phoneNumber}  target="_blank" variant="contained" sx={{backgroundColor:'oklch(0.696 0.17 162.48)',color:'black'}}  className=" flex items-center gap-2 text-emerald-500">
                <FaWhatsapp className="fill-slate-900"/>
                {phoneNumber}
            </Button>

            <IconButton >
              <FaInstagram className="fill-amber-100" />
            </IconButton>

            <IconButton>
              <FaFacebook className="fill-amber-100" />
            </IconButton>

            <IconButton>
              <FaTiktok className="fill-amber-100" />
            </IconButton>
            
            
        </div>

    </div>
  )
}

export default Navbar
