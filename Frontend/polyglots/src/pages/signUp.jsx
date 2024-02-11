import React from "react";


import { Button } from "../components/Button";
import { Input } from "../components/Input";

const SignUp = () => {
    return (
        <div className="bg-black flex flex-row justify-center w-full">
            <div className="bg-black w-[1440px] h-[1024px] relative">
                <footer className="inline-flex items-start gap-[99.5px] absolute top-[996px] left-[1290px] bg-transparent">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#7c7a7a] text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                        Copyright 2024
                    </div>
                </footer>
                <div className="inline-flex items-start gap-[32px] absolute top-[996px] left-[769px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#7c7a7a] text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                        Cookies
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#7c7a7a] text-[12px] tracking-[0] leading-[20px] whitespace-nowrap">
                        Legal policy
                    </div>
                </div>
                <div className="absolute w-[631px] h-[166px] top-[819px] left-[760px]">
                    <div className="relative w-[627px] h-[166px] rounded-[5px] border border-solid border-[#c9c9c9]">
                        <Button
                            className="!h-[38px] !rounded-[16px] !left-[57px] !absolute !bg-[#1e600e] !w-[514px] !top-[106px]"
                            divClassName="!text-[#ffffff] !tracking-[0] !text-[16px] ![font-style:unset] !font-semibold ![font-family:'Inter-SemiBold',Helvetica] !leading-[0.1px]"
                            priority="secondary"
                            state="regular"
                            text="Login"
                        />
                        <p className="absolute w-[515px] top-[67px] left-[39px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#928e8e] text-[18px] tracking-[0] leading-[20px] whitespace-nowrap">
                            Login with the data you entered during your registration.
                        </p>
                        <div className="absolute w-[98px] top-[20px] left-[264px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#b8e5c5] text-[34px] tracking-[0] leading-[20px] whitespace-nowrap">
                            Login
                        </div>
                    </div>
                </div>
                <div className="absolute w-[583px] h-[554px] top-[245px] left-[773px]">
                    <Button
                        className="!rounded-[16px] !left-0 !absolute !bg-[#166f14] !top-[498px]"
                        priority="primary"
                        state="regular"
                        text1="Register"
                    />
                    <Input
                        className="!absolute !left-0 !top-[98px]"
                        divClassName="!text-[#2dc020]"
                        divClassNameOverride="!h-[24px] !text-[#818181] !whitespace-nowrap"
                        state="regular"
                        text="Username"
                        text1="***********"
                    />
                    <Input
                        className="!absolute !left-0 !top-0"
                        divClassName="!text-[#2dc020]"
                        divClassNameOverride="!text-[#818181]"
                        state="regular"
                        text="Name"
                        text1="john.doe@gmail.com"
                    />
                    <Input
                        className="!absolute !left-0 !top-[290px]"
                        divClassName="!text-[#2dc020]"
                        divClassNameOverride="!text-[#818181]"
                        state="regular"
                        text=" Contact Number"
                        text1="+XX XXXXX-XXXXX"
                    />
                    <Input
                        className="!absolute !left-0 !top-[379px]"
                        divClassName="!text-[#2dc020]"
                        divClassNameOverride="!text-[#818181]"
                        state="regular"
                        text="Enter Contact Number"
                        text1="+XX XXXXX-XXXXX"
                    />
                    <Input
                        className="!absolute !left-0 !top-[197px]"
                        divClassName="!text-[#2dc020]"
                        divClassNameOverride="!text-[#818181]"
                        state="regular"
                        text="Password"
                        text1="+XX XXXXX-XXXXX"
                    />
                </div>
                <img
                    className="absolute w-[376px] h-[30px] top-[172px] left-[771px]"
                    alt="Register with"
                    src="register-with-harvesthub.svg"
                />
                <img
                    className="absolute w-[760px] h-[1024px] top-0 left-0 mix-blend-hard-light"
                    alt="Image sidebar"
                    src="image-sidebar.svg"
                />
                <img
                    className="absolute w-[129px] h-[129px] top-[13px] left-[760px]"
                    alt="Main logohh register"
                    src="main-logohh-register-1.svg"
                />
            </div>
        </div>
    );
};

export default SignUp