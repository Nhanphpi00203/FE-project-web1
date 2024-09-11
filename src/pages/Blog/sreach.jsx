import { IoSearch } from 'react-icons/io5'

const Sreach = () => {
  return (
    <div className="w-full h-full">
      <div className="ml-[14px] mt-[30px] w-[262px] h-[283px] relative hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="border-b border-solid border-[#D8D8D8] focus:outline-none w-[261px] h-[35px] sm:w-full sm:pr-10"
        />
        <IoSearch className="absolute left-[240px] top-[9px] text-xl text-gray-500 sm:right-2 sm:left-auto" />
        <div className="mt-[50px] sm:mt-10">
          <p className="text-[20px] font-medium">Categories</p>
          <div className="mt-[20px] sm:mt-5">
            <ul className="text-[#707070]">
              <li className="mt-[10px] cursor-pointer hover:text-gray-700 sm:mt-2">
                Fashion
              </li>
              <li className="mt-[10px] cursor-pointer hover:text-gray-700 sm:mt-2">
                Style
              </li>
              <li className="mt-[10px] cursor-pointer hover:text-gray-700 sm:mt-2">
                Accessories
              </li>
              <li className="mt-[10px] cursor-pointer hover:text-gray-700 sm:mt-2">
                Season
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sreach
