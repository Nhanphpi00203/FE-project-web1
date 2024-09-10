import logo from "../assets/navbar-footer-image/SHOPPE.png"
import { useState } from "react";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
const Navbar = () => {
    const [navbar, setnavbar] = useState(true)
    const handleNavbar = () => {
        setnavbar(!navbar)
    }
    return (
        <div>
            <nav className="p-4">
                <div className="flex justify-between items-center mx-auto container  h-[50px] border-b-[2px] border-solid border-[#D8D8D8]">
                    <div >
                        <img src={logo} alt="" />
                    </div>
                    <ul className="hidden md:flex space-x-7 text-[16px] items-center ">
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Our-Story">Our Story</Link></li>
                        <div className="text-[#707070]">|</div>
                        <IoIosSearch />
                        <IoCartOutline />
                        <CiUser />
                    </ul>
                    <div onClick={handleNavbar} className=" md:hidden  w-[100px] flex justify-between">
                        {!navbar ? <IoCartOutline /> : null}
                        {!navbar ? <MdOutlineCancel /> : <div className=" w-[100px] flex justify-end"><CiMenuBurger /></div>}

                    </div>
                </div>
                <div className="  mt-[10px] container w-[auto] mx-auto flex justify-center">
                    <div className="relative md:hidden flex">
                        <input type="text" name="" id="" className="bg-gray-200 outline-none rounded text-[15px] pl-[35px]  w-[300px] h-[40px]" placeholder="Search" />
                        <div className="absolute top-[12px]  left-[10px] "> <IoIosSearch size={20} /></div>
                    </div>
                </div>
                <ul className={!navbar ? ' pt-1  p-4 block  left-0 top-[130px]   w-[100%]    border-r-gray-900  ease-in-out duration-200' : 'hidden left-[-100%] '}>

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
        </div>
    )
}

export default Navbar