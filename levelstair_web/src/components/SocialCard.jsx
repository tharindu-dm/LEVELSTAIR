const SocialCard = ({ name, followers, iconBg, link, buttonText, icon }) => {
  const IconComponent = icon;
  return (
    <div className="flex flex-col gap-4 p-3 w-50 items-center justify-center aspect-square">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center p-1`}
        style={{ backgroundColor: iconBg }}
      >
        <IconComponent size={30} />
      </div>
      <h3 className="text-[#FFFFFF] text-sm md:text-base lg:text-lg font-semibold rounded-xl">{name}</h3>
      {followers && <h4 className="text-[#FFFFFF] text-xs md:text-sm lg:text-base font-normal rounded-xl">{followers}</h4>}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="p-2 sm:p-3 bg-[#D3B45F] text-[#FFFFFF] hover:text-[#000000] rounded-xl text-xs sm:text-sm md:text-base">
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default SocialCard;
