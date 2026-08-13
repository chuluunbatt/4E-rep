export const Boxes = () => {
    return (
        <div className="  gap-10 grid grid-cols-2 pl-25 pr-25 mt-20">
            <div className=" flex  border border-black border-b-6 rounded-[45px] bg-gray-200  gap-25 ">
                <div>
                    <h1 className=" flex text-[30px] m-[50px] bg-green-300">Search engine optimization</h1>
                    <div className="flex m-[50px] pt-23 items-center ">
                        <img src="icon.png" />
                        <p className="text-[20px]">Learn More</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="search.png"></img>
                </div>
            </div>
            <div className=" flex border border-black border-b-6 rounded-[45px] bg-green-300 gap-25 ">
                <div>
                    <h1 className="text-[30px] m-[50px] bg-white">Pay-per-click advertising</h1>
                    <div className="flex m-[50px] pt-23 items-center ">
                        <img src="icon.png" />
                        <p className="text-[20px]">Learn More</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="click.png"></img>
                </div>
            </div>
            <div className=" flex border border-black  border-b-6 rounded-[45px] bg-gray-900 gap-25">
                <div>
                    <h1 className="text-[30px] m-[50px] bg-white">Social Media Marketing</h1>
                    <div className="flex m-[50px] pt-23 items-center ">
                        <img src="icon.png" />
                        <p className="text-[20px] text-white">Learn More</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="smile.png"></img>
                </div>
            </div>
            <div className=" flex border border-black border-b-6 rounded-[45px] bg-gray-200 gap-25">
                <div>
                    <h1 className="text-[30px] m-[50px] bg-green-300">Email Marketing</h1>
                    <div className="flex m-[50px] pt-23 items-center ">
                        <img src="icon.png" />
                        <p className="text-[20px]">Learn More</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="mail.png"></img>
                </div>
            </div>
            <div className=" flex border border-black border-b-6 rounded-[45px] bg-green-300 gap-25">
                <div>
                    <h1 className="text-[30px] m-[50px] ">Content creation</h1>
                    <div className="flex m-[50px] pt-23 items-center ">
                        <img src="icon.png" />
                        <p className="text-[20px]">Learn More</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="content.png"></img>
                </div>
            </div>
            <div className=" flex border border-black border-b-6 rounded-[45px] bg-gray-900 gap-25">
                <div>
                    <h1 className="text-[30px] m-[50px] bg-green-300">Analytics and Tracking</h1>
                    <div className="flex m-[50px] pt-23 items-center ">
                        <img src="icon.png" />
                        <p className="text-[20px] text-white">Learn More</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="analis.png"></img>
                </div>
            </div>
        </div>
    );
};