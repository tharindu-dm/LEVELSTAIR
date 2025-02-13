import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us At Levelstair</title>
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
          content="Contact Us At Levelstair"
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

      <main>
        <div className="flex flex-col gap-10 px-4 py-10 @container items-center">
          <h1 className="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mb-9">
            Contact Us
          </h1>
          <p className="text-[#ffd700] text-base font-normal leading-normal max-w-[720px]">
            We are always here to help you. If you have any questions or need
            assistance, please feel free to contact us.
          </p>

          {/* Contact Form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[#ffd700] text-sm font-normal leading-normal"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="text-[#FFFFFF] text-base font-normal leading-normal bg-[#1A1A1A] border border-[#30270D] rounded-[8px] py-2 px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[#ffd700] text-sm font-normal leading-normal"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-[#FFFFFF] text-base font-normal leading-normal bg-[#1A1A1A] border border-[#30270D] rounded-[8px] py-2 px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[#ffd700] text-sm font-normal leading-normal"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="text-[#FFFFFF] text-base font-normal leading-normal bg-[#1A1A1A] border border-[#30270D] rounded-[8px] py-2 px-4"
              ></textarea>
            </div>
            <button className="bg-[#ffd700] text-[#090909] text-base font-normal leading-normal rounded-[8px] py-2 px-4">
              Send
            </button>
          </div>

          {/* Email Contact Option */}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-[#ffd700] text-base font-normal leading-normal">
              Alternatively, you can reach us directly via email at:
            </p>
            <a
              href="mailto:levelstair@gmail.com"
              className="text-[#ffffff] text-base font-normal leading-normal"
            >
              levelstair@gmail.com
            </a>
          </div>
        </div>
      </main>
      <hr className="border-4 border-[#ffd700] w-full" />
    </div>
  );
};

export default Contact;
