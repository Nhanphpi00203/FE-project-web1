import logo from "../assets/navbar-footer-image/SHOPPE.png"
import { useState } from "react";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import img from "../assets/navbar-footer-image/Image_none.png"
const Navbar = () => {
    const [navbar, setnavbar] = useState(true)
    const [ShoppingBag, setShoppingBag] = useState(false)
    const [number, setNumber] = useState(0)
    return (
        <div>
            <nav className="p-4">
                <div className="flex justify-between items-center mx-auto container  h-[50px] border-b-[2px] border-solid border-[#D8D8D8]">
                    <div >
                        <img src={logo} alt="" />
                    </div>
                    <ul className="hidden  md:flex space-x-7 text-[16px] items-center cursor-pointer">
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Our-Story">Our Story</Link></li>
                        <div className="text-[#707070]">|</div>
                        <IoIosSearch />
                        <IoCartOutline onClick={() => setShoppingBag(!ShoppingBag)} />
                        <CiUser />
                    </ul>

                    <div onClick={handleNavbar} className=" md:hidden  w-[100px] flex justify-between">
                        {!navbar ? <IoCartOutline /> : null}
                        {!navbar ? <MdOutlineCancel /> : <div className=" w-[100px] flex justify-end"><CiMenuBurger /></div>}
                    </div>
                </div>
                <div className="relative md:hidden mt-[10px] container w-[full]  mx-auto flex justify-center">
                        <input type="text" name="" id="" className="bg-gray-200 outline-none rounded text-[15px] pl-[35px]  w-full h-[40px]" placeholder="Search" />
                        <div className="absolute top-[10px]  left-[10px] "> <IoIosSearch size={20} /></div>

                </div>
                <ul className={!navbar ? ' pt-1  p-4 block  left-0 top-[130px]   w-[100%] text-[16px]   border-r-gray-900  ease-in-out duration-200' : 'hidden left-[-100%] '}>
                    <li className=" p-2 mt-[40px]"><Link to="/Shop">Home</Link></li>
                    <li className=" p-2"><Link to="/Blog">Shop</Link></li>
                    <li className=" p-2"><Link to="/Blog">About</Link></li>
                    <li className=" p-2"><Link to="/Blog">Blog</Link></li>
                    <li className=" p-2"><Link to="/Blog">Help</Link></li>
                    <li className=" p-2 "><Link to="/Blog">Contact</Link></li>
                    <div className="flex items-center space-x-2 pt-4 border-t-2 border-solid border-[#D8D8D8]">
                        <CiUser size={30} />
                        <p>My account</p>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <IoIosLogOut size={30} />
                        <p>Logout</p>
                    </div>

                </ul>
            </nav>
            <div>
                <div className={!ShoppingBag ? ' fixed pt-[25px] bg-[white] z-10  block   right-0 top-0 h-full md:w-[22%]   lg:w-[25%] text-[16px]    border-l-[2px] border-solid border-gray-300  ease-in-out duration-[350ms]' : 'fixed ease-in-out duration-[350ms] right-[-100%]  top-0 h-full  w-[30%]'}>
                    <div className="p-6 h-[80%] w-fit  overflow-y-auto scrollbar-hide ">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setShoppingBag(!ShoppingBag)}>
                            <p className="capitalize"> Shopping Bag</p>
                            <MdOutlineCancel size={20} />
                        </div>
                        <p className="text-gray-500 text-[12px] pt-4">5 items</p>
                        <div className="space-y-4 w-[70%] lg:w-[95%]">
                            <div className=" flex space-x-2 mt-4  ">
                                <img src={img} alt="" className="object-scale-down w-[50%] rounded" />
                                <div className="text-[14px]  w-full">
                                    <div className="flex justify-between items-center">
                                        <p>Lira Earrings</p>
                                       <div className="cursor-pointer"> <MdOutlineCancel size={16} /></div>
                                    </div>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">Black / Medium</p>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">$ 20,00</p>
                                    <div className="flex justify-start  items-center lg:pt-10 space-x-2 text-gray-500  text-[10px] lg:text-[14px]">
                                        <p>QTY:</p>
                                        <div className=" w-[80px]   items-center  flex space-x-2 rounded-sm ">
                                            <p className=" text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                            <p className=" text-[14px] lg:text-[16px] ">{
                                                number < 0 ? setNumber(0) : number
                                            }
                                            </p>
                                            <p className="text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 w-[70%] lg:w-[95%]">
                            <div className=" flex space-x-2 mt-4  ">
                                <img src={img} alt="" className="object-scale-down w-[50%] rounded" />
                                <div className="text-[14px]  w-full">
                                    <div className="flex justify-between items-center">
                                        <p>Lira Earrings</p>
                                        <div className="cursor-pointer"> <MdOutlineCancel size={16} /></div>
                                    </div>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">Black / Medium</p>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">$ 20,00</p>
                                    <div className="flex justify-start  items-center lg:pt-10 space-x-2 text-gray-500  text-[10px] lg:text-[14px]">
                                        <p>QTY:</p>
                                        <div className=" w-[80px]   items-center  flex space-x-2 rounded-sm ">
                                            <p className=" text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                            <p className=" text-[14px] lg:text-[16px] ">{
                                                number < 0 ? setNumber(0) : number
                                            }
                                            </p>
                                            <p className="text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 w-[70%] lg:w-[95%]">
                            <div className=" flex space-x-2 mt-4  ">
                                <img src={img} alt="" className="object-scale-down w-[50%] rounded" />
                                <div className="text-[14px]  w-full">
                                    <div className="flex justify-between items-center">
                                        <p>Lira Earrings</p>
                                        <div className="cursor-pointer"> <MdOutlineCancel size={16} /></div>
                                    </div>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">Black / Medium</p>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">$ 20,00</p>
                                    <div className="flex justify-start  items-center lg:pt-10 space-x-2 text-gray-500  text-[10px] lg:text-[14px]">
                                        <p>QTY:</p>
                                        <div className=" w-[80px]   items-center  flex space-x-2 rounded-sm ">
                                            <p className=" text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                            <p className=" text-[14px] lg:text-[16px] ">{
                                                number < 0 ? setNumber(0) : number
                                            }
                                            </p>
                                            <p className="text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 w-[70%] lg:w-[95%]">
                            <div className=" flex space-x-2 mt-4  ">
                                <img src={img} alt="" className="object-scale-down w-[50%] rounded" />
                                <div className="text-[14px]  w-full">
                                    <div className="flex justify-between items-center">
                                        <p>Lira Earrings</p>
                                        <div className="cursor-pointer"> <MdOutlineCancel size={16} /></div>
                                    </div>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">Black / Medium</p>
                                    <p className="text-gray-500 text-[10px] lg:text-[14px]">$ 20,00</p>
                                    <div className="flex justify-start  items-center     space-x-2 text-gray-500  text-[10px] lg:text-[14px]">
                                        <p>QTY:</p>
                                        <div className=" w-[80px]   items-center  flex space-x-2 rounded-sm ">
                                            <p className=" text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                            <p className=" text-[14px] lg:text-[16px] ">{
                                                number < 0 ? setNumber(0) : number
                                            }
                                            </p>
                                            <p className="text-[14px] lg:text-[16px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-300 p-4 border-solid z-20 bg-white  fixed bottom-0 space-y-4 w-[22%] lg:w-[25%]">
                        <div className="flex justify-between w-full text-[12px] lg:text-[14px]">
                            <p>Subtotal (5 items)</p>
                            <p>$ 100.00</p>
                        </div>
                        <button className="mt-4 border-2 border-solid w-[100%] rounded h-[40px] text-[12px] lg:text-[16px] cursor-pointer">VIEW CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
