/* eslint-disable react/jsx-key */
import { useState } from "react"
import { FaStar } from "react-icons/fa"
import { IoHeartOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import DefaultImg from "../../assets/navbar-footer-image/Image_none.png"
const Product = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [number, setNumber] = useState(0);
  const [tab, setTab] = useState(0);
  const [isExpanded, setisExpanded] = useState(true)
  const [tabMoblieD, setTabmobileD] = useState(false)
  const [tabMoblieA, setTabmobileA] = useState(false)
  const [tabMoblieR, setTabmobileR] = useState(false)
  const [images] = useState({
    img1: "https://thuvienmeme.com/wp-content/uploads/2024/05/meo-chi-tay-cuoi-ha-ha-vao-mat-ban.jpg",
    img2: "https://thuvienmeme.com/wp-content/uploads/2023/08/meo-con-chu-mo-noi-xin-chao.jpg",
    img3: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a1527598-cee3-49f7-ad27-b7ad6211ba9d/width=450/2481699.jpeg",
    img4: "https://image.lag.vn/upload/news/23/11/28/meme-josh-hutcherson-la-gi-2_EJFZ.jpg"
  })


  const [activeImage, setactiveImage] = useState(images.img1)
  return (
    <div>
      <div className="container  mx-auto h-[fit] w-full md:mt-[50px]">

        {/* product */}
        <div className="mx-auto   w-[100%] h-[fit] md:flex justify-evenly items-center p-4 md:space-x-2">

          {/* image */}
          <div className="mx-auto w-[full]  md:w-[60%] h-full flex md:pace-x-2 md:p-2">
            <div className="md:w-[30%] w-full h-full  flex-col p-2 space-y-2 md:block hidden ">
              <img src={images.img1} className="w-[90%] h-[20%] lg:h-[130px] rounded" alt="" onClick={() => setactiveImage(images.img1)} />
              <img src={images.img2} className="w-[90%] h-[20%] lg:h-[130px] rounded" alt="" onClick={() => setactiveImage(images.img2)} />
              <img src={images.img3} className="w-[90%] h-[20%] lg:h-[130px] rounded" alt="" onClick={() => setactiveImage(images.img3)} />
              <img src={images.img4} className="w-[90%] h-[20%] lg:h-[130px] rounded" alt="" onClick={() => setactiveImage(images.img4)} />
            </div >
            <div className="w-[100%] h-full">
              <img src={activeImage} className="lg:w-[100%]   mr-[0px] lg:h-[100%] rounded " alt="" />
            </div >

          </div>
          {/*  */}

          {/* infomation  */}
          <div className="  md:w-[40%] h-full  justify-start  space-y-2 md:p-2 ">
            <h3 className="capitalize  md:text-[28px] text-[24px]">lire earrings</h3>
            <div className="flex justify-between">
              <p className="text-[#A18A68] md:text-[24px] text-[20px] ">$20.00</p>
              <FaShareAlt size={20} />
            </div>
            <button className="uppercase w-[90%] md:hidden  flex justify-center items-center h-[40px] border-solid border-2 rounded-sm text-[18px] hover:text-white hover:bg-black"> add to cart</button>
            <div className="flex space-x-1 items-center pt-[20px] ">
              {[...Array(5)].map((star, index) => {
                const curretrating = index + 1;
                return (
                  <label key={star}>
                    <input className=" hidden " type="radio" name="rating" value={curretrating} onClick={() => setRating(curretrating)} />
                    <FaStar className="cursor-pointer" color={curretrating <= (hover || rating) ? '#ffc107' : '#000000'} onMouseEnter={() => setHover(curretrating)} onMouseLeave={() => setHover(null)} size={20} />
                  </label>
                )
              })}
              <h5 className="pl-2 text-[16px]">
                1 customer review
              </h5>
            </div>
            {
              isExpanded ? <h6 className="text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat ...
              </h6> :
                <h6 className="text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                </h6>
            }
            <p onClick={() => setisExpanded(!isExpanded)} className="md:hidden block text-[16px] cursor-pointer text-[#A18A68]">
              {isExpanded ? " View more >" : "View less <"}
            </p>
            {/* description mobile*/}
            <div className="w-[full] h-[fit]  md:hidden block border-solid border-y-[1px]  border-gray-400 ">
              <div className="w-full  space-y-2 text-[16px] py-[20px] ">
                <p className="cursor-pointer relative w-full h-fit" onClick={() => setTabmobileD(!tabMoblieD)}>
                  Description
                  <div> {/* 1 */}
                    {
                      tabMoblieD ? <div className="md:text-[20px] text-[16px]   py-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
                      </div> : <div className="hidden"> </div>
                    }</div>
                  <b className="ml-2 absolute top-1 left-12 ">{tabMoblieD ? <FaChevronUp /> : <FaChevronDown />}</b></p>
                <p className="cursor-pointer relative" onClick={() => setTabmobileA(!tabMoblieA)}>

                  Aditional information
                  <div>
                    {/* 2 */}
                    {
                      tabMoblieA ? <div className="  py-2">
                        <p className="text-gray-500 text-[16px]">
                          <b className="text-black">Material: </b> 0.3 kg
                        </p>
                        <p className="text-gray-500 text-[16px]">
                          <b className="text-black"> Dimentions:</b>   15 x 10 x 1 cm
                        </p>
                        <p className="text-gray-500 text-[16px]">
                          <b className="text-black"> Colours: </b>  Black, Browns, White
                        </p>
                        <p className="text-gray-500 text-[16px]">
                          <b className="text-black"> Material:</b>   Metal
                        </p>
                      </div> : <div className="hidden"> </div>
                    }
                  </div>
                  <b className="ml-2 absolute top-1 left-[145px] ">{tabMoblieA ?<FaChevronUp /> : <FaChevronDown />}</b>  </p>
                <p className="cursor-pointer relative" >
                 <div onClick={() => setTabmobileR(!tabMoblieR)}> Reviews(0)</div>
                  {/* 3 */}
                  {
                    tabMoblieR ? <div className="flex p-4 justify-between">
                      <div className="w-[47%]">
                        <div className=" space-y-2 mt-[40px]">
                          <p>2 Reviews for lira earings</p>
                          <div className="flex space-x-2 ">
                            <h4 className="text-[16px] ">Scarlet witch </h4>
                            <p className="text-gray-500 text-[14px]"> 6 May, 2020</p>
                          </div>
                          <div className="flex space-x-2">
                            {[...Array(5)].map(() => {
                              return <FaStar size={20} />
                            })}
                          </div>
                          <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
                        </div>
                        <div className=" space-y-2 mt-[40px]">
                          <p>2 Reviews for lira earings</p>
                          <div className="flex space-x-2 ">
                            <h4 className="text-[16px] ">Scarlet witch </h4>
                            <p className="text-gray-500 text-[14px]"> 6 May, 2020</p>
                          </div>
                          <div className="flex space-x-2">
                            {[...Array(5)].map(() => {
                              return <FaStar size={20} />
                            })}
                          </div>
                          <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
                        </div>
                      </div>
                      <div className="w-[47%] h-fit  space-y-2 mt-[40px]">
                        <div>
                          <p>Add a Review</p>
                          <p className="text-[16px] text-gray-500">Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <div className="  ">
                          <p className="text-[16px] text-gray-500">Your Reviews*</p>
                          <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pl-1 mt-[30px]" />
                          <p className="text-[16px] text-gray-500 mt-[30px]">Enter your name*</p>
                          <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pl-1 " />
                          <p className="text-[16px] text-gray-500 mt-[30px]">Enter your Email*</p>
                          <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pl-1" />
                        </div>
                        <div className="flex space-x-1 items-center">
                          <input type="checkbox" className="w-[25px] h-[25px]" />
                          <p className="text-[16px] text-gray-500">Save my name, email, and website in this browser for the next time I comment</p>
                        </div>
                        <div className="pt-6  ">
                          <p className="text-[16px] text-gray-500">Your Rating*</p>
                          <div className="flex space-x-1 mt-[10px]">
                            {[...Array(5)].map((star, index) => {
                              const curretrating = index + 1;
                              return (
                                <label >
                                  <input className=" hidden " type="radio" name="rating" value={curretrating} onClick={() => setRating(curretrating)} />
                                  <FaStar className="cursor-pointer" color={curretrating <= (hover || rating) ? '#ffc107' : '#000000'} onMouseEnter={() => setHover(curretrating)} onMouseLeave={() => setHover(null)} size={20} />
                                </label>
                              )
                            })}
                          </div>
                          <button className="text-[16px] w-[110px] h-[50px] text-white bg-black rounded-sm mt-[40px]">Submit</button>
                        </div>
                      </div>
                    </div> : <div className="hidden"> </div>
                  }
                  <b className="ml-2 absolute top-1 left-[65px] ">{tabMoblieR ? <FaChevronUp /> : <FaChevronDown />}</b>  </p>
              </div>



            </div>
            <div className="flex space-x-4 pt-[20px]">
              <div className="md:flex  w-[130px] h-[40px]  items-center  hidden justify-evenly rounded-sm bg-gray-300">
                <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number - 1)}>-</p>
                <p className="text-[20px] ">{
                  number < 0 ? setNumber(0) : number
                }
                </p>
                <p className="text-[20px] cursor-pointer" onClick={() => setNumber(number + 1)}>+</p>
              </div>
              <button className="uppercase w-[100%] h-[40px] border-solid border-2 rounded-sm text-[18px] hover:text-white md:block hidden hover:bg-black"> add to cart</button>
            </div>
           <div className="md:flex hidden">
           <div className="pt-[40px]  space-x-2 text-[24px] items-center ">
              <IoHeartOutline />
              <p className="text-gray-400 w-[30px] text-center">|</p>

              <CgMail />
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />

            </div>
            <h4 className="text-[14px] flex">SKU: <p className="pl-1 text-gray-400">12</p></h4>
            <h4 className="text-[14px] flex ">Categories: <p className="pl-1 text-gray-400">Fashion, Style</p></h4>
           </div>
          </div>
          {/*  */}

        </div>
        {/*  */}

        {/* description */}
        <div className="w-[full] h-[fit] outine md:block hidden">
          <div className="w-full flex justify-evenly md:text-[24px] text-[16px]">
            <p onClick={() => setTab(0)}>Description</p>
            <p onClick={() => setTab(1)}>Aditional information</p>
            <p onClick={() => setTab(2)}>Reviews(0)</p>
          </div>
          {
            tab == 0 ? <div className="md:text-[20px] text-[16px]  mt-[60px] p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
            </div> : <div className="hidden"> </div>
          }
          {/* 2 */}
          {
            tab == 1 ? <div className="mt-[60px]  p-4">
              <p className="text-gray-500 text-[18px]">
                <b className="text-black">Material: </b> 0.3 kg
              </p>
              <p className="text-gray-500 text-[18px]">
                <b className="text-black"> Dimentions:</b>   15 x 10 x 1 cm
              </p>
              <p className="text-gray-500 text-[18px]">
                <b className="text-black"> Colours: </b>  Black, Browns, White
              </p>
              <p className="text-gray-500 text-[18px]">
                <b className="text-black"> Material:</b>   Metal
              </p>
            </div> : <div className="hidden"> </div>
          }
          {/* 3 */}
          {
            tab == 2 ? <div className="flex p-4 justify-between">
              <div className="w-[47%]">
                <div className=" space-y-2 mt-[40px]">
                  <p>2 Reviews for lira earings</p>
                  <div className="flex space-x-2 ">
                    <h4 className="text-[20px] ">Scarlet witch </h4>
                    <p className="text-gray-500 text-[18px]"> 6 May, 2020</p>
                  </div>
                  <div className="flex space-x-2">
                    {[...Array(5)].map(() => {
                      return <FaStar size={20} />
                    })}
                  </div>
                  <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
                </div>
                <div className=" space-y-2 mt-[40px]">
                  <p>2 Reviews for lira earings</p>
                  <div className="flex space-x-2 ">
                    <h4 className="text-[20px] ">Scarlet witch </h4>
                    <p className="text-gray-500 text-[18px]"> 6 May, 2020</p>
                  </div>
                  <div className="flex space-x-2">
                    {[...Array(5)].map(() => {
                      return <FaStar size={20} />
                    })}
                  </div>
                  <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
                </div>
              </div>
              <div className="w-[47%] h-fit  space-y-2 mt-[40px]">
                <div>
                  <p>Add a Review</p>
                  <p className="text-[16px] text-gray-500">Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className="  ">
                  <p className="text-[16px] text-gray-500">Your Reviews*</p>
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pl-1 mt-[30px]" />
                  <p className="text-[16px] text-gray-500 mt-[30px]">Enter your name*</p>
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pl-1 " />
                  <p className="text-[16px] text-gray-500 mt-[30px]">Enter your Email*</p>
                  <input type="text" className="outline-none border-solid border-b-2 border-gray-400 w-full text-[16px] pl-1" />
                </div>
                <div className="flex space-x-1 items-center">
                  <input type="checkbox" className="w-[25px] h-[25px]" />
                  <p className="text-[16px] text-gray-500">Save my name, email, and website in this browser for the next time I comment</p>
                </div>
                <div className="pt-6  ">
                  <p className="text-[16px] text-gray-500">Your Rating*</p>
                  <div className="flex space-x-1 mt-[10px]">
                    {[...Array(5)].map((star, index) => {
                      const curretrating = index + 1;
                      return (
                        <label >
                          <input className=" hidden " type="radio" name="rating" value={curretrating} onClick={() => setRating(curretrating)} />
                          <FaStar className="cursor-pointer" color={curretrating <= (hover || rating) ? '#ffc107' : '#000000'} onMouseEnter={() => setHover(curretrating)} onMouseLeave={() => setHover(null)} size={20} />
                        </label>
                      )
                    })}
                  </div>
                  <button className="text-[16px] w-[110px] h-[50px] text-white bg-black rounded-sm mt-[40px]">Submit</button>
                </div>
              </div>
            </div> : <div className="hidden"> </div>
          }
        </div>
        {/*  */}

        {/* similar items */}
        <div className=" p-4">
          <p>Similar Items</p>
          <div className="  text-[16px] md:text-[18px] h-[550px]  w-[full]  mx-auto md:grid-cols-3 grid-cols-2 grid-rows-2 grid md:mt-[50px]  gap-6 ">
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
          </div>
        </div>
        {/*  */}
          <p className="text-[16px] text-[#A18A68] w-full flex justify-between px-4  pb-[100px]">
            Continue shopping <div className="text-[20px]">{">"}</div>
          </p>
      </div>
    </div>
  )
}

export default Product
