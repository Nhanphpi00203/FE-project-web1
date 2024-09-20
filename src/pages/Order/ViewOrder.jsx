
const ViewOrder = () => {
    return (
        <div className="container mx-auto  p-4  flex">
            <div className="container w-[24%] mx-auto  flex-col">
                <p className="uppercase md:text-[24px] text-[16px] sm:text-[16px]">
                    order details
                </p>
                <div className=" py-4 space-y-2 ">
                    <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px] ">ORDER NUMBER</p>
                    <p className="text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">1879605573994</p>
                </div>
                <div className=" py-4 space-y-2">
                    <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px] ">EMAIL</p>
                    <p className="text-gray-500  lg:text-[16px] text-[12px] md:block hidden">Vitathemes@gmail.com</p>
                    <p className="text-gray-500  lg:text-[16px] text-[12px] md:hidden block">Vitathemes @gmail.com</p>
                </div>
                <div className=" py-4 space-y-2  ">
                    <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px] ">PAYMENT METHOD</p>
                    <h3 className="text-gray-500 lg:text-[16px] text-[12px] lg:block hidden">Mastercard*************7865</h3>
                    <h3 className="text-gray-500 lg:text-[16px] text-[12px] lg:hidden block">Mastercard
                        ******* ******7865</h3>
                </div>
                <div className=" py-4 space-y-2">
                    <p className="lg:text-[20px] md:text-[18px]sm:text-[14px] text-[14px] ">ORDER DATE</p>
                    <p className="text-gray-500   lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">October 8,2020</p>
                </div>

            </div>
            <div className="container w-[24%] mx-auto  flex-col">
                <div className=" py-4 space-y-2 pt-[52px]">
                    <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px] ">DELIVERY OPTIONS</p>
                    <p className="text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">Standard delivery</p>
                </div>
                <div className=" py-4 space-y-2">
                    <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px] ">DELIVERY ADDRESS</p>
                    <p className="text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">Kristian holst 34 old street W1F 7NU london United Kingdom</p>
                </div>
                <div className=" py-4 space-y-2">
                    <p className="lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px] ">CONTACT NUMBER</p>
                    <p className="text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">+44 8749790988</p>
                </div>
            </div>
            <div className="container w-[48%]">
                <p className="uppercase md:text-[24px] sm:text-[14px] text-[14px] pb-4 ">ORDER Summary</p>
                <div className="container mx-auto  flex-col  bg-[#EFEFEF] p-5">
                    <div className="flex   justify-between border-b-2 border-solid border-gray-500 py-4 lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px]"><p>PRODUCT</p><p>TOTAL</p></div>
                    <div className="flex   justify-between py-4 text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] "><p>Lira Earrings </p><p>$64</p></div>
                    <div className="flex  justify-between py-4 text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]"><p>Ollie Earrings </p><p>$10</p></div>
                    <div className="flex   justify-between py-4 text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]"><p>Kaede Hair Pin </p><p>$10</p></div>
                    <div className="flex   justify-between py-4  border-t-2 border-solid border-gray-500  lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px]"><p>SUBTOTAL </p><p className="text-gray-500  lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">$85</p></div>
                    <div className="flex  justify-between py-4  border-t-2 border-solid border-gray-500  lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px]"><p>SHIPPING </p><p className="text-gray-500 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">Free ship</p></div>
                    <div className="flex   justify-between py-4  border-t-2 border-solid border-gray-500  lg:text-[20px] md:text-[18px] sm:text-[14px] text-[14px]"><p>TOTAL </p><p className="font-bold lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">$85</p></div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder