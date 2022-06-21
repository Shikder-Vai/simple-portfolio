import React from "react";

// import { useNavigate } from "react-router-dom";

const Banner = () => {
  // const navigate = useNavigate();
  return (
    <div className="">
      <div className=" " style={{ backgroundColor: "rgba(50, 123, 233, 0.1)" }}>
        <div className="carousel-caption  py-20 px-14">
          <p>
            HI <span>&#128075;</span>THERE I'M
          </p>
          <h1 className=" text-xl xs:text-4xl sm:text-4xl md:text-6xl sm:flex-col sm:flex">
            <span>Md Nurujjaman </span>
            <span>Shikder</span>
          </h1>
          <h3 className="text-md mt-1 md:mt-5 ">
            MERN Stack Developer / Front End Development Expert
          </h3>
          <p className="">
            I am a Web developer. Hard-working programmer with clear
            communication and active listening skills. <br /> I am so glad to
            you are here.
          </p>
          <a
            href={
              "https://drive.google.com/file/d/1zG3DWa2s20ToiezFliaHhCTuVb-QLK64/view"
            }
            target={"blank"}
            // onClick={() => navigate("/resume")}
            type="button"
            className="inline-block mt-1 md:mt-3 px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-blue-800 hover:bg-opacity-95 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
