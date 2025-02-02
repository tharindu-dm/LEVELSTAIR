const TestimonialCard = ({ content, author, role }) => {
  // Trim content if it exceeds 180 characters
  const trimmedContent = content.length > 180 ? `${content.slice(0, 180)}...` : content;

  return (
    <div className="bg-[#2A2A2A] rounded-lg shadow-lg p-8 m-2 transition duration-300 ease-in-out h-[300px]">
      <p className="text-[#FFFFFF] leading-loose text-xs md:text-base lg:text-lg mb-4">
        {trimmedContent}
      </p>
      <div className="flex items-center">
        <div>
          <p className="text-[#ffd700] font-semibold text-base md:text-lg lg:text-xl">
            ~ {author}
          </p>
          <p className="text-[#A0A0A0] text-xs md:text-xs lg:text-base">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
