
const MyAccount = () => {
    return (
        <div className="container mx-auto flex justify-center items-center py-[100px]">
            <div className="w-[500px]  h-[500px]">
                <h1 className="text-[35px] text-center ">My account</h1>
                <div className=" text-center h-[50px] my-[50px] w-[500px] bg-[#EFEFEF] rounded flex justify-between items-center pl-1">
                    <div className="bg-[white] w-[250px] h-[40px] rounded text-[18px] flex items-center justify-center shadow-md">
                        Sign in
                    </div>
                    <div className="flex justify-center items-center w-[250px] h-[40px] text-[18px]">
                        Register
                    </div>
                </div>
                <form className="">
                    <div> <input type="email" required placeholder="Email" className="border-solid border-b-2 border-[#D8D8D8] text-[17px] outline-none p-1 w-[500px] my-[10px]" /></div>
                    <div ><input type="password" required placeholder="Password" className="border-solid border-b-2 border-[#D8D8D8] text-[17px] outline-none p-1 w-[500px] my-[10px]" /></div>
                    <div className="flex ">
                        <input type="checkbox" className="w-[15px]" />
                        <p className="text-[15px] px-1">Remember me</p>
                    </div>
                    <button type="submit" className=" rounded flex justify-center items-center w-[500px] h-[50px] mt-[50px] bg-black text-white text-[17px]" >
                        SIGN IN
                    </button>
                    <a className="flex justify-center text-[15px] mt-[10px]" href="#">Have you forgotten your password?</a>
                </form>
            </div>
        </div>
    )
}

export default MyAccount