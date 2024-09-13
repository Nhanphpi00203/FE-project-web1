import Sreach from '../../components/BLog/sreach'
import NoSidebar from './Blog-Single-NoSidebar'
const SingleSidebar = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center">
        <div className="mr-[10px] mt-0 sm:mt-[10px]">
          <Sreach />
        </div>
        <div className="mt-10">
          <NoSidebar />
        </div>
      </div>
    </div>
  )
}
export default SingleSidebar
