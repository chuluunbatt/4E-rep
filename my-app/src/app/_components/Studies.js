export const Studies = () => {
    return (
        <div className=" flex bg-black rounded-[30px]  m-20 pt-[70px] p-[60px] gap-[128px] ">
            <div>
                <h1 className="text-[18px] text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</h1>
                <div className="flex gap-5 mt-5">
                    <p className="text-green-400">Learn More</p>
                    <img src="green-arrow.png" />
                </div>
            </div>
            <div className="border border-white "></div>
            <div>
                <h2 className="text-[18px] text-white">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</h2>
                <div className="flex gap-5 mt-5">
                    <p className="text-green-400">Learn More</p>
                    <img src="green-arrow.png" />
                </div>
            </div>
            <div className="border border-white "></div>
            <div className=" ">
                <h3 className="text-[18px] text-white" >For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</h3>
                <div className="flex gap-5 mt-5">
                    <p className="text-green-400">Learn More</p>
                    <img src="green-arrow.png" />
                </div>
            </div>
        </div>
    );
};