const TestimonialCard = ({ content, author, role }) => {
  return (
    <div className="bg-[#2A2A2A] rounded-lg shadow-lg p-6 m-2 transition duration-300 ease-in-out ">
      <p className="text-[#FFFFFF] text-xs md:text-base lg:text-lg mb-4">{content}</p>
      <div className="flex items-center">
        <div>
          <p className="text-[#D3B45F] font-semibold text-base md:text-lg lg:text-xl">~ {author}</p>
          <p className="text-[#A0A0A0] text-xs md:text-xs lg:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
