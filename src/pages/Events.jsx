import React from "react";

const Events = () => {
  return (
    <div>
      <main>
        <div className="flex flex-col gap-10 px-4 py-10 container mx-auto">
          <h1 className="text-[#FFFFFF] tracking-light self-center text-[32px] font-bold leading-tight max-w-[720px] mb-9 text-center sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
            Events
          </h1>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#D3B45F] text-center text-[24px] font-bold leading-tight mb-4 sm:text-2xl">
                Upcoming Events
              </h2>
              <div className="flex flex-col gap-4"></div>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#D3B45F] text-center text-[24px] font-bold leading-tight mb-4 sm:text-2xl">
                Ongoing Events
              </h2>
              <div className="flex flex-col gap-4"></div>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#D3B45F] text-center text-[24px] font-bold leading-tight mb-4 sm:text-2xl">
                Past Events
              </h2>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col sm:flex-row gap-5 bg-[#303030] p-4 w-full sm:w-[45rem] rounded-xl">
                  <div>
                    <img
                      src="https://yt3.ggpht.com/wvcJGyC5ZPkEEz8kaDT74twGLRsmrTrtQRL_W3V_6bG6GlV4ER8N6PaB1-H-nzS8HBkSHMIoWv5fgCQ=s640-c-fcrop64=1,00000000ffffffff-rw-nd-v1"
                      alt="Level UP"
                      className="w-full h-[16rem] object-cover rounded-xl sm:aspect-square"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="mb-3">
                      <h3 className="text-[#FFFFFF] text-[18px] font-bold leading-tight mb-3 sm:text-lg">
                        Level UP: The First Physical Meetup
                      </h3>
                      <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                        Date: 28/12/2024
                      </p>
                      <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                        Time: 10 : 00 +5.30 GMT/UTC
                      </p>
                      <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                        Venue: Colombo, Sri Lanka
                      </p>
                      <p className="text-[#a0a0a0] text-[14px] font-normal leading-normal mb-1 sm:text-sm">
                        LEVELSTAIR's first physical meetup
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 bg-[#303030] p-4 w-full sm:w-[45rem] rounded-xl">
                  <div>
                    <img
                      src="https://yt3.ggpht.com/T0d-oZNztpsbN_01xRCo088VlFimx3jyz4eHiionb78Tj6a-7W7QSOOSJkSLQy9LQZIuaQ44_P5j=s640-c-fcrop64=1,00000000ffffffff-rw-nd-v1"
                      alt="Level Zero"
                      className="w-full h-[16rem] object-cover rounded-xl sm:aspect-square"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="mb-3">
                      <h3 className="text-[#FFFFFF] text-[18px] font-bold leading-tight mb-3 sm:text-lg">
                        Level Zero Awareness Session
                      </h3>
                      <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                        Date: 17/10/2024
                      </p>
                      <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                        Time: 15 : 00 IST
                      </p>
                      <p className="text-[#a0a0a0] text-[14px] font-normal leading-normal mb-1 sm:text-sm">
                        Session included how game jam works, how to compete, and
                        rewards to be earned
                      </p>
                    </div>
                    <a
                      href="https://youtu.be/e2140VX9fi8"
                      className="text-[#D3B45F] text-[14px] font-normal leading-normal"
                    >
                      <button className="bg-[#D3B45F] text-[#ffffff] p-3 rounded-xl w-full sm:w-auto">
                        Visit Page
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 bg-[#303030] p-4 w-full sm:w-[45rem] rounded-xl">
                  <div>
                    <img
                      src="https://yt3.ggpht.com/T0d-oZNztpsbN_01xRCo088VlFimx3jyz4eHiionb78Tj6a-7W7QSOOSJkSLQy9LQZIuaQ44_P5j=s640-c-fcrop64=1,00000000ffffffff-rw-nd-v1"
                      alt="Level Zero"
                      className="w-full h-[16rem] object-cover rounded-xl sm:aspect-square"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="mb-3">
                      <h3 className="text-[#FFFFFF] text-[18px] font-bold leading-tight mb-3 sm:text-lg">
                        Level Zero
                      </h3>
                      <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                        Date: 04/11/2024
                      </p>
                      <p className="text-[#D3B45F] text-[14px] font-normal leading-normal mb-3 sm:text-sm">
                        Time: 00 : 00 : 00 IST
                      </p>
                      <p className="text-[#a0a0a0] text-[14px] font-normal leading-normal mb-1 sm:text-sm">
                        A beginner friendly game jam for aspiring game
                        developers to get started
                      </p>
                    </div>
                    <a
                      href="https://itch.io/jam/level-zero"
                      className="text-[#D3B45F] text-[14px] font-normal leading-normal"
                    >
                      <button className="bg-[#D3B45F] text-[#ffffff] p-3 rounded-xl w-full sm:w-auto">
                        Visit Page
                      </button>
                    </a>
                  </div>
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

export default Events;
