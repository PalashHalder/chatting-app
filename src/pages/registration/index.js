import React from "react";

const Registration = () => {
    return (
        <div className="flex">
            <div className="w-1/2 flex justify-end">
                <div className="mr-16 mt-36">
                <h3 className="font-nunito font-bold text-4xl text-heading">Get started with easily register</h3>
                <p className="font-nunito font-regular text-xl text-secondary mt-3.5">Free register and you can enjoy it</p>
                
                
                <div className="relative mt-16">
                <input type="email" className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg"/>
                <p className="bg-background font-nunito font-semibold text-sm text-heading absolute top-[-10px] left-[34px] px-[18px]">
                    Email Address
                </p>
                </div>

                <div className="relative mt-16">
                <input type="text" className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg"/>
                <p className="bg-background font-nunito font-semibold text-sm text-heading absolute top-[-10px] left-[34px] px-[18px]">
                    Full Name
                </p>
                </div>

                <div className="relative mt-16">
                <input type="password" className="border border-solid border-secondary w-96 py-6 px-14 rounded-lg"/>
                <p className="bg-background font-nunito font-semibold text-sm text-heading absolute top-[-10px] left-[34px] px-[18px]">
                    Password
                </p>
                </div>


                </div>
            </div>
            <div className="w-1/2">
                <img className="w-full h-screen object-cover" src="images/regi-img.png" />
            </div>
        </div>
    )
}

export default Registration;