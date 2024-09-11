import { Button } from 'react-daisyui'
const Pages404 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-md p-6">
        <div className="text-[24px] sm:text-[30px] md:text-[33px] font-bold text-center mb-4">
          404 ERROR
        </div>
        <div className="text-center text-[16px] sm:text-[18px] md:text-[20px] text-[#707070] mb-4">
          <p>This page was not found.</p>
          <p>Back to home and start again.</p>
        </div>
        <div className="flex justify-center">
          <Button className="bg-white hover:bg-gray-300 w-full sm:w-[187px] h-[40px] sm:h-[53px] border border-solid border-black rounded font-poppins text-[#000000]">
            HOMEPAGE
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Pages404
