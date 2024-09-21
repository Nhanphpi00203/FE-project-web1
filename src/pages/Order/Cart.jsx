import Img from "../../assets/navbar-footer-image/Image_none.png"
import { MdOutlineCancel } from "react-icons/md";

import { useState } from "react"
const Cart = () => {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <div className=" mx-auto container pb-[100px] md:pb-[200px] lg:text-[14px] md:text-[12px] md:px-0 px-4">
                <p className="md:text-[28] text-[24px]  md:text-center">Shopping  Cart</p>
                <div className="md:flex block md:p-4 md:space-x-4 justify-between">
                    {/* prod */}
                    <div className="  md:w-[47%] flex-col">
                        <div className="flex justify-between w-[100%]  border-b-2 border-gray-300 border-solid py-6">
                            <div className="flex md:w-[50%]  justify-start ">
                                <img src={Img} className="w-[50%] p-2 rounded-xl object-scale-down" alt="" />
                                <div className="flex-col items-center p-2">
                                    <p>Lira Earrings</p>
                                    <p className="text-gray-500">Black / Medium</p>
                                    <p className="text-gray-500">$ 20,00</p>
                                    <div className="md:hidden   mt-[20px] w-[80px]   items-center  flex justify-evenly rounded-sm bg-gray-200">
                                        <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                        <p className="text-[20px] ">{
                                            number < 0 ? setNumber(0) : number
                                        }
                                        </p>
                                        <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                    </div>
                                </div>

                            </div>
                            <div className=" w-[47%] flex justify-evenly mt-[10px] md:pt-[15px]">
                                <div className="md:flex  md:w-[70px] lg:w-[90px] md:h-[30px] lg:h-[40px] lg:mt-[0px] mt-[20px]     items-center  hidden justify-evenly rounded-sm bg-gray-200">
                                    <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                    <p className="text-[20px] ">{
                                        number < 0 ? setNumber(0) : number
                                    }
                                    </p>
                                    <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                </div>
                                <MdOutlineCancel size={20} />
                            </div>
                        </div>

                        <div className="flex justify-between w-[100%]  border-b-2 border-gray-300 border-solid py-6">
                            <div className="flex md:w-[50%]  justify-start ">
                                <img src={Img} className="w-[50%] p-2 rounded-xl object-scale-down" alt="" />
                                <div className="flex-col items-center p-2">
                                    <p>Lira Earrings</p>
                                    <p className="text-gray-500">Black / Medium</p>
                                    <p className="text-gray-500">$ 20,00</p>
                                    <div className="md:hidden   mt-[20px] w-[80px]   items-center  flex justify-evenly rounded-sm bg-gray-200">
                                        <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                        <p className="text-[20px] ">{
                                            number < 0 ? setNumber(0) : number
                                        }
                                        </p>
                                        <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                    </div>
                                </div>

                            </div>
                            <div className=" w-[47%] flex justify-evenly mt-[10px] md:pt-[15px]">
                                <div className="md:flex  md:w-[70px] lg:w-[90px] md:h-[30px] lg:h-[40px] lg:mt-[0px] mt-[20px]     items-center  hidden justify-evenly rounded-sm bg-gray-200">
                                    <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                    <p className="text-[20px] ">{
                                        number < 0 ? setNumber(0) : number
                                    }
                                    </p>
                                    <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                </div>
                                <MdOutlineCancel size={20} />
                            </div>
                        </div>
                        <div className="flex justify-between w-[100%]  border-b-2 border-gray-300 border-solid py-6">
                            <div className="flex md:w-[50%]  justify-start ">
                                <img src={Img} className="w-[50%] p-2 rounded-xl object-scale-down" alt="" />
                                <div className="flex-col items-center p-2">
                                    <p>Lira Earrings</p>
                                    <p className="text-gray-500">Black / Medium</p>
                                    <p className="text-gray-500">$ 20,00</p>
                                    <div className="md:hidden   mt-[20px] w-[80px]   items-center  flex justify-evenly rounded-sm bg-gray-200">
                                        <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                        <p className="text-[20px] ">{
                                            number < 0 ? setNumber(0) : number
                                        }
                                        </p>
                                        <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                    </div>
                                </div>

                            </div>
                            <div className=" w-[47%] flex justify-evenly mt-[10px] md:pt-[15px]">
                                <div className="md:flex  md:w-[70px] lg:w-[90px] md:h-[30px] lg:h-[40px] lg:mt-[0px] mt-[20px]     items-center  hidden justify-evenly rounded-sm bg-gray-200">
                                    <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                                    <p className="text-[20px] ">{
                                        number < 0 ? setNumber(0) : number
                                    }
                                    </p>
                                    <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
                                </div>
                                <MdOutlineCancel size={20} />
                            </div>
                        </div>
                        <div className=" flex justify-end mt-[30px]">
                            <button className="border-solid border-2 border-gray-500 md:w-[30%] w-[100%]  rounded-sm h-[40px]">UPDATE CART</button>
                        </div>
                        <div className="md:flex   justify-between mt-[50px] ">
                            <input type="text" className="outline-none border-solid border-b-2 border-gray-400 text-[16px] h-[50px] w-[100%] md:w-[65%]" placeholder="Coupon Code" />
                            <button className="border-solid border-2 border-gray-500 md:w-[30%] w-[100%] mt-[20px] md:mt-[0px] rounded-sm h-[40px] text-white bg-black">APPLY COUPON</button>
                            
                        </div>
                    </div>

                    <div className="flex-col justify-between md:w-[47%] rounded-lg px-4 md:bg-transparent bg-gray-200 md:mt-0 mt-[40px]">
                        <p className="md:text-[24px] text-[20px] py-4 pt-[50px]">Cart totals</p>
                        <div className="flex  justify-between py-4">
                            <p className=" w-[35%]">SUBTOTAL</p>
                            <p className=" w-[65%] text-gray-500">$ 65,00</p>
                        </div>
                        <div className="flex  justify-between py-4">
                            <p className=" w-[35%]">SHIPPING
                            </p>
                            <p className=" w-[65%] text-gray-500">Shipping costs will be calculated once you have provided address.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 space-y-4 justify-items-end  justify-end py-4 ">

                            <div className=" w-[65%]">
                                <p>CALCULATE SHIPPING</p>

                            </div>
                            <div className=" w-[65%] ">
                                <input type="text" className="lg:text-[14px] md:bg-transparent bg-gray-200 md:text-[12px] outline-none border-solid border-b-2 border-gray-400 w-full  pb-[15px] pl-1 
                                " placeholder="SELECT A COUNTRY" />
                            </div>
                            <div className=" w-[65%] ">
                                <input type="text" className="lg:text-[14px] md:bg-transparent bg-gray-200  md:text-[12px] outline-none border-solid border-b-2 border-gray-400 w-full pb-[15px] pl-1 
                                " placeholder=" CITY" />
                            </div>
                            <div className=" w-[65%] ">
                                <input type="text" className=" lg:text-[14px] md:bg-transparent bg-gray-200  md:text-[12px]outline-none border-solid border-b-2 border-gray-400 w-full  pb-[15px] pl-1 
                                " placeholder="POST CODE / ZIP" />
                            </div>
                            <div className="w-full justify-end flex py-4">
                                <button className="border-solid border-2 border-gray-500 md:bg-transparent bg-white  w-[65%] rounded-sm h-[40px]">UPDATE TOTALS</button>
                            </div>
                            <div className="flex justify-between w-full py-4 border-t-2 border-gray-300 border-solid">
                                <p>TOTAL</p>
                                <p>$ 87.00</p>
                            </div>

                            <button className="border-solid border-2 border-gray-500 w-[100%] bg-black text-white rounded-sm h-[40px]">PROCEED TO CHECKOUT</button>

                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart