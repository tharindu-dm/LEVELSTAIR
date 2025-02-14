import React from "react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Levelstair</title>
        <meta
          name="description"
          content="Join Levelstair, the leading game development community in Sri Lanka. Connect with local talent, participate in game jams, and elevate your game development skills."
        />
        <meta
          name="keywords"
          content="game development Sri Lanka, game dev community, Levelstair, Sri Lankan indie game developers, Sri Lankan Unity Developers, Sri Lankan GoDot Developers, Sri Lankan Unreal Developers, Sri Lanka Game Jams"
        />
        <meta
          property="og:title"
          content="Levelstair - About Us"
        />
        <meta
          property="og:description"
          content="Connect with the top game developers in Sri Lanka. Join Levelstair and be part of an innovative game development community."
        />
        <meta
          property="og:image"
          content="https://www.levelstair.com/assets/images/ShareImage.png"
        />
        <meta property="og:url" content="https://www.levelstair.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.levelstair.com/assets/images/ShareImage.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <main className="flex flex-col gap-10 px-14 py-10 items-center">
        <h1 className="text-[#ffd700] tracking-light text-[40px] font-bold leading-tight mb-10">
          About&nbsp;Us
        </h1>
        <div className="flex flex-col gap-24 px-4 md:px-8 lg:px-16">
          {/* History Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-2 text-sm md:text-base lg:text-xl">
              History
            </h3>
            <p className="text-[#FFFFFF] text-center text-xs md:text-base lg:text-lg max-w-3xl">
              Founded in August 2024, LEVELSTAIR has rapidly grown into Sri
              Lanka's premier hub for game development, attracting over 100
              passionate creators within months of launch. Our journey has been
              marked by successful partnerships with strong startups and brands
              like Graffon, Codechefs, and Black Mirage Studio, regular game
              jams that foster creativity, and engaging physical meetups that
              bring our community together.
              <div className="mt-10" />
              From our first virtual meetup to our monthly Level Zero game jams
              and the landmark Level Up event, we've consistently provided
              platforms for learning, collaboration, and growth in game
              development.
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

          {/* Community Impact Section - New Addition 
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-4 text-sm md:text-base lg:text-xl">
              Community Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base italic">
                  "I always used to think there are not many game developers in Sri Lanka, and then I found the Levelstair community. This industry can be Sri Lanka's future and this community is just a start of it."
                </p>
                <p className="text-[#ffd700] text-right mt-2 text-xs md:text-sm">- Kavindu Nethsara</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base italic">
                  "Levelstair is a welcoming community where any person interested in the field of game development can find a safe space to discuss their projects and ask for assistance."
                </p>
                <p className="text-[#ffd700] text-right mt-2 text-xs md:text-sm">- Pahan Amarasekara</p>
              </div>
            </div>
          </div>*/}

          {/* Activities Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-4 text-sm md:text-base lg:text-xl">
              Our Activities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center max-w-3xl">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Monthly Game Jams
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Physical Meetups
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  D&D Sessions
                </p>
              </div>
              {/*<div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Esports Events
                </p>
              </div>*/}
            </div>
          </div>

          {/* Values Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-4 text-sm md:text-base lg:text-xl">
              Values
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Education
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Innovation
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Achievement
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Collaboration
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-[#FFFFFF] text-xs md:text-sm lg:text-base">
                  Enjoyment
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <hr className="border-4 border-[#ffd700] w-full" />
    </div>
  );
};

export default AboutUs;
