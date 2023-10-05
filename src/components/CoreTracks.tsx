import Button from "./Button";
import Container from "./Container";
import Quarter from "./Quarter";

const CoreTrackData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II ",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];
const CoreTracks = () => {
  return (
    <div className="overflow-hidden mt-16 lg:mt-28">
        <div className="absolute left-0 hidden sm:block  ">
        <div className="blur-[150px] -z-20 bg-[#05c19cb3] w-64 h-64 rounded-full "></div>
      </div>
      <Container>
        <div className="max-w-screen-sm">
          <h4 className="text-[#00616C] font-bold text-[0.875rem]">Program of Studies</h4>
          <h2 className="text-[2.5rem] text-black font-extrabold mt-1 leading-[3rem]">Core Courses 
            <br/>
          (Common in All Specializations):</h2>
          <p className="mt-4 text-[#4A5B5C] leading-[1.875rem] font-medium 
          text-[1.25rem] max-w-xl">Every participant of the program will start by completing the following three core courses:</p>
           <div className="mt-4">
            <Button title="Learn More"  />
          </div>
        </div>


        <div className="flex flex-col 
        justify-center md:flex-row gap-y-4 
        items-stretch my-20 gap-x-4 max-w-screen-xl mx-auto">
          {CoreTrackData.map((item,index)=>{
            return(
              <>
              <Quarter
               key={index}
               title={item.header}
               paragraph={item.description}
               num={item.number}
              />

              </>
            )
          })}
        </div>
       
      </Container>

      
    </div>
  )
}

export default CoreTracks
