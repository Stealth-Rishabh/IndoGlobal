
import { FacebookIcon, Instagram, Youtube, MapPin, Mail, Phone, Linkedin } from "lucide-react"

export default function BannerNav() {
  return (
    <div className="bg-gray-100 py-2 px-4 text-sm hidden sm:block">
      <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] min-w-[1280px]:max-w-[1280px] 2xl:max-w-[1536px] mx-auto flex justify-end sm:justify-between sm:items-center">
        <div className="hidden md:flex items-center space-x-4">
          <span>Follow us</span>
          <div className="flex space-x-2">
          <a href="https://www.instagram.com/indoglobalcolleges/" target="_blank" className="text-red-600 hover:text-red-700">
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com/IndoGlobalOfficial" target="_blank" className="text-red-600 hover:text-red-700">
              <FacebookIcon size={16} />
            </a>
            {/* <a href="#" className="text-red-600 hover:text-red-700">
              <Linkedin size={16} />
            </a> */}
            
            <a href="https://www.youtube.com/channel/UCvSPn6SHqEnB_knlejlzV7A" target="_blank" className="text-red-600 hover:text-red-700">
              <Youtube size={16} />
            </a>
            
          </div>
        </div>
        <div className="flex justify-end sm:items-center space-x-4">
          <a href="https://maps.app.goo.gl/NL7WpXRs7wDYNTEu5" target="_blank" className="flex items-center">
            <MapPin size={16} className="text-red-600 mr-1" />
            <span>Abhipur, New Chandigarh</span>
          </a>
          <a href="mailto:contact@igef.net" className="flex items-center">
            <Mail size={16} className="text-red-600 mr-1" />
            <span>contact@igef.net</span>
          </a>
          <a href="tel:+91-7307211222" className="flex items-center">
            <Phone size={16} className="text-red-600 mr-1" />
            <span>+91-7307211222</span>
          </a>
        </div>
      </div>
    </div>
  )
}
