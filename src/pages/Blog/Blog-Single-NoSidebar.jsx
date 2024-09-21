import { BannerBig } from '../../assets/Blog'
import { BannerMin } from '../../assets/Blog'
// icon
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Checkbox } from 'react-daisyui'
// import { Button } from 'react-daisyui'
import { useState } from 'react'
import { Avartar } from '../../assets/Blog'
import { RiReplyFill } from 'react-icons/ri'
// import Sreach from '../../components/BLog/sreach'
const NoSidebar = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleMouseDown = () => {
    setIsClicked(true)
  }

  const handleMouseUp = () => {
    setIsClicked(false)
  }
  return (
    <div className="w-full h-full">
      <div>
        <p className="text-[30px] mt-10 text-center sm:text-[30px] sm:mt-0">
          Fast Fashion, And Faster Fashion
        </p>

        <p className="flex justify-center text-gray-500 mt-2 sm:mt-3">
          by <span className="mr-1"></span>
          <span className="text-black">ANNY JOHNSON</span>
          <span className="mr-1"></span> - October 8, 2020
        </p>
      </div>
      {/*  */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <img
          src={BannerBig}
          alt=""
          className="w-[288px] h-[192px] sm:w-[947px] sm:h-[489.93px] object-cover rounded-lg"
        />
      </div>
      {/*  */}
      <div className="w-[288px] h-auto sm:h-[172px] sm:w-[670px] mx-auto my-1 p-2">
        <p className="mb-2 text-[12px] sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue.
        </p>
        <p className="text-[12px] sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>
      </div>

      {/*  */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <img
          src={BannerMin}
          alt=""
          className="w-[288px] h-[192px] sm:w-[670px] sm:h-[300px] object-cover rounded-lg"
        />
      </div>
      {/*  */}
      <div className="flex justify-center overflow-hidden mx-auto my-1 p-2">
        <div className="w-[288px] h-auto sm:h-[266px] sm:w-[670px] mx-auto p-2">
          <p className="text-[16px] sm:text-[26px] mb-4">Top trends</p>
          <p className="text-[12px] sm:text-[16px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero.
          </p>
          <div className="text-[12px] sm:text-[16px] ml-0 sm:ml-[20px]">
            <p className="mb-2">
              ● consectetur adipiscing elit. Aliquam placerat
            </p>
            <p className="mb-2">● Lorem ipsum dolor sit amet consectetur</p>
            <p className="hidden sm:block mb-2">
              ● sapien tortor faucibus augue
            </p>
            <p className="hidden sm:block">
              ● a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="md:flex items-center justify-between p-5 sm:ml-[0px] ml-[24px]">
        <div className="flex items-center sm:flex md:ml-[110px]">
          <p className="text-[12px] sm:text-[16px]">Tags</p>
          <span className="mr-2"></span>
          <div className="border-b border-solid border-black w-[100px]"></div>
          <span className="mr-2"></span>
          <p className="text-gray-600 text-[12px] sm:text-[16px]">
            Fashion, Style, Season
          </p>
        </div>
        {/*  */}
        <div className="flex items-center space-x-1 md:mr-[110px] sm:mt-0 mt-7">
          <p className="text-[12px] sm:text-[16px]">Share</p>
          <span className="mr-2"></span>
          <div className="border-b border-solid border-black w-[100px]"></div>
          <div className="sm:flex flex items-center space-x-4">
            <FaFacebookF style={{ color: 'gray' }} />
            <FaInstagram style={{ color: 'gray' }} />
            <FaTwitter style={{ color: 'gray' }} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center">
        <div className="">
          <div className="border-b border-solid border-gray-300 w-[288px] sm:w-[670px] h-[2px] sm:h-[2px] p-4"></div>
          <div className="w-[288px] sm:w-[288px]">
            <div className="p-4">
              <p className="text-[16px] sm:text-[26px]">Leave a reply</p>
              <p className="text-[14px] text-gray-500 mt-[10px]">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <div className="ml-4 mt-10">
              <input
                type="text"
                placeholder="Enter your Name*"
                className="border-b border-solid border-[#D8D8D8] focus:outline-none w-[261px] h-[35px] sm:w-[670px] sm:pr-10 "
              />
              <input
                type="text"
                placeholder="enter your Email*"
                className="border-b border-solid border-[#D8D8D8] focus:outline-none w-[261px] h-[35px] sm:w-[670px] sm:pr-10  mt-[40px]"
              />
              <input
                type="text"
                placeholder="Enter your Website"
                className="border-b border-solid border-[#D8D8D8] focus:outline-none w-[261px] h-[35px] sm:w-[670px] sm:pr-10  mt-[40px]"
              />
              <div className="flex items-center md:w-[503px] mt-[10px] sm:mt-[30px]">
                <Checkbox className="mr-2" />{' '}
                {/* Thêm khoảng cách bên phải cho checkbox */}
                <p className="text-[12px] text-gray-500 sm:text-sm sm:mt-0 mt-[15px]">
                  Save my name, email, and website in this browser for the next
                  time I comment
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-gray-500 text-[12px] sm:text-[14px]">
              Your Comment*
            </p>
            <input
              type="text"
              placeholder=""
              className="border-b border-solid border-[#D8D8D8] focus:outline-none w-[261px] h-[35px] sm:w-[670px] sm:pr-10"
            />
            <br />
            <div className="mt-10">
              {/* <Button className="mt-5 w-[158px] h-[48px] border border-solid border-black rounded-lg hover:bg-gray-300 transition-all duration-300 hover:scale-105">
                POST COMMENT
              </Button> */}
              <button
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // Đảm bảo quay lại trạng thái ban đầu khi chuột rời khỏi button
                className={`btn bg-[#000000] text-white border-none
                  transition-all duration-[60ms] rounded-sm
                  w-[192px] h-[53px]
                  ${isClicked ? 'bg-[#000000] scale-105' : ''}`}
              >
                POST COMMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col items-center mt-14 px-4">
        <div className="w-full max-w-[670px]">
          <p className="text-[26px]">Comments</p>
          <div className="w-full mt-4 flex sm:flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img
              src={Avartar}
              alt="Avatar"
              className="w-[70px] h-[70px] object-cover rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <p className="text-[16px] text-black font-poppins font-semibold">
                  Robert Fox
                </p>
                <p className="text-gray-500 text-[14px]">6 May, 2020</p>
                <div className="flex items-center ml-auto">
                  <RiReplyFill />
                  <p className="text-gray-500 cursor-pointer text-[14px] ml-1">
                    Reply
                  </p>
                </div>
              </div>
              <p className="text-[12px] font-poppins text-gray-500 mt-2 sm:text-[16px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NoSidebar
