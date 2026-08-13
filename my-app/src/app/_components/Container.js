export const Container = () => {
    return (
        <div className="px-25  flex items-center gap-25 ">
            <div className="flex-1 flex flex-col gap-8.75 ">
                <h1 className="text-[60px] font-bold">Navigating the digital landscape for success</h1>
                <p className="text-[20px]">
                    Our digital marketing agency helps businesses grow and succeed
                    online through a range of services including SEO, PPC, social media
                    marketing, and content creation.</p>
                <button className="bg-black rounded-[10px] text-white px-8.75 py-5 border rounded-[14px] w-fit ">Book consultation</button>
            </div>
            <div className="flex-1">
                <img src="Illustration.png" className="w-full h-full" />
            </div>

        </div>
    );
};