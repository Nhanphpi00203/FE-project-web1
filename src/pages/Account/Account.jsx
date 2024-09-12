import { useRef } from "react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const Account = () => {
  const scrollContainerRef = useRef(null);

  // Hàm để cuộn danh sách sang bên trái
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -150, // Độ dài cuộn mỗi lần nhấn
        behavior: "smooth",
      });
    }
  };

  // Hàm để cuộn danh sách sang bên phải
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 150, // Độ dài cuộn mỗi lần nhấn
        behavior: "smooth",
      });
    }
  };
  const [tab, setTab] = useState(1);
  const [addBD, setaddBD] = useState(false)
  const [addSD, setaddSD] = useState(false)
  return (
    <div>
      <div className="container  mx-auto  h-fit md:pb-[200px]">
        {/* slide text */}
        {tab === 1 ? <div className="capitalize md:text-[24px] text-[20px] text-center  ">
          my account
        </div>
          : <div> </div>

        }

        {/* Khu vực chứa danh sách mục và mũi tên */}
        <div className=" flex items-center py-[40px]  md:h-fit h-[10px] p-5">
          {/* Mũi tên trái */}
          <button
            className="text-black px-2 py-1 rounded md:hidden block"
            onClick={scrollLeft}
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Danh sách mục, có thể cuộn ngang */}
          <div
            ref={scrollContainerRef

            }
            className="flex space-x-2 md:text-[24px] w-full text-[16px] overflow-x-auto whitespace-nowrap scrollbar-hide border-solid border-b-2 border-gray-400 pb-[20px] md:pb-[50px]"
          >
            <p className="px-4 cursor-pointer" onClick={() => setTab(1)}>Dashboard</p>
            <p className="px-4 cursor-pointer" onClick={() => setTab(2)}>Orders</p>
            <p className="px-4 cursor-pointer" onClick={() => setTab(3)}>Addresses</p>
            <p className="px-4 cursor-pointer" onClick={() => setTab(4)}>Account details</p>
            <p className="px-4 cursor-pointer" onClick={() => setTab(5)}>Logout</p>
          </div>

          {/* Mũi tên phải */}
          <button
            className=" text-black px-2 py-1 rounded md:hidden block"
            onClick={scrollRight}
          >
            <FaChevronRight size={16} />
          </button>
        </div>
        {/*  */}

        {/* 1 */}
        {tab === 1 ?
          <div>

            <div className="pt-[30px]  md:py-[40px] md:text-[24px] text-[16px]  space-y-2 md:space-y-4 p-4 text-justify">
              <p>Hello Vitatheme (not Vitatheme? Log out)</p>
              <p>
                From your account dashboard you can view your recent orders, manage
                your shipping and billing addresses, and edit your password and
                account details.
              </p>
            </div>
          </div> :
          <div className="hidden"> </div>
        }
        {/*  */}

        {/* 2 */}
        {tab === 2 ? <div>
          <div className="p-4 w-full md:pb-[200px] hidden">
            <div className="bg-[#D8D8D8] border-t-2 border-[#A18A68] border-solid h-[60px] space-y-1  md:pt-[17px] pt-[1px] flex-col pl-[14px]  md:pl-[40px] ">
              <p className=" text-[16px]">No order has been made yet.</p>
              <p className="text-[16px] md:hidden block capitalize text-[#A18A68] cursor-pointer">browse product</p>
            </div>
          </div>
          <div className="md:pb-[200px]">
            {/* khi co san pham */}
            {/* laptop */}
            <table className=" mx-auto  md:w-[96%]  w-[20%] md:table hidden">
              <thead>
                <tr className="   ">
                  <th className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-2 border-solid border-b-2 border-gray-500">ORDER NUMBER</th>
                  <th className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-2 border-solid border-b-2 border-gray-500">DATE</th>
                  <th className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-2 border-solid border-b-2 border-gray-500">STATUS</th>
                  <th className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-2 border-solid border-b-2 border-gray-500">TOTAL</th>
                  <th className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-2 border-solid border-b-2 border-gray-500">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">7643980998990</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">October 8,2021</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">Delivered</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">$ 105</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-[#A18A68]">View Order</td>
                </tr>
                <tr>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">7643980998990</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">October 8,2021</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">Delivered</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-gray-500">$ 105</td>
                  <td className="text-[14px] md:text-[20px] font-normal text-start md:w-[20%] px-4 py-4 border-b-[1px] border-solid border-gray-400 text-[#A18A68]">View Order</td>
                </tr>
              </tbody>
            </table>
            {/*  */}

            {/* moblie */}
            <div className="md:hidden flex-col border-solid border-b-2 border-gray-500  w-[90%] mx-auto pb-[60px]">
              <div className="text-[14px] flex justify-between py-3 font-semibold">
                <p>ORDER NUMBER</p>
                <p className="font-normal text-gray-500">
                  7643980998990
                </p>
              </div>
              <div className="text-[14px] flex justify-between py-3 font-semibold ">
                <p>DATE</p>
                <p className="font-normal text-gray-500">
                  October 8,2021
                </p>
              </div>
              <div className="text-[14px] flex justify-between py-3 font-semibold">
                <p>STATUS</p>
                <p className="font-normal text-gray-500">
                  Delivered
                </p>
              </div>
              <div className="text-[14px] flex justify-between py-3 font-semibold">
                <p>TOTAL</p>
                <p className="font-normal text-gray-500">
                  $ 105
                </p>
              </div>
              <div className="text-[14px] flex justify-between py-3 font-semibold">
                <p>ACTIONS</p>
                <p className="font-normal text-[#A18A68]">
                  View Order
                </p>
              </div>

            </div>


          </div>

        </div>

          : <div className="hidden"> </div>


        }
        {/*  */}

        {/* 3 */}
        {tab === 3 ? <div className=" container p-4 pb-[100px] md:pb-[200px] md:flex justify-between">
          {/*  */}
          {addBD ?
            <div className="md:flex block w-full justify-between container mx-auto">
              <div className="p-4 md:hidden">
                The following addresses will be used on the checkout page by default.
              </div>
              <div className="md:w-[95%] p-4 md:p-0 h-fit  space-y-2 mt-[40px">
                <div>
                  <p className="text-[20px] pb-[15px] md:pb-[25px] ">Billing Address</p>
                </div>
                <div className="  ">
                  <div className="flex justify-between">

                    <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-[47%] pb-[15px] text-[16px] pl-1 mt-[30px]" placeholder="First name *" />

                    <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-[47%] pb-[15px] text-[16px] pl-1 mt-[30px]" placeholder="last name *" />
                  </div>
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Company Name " />
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Country *" />
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Street Address * " />
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Postcode / ZIP *" />
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Phone *" />
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Email *" />
                </div>

                {
                  addSD ? <div> <div className="pt-6 md:block hidden">
                    <button className="text-[16px] w-full md:w-[250px] h-[50px] text-white bg-black rounded-sm mt-[40px]">SAVE ADDRESS</button>
                  </div> </div>
                    : <div> <div className="pt-6  md:hidden">
                      <button className="text-[16px] w-full md:w-[250px] h-[50px] text-white bg-black rounded-sm mt-[40px]">SAVE ADDRESS</button>
                    </div> </div>
                }
              </div>
            </div>
            :
            <div className="p-4 mx-auto container w-full  justify-between  flex ">
              <div className="text-[14px] md:text-[16px] md:w-[47%] ">
                <p className="pb-[25px] md:pb-[70px]">The following addresses will be used on the checkout page by default.</p>
                <p className="text-[20px] pb-[15px] md:pb-[25px] ">Billing address</p>
                <button className="pb-[15px] md:pb-[25px] text-[#A18A68] md:text-[24px] text-[20px]" onClick={() => setaddBD(!addBD)}>ADD</button>
                <p className="text-[14px] text-gray-500">You have not set up this type of address yet.</p>
              </div>
            </div>}
          {/*  */}
          {/* add sd */}
          {addSD ?
            <div className="md:flex block w-full justify-between container mx-auto">
              <div className="text-[14px] md:text-[16px] md:p-0 p-4 md:w-[95%]  ">
                <p className="text-[20px] pb-[15px] md:pb-[22px] ">Shipping address</p>
                <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Name " />
                <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Street Address *" />
                <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Country *" />
                <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Postcode / ZIP *" />
                <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Phone *" />
                <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Email *" />
              </div>
              {
                addSD ?
                  <div className="md:hidden block">
                    <div className="pt-6">
                      <button className="text-[16px] w-full md:w-[250px] h-[50px] text-white bg-black rounded-sm mt-[40px]">SAVE ADDRESS</button>
                    </div>
                  </div> : <div> </div>
              }
            </div>
            :
            <div className="px-4 mx-auto container w-full  justify-between  flex">
              <div className="text-[14px] md:text-[16px] md:w-[47%] ">
                <p className={`text-[20px] ${addBD ? 'pb-0' : ` pb-[15px] md:pb-[140px]`} `}></p>
                <p className="text-[20px] pt-[50px] md:pt-0 pb-[15px] md:pb-[25px]">Shipping address</p>
                <button className="pb-[15px] md:pb-[25px] text-[#A18A68] md:text-[24px] text-[20px]" onClick={() => setaddSD(!addSD)}>ADD</button>
                <p className="text-[14px] text-gray-500">You have not set up this type of address yet.</p>
              </div>
            </div>
          }

        </div> :
          <div> </div>
        }
        {/*  */}

        {/* 4 */}
        {tab === 4 ? <div >
          <div className="mx-auto container pb-[100px] md:pb-[200px]">
            <div className="capitalize md:text-[30px] text-[20px] text-center  ">
              Account details
            </div>
            <div className="md:w-[40%] md:p-0 p-4 mx-auto">
              <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="First name* " />
              <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Last name*" />
              <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Display name*" />
              <p className="md:text-[14px] text-[10px] text-gray-500 ">This will be how your name will be displayed in the account section and in reviews.</p>
              <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Email address*" />
              <p className="pt-[40px] md:text-[24px] text-[20px]">Password change</p>
              <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px] " placeholder="Current password (leave blank to leave unchanged)" />
              <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="New password (leave blank to leave unchanged)" />
              <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pb-[15px] pl-1 mt-[40px]" placeholder="Confirm new password" />
              <div className="pt-3   w-full">
                <button className="text-[16px] w-[100%] h-[50px] text-white bg-black rounded-sm mt-[40px]">SAVE ADDRESS</button>
              </div>
            </div>
          </div>

        </div> : <div className="hidden"> </div>


        }
        {/*  */}

        {/* 5 */}
        {tab === 5 ? <div> </div> : <div className="hidden"> </div>


        }
        {/*  */}



      </div>
    </div >
  );
};

export default Account;
