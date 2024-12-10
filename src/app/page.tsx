import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <div>
        {/* <div className="flex justify-evenly items-center bg-gray-900 h-20 text-blue-600 text-2xl ">
          <div><a>Home</a></div>
          <div><a>About</a></div>
          <div><a>Jobs</a></div>
          <div><a>Result</a></div>
          <div><a>Help</a></div>
        </div> */}
      <div className="flex flex-wrap">
           <div className="w-[50%] p-[100px]  flex-col ">
            <p className=" text-7xl text-blue-900 pl-[100px] pt-[80px]">Governor Sindh</p>
            <p className=" text-5xl text-blue-900 pl-[100px] font-sans">Kamran Khan Tessori</p>
            <p className=" text-5xl text-blue-500 pl-[100px] pt-7">Certified Cloud
              Applied Generative AI
              Engineer (GenEng)</p>
            <p className=" text-3xl text-blue-800 pl-[100px] pt-5">Earn up to $5,000 / month</p>
            <p className=" text-4xl text-blue-800 pl-[100px] p-5">Now admissions are open in Hyderabad</p>
            <button className="w-[250px] h-[60px] bg-blue-900 text-white mt-6 ml-[100px] rounded-xl">Apply Now</button>
            <p className="w-[880px] text-3xl text-blue-800 pl-[100px] ml-[350px] mt-[-60px] ">562,143</p>
            <p className="w-[880px] text-1xl text-blue-800 pl-[100px] ml-[325px] font-sans ">Accepted Applications</p>
           </div>

           <div id="img" className=" p-[100px] h-[100vh] w-[50%] flex justify-end items-start ">
            <Image className="br-50% h-[630px] w-[1200px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3sgzq_OUOgLypRHUb7XAZdH_V7WgIWFZJw&s" alt="governor" />
            </div>
      </div>
      <div className="bg-white  ">
        <div className="">
           <p className="text-center text-4xl text-blue-900 pt-[80px] pl-[200px] pr-[200px]">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</p>
        </div>
        <div className="pl-[193px] pr-[150px]">
        <p className=" pt-[40px] text-2xl font-sans ">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>

        <div className="flex justify-center gap-7 mt-11 bg-white-400 h-[345px]">
             <div className="w-[460px] h-[337px]  rounded-lg"><Image className="w-[459px] h-[337px] rounded-xl" src="	https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg" alt="" /></div>
             <div className="w-[460px] h-[337px]  rounded-xl"><Image className="w-[459px] h-[337px] rounded-xl" src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg" alt="box2" /></div>
             <div className="w-[460px] h-[337px]  rounded-xl"><Image className="w-[456px] h-[337px] rounded-xl" src="	https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg" alt="box3" /></div>
        </div><br />

        <Carousel className="h-[750px]">
  <CarouselContent>
    <CarouselItem><Image  src="https://www.governorsindh.com/_next/static/media/slideShow3.0006489a.jpg" alt="im" /></CarouselItem>
    <CarouselItem><Image className="h-[730px] w-[100%]" src="https://www.governorsindh.com/_next/static/media/slideShow6.03103579.jpg" alt="im2" /></CarouselItem>
    <CarouselItem><Image className="h-[730px]" src="https://www.governorsindh.com/_next/static/media/slideShow5.b502aa01.jpg" alt="im3" /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


        <hr />

      <div className="h-[135vh]">

        <div>
          <h1 className="text-4xl text-blue-800">Core Courses Sequence</h1>
          <div className="flex gap-7 mt-9">
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"> <Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/programming_fundamentals.49cca4e9.jpg" alt="imgae1" /><br /> programming fundamentals</div>
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"><Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/nextjs.3dff0f70.jpg" alt="imgae1" /><br /> Web2 Using Next.JS </div>
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"><Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/earn_as_your_learn.b8248a49.jpg" alt="imgae1" /><br />Earn as You Learn </div>
          </div>
        </div>

        <div className="mt-9">
          <h1 className="text-4xl text-blue-800">Advanced Courses</h1>
          <div className="flex gap-7 mt-9 flex-wrap">
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"> <Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/AI.39397d24.jpg" alt="imgae1" /><br /> programming fundamentals</div>
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"><Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/metaverse.06eccb60.jpg" alt="imgae1" /><br /> Web2 Using Next.JS </div>
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"><Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/cloudComputing.7260492c.jpg" alt="imgae1" /><br />Earn as You Learn </div>
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"><Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/iot.16f7b003.jpg" alt="imgae1" /><br />Earn as You Learn </div>
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"><Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/genomics.b87789f1.jpg" alt="imgae1" /><br />Earn as You Learn </div>
            <div className="text-center h-[240px] w-[245px] bg-white rounded-lg"><Image className="rounded-lg h-[170px] w-[245px]" src="https://www.governorsindh.com/_next/static/media/automation.a77dbbe8.jpg" alt="imgae1" /><br />Earn as You Learn </div>
          </div>
        </div>

      </div>

     </div>

        {/* <footer className="flex justify-center gap-[180px] h-[450px] align-middle flex-wrap">
        <div className="flex flex-col gap-5 text-l font-sans h-[210px] mt-[70px]">
            <h3 className="font-bold ">Core Courses</h3>
          
            <a>Programming Fundamentals</a>
            <a>Web2 Using NextJS</a>
            <a>Earn as You Learn</a>
          
        </div>
          <div className="flex flex-col gap-5 text-l font-sans align-middle h-[350px] mt-[70px]">
            <h3 className="font-bold ">Advanced Courses</h3>

            <a>Web 3 and Metaverse</a>
            <a>Cloud-Native Computing</a>
            <a>Artificial Intelligence (AI) and Deep Learning</a>
            <a>Ambient Computing and IoT</a>
            <a>Genomics and Bioinformatics</a>
            <a>Network Programmability and Automation</a>
          </div>
          <div  className="flex flex-col gap-5 text-l font-sans h-[210px] mt-[70px]">
            <h3 className="font-bold ">Social Links</h3>
            <a>hasssannann234@gmail.com</a>
          </div>
        </footer> */}

      </div>
    </div>
  );
}
