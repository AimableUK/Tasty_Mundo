import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import tastyMundoLogo from '/tastyMundo.png'
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";


const Footer = () => {

  const location = useLocation()

    const MySocials = [
      { icon: <FaGithub />, url: `https://github.com/AimableTrague` },
      { icon: <FaTwitter />, url: `https://x.com/ingagari__` },
      { icon: <FaLinkedin />, url: `https://rw.linkedin.com/in/ukobizaba-aimable-a104122a7` },
      { icon: <FaEnvelope />, url: `mailto:aimableukobizaba@gmail.com` },
    ];


    React.useEffect(() => {
      scrollToTop()
    }, [location]);

    const scrollToTop = () => {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }


  return (
    <footer className='flex flex-col md:flex-row justify-between p-6 gap-3 md:gap-10 pb-2 md:pl-20 md:pr-20 items-center border-t border-gray-700'>
      <div className='flex flex-row items-center'>
        <Link to={'/'} onClick={scrollToTop} ><img className='w-10 h-10' src={tastyMundoLogo} alt='Tasty Mundo Logo' /></Link>
        <Link to={'/'} onClick={scrollToTop} ><h3>Tasty Mundo</h3></Link>
      </div>
      <div>
        <ul className='flex'>
          <Link onClick={scrollToTop} className='mr-5 hover:text-primaryColor transition ease-in-out duration-200' to={'/'}>Home</Link>
          <Link onClick={scrollToTop} className='mr-5 hover:text-primaryColor transition ease-in-out duration-200' to={'/aboutus'}>AboutUs</Link>
          <Link onClick={scrollToTop} className='hover:text-primaryColor transition ease-in-out duration-200' to={'/services'}>Services</Link>
        </ul>
      </div>
      <div className='flex flex-row mb-5'>
        {MySocials.map((option, index) => (
          <div key={index} className="relative">
            <button
              className="p-2 rounded-md text-primary text-2xl border-2 border-primaryBorder m-2 hover:bg-primaryBorder hover:text-white hover:bg-gradient-to-r hover:from-primaryColor hover:to-primaryBody transition duration-500 ease-in-out hover:scale-90"
              onClick={() => window.open(option.url, '_blank')}
            >
              {option.icon}
            </button>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
