/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { SiZalo } from "react-icons/si";
const Footer = () => {
    return (
        <div>
            <footer className=" p-4 md:block hidden">
                <div className=' container mx-auto py-4 flex justify-between  border-t-2 border-[#D8D8D8] border-solid'>
                    <ul className='flex justify-center space-x-6 mt-2 text-[12px] md:text-[16px] text-[#707070]'>
                        <li><Link to="Contact">CONTACTS</Link></li>
                        <li><Link to="Terms-of-services" >TERMS OF SERVICES</Link></li>
                        <li><Link to="Shipping-and-returns">SHIPPING AND RETURNS</Link></li>
                    </ul>
                    <div className='border-solid border-b-2 border-[#707070] md:h-[50px] h-[20px] flex justify-between w-[400px] '>
                        <p className='text-[12px] md:text-[16px] text-[#707070]'>Give an email, get the newsletter.</p>
                        <div className='text-gray-400'>
                            <FaArrowRightLong />
                        </div>
                    </div>

                </div>
                <div className='container flex justify-between mx-auto'>
                    <p className="text-center text-[12px] md:text-[16px]">&copy; Shelly. <a href="" className='text-[#D8D8D8]'> Terms of use</a> and <a href="" className='text-[#D8D8D8]'> privacy policy.</a></p>
                    <div className='flex space-x-4'>
                        <SiZalo />
                        <PiInstagramLogoLight />
                        <CiFacebook />
                        <RxTwitterLogo />

                    </div>
                </div>
            </footer>
            <footer className=" p-4 md:hidden flex-col">
                <div className='border-solid border-b-2 border-[#707070]  h-[30px] flex justify-between w-[full] '>
                    <p className='text-[14px]  text-[#707070]'>Give an email, get the newsletter.</p>
                    <div className='text-gray-400'>
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className='flex space-x-1 pt-2'>
                    <input type="checkbox" name="" id="" />
                    <p className='text-[14px]'>i agree to the website's terms and conditions</p>
                </div>
                <div className=' container mx-auto py-4  justify-between flex-col'>
                    <ul className='flex-col justify-center mt-2 text-[14px] space-y-2  text-[#707070]'>
                        <li><Link to="Contact">CONTACTS</Link></li>
                        <li><Link to="Terms-of-services" >TERMS OF SERVICES</Link></li>
                        <li><Link to="Shipping-and-returns">SHIPPING AND RETURNS</Link></li>
                    </ul>
                </div>
                <div className='flex items-center space-x-2 text-[14px]'>
                    <p>Follow us _______ </p>
                    <SiZalo size={25} />
                    <PiInstagramLogoLight size={25} />
                    <CiFacebook size={25} />
                    <RxTwitterLogo size={25} />
                </div>
                <div className='container flex justify-between mx-auto pt-4'>
                    <p className="text-center text-[12px] md:text-[16px]">&copy; 2020 Shelly. <a href="" className='text-gray-600'> Terms of use</a> and <a href="" className='text-gray-600'> privacy policy.</a></p>
                </div>

            </footer>
        </div>
    )
}

export default Footer