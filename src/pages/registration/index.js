import React from "react";

const Registration = () => {
    return (
        <div className="flex">
            <div className="w-1/2 ml-16">
                <div className="mr-16 mt-32">
                <h3 className="font-nunito font-bold text-4xl text-heading">Get started with easily register</h3>
                <p className="font-nunito font-regular text-xl text-secondary mt-3.5">Free register and you can enjoy it</p>
                
                {/* ==========registration form========== */}
                <div className="relative mt-12">
                <input type="email" className="border border-solid border-secondary w-96 py-4 px-14 rounded-lg"/>
                <p className="bg-background font-nunito font-semibold text-sm text-heading absolute top-[-10px] left-[34px] px-[18px]">
                    Email Address
                </p>
                </div>

                <div className="relative mt-12">
                <input type="text" className="border border-solid border-secondary w-96 py-4 px-14 rounded-lg"/>
                <p className="bg-background font-nunito font-semibold text-sm text-heading absolute top-[-10px] left-[34px] px-[18px]">
                    Full Name
                </p>
                </div>

                <div className="relative mt-12">
                <input type="password" className="border border-solid border-secondary w-96 py-4 px-14 rounded-lg"/>
                <p className="bg-background font-nunito font-semibold text-sm text-heading absolute top-[-10px] left-[34px] px-[18px]">
                    Password
                </p>
                <button className="w-96 bg-primary rounded-full font nunito font-semibold text-xl text-background py-5 mt-10">
                    Sign Up
                </button>
                <p className="text-center w-96 mt-4 font-open font-regular text-sm text-heading mt-9">Already  have an account ? <span className="font-bold text-[#EA6C00]">Sign In</span></p>
                </div>


                </div>
            </div>


            {/* ==========Right Side========== */}
            <div className="w-1/2">
                <img className="w-full h-screen object-cover" src="images/regi-img.png" />
            </div>
        </div>
    )
}

export default Registration;