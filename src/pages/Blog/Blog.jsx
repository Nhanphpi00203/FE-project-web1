// import { IoSearch } from 'react-icons/io5'
import Sreach from '../../components/BLog/sreach'
import News from '../../components/BLog/News'
// import NewsMoblie from './NewsMoblie'
const Blog = () => {
  return (
    <div className="w-full h-full lg:flex lg:justify-center">
      <div className="">
        <div className="text-[33px] ml-[10px] mt-[20px] sm:mt-[30px] md:mt-[40px]">
          <p>Blog</p>
        </div>

        <div className="">
          <Sreach />
        </div>
      </div>
      <div className=" mt-[20px] sm:mt-32">
        <News />

        {/* <div>
          <NewsMoblie />
        </div> */}
      </div>
    </div>
  )
}
export default Blog
