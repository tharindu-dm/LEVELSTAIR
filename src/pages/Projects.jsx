/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Our Projects At Levelstair</title>
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
          content="Our Projects At Levelstair"
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

      <main className="min-h-screen">
        <div className="flex flex-col gap-10 px-4 py-10 container mx-auto">
          <h1 className="text-[#FFFFFF] tracking-light self-center text-[32px] font-bold leading-tight max-w-[720px] mb-9 text-center sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
            Projects
          </h1>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col sm:flex-row gap-5 bg-[#303030] p-4 w-full sm:w-[45rem] rounded-xl">
                <div className="relative w-full sm:w-[18rem] sm:h-[18rem] aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://img.itch.zone/aW1nLzE3ODY2MDM5LmpwZWc=/original/HOf0OJ.jpeg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="mb-3">
                    <h3 className="text-[#FFFFFF] text-[18px] font-bold leading-tight mb-3 sm:text-lg">
                      Level Zero Game Jam
                    </h3>
                    <p className="text-[#ffd700] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      Frequency: Once Per Month | Weekend
                    </p>
                    <p className="text-[#a0a0a0] text-[14px] font-normal leading-normal mb-1 sm:text-sm">
                      48 Hour Game Jam for beginners to get started with game
                      development
                    </p>
                  </div>
                  <a
                    href="https://itch.io/jam/level-zero-3"
                    className="text-[#ffd700] text-[14px] font-normal leading-normal"
                  >
                    <button className="bg-[#ffd700] text-[#ffffff] p-3 rounded-xl w-full sm:w-auto">
                      Jam Page
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col sm:flex-row gap-5 bg-[#303030] p-4 w-full sm:w-[45rem] rounded-xl">
                <div className="relative w-full sm:w-[18rem] sm:h-[18rem] aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNjQzMDlkNDctYmE3Yi00ZWFiLTlmOWYtMjI4MzQ4Y2JhZjY2XkEyXkFqcGc@._V1_.jpg"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="mb-3">
                    <h3 className="text-[#FFFFFF] text-[18px] font-bold leading-tight mb-3 sm:text-lg">
                      MINECRAFT SMP | CMP
                    </h3>
                    <p className="text-[#ffd700] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      SMP - Survival Multiplayer
                    </p>
                    <p className="text-[#ffd700] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      CMP - Creative Multiplayer
                    </p>
                    <br />
                    <p className="text-[#a0a0a0] text-[14px] font-normal leading-normal mb-1 sm:text-sm">
                      server details:
                    </p>
                    <p className="text-[#ffd700] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      LEVELSTAIR_SMP.aternos.me:33952
                    </p>
                    <p className="text-[#ffd700] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      LEVELSTAIR_CMP.aternos.me:47035
                    </p>
                  </div>
                  <a
                    href="https://discord.gg/xauShxdx6u"
                    className="text-[#ffd700] text-[14px] font-normal leading-normal"
                  >
                    <button className="bg-[#ffd700] text-[#ffffff] p-3 rounded-xl w-full sm:w-auto">
                      Join Discord
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <hr className="border-4 border-[#ffd700] w-full" />
    </div>
  );
};

export default Projects;
