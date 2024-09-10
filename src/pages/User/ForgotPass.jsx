/* eslint-disable react/no-unescaped-entities */

const ForgotPass = () => {
    return (
        <div>
            <div className="container mx-auto w-[400px] p-2 md:w-[700px] flex justify-center  h-[600px]">
                <div>
                <p className="text-center md:text-[30px] text-[25px]">Have you Forgotten Your Password ?</p>
                <p className="text-center text-[16px] w-[370px] mx-auto"> If you've forgotten your password, enter your e-mail address and we'll send you an e-mail  </p>
                <input type="text" placeholder="Email" className="pl-1 w-full outline-none border-b-2  text-[16px] border-gray-400 border-solid mt-[50px]" />
                <button className="uppercase mt-[50px] w-[90%] flex justify-center items-center h-[50px] rounded text-[16px] mx-auto bg-black text-white">reset password</button>
                </div>
            </div>

        </div>
    )
}

export default ForgotPass