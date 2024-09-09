import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className=" p-4 ">
                <div className=' container mx-auto py-4 flex justify-between  border-t-2 border-[#D8D8D8] border-solid'>
                    <ul className='flex justify-center space-x-6 mt-2 text-[18px] text-[#707070]'>
                        <li><Link to="Contact">CONTACTS</Link></li>
                        <li><Link to="Terms-of-services">TERMS OF SERVICES</Link></li>
                        <li><Link to="Shipping-and-returns">SHIPPING AND RETURNS</Link></li>
                    </ul>
                    <div className='border-solid border-b-2 border-[#707070] flex justify-between w-[400px]'>
                        <p className='text-[16px] text-[#707070]'>Give an email, get the newsletter.</p>
                        <div className='text-gray-400'>
                            <FaArrowRightLong />
                        </div>
                    </div>

                </div>
                <div className='container flex justify-start mx-auto'>
                    <p className="text-center text-[15px]">&copy; Shelly. <a href="" className='text-[#D8D8D8]'> Terms of use</a> and <a href="" className='text-[#D8D8D8]'> privacy policy.</a></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer