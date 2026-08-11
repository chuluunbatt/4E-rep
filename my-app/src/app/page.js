import { Header, Hero } from "./_components"
const Home = () => {
  return (
    //  Header
    <>
      <div>
        <div className="w-screen  h-17 px-25 bg-red flex justify-between items-center text-black h-20 mt-15 mb-15">
          <img src="logo.png" />
          <div className="flex items-center gap-10">
            <div>About Us</div>
            <div>Service</div>
            <div>Use Cases</div>
            <div>Pricing</div>
            <div>Blog</div>
            <button className="px-8.75 py-5 border rounded-[14px]">Request a quote</button>
          </div>
        </div>
      </div>
      {/* hero */}
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
        {/* container */}
      </div>
      <div className="flex justify-between items-center mt-[70px] mr-25 ml-25 ">
        <img src="amazon.png" />
        <img src="shuttle.png" />
        <img src="hubspot.png" />
        <img src="notion.png" />
        <img src="netflix.png" />
        <img src="zoom.png" />
      </div>
      {/* Services */}
      <div className="w-screen flex items-center gap-10 mt-[115px] ">
        <h1 className="text-[40px] bg-green-500 pl-25   ">Services</h1>
        <p className="text-[18px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      {/* 6boxes */}
      <div className="  border border-black gap-10 grid grid-cols-2 pl-25 pr-25 mt-20">
        <div className=" flex border border-black rounded-[45px] bg-gray-200  ">
          <div>
            <h1 className=" flex text-[30px] m-[50px] bg-green-300">Search engine optimization</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="search.png"></img>
          </div>
        </div>
        <div className=" flex border border-black rounded-[45px] bg-green-300">
          <div>
            <h1 className="text-[30px] m-[50px] bg-white">Pay-per-click advertising</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="click.png"></img>
          </div>
        </div>
        <div className=" flex border border-black rounded-[45px] bg-gray-900">
          <div>
            <h1 className="text-[30px] m-[50px] bg-white">Social Media Marketing</h1>
            <img src="icon.png" />
            <p className="text-[20px] text-white p-[50px]  ">Learn More</p>
          </div>
          <div className="flex">
            <img src="smile.png"></img>
          </div>
        </div>
        <div className=" flex border border-black rounded-[45px] bg-gray-200 flex-1">
          <div>
            <h1 className="text-[30px] m-[50px] bg-green-300">Email Marketing</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="mail.png"></img>
          </div>
        </div>
        <div className=" flex border border-black rounded-[45px] bg-green-300">
          <div>
            <h1 className="text-[30px] m-[50px] ">Content creation</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="content.png"></img>
          </div>
        </div>
        <div className=" flex border border-black rounded-[45px] bg-gray-900">
          <div>
            <h1 className="text-[30px] m-[50px] bg-green-300">Analytics and Tracking</h1>
            <img src="icon.png" />
            <p className="text-[20px] text-white p-[50px] ">Learn More</p>
          </div>
          <div className="flex">
            <img src="analis.png"></img>
          </div>
        </div>
      </div>
      {/* CTA block */}
      <div className=" flex bg-gray-200 m-25 border border-gray-300 rounded-[25px] gap-60">
        <div className="flex-1">
          <h1 className="text-[30px] pt-15 pl-15 ">Let’s make things happen</h1>
          <p className="text-[18px] pl-15 mt-[26px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <div className="bg-gray-800 text-white w-fit rounded-[10px] p-3 ml-15 mb-15 mt-[26px]">Get your free proposal</div>
        </div>
        <div className="flex-1">
          <img src="star.png" />
        </div>
      </div>
      {/* Case studies */}
      <div className="flex mt-35 m-25 gap-10 items-center">
        <h1 className="text-[40px] bg-green-300">Case Studies</h1>
        <p className="text-[18px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      {/*Case sdudies block  */}
      <div className=" flex bg-black rounded-[30px]  m-20 pt-[70px] p-[60px] gap-[128px] ">
        <h1 className="text-[18px] text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</h1>
        <p className="text-green-400">Learn More</p>
        <h2 className="text-[18px] text-white">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</h2>
        <p className="text-green-400">Learn More</p>
        <h3 className="text-[18px] text-white" >For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</h3>
        <p className="text-green-400">Learn More</p>
      </div>
      {/* Our Working Process  */}
      <div className="flex mt-35 m-25 gap-10 items-center">
        <h1 className="text-[40px] bg-green-300">Our Working Progress</h1>
        <p className="text-[18px]">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      {/* Cards */}
      <div className="bg-green-300 mr-20 ml-20  rounded-[45px] border border-black-[2px]">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] ">
          <h1 className="text-[60px] m-10 font-bold" >01</h1>
          <h2 className="text-[30px]">Consultation</h2>
          <img src="minus.png" />
        </div>
        <div className="border border-black w-[95%] justify-center ml-[60px] mr-[60px]">
        </div>
        <p className="text-[18px] mr-[60px] ml-[60px] mt-[30px] mb-[40px] m-10">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
      </div>
      <div className="bg-gray-100 border border-black rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">02</h1>
          <h2 className="text-[30px] pl-[25px]">Research and Strategy Development</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">03</h1>
          <h2 className="text-[30px]">Implementation</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">04</h1>
          <h2 className="text-[30px]">Monitoring and Optimization</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">05</h1>
          <h2 className="text-[30px]">Reporting and Communication</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">06</h1>
          <h2 className="text-[30px]">Continual Improvement</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="flex mt-35 m-25 gap-10 items-center">
        <h1 className="text-[40px] bg-green-300">Team</h1>
        <p className="text-[18px]">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <div className="flex  grid grid-cols-3 m-25">
        <div className="flex border border-black rounded-[45px] ">
          <img src="Picture.png" />
          <h1>John Smith</h1>
          <p>CEO and Founder</p>
          <img src="social.png" />
        </div>
        <div className="  ">

          <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
        <div className="flex border border-black rounded-[45px] ">
          <img src="Picture.png" />
          <h1>John Smith</h1>
          <p>CEO and Founder</p>
          <img src="social.png" />
        </div>
        <div className="  ">

          <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>

        <div className="flex border border-black rounded-[45px]">
          <img src="Picture.png" />
          <h1>John Smith</h1>
          <p>CEO and Founder</p>
          <img src="social.png" />
        </div>
        <div className="  ">

          <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>

        <div className="flex border border-black rounded-[45px]">
          <img src="Picture.png" />
          <h1>John Smith</h1>
          <p>CEO and Founder</p>
          <img src="social.png" />
        </div>
        <div className="  ">

          <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>

        <div className="flex border border-black rounded-[45px]">
          <img src="Picture.png" />
          <h1>John Smith</h1>
          <p>CEO and Founder</p>
          <img src="social.png" />
        </div>
        <div className="  ">

          <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
        <div className="flex border border-black rounded-[45px]">
          <img src="Picture.png" />
          <h1>John Smith</h1>
          <p>CEO and Founder</p>
          <img src="social.png" />
        </div>
        <div className="  ">

          <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>



      </div>

    </>



  );
};
export default Home;    
