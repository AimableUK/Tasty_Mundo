import tastyMundoLogo from '/tastyMundo.png'
import { Link } from 'react-router-dom'

export default function Header() {


    return (
        <header className='flex flex-col md:flex-row pt-2 gap-2 justify-between md:p-6 md:gap-10 pb-2 md:pl-20 md:pr-20 items-center border-b border-gray-700'>
            <div className='flex flex-row items-center'>
                <Link to={'/'}><img className='w-10 h-10' src={tastyMundoLogo} alt='Tasty Mundo Logo' /></Link>
                <Link to={'/'}><h3>Tasty Mundo</h3></Link>
            </div>
            <div>
                <ul className='flex'>
                    <Link className='mr-5 hover:text-primaryColor transition ease-in-out duration-200' to={'/'}>Home</Link>
                    <Link className='mr-5 hover:text-primaryColor transition ease-in-out duration-200' to={'/aboutus'}>AboutUs</Link>
                    <Link className='hover:text-primaryColor transition ease-in-out duration-200' to={'/services'}>Services</Link>
                </ul>
            </div>
        </header>
    )
}