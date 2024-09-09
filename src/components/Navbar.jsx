import logo from "../assets/navbar-footer-image/SHOPPE.png"
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
const Navbar = () => {
    return (
        <div>
            <nav className="p-4">
                <div className="flex justify-between items-center mx-auto container h-[100px] border-b-[2px] border-solid border-[#D8D8D8]">
                    <div >
                        <img src={logo} alt="" />
                    </div>
                    <ul className="flex space-x-7 items-center">
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Our-Story">Our Story</Link></li>
                        <div className="text-[#707070]">|</div>
                        <IoIosSearch />
                        <IoCartOutline />
                        <CiUser />
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar