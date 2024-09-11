import { Tintuc1, Tintuc2 } from '../../assets/Blog'

const News = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 w-full h-full">
      <div className="w-[450px] h-auto mb-6">
        <div className="flex justify-center items-center w-full sm:w-auto">
          <img
            src={Tintuc1}
            alt="News 1"
            className="w-[288px] h-[192px] object-cover sm:w-full sm:h-auto"
          />
        </div>
        <div className="mt-[20px] ml-9 sm:ml-0">
          <p className="text-[14px] text-[#707070]">
            Fashion - October 8, 2020
          </p>
          <p className="text-[20px] mt-[5px] font-medium">
            Top Trends From Spring
          </p>
          <p className="text-[16px] mt-[15px] text-[#707070]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
            augue, a maximus elit ex vitae libero...{' '}
          </p>
          <p className="text-[16px] text-[#A18A68] mt-[20px] cursor-pointer">
            Read More
          </p>
        </div>
      </div>

      <div className="w-[450px] h-auto mb-6">
        <div className="flex justify-center items-center w-full sm:w-auto">
          <img
            src={Tintuc1}
            alt="News 2"
            className="w-[288px] h-[192px] object-cover sm:w-full sm:h-auto"
          />
        </div>
        <div className="mt-[20px] ml-9 sm:ml-0">
          <p className="text-[14px] text-[#707070]">
            Fashion - October 8, 2020
          </p>
          <p className="text-[20px] mt-[5px] font-medium">
            Top Trends From Spring
          </p>
          <p className="text-[16px] mt-[15px] text-[#707070]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
            augue, a maximus elit ex vitae libero...{' '}
          </p>
          <p className="text-[16px] text-[#A18A68] mt-[20px] cursor-pointer">
            Read More
          </p>
        </div>
      </div>

      <div className="w-[450px] h-auto mb-6">
        <div className="flex justify-center items-center w-full sm:w-auto">
          <img
            src={Tintuc1}
            alt="News 3"
            className="w-[288px] h-[192px] object-cover sm:w-full sm:h-auto"
          />
        </div>
        <div className="mt-[20px] ml-9 sm:ml-0">
          <p className="text-[14px] text-[#707070]">
            Fashion - October 8, 2020
          </p>
          <p className="text-[20px] mt-[5px] font-medium">
            Top Trends From Spring
          </p>
          <p className="text-[16px] mt-[15px] text-[#707070]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
            augue, a maximus elit ex vitae libero...{' '}
          </p>
          <p className="text-[16px] text-[#A18A68] mt-[20px] cursor-pointer">
            Read More
          </p>
        </div>
      </div>

      <div className="w-[450px] h-auto mb-6">
        <div className="flex justify-center items-center w-full sm:w-auto">
          <img
            src={Tintuc2}
            alt="News 4"
            className="w-[288px] h-[192px] object-cover sm:w-full sm:h-auto"
          />
        </div>
        <div className="mt-[20px] ml-9 sm:ml-0">
          <p className="text-[14px] text-[#707070]">
            Fashion - October 8, 2020
          </p>
          <p className="text-[20px] mt-[5px] font-medium">
            Top Trends From Spring
          </p>
          <p className="text-[16px] mt-[15px] text-[#707070]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus
            augue, a maximus elit ex vitae libero...{' '}
          </p>
          <p className="text-[16px] text-[#A18A68] mt-[20px] cursor-pointer">
            Read More
          </p>
        </div>
      </div>
    </div>
  )
}

export default News
