/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Projects = () => {
  return (
    <div>
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
                    <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      Frequency: Once Per Month | Weekend
                    </p>
                    <p className="text-[#a0a0a0] text-[14px] font-normal leading-normal mb-1 sm:text-sm">
                      48 Hour Game Jam for beginners to get started with game
                      development
                    </p>
                  </div>
                  <a
                    href="https://itch.io/jam/level-zero-3"
                    className="text-[#D3B45F] text-[14px] font-normal leading-normal"
                  >
                    <button className="bg-[#D3B45F] text-[#ffffff] p-3 rounded-xl w-full sm:w-auto">
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
                    <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      SMP - Survival Multiplayer
                    </p>
                    <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      CMP - Creative Multiplayer
                    </p>
                    <br />
                    <p className="text-[#a0a0a0] text-[14px] font-normal leading-normal mb-1 sm:text-sm">
                      server details:
                    </p>
                    <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      LEVELSTAIR_SMP.aternos.me:33952
                    </p>
                    <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                      LEVELSTAIR_CMP.aternos.me:47035
                    </p>
                  </div>
                  <a
                    href="https://discord.gg/xauShxdx6u"
                    className="text-[#D3B45F] text-[14px] font-normal leading-normal"
                  >
                    <button className="bg-[#D3B45F] text-[#ffffff] p-3 rounded-xl w-full sm:w-auto">
                      Join Discord
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <hr className="border-4 border-[#D3B45F] w-full" />
    </div>
  );
};

export default Projects;
