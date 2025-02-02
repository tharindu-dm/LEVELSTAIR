import React from "react";

const images = require.context(
  "../assets/images/EXEpartners",
  false,
  /\.(png|jpe?g|svg)$/
);

const partners = [
  { name: "Graffon", link: "https://graffon.lk/" },
  {
    name: "BlackMirageStudio",
    link: "https://www.linkedin.com/company/black-mirage-studios/about/",
  },
  {
    name: "Codechefs",
    link: "https://www.linkedin.com/company/codechefs123/about/",
  },
  {
    name: "FriendlyGameDev",
    link: "https://www.linkedin.com/company/friendly-gamedev/",
  },
];

const ExeEvent = () => {
  const events = [
    {
      title: "Workshop 1",
      description: "Introduction to EXE and Theme Reveal",
      week: "Week 1",
    },
    {
      title: "Workshop 2",
      description: "Introduction to Game Design Document (GDD)",
      week: "Week 1",
    },
    {
      title: "GDD Creation",
      description: "7 Days to Create Your Game Design Document",
      week: "Week 2",
    },
    {
      title: "GDD Results",
      description: "Announcement of the Top Game Design Documents",
      week: "Week 2",
    },
    {
      title: "EXE Level Up",
      description:
        "Physical Meetup & Introduction to Game Development using GDD",
      week: "Week 3",
    },
    {
      title: "Game Development",
      description: "14 Days to Create Your Game Using Your GDD",
      week: "Week 3-4",
    },
    {
      title: "Judging Period",
      description: "Evaluation of Submitted Games",
      week: "Week 5",
    },
    {
      title: "Closing Ceremony",
      description: "Winners Announcement, Prize Distribution & Certificates",
      week: "Week 5",
    },
  ];

  const handleJoinClick = () => {
    window.open("#", "_blank"); // Add the link to the registration page
  };

  return (
    <div>
      <main className="flex flex-col gap-10 px-14 py-10 items-center">
        <h1 className="text-[#ffd700] tracking-light text-[40px] font-bold leading-tight">
          E&nbsp;X&nbsp;E
        </h1>
        <h3 className="text-[#a1a1a1] tracking-light text-[24px] font-bold leading-tight mb-9">
          The Flagship Event Of LEVELSTAIR
        </h3>
        <div className="flex flex-col gap-24 px-4 md:px-8 lg:px-16">
          {/* What is EXE Section */}
          <section className="flex flex-col justify-center items-center bg-zinc-900 rounded-lg p-8">
            <h3 className="text-[#ffd700] font-bold mb-4 text-base md:text-lg lg:text-2xl">
              What is EXE
            </h3>
            <p className="text-white text-center text-xs md:text-base lg:text-lg">
              EXE: The Flagship Event of LEVELSTAIR is a month long event series
              held in august aim to promote game development and game design
              among the students of the universities and schools among Sri
              Lanka. The event series will include workshops, webinars, game
              jams, and competitions to provide students with the opportunity to
              learn, create, and showcase their work.
            </p>
          </section>

          {/* Event Sponsors & Partners Section */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#ffd700] font-bold mb-4 text-base md:text-lg lg:text-2xl">
              Event Sponsors & Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[60%] mb-16 mt-2 px-4 ">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={images(`./${partner.name}.png`)}
                    alt={`${partner.name} logo`}
                    className="w-full max-h-60 object-contain rounded-md"
                  />
                </a>
              ))}
            </div>
            <h4 className="text-[#FFD700] text-center text-base md:text-lg lg:text-xl max-w-3xl mb-1">
              Become A Partner With Us...
            </h4>
            <p className="text-[#FFFFFF] text-center text-xs md:text-base lg:text-lg max-w-3xl">
              Contact us at levelstair@gmail.com
            </p>
          </div>

          {/* Plan Section */}
          <section className="flex flex-col items-center py-8">
            <h3 className="text-[#ffd700] font-bold mb-12 text-base md:text-lg lg:text-2xl">
              Event Plan
            </h3>
            <div className="relative flex flex-col gap-8 w-full max-w-3xl">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#ffd700] opacity-30 -translate-x-1/2" />

              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#ffd700] rounded-full -translate-x-1/2" />

                  {/* Week indicator */}
                  <div
                    className={`text-[#ffd700] font-medium text-sm md:text-base w-full md:w-1/2 text-center ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    {event.week}
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <h4 className="text-[#ffd700] font-semibold text-sm md:text-base mb-1">
                      {event.title}
                    </h4>
                    <p className="text-white text-xs md:text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="flex flex-col justify-center items-center bg-zinc-900 rounded-lg p-8">
            <h3 className="text-[#ffd700] font-bold mb-4 text-base md:text-lg lg:text-2xl">
              Categories
            </h3>
            <ul className="text-white text-xs md:text-base lg:text-lg list-disc pl-6">
              <li>
                University Category: Students from any faculty/school of any Sri
                Lankan university
              </li>
              <li>
                School Category: Students from any national/international school
                in Sri Lanka
              </li>
              <li>BONUS: NO AGE/GRADE LIMITS</li>
            </ul>
          </section>

          {/* Rules Section */}
          <section className="flex flex-col justify-center items-center bg-zinc-900 rounded-lg p-8">
            <h3 className="text-[#ffd700] font-bold mb-4 text-base md:text-lg lg:text-2xl">
              Rules
            </h3>
            <p className="text-white text-center text-xs md:text-base lg:text-lg italic">
              More details about the rules will be updated soon...
            </p>
          </section>

          {/* Reward Section */}
          <section className="flex flex-col justify-center items-center bg-zinc-900 rounded-lg p-8">
            <h3 className="text-[#ffd700] font-bold mb-4 text-base md:text-lg lg:text-2xl">
              Reward
            </h3>
            <div className="text-white text-xs md:text-base lg:text-lg">
              <div className="mb-6">
                <h4 className="font-bold mb-2">Winners</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Free Consultation on Game Monetization and Game Design
                  </li>
                  <li>
                    Team & Game showcase in the LEVELSTAIR YouTube Channel
                  </li>
                  <li>JAM WINNER Badge in LEVELSTAIR Discord Server</li>
                  <li>Certificate of Excellence</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">
                  Runner-ups | Honorable Mentions
                </h4>
                <ul className="list-disc pl-6">
                  <li>Game showcase in the LEVELSTAIR YouTube Channel</li>
                  <li>Certificate of Excellence</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">All Participants</h4>
                <ul className="list-disc pl-6">
                  <li>
                    Game showcase in the EXE:Gameplays compilation video shared
                    in LEVELSTAIR YouTube Channel
                  </li>
                  <li>Certificate of Participation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Submission Details Section */}
          <section className="flex flex-col justify-center items-center bg-zinc-900 rounded-lg p-8">
            <h3 className="text-[#ffd700] font-bold mb-4 text-base md:text-lg lg:text-2xl">
              Submission Details
            </h3>
            <p className="text-white text-center text-xs md:text-base lg:text-lg italic">
              Submission details will be provided during the event...
            </p>
          </section>

          {/* Join Us Section */}
          <section className="flex flex-col justify-center items-center bg-zinc-900 rounded-lg p-8">
            <h3 className="text-[#ffd700] font-bold mb-4 text-base md:text-lg lg:text-2xl">
              Join With Us
            </h3>
            <button
              onClick={handleJoinClick}
              className="bg-[#ffd700] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#ffed4a] transition-colors duration-200"
            >
              Register Now
            </button>
          </section>
        </div>
      </main>
      <hr className="border-4 border-[#ffd700] w-full" />
    </div>
  );
};

export default ExeEvent;
