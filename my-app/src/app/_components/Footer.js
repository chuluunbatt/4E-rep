export const Footer = () => {
    return (
        <div className="bg-black rounded-[45px] mt-[140px] m-25" >
            <div className=" flex m-15 gap-[115px] items-center justify-between ">
                <img src="positivus.png" />

                <div className="flex gap-10 text-white text-[18px] ">
                    <div>About Us</div>
                    <div>Service</div>
                    <div>Use Cases</div>
                    <div>Pricing</div>
                    <div>Blog</div>
                </div>
                <div className="flex gap-10">
                    <img src="in.png" />
                    <img src="pb.png" />
                    <img src="twitter.png" />
                </div>
            </div>
            <div className="flex w-full ">
                <div className="text-white m-15  ">
                    <h1 className="text-[20px] m-5 bg-green-300 rounded-[7px] text-black w-fit">Contact Us</h1>
                    <h2 className="p-5">Email: info@positivus.com</h2>
                    <h3 className="p-5">Phone: 555-567-8901</h3>
                    <h4 className="p-5">Address: 1234 Main St  Moonstone City, Stardust State 12345</h4>
                </div>
                <div className="bg-gray-900 rounded-[14px] flex m-15 p-15 items-center gap-5   justify-center">
                    <h1 className="border border-white rounded-[14px] text-white h-fit pr-[205px] pl-[35px] pt-[22px] pb-[22px]  ">Email</h1>
                    <p className=" text-[20px] bg-green-300 h-fit pr-[35px] pl-[35px] pt-[20px] pb-[20px] rounded-[14px]" >Subscribe to news</p>
                </div>
            </div>
            <div className=" m-15 border border-white w-full  ">
            </div>
            <div className=" m-15 flex text-white text-[18px] gap-10">
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <h1>Privacy Policy</h1>
            </div>
        </div>
    );
};