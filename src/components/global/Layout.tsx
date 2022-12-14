import { Link } from 'react-router-dom'
import { faker } from '@faker-js/faker';

function Layout() {
  return (
    <nav className='bg-teal-500 drop-shadow-sm'>
      <div className='max-w-screen-2xl flex items-center justify-between flex-wrap bg-teal-500 p-6 mx-auto'>
        <div className='flex items-center flex-shrink-0 text-white mr-6 bg-teal-500 font-bold'>
          <Link to='/'>
            {faker.company.name()}
          </Link>
        </div>
        <div className='block md:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg className='fill-current h-3 w-3" viewBox="0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/></svg>
          </button>
        </div>
        <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-right md:text-center'>
          <div className='text-md lg:flex-grow'>
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Home
            </Link>
            <Link to="/About" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              About
            </Link>
            <Link to="/Blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Blog
            </Link>
            <Link to="/Contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Layout