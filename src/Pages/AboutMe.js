import React from "react";
import BackButton from "./Share/BackButton";

const AboutMe = () => {
  return (
    <div className="py-16 px-14 flex items-center justify-center h-screen">
      <div
        className=" bg-cover flex flex-col items-center justify-center px-10 pt-10 pb-5 max-w-xl text-white"
        style={{ backgroundColor: "rgba(50, 123, 233, 0.1)" }}
      >
        <img
          src="https://i.ibb.co/fd9RZrJ/IMG-20200414-180844-1.jpg"
          class="rounded-lg w-44 mb-2 mx-auto"
          alt="Avatar"
        />
        <h1 className="text-2xl font-bold mb-4 "> Md Nurujjaman Shikder</h1>
        <p className="mb-6">
          <span className="font-bold">
            I am MERN Stack developer/Front-end expert:
          </span>{" "}
          I am professional web developer.
        </p>
        <BackButton />
      </div>
    </div>
  );
};

export default AboutMe;
