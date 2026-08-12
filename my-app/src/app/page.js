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
      <div className=" flex items-center gap-10 m-25 mt-[115px] ">
        <h1 className="text-[40px] bg-green-500    ">Services</h1>
        <p className="text-[18px]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      {/* 6boxes */}
      <div className="  gap-10 grid grid-cols-2 pl-25 pr-25 mt-20">
        <div className=" flex border border-black border-b-6 rounded-[45px] bg-gray-200  ">
          <div>
            <h1 className=" flex text-[30px] m-[50px] bg-green-300">Search engine optimization</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="search.png"></img>
          </div>
        </div>
        <div className=" flex border border-black border-b-6 rounded-[45px] bg-green-300">
          <div>
            <h1 className="text-[30px] m-[50px] bg-white">Pay-per-click advertising</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="click.png"></img>
          </div>
        </div>
        <div className=" flex border border-black  border-b-6 rounded-[45px] bg-gray-900">
          <div>
            <h1 className="text-[30px] m-[50px] bg-white">Social Media Marketing</h1>
            <img src="icon.png" />
            <p className="text-[20px] text-white p-[50px]  ">Learn More</p>
          </div>
          <div className="flex">
            <img src="smile.png"></img>
          </div>
        </div>
        <div className=" flex border border-black border-b-6 rounded-[45px] bg-gray-200 flex-1">
          <div>
            <h1 className="text-[30px] m-[50px] bg-green-300">Email Marketing</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="mail.png"></img>
          </div>
        </div>
        <div className=" flex border border-black border-b-6 rounded-[45px] bg-green-300">
          <div>
            <h1 className="text-[30px] m-[50px] ">Content creation</h1>
            <img src="icon.png" />
            <p className="text-[20px] p-[50px]">Learn More</p>
          </div>
          <div className="flex">
            <img src="content.png"></img>
          </div>
        </div>
        <div className=" flex border border-black border-b-6 rounded-[45px] bg-gray-900">
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
      <div className="bg-green-300 mr-20 ml-20  rounded-[45px] border border-black-[2px] border-b-6 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] ">
          <h1 className="text-[60px] m-10 font-bold" >01</h1>
          <h2 className="text-[30px]">Consultation</h2>
          <img src="minus.png" />
        </div>
        <div className="border border-black w-[95%] justify-center ml-[60px] mr-[60px]">
        </div>
        <p className="text-[18px] mr-[60px] ml-[60px] mt-[30px] mb-[40px] m-10">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
      </div>
      <div className="bg-gray-100 border border-black border-b-6 rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">02</h1>
          <h2 className="text-[30px] pl-[25px]">Research and Strategy Development</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black border-b-6   rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">03</h1>
          <h2 className="text-[30px]">Implementation</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black border-b-6 rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">04</h1>
          <h2 className="text-[30px]">Monitoring and Optimization</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black border-b-6 rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">05</h1>
          <h2 className="text-[30px]">Reporting and Communication</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="bg-gray-100 border border-black  border-b-6 rounded-[45px] mt-[30px] ml-20 mr-20 ">
        <div className="flex justify-between  items-center ml-[60px]  mr-[60px] m-10">
          <h1 className="text-[60px] font-bold">06</h1>
          <h2 className="text-[30px]">Continual Improvement</h2>
          <img src="plus.png" />
        </div>
      </div>
      <div className="flex mt-35 ml-25 mr-25 gap-10 items-center">
        <h1 className="text-[40px] bg-green-300">Team</h1>
        <p className="text-[18px]">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <div className="flex grid grid-cols-3 mt-25 ml-25 mr-25 gap-10">
        <div className="border border-black border-b-6 rounded-[45px]">
          <div className=" flex ">
            <img src="Picture.png" className="m-[35px]" />
            <div className="flex-col mt-[94px]">
              <h1 className="text-[20px] font-bold  ">John Smith</h1>
              <p className="text-[18px]">CEO and Founder</p>
            </div>
            <img src="social.png" className="w-[34px] h-[34px] m-[37px]" />
          </div>
          <div className=" w-100 border border-black m-[35px] ">
          </div>
          <p className="m-[35px]">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
        </div>
        <div className="border border-black  border-b-6 rounded-[45px]">
          <div className=" flex ">
            <img src="zurag2.png" className="m-[35px]" />
            <div className="flex-col mt-[94px]">
              <h1 className="text-[20px] font-bold  ">Jane Doe</h1>
              <p className="text-[18px]">Direction of Operations</p>
            </div>
            <img src="social.png" className="w-[34px] h-[34px] m-[37px]" />
          </div>
          <div className=" w-100 border border-black m-[35px] ">
          </div>
          <p className="m-[35px]">7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
        </div>
        <div className="border border-black border-b-6 rounded-[45px]">
          <div className=" flex ">
            <img src="zurag3.png" className="m-[35px]" />
            <div className="flex-col mt-[94px]">
              <h1 className="text-[20px] font-bold  ">Michael Brown</h1>
              <p className="text-[18px]">Senior SEO Specialist</p>
            </div>
            <img src="social.png" className="w-[34px] h-[34px] m-[37px]" />
          </div>
          <div className=" w-100 border border-black m-[35px] ">
          </div>
          <p className="m-[35px]">5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
        </div>
        <div className="border border-black border-b-6 rounded-[45px]">
          <div className=" flex ">
            <img src="zurag4.png" className="m-[35px]" />
            <div className="flex-col mt-[94px]">
              <h1 className="text-[20px] font-bold  ">Emily Johnson</h1>
              <p className="text-[18px]">PPC Manager</p>
            </div>
            <img src="social.png" className="w-[34px] h-[34px] m-[37px]" />
          </div>
          <div className=" w-100 border border-black m-[35px] ">
          </div>
          <p className="m-[35px]">3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
        </div>
        <div className="border border-black border-b-6 rounded-[45px]">
          <div className=" flex ">
            <img src="zurag5.png" className="m-[35px]" />
            <div className="flex-col mt-[94px]">
              <h1 className="text-[20px] font-bold  ">Brian Williams</h1>
              <p className="text-[18px]">Social Media Specialist</p>
            </div>
            <img src="social.png" className="w-[34px] h-[34px] m-[37px]" />
          </div>
          <div className=" w-100 border border-black m-[35px] ">
          </div>
          <p className="m-[35px]">4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</p>
        </div>
        <div className="border border-black border-b-6 rounded-[45px]">
          <div className=" flex ">
            <img src="zurag6.png" className="m-[35px]" />
            <div className="flex-col mt-[94px]">
              <h1 className="text-[20px] font-bold  ">Sarah Kim</h1>
              <p className="text-[18px]">Content Creator</p>
            </div>
            <img src="social.png" className="w-[34px] h-[34px] m-[37px]" />
          </div>
          <div className=" w-100 border border-black m-[35px] ">
          </div>
          <p className="m-[35px]">2+ years of experience in writing and editing
            Skilled in creating compelling, SEO-optimized content for various industries</p>
        </div>
      </div>
      <div className="flex justify-end ml-25 m-10 mr-25">
        <p className="rounded-[18px] bg-black w-fit text-[20px] text-white p-5">See all team</p>
      </div>
      <div className=" flex items-center gap-10 mr-25 ml-25    mt-[115px] ">
        <h1 className="text-[40px] bg-green-500   ">Testimonials</h1>
        <p className="text-[18px]">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>
      <div className="bg-black m-25 rounded-[45px] pt-21 ">
        <div className="flex gap-12.5 ml">
          <div className="border border-green-400 rounded-[45px]">
            <h1 className="text-white  pt-[42px] pr-[58px] pl-[58px] pb-[42px]  ">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."  </h1>
          </div>

          <div className="border border-green-400 rounded-[45px]">
            <h1 className="text-white  pt-[42px] pr-[58px] pl-[58px] pb-[42px]">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."  </h1>

          </div>
          <div className="border border-green-400 rounded-[45px]">
            <h1 className="text-white  pt-[42px] pr-[58px] pl-[58px] pb-[42px] ">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."  </h1>

          </div>
        </div>
        <div className="flex  mt-10 ml-60 mr-60 mb-[124px] justify-between ">
          <div className="" >
            <h1 className="text-green-400 text-[18px]">John Smith</h1>
            <p className="text-[18px] text-white">Marketing Director at XYZ Crop </p>
          </div>
          <div className="" >
            <h1 className="text-green-400 text-[18px]">John Smith</h1>
            <p className="text-[18px] text-white">Marketing Director at XYZ Crop </p>
          </div>
          <div className="" >
            <h1 className="text-green-400 text-[18px]">John Smith</h1>
            <p className="text-[18px] text-white">Marketing Director at XYZ Crop </p>
          </div>
        </div>
        <div className="flex justify-center  gap-[190px] mb-[68px]">
          <img src="leftarrow.png" />
          <img src="nagi.png" />
          <img src="rigtharrow.png" />

        </div>
      </div>
      <div className=" flex items-center gap-10 mr-25 ml-25    mt-[115px] ">
        <h1 className="text-[40px] bg-green-500   ">Contact Us</h1>
        <p className="text-[18px]">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <div className="bg-gray-200 rounded-[45px] m-20 mr25 ml-25 ">

        <div className="flex flex-1 ml-25 mt-15 gap-[30px]">
          <img src="radio.png" />
          <h1 className=""> Say hi</h1>
          <img src="radiobtn.png" />
          <h1>Get a quote</h1>
        </div>
        <div>

          <form className="flex flex-col gap-5   ml-25 mt-15 mr-25 mb-15">
            <h1>Name</h1>
            <input type="text" placeholder="Name" className="border border-black rounded-[10px] bg-white p-5" />
            <h2>*Email</h2>
            <input type="email" placeholder="Email" className="border border-black rounded-[10px]  bg-white p-5" />
            <h3>*Message</h3>
            <textarea placeholder="Message" className="border border-black rounded-[10px] p-5 pb-[150px] bg-white "></textarea>
            <button className="bg-black text-white text-[20px] rounded-[10px] pl-50 pr-50 pt-5 pb-5 w-fit">Send Message </button>
          </form>
        </div>
        <div className="flex-1">
          <img src="od.png" />
        </div>
      </div>
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
        <div className="flex gap-[154px] ">
          <div className="text-white m-15  ">
            <h1 className="text-[20px] bg-green-300 rounded-[7px] text-black w-fit">Contact Us</h1>
            <h2 className="p-5">Email: info@positivus.com</h2>
            <h3 className="p-5">Phone: 555-567-8901</h3>
            <h4 className="p-5">Address: 1234 Main St  Moonstone City, Stardust State 12345</h4>
          </div>
          <div className="bg-gray-900 rounded-[7px] flex w-fit p-15 gap-5  ">
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
    </>
  );
};
export default Home;    
