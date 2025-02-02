import React from "react";

const AboutUs = () => {
  return (
    <div>
      <main className="flex flex-col gap-10 px-14 py-10 items-center">
        <h1 className="text-[#ffd700] tracking-light text-[40px] font-bold leading-tight mb-10">
          About &nbsp; Us
        </h1>
        <div className="flex flex-col gap-24 px-4 md:px-8 lg:px-16">
          {/* History Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-2 text-sm md:text-base lg:text-xl">
              History
            </h3>
            <p className="text-[#FFFFFF] text-center text-xs md:text-base lg:text-lg max-w-3xl">
              Founded in August 2024, LEVELSTAIR emerged as a supportive hub for
              aspiring game developers across Sri Lanka. Rooted in a shared
              passion for gaming and creation, our community is committed to
              fostering a thriving ecosystem for indie game development. With a
              focus on education, networking, and collaboration, we aim to equip
              developers with the tools and knowledge needed to bring their game
              ideas to life.
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-4 text-sm md:text-base lg:text-xl">
              Mission
            </h3>
            <p className="text-[#FFFFFF] text-center text-xs md:text-base lg:text-lg max-w-3xl">
              To empower aspiring game developers by fostering a collaborative
              community that provides essential resources, mentorship, and
              opportunities to transform their passion into successful careers.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-4 text-sm md:text-base lg:text-xl">
              Vision
            </h3>
            <p className="text-[#FFFFFF] text-center text-xs md:text-base lg:text-lg max-w-3xl">
              To be the leading platform for game development education and
              networking, shaping the future of the industry by cultivating a
              diverse and innovative community of creators.
            </p>
          </div>

          {/* Values Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-4 text-sm md:text-base lg:text-xl">
              Values
            </h3>
            <div className="flex flex-wrap gap-4 justify-center text-xs md:text-base lg:text-lg">
              <p className="text-[#FFFFFF]">Education</p>
              <p className="text-[#FFFFFF]">Innovation</p>
              <p className="text-[#FFFFFF]">Achievement</p>
              <p className="text-[#FFFFFF]">Collaboration</p>
              <p className="text-[#FFFFFF]">Enjoyment</p>
            </div>
          </div>
        </div>
      </main>
      <hr className="border-4 border-[#ffd700] w-full" />
    </div>
  );
};

export default AboutUs;
