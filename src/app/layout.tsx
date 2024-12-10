import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>


        <div className="flex justify-evenly items-center bg-gray-900 h-20 text-blue-600 text-2xl sticky top-0  shadow">
          <div><a href="/">Home</a></div>
          <div><a href="/Apply">Apply</a></div>
          <div><a href="/Jobs">Jobs</a></div>
          <div><a href="/Result">Result</a></div>
          <div><a href="/Help" >Help</a></div>
        </div>


        {children}


        <footer className="flex justify-center gap-[180px] h-[450px] align-middle flex-wrap items-center">
        <div className="flex flex-col gap-5 text-l font-sans h-[350px] ">
            <h3 className="font-bold ">Core Courses</h3>
          
            <a>Programming Fundamentals</a>
            <a>Web2 Using NextJS</a>
            <a>Earn as You Learn</a>
          
        </div>
          <div className="flex flex-col gap-5 text-l font-sans align-middle h-[350px] ">
            <h3 className="font-bold ">Advanced Courses</h3>

            <a>Web 3 and Metaverse</a>
            <a>Cloud-Native Computing</a>
            <a>Artificial Intelligence (AI) and Deep Learning</a>
            <a>Ambient Computing and IoT</a>
            <a>Genomics and Bioinformatics</a>
            <a>Network Programmability and Automation</a>
          </div>
          <div  className="flex flex-col gap-5 text-l font-sans h-[350px] ">
            <h3 className="font-bold ">Social Links</h3>
            <a>hasssannann234@gmail.com</a>
          </div>
        </footer>


      </body>
    </html>
  );
}
