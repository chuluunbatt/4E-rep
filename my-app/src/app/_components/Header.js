export const Header = () => {
    return (
        <div className="w-screen h-17 px-25 bg-red flex justify-between items-center text-black h-20 mt-15 mb-15">
            <img src="logo.png" />
            <div className="flex items-center gap-10">
                <div>About Us</div>
                <div>Service</div>
                <div>Use dsfjlrnldtngCases</div>
                <div>Pricing</div>
                <div>Blog</div>
                <button className="px-8.75 py-5 border rounded-[14px]">Request a quote</button>
            </div>
        </div>
    );
};