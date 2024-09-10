import { IoSearch } from 'react-icons/io5'
const Blog = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <div className="ml-[14px] mt-[70px]">
          <div className="text-[33px]">
            <p>Blog</p>
          </div>
          <div className="w-[261px] h-[35px] relative">
            <input
              type="text"
              placeholder="sreach"
              className="border border-solid border-black focus:outline-none"
            />
            <IoSearch className="absolute left-[150px] top-[4px] text-xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog
