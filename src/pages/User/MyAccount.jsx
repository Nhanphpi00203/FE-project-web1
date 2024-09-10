import { useState } from "react"

const MyAccount = () => {
    const [isregister, setIsregister] = useState(true)
    return (
        <div className="container mx-auto flex justify-center items-center py-[10px] md:py-[100px]">
            <div className="w-[500px] mx-auto h-[500px]">
                <h1 className="text-[25px] text-center mx-auto md:text-[35px]">My account</h1>
                <div className=" text-center h-[50px] my-[50px] w-[400px] md:w-[500px] bg-[#EFEFEF] rounded flex  mx-auto  md:justify-between items-center pl-1">

                    {isregister ? <div className="text-center h-[50px] my-[50px] w-[400px] md:w-[500px]  bg-[#EFEFEF] rounded flex justify-between items-center pl-1 mr-[10px]">
                        <div className="ease-in-out duration-300 bg-[white] w-[190px] md:w-[240px] h-[40px] rounded text-[16px] flex items-center justify-center shadow-md">
                            <p > Sign in</p>
                        </div>
                        <div  onClick={()=>setIsregister(false)} className="ease-in-out duration-300 cursor-pointer flex justify-center items-center w-[190px] md:w-[240px] h-[40px] text-[16px]">
                            <p> Register</p>
                        </div>
                    </div>
                        :
                        <div className=" text-center h-[50px] my-[50px] w-[400px] md:w-[500px] bg-[#EFEFEF] rounded flex justify-between items-center pl-1">
                            <div onClick={()=>setIsregister(true)} className="cursor-pointer w-[190px] md:w-[240px] h-[40px] rounded text-[16px] flex items-center justify-center ">
                                <p > Sign in</p>
                            </div>
                            <div className="flex justify-center items-center w-[190px] md:w-[240px] h-[40px] text-[16px] shadow-md bg-[white] mr-[10px] rounded ">
                                <p> Register</p>
                            </div>
                        </div>
                    }


                </div>
                {isregister ?  <form className="  mx-auto w-[400px] md:w-[500px]">
                    <div> <input type="email" required placeholder="Email" className="border-solid border-b-2 border-[#D8D8D8] text-[17px] outline-none p-1  w-[400px] md:w-[500px] my-[10px]" /></div>
                    <div ><input type="password" required placeholder="Password" className="border-solid border-b-2 border-[#D8D8D8] text-[17px] outline-none p-1  w-[400px] md:w-[500px] my-[10px]" /></div>
                    <div className="flex ">
                        <input type="checkbox" className="w-[15px]" />
                        <p className="text-[15px] px-1">Remember me</p>
                    </div>
                    <button type="submit" className=" rounded flex justify-center items-center  w-[400px] md:w-[500px] h-[50px] mt-[50px] bg-black text-white text-[17px]" >
                        SIGN IN
                    </button>
                    <a className="flex justify-center text-[15px] mt-[10px]" href="ForgotPass">Have you forgotten your password?</a>
                </form>
                :
                <form className=" mx-auto w-[400px] md:w-[500px]">
                      <div> <input type="name" required placeholder="Name" className="border-solid border-b-2 border-[#D8D8D8] text-[17px] outline-none p-1  w-[400px] md:w-[500px] my-[10px]" /></div>
                <div> <input type="email" required placeholder="Email" className="border-solid border-b-2 border-[#D8D8D8] text-[17px] outline-none p-1  w-[400px] md:w-[500px] my-[10px]" /></div>
                <div ><input type="password" required placeholder="Password" className="border-solid border-b-2 border-[#D8D8D8] text-[17px] outline-none p-1  w-[400px] md:w-[500px] my-[10px]" /></div>
                
                <button type="submit" className=" rounded flex justify-center items-center  w-full h-[50px] mt-[50px] bg-black text-white text-[17px]" >
                    REGISTER
                </button>
                <a className="flex justify-center text-[15px] mt-[10px]" href="#">
                    {isregister ? <a href="ForgotPass">Have you forgotten your password?</a>: <p onClick={()=>setIsregister(true)}>Already have an account?</p>}
                   </a>
            </form>
            }
               
            </div>
        </div>
    )
}

export default MyAccount