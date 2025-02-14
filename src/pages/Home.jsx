import React from "react";
import Slider from "react-slick";
import SocialCard from "../components/SocialCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import heroImage from "../assets/images/wallpaper.jpg";
import { Helmet } from "react-helmet";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaReddit,
  FaItchIo,
} from "react-icons/fa";

const images = require.context(
  "../assets/images/partners",
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

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    iconBg: "#0077B5",
    link: "https://www.linkedin.com/company/levelstair/",
    buttonText: "FOLLOW",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    iconBg: "#FF0000",
    link: "https://www.youtube.com/@LEVELSTAIROfficial",
    buttonText: "SUBSCRIBE",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    iconBg: "#1877F2",
    link: "https://www.facebook.com/LEVELSTAIR/",
    buttonText: "FOLLOW",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    iconBg: "#d34297",
    link: "https://www.instagram.com/levelstair_official/",
    buttonText: "Follow",
  },
  {
    name: "Discord Server",
    icon: FaDiscord,
    iconBg: "#5865F2",
    link: "https://discord.gg/xauShxdx6u",
    buttonText: "JOIN NOW",
  },
  {
    name: "Subreddit",
    icon: FaReddit,
    iconBg: "#f4400a",
    link: "https://www.reddit.com/r/LEVELSTAIR/",
    buttonText: "JOIN NOW",
  },
  {
    name: "Itchi.io",
    icon: FaItchIo,
    iconBg: "#ff6160",
    link: "https://levelstair.itch.io/",
    buttonText: "FOLLOW",
  },
];

const testimonials = [
  {
    content:
      "Joining Levelstair has been a pivotal step in my journey as an aspiring game developer. Through this community I have fostered new connections among fellow game development enthusiasts along with a few 3d modellers and animators. Levelstair is a welcoming community where any person interested in the field of game development can find a safe space to discuss their projects and ask for assistance in their game development tasks",
    author: "Pahan Amarasekara",
    role: "Unreal Engine Developer",
  },
  {
    content:
      "I've been always fascinated about the field game development and i choose it as my career choice after my ALs in 2023. I currently work on my own buisness and brand while doing a degree at AMDT university. I always used to think there are not many game developers in srilanka, and then I found the levelstair community. There are already 100+ members in this community, everyone is supportive and very friendly. I usually always when i cant figure something out i used to go to reddit and ask from people. And now i ask can ask from Levelstair community where many smart devs and artists are gathered. This industry can be sri lanka's future and this community is just a start of it",
    author: "Kavindu Nethsara",
    role: "Founder - Black Mirage Studio",
  },
  {
    content:
      "I head about Levelstair through a friend of mine Kavindu. I love learning about 3d animations and general video eiditing stuff. And when i joined Levelstair group there were so many people in their with way much knowladge and experience than me and it has been really helpful to get knowladge from them whenever i'm in trouble realtred to animations and stuff. Even for my Degree work people in Levelstair have given me great advices in many situations. Overal i would say Levelstair is a great community in which everyone can learn from each other and help each other grow.",
    author: "Nisitha Vihanga",
    role: "3D Designer/Animator",
  },
  {
    content:
      "LevelStair community has been a great help and encouragement for me to develop as a game designer/developer and it has become a great place for me to meet like-minded people.",
    author: "Shehan Sangeet",
    role: "Java/Unity3D Developer",
  },
  {
    content:
      "Joined recently so I'm not the best person to testify but so far everyone has been professional and kind, they are open to feedback and don't criticise anyone for thier tastes in their preferred content and entertainment all in all an amazing experience so far.",
    author: "Thanuka Perera",
    role: "Aspiring Game Developer",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <Helmet>
        <title>Levelstair - Game Development Community in Sri Lanka</title>
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
          content="Levelstair - Game Development Community in Sri Lanka"
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

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-85 z-10"></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <h1 className="text-[#ffd700] text-2xl md:text-3xl lg:text-6xl font-bold leading-tight tracking-[-0.015em] text-center">
            WELCOME TO LEVELSTAIR
          </h1>
          <p className="text-[#ffd700] text-lg md:text-xl lg:text-2xl font-normal leading-normal mt-4 text-center">
            The Game Development Community
          </p>
        </div>
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-[100vh] object-cover"
        />
      </div>

      <hr className="border-4 border-[#ffd700] w-full mb-12" />

      {/* Our Partners Section */}
      <div className="flex flex-col items-center justify-center gap-12 py-16">
        <h2 className="text-[#ffd700] text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em] text-center">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full px-4">
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
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col items-center justify-center gap-12 py-16">
        <h2 className="text-[#ffd700] text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em] text-center">
          Our Digital Footprint
        </h2>
        <div className="flex flex-wrap justify-center gap-5 w-full px-4">
          {socialLinks.map((social, index) => (
            <SocialCard
              key={index}
              {...social}
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Testimonials Section with Carousel */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#ffd700] text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">
            Testimonials
          </h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <hr className="border-4 border-[#ffd700] w-full" />
    </div>
  );
};

export default Home;
