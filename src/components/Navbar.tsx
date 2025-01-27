import { Button, IconButton } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { FaArrowLeft, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"
import { phoneNumber } from "../data/info"
import { Link, useLocation } from "react-router-dom"
import { FaMessage } from "react-icons/fa6"

const Navbar:FC = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.onresize = () => {
      setWidth(window.innerWidth)
    }
  }, [])

  const location = useLocation()
  return (
    <div className="bg-slate-900 text-white  p-4 lg:px-40 md:px-20 flex items-center justify-between shadow-md">
     <div className="flex items-center gap-2">
      <img src="/images/logo.png" alt="logo" className="w-[70px]" />
      {location.pathname !== "/" && (
        <IconButton component={Link} to="/">
          <FaArrowLeft className="fill-amber-100" />
        </IconButton>
      )}
     </div>

        
        {/* icons */}
        <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
          
          {width > 600 && (
              <Button href={"https://wa.me/" + phoneNumber}  target="_blank" variant="contained" sx={{backgroundColor:'oklch(0.696 0.17 162.48)',color:'black'}}  className=" flex items-center gap-2 text-emerald-500  ">
                  <FaWhatsapp className="fill-slate-900"/>
                  {phoneNumber}
              </Button>

          )}

            <IconButton href="https://www.instagram.com/ameublementsiazza/" target="_blank" >
              <FaInstagram className="fill-amber-100" />
            </IconButton>

            <IconButton href="https://www.facebook.com/ameublementsiazza" target="_blank">
              <FaFacebook className="fill-amber-100" />
            </IconButton>

            <IconButton href="https://www.tiktok.com/@ameublementsiazza" target="_blank">
              <FaTiktok className="fill-amber-100" />
            </IconButton>

            <IconButton href="mailto:ameublementsiazza@gmail.com" target="_blank">
              <FaMessage className="fill-amber-100" />
            </IconButton>
            
            
        </div>

    </div>
  )
}

export default Navbar
