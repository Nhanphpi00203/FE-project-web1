import DefaultImg from "../../assets/navbar-footer-image/Image_none.png"
import { IoIosSearch } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react"

const Shop = () => {
    const [range, setRange] = useState(0)
    const [isOn, setIsOn] = useState(false);
    const [isOn1, setIsOn1] = useState(false);
    const [filter, setFilter] = useState(true);
    const handleFilter = () => {
        setFilter(!filter)
    }
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    const handleToggle1 = () => {
        setIsOn1(!isOn1);
    };
    return (
        <div>
            <div className="p-4  container mx-auto w-full h-[fit] md:flex  justify-between  md:mt-[50px]">
                {/* filter */}
                <p className="capitalize md:text-[30px] md:hidden block text-[25px]">shop</p>

                <div className=" w-0  md:w-[25%] flex-col md:flex hidden ">
                    <p className="capitalize md:text-[30px] md:block hidden text-[25px]">shop the latest</p>
                    <div >
                        <div className="relative pt-1">
                            <input type="text" className="outline-none border-b-2 border-gray-400 border-solid text-[16px] w-[95%] h-[40px] pl-1 " placeholder="Search..." />
                            <div className="absolute top-[9px] right-[20px]"><IoIosSearch /></div>
                        </div>
                        <select name="" id="" className="text-[16px] border-2 border-solid border-gray-400 rounded-sm mt-[30px]  w-[95%] h-[50px]">
                            <option >Shop By</option>
                            <option >1</option>
                        </select>
                        <select name="" id="" className="text-[16px] border-2 border-solid border-gray-400 rounded-sm mt-[30px]  w-[95%] h-[50px]">
                            <option >Sort By</option>
                            <option >1</option>
                        </select>
                        <div>
                            <input type="range"
                                min={0}
                                max={1000}
                                value={range}
                                onChange={e => setRange(e.target.value)}
                                className="mt-[30px] w-[95%]"
                            />
                            <p>$0 - ${range}</p>
                        </div>
                        <div className="flex items-center w-[95%]  justify-between mt-[30px]">
                            <span className="text-[18px]">On sale</span>
                            <div onClick={handleToggle} className={`w-10 h-5 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-green-500' : 'bg-gray-400'}`} >
                                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </div>
                        </div>

                        <div className="flex items-center w-[95%]  justify-between mt-[30px]">
                            <span className="text-[18px]">On stock</span>
                            <div onClick={handleToggle1} className={`w-10 h-5 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer transition-colors ${isOn1 ? 'bg-green-500' : 'bg-gray-400'}`}>
                                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isOn1 ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={handleFilter} className="flex justify-start space-x-2 items-center md:hidden  mt-[20px]">
                    {filter ? <LuListFilter /> : <MdOutlineCancel />}
                    <p> filter</p>
                </div>

                <div className={filter ? ' w-full  flex-col ' : 'hidden left-[-100%] '}>

                    <div className="relative pt-1">
                        <input type="text" className="outline-none border-b-2 border-gray-400 border-solid text-[16px] w-[95%] h-[40px] pl-1 " placeholder="Search..." />
                        <div className="absolute top-[9px] right-[20px]"><IoIosSearch /></div>
                    </div>
                    <select name="" id="" className="text-[16px] border-2 border-solid border-gray-400 rounded-sm mt-[30px]  w-[95%] h-[50px]">
                        <option >Shop By</option>
                        <option >1</option>
                    </select>
                    <select name="" id="" className="text-[16px] border-2 border-solid border-gray-400 rounded-sm mt-[30px]  w-[95%] h-[50px]">
                        <option >Sort By</option>
                        <option >1</option>
                    </select>
                    <div>
                        <input type="range"
                            min={0}
                            max={1000}
                            value={range}
                            onChange={e => setRange(e.target.value)}
                            className="mt-[30px] w-[95%]"
                        />
                        <p className="text-[20px]">$0 - ${range}</p>
                    </div>
                    <div className="flex items-center w-[95%]  justify-between mt-[30px]">
                        <span className="text-[18px]">On sale</span>
                        <div onClick={handleToggle} className={`w-10 h-5 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer transition-colors ${isOn ? 'bg-green-500' : 'bg-gray-400'}`} >
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </div>
                    </div>

                    <div className="flex items-center w-[95%]  justify-between mt-[30px]">
                        <span className="text-[18px]">On stock</span>
                        <div onClick={handleToggle1} className={`w-10 h-5 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer transition-colors ${isOn1 ? 'bg-green-500' : 'bg-gray-400'}`}>
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isOn1 ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </div>
                    </div>
                </div>

                {/*--------*/}

                {/* Product */}
                <div className="  text-[16px] md:text-[18px] md:w-[75%] w-[full] justify-items-center mx-auto md:grid-cols-3 grid-cols-2  grid mt-[50px]  gap-3 px-3">
                    <div className=" h-fit ">
                        <img src={DefaultImg} className="w-[100%] rounded-sm " alt="" />
                        <p className="">Example 1</p>
                        <p className="text-[#A18A68]">$20.00</p>
                    </div>
                    <div className=" h-fit">
                        <img src={DefaultImg} className="w-[100%] rounded-sm " alt="" />
                        <p className="">Example 2</p>
                        <p className="text-[#A18A68]">$25.00</p>
                    </div>
                    <div className=" h-fit">
                        <img src={DefaultImg} className="w-[100%] rounded-sm " alt="" />
                        <p className="">Example 3</p>
                        <p className="text-[#A18A68]">$30.00</p>
                    </div>
                    <div className=" h-fit">
                        <img src={DefaultImg} className="w-[100%] rounded-sm " alt="" />
                        <p className="">Example 4</p>
                        <p className="text-[#A18A68]">$19.00</p>
                    </div>
                    <div className=" h-fit">
                        <img src={DefaultImg} className="w-[100%] rounded-sm " alt="" />
                        <p className="">Example 5</p>
                        <p className="text-[#A18A68]">$29.00</p>
                    </div>
                    <div className=" h-fit">
                        <img src={DefaultImg} className="w-[100%] rounded-sm " alt="" />
                        <p className="">Example 6</p>
                        <p className="text-[#A18A68]">$45.00</p>
                    </div>
                </div>
                {/*---------*/}
            </div>
        </div>
    )
}

export default Shop