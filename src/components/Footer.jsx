import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center">
          <p className="text-[#D3B45F] text-base font-normal leading-normal">
            © {new Date().getFullYear()} LEVELSTAIR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
