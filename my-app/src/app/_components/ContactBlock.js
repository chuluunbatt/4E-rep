export const ContactBlock = () => {
    return (
        <div className="bg-gray-200 rounded-[45px] m-20 mr25 ml-25 " >

            <div className="flex  ml-25 mt-15 gap-[30px]">
                <img src="radio.png" />
                <h1 className=""> Say hi</h1>
                <img src="radiobtn.png" />
                <h1>Get a quote</h1>
            </div>
            <div className="flex flex-1  justify-between  gap-20  ">

                <form className="flex flex-col gap-5 ml-25 mt-15 mr-25 mb-15 w-350     " >
                    <h1>Name</h1>
                    <input type="text" placeholder="Name" className="border border-black rounded-[10px] bg-white p-5" />
                    <h2>*Email</h2>
                    <input type="email" placeholder="Email" className="border border-black rounded-[10px]  bg-white p-5" />
                    <h3>*Message</h3>
                    <textarea placeholder="Message" className="border border-black rounded-[10px] p-5 pb-[150px] bg-white "></textarea>
                    <button className="bg-black text-white text-[20px] rounded-[10px] pl-50 pr-50 pt-5 pb-5 w-fit">Send Message </button>

                </form>
                <div className="flex flex-1 absolute left-[2110px] w-full ">
                    <img src="od.png" />
                </div>
            </div>

        </div >
    );
}; 