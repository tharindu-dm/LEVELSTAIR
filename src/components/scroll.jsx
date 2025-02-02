import React, { useState, useEffect } from 'react';

const PixelElevatorScrollbar = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startDragY, setStartDragY] = useState(0);
  const [startScrollY, setStartScrollY] = useState(0);
  const [thumbPosition, setThumbPosition] = useState({ top: 0, height: 40 });

  // Calculate the scroll thumb position and size
  const calculateScrollThumbPosition = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const navHeight = 80; // Adjust this to match your navbar height
    const scrollableHeight = documentHeight - windowHeight;
    
    // Calculate available scroll track height (excluding navbar)
    const trackHeight = windowHeight - navHeight;
    
    // Calculate thumb height proportional to content
    const thumbHeight = Math.max((windowHeight / documentHeight) * trackHeight, 40);
    
    // Calculate thumb position
    const maxScroll = trackHeight - thumbHeight;
    const scrollPercentage = window.scrollY / scrollableHeight;
    const thumbPosition = navHeight + (scrollPercentage * maxScroll);
    
    return {
      height: thumbHeight,
      top: thumbPosition
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isDragging) {
        setThumbPosition(calculateScrollThumbPosition());
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        const deltaY = e.clientY - startDragY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollableHeight = documentHeight - windowHeight;
        const trackHeight = windowHeight - 80; // Subtract navbar height
        
        const scrollDelta = (deltaY / trackHeight) * scrollableHeight;
        const newScrollPosition = startScrollY + scrollDelta;
        
        window.scrollTo(0, newScrollPosition);
        
        // Update thumb position in real-time
        setThumbPosition(calculateScrollThumbPosition());
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = 'auto';
      document.body.style.pointerEvents = 'auto';
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startDragY, startScrollY]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartDragY(e.clientY);
    setStartScrollY(window.scrollY);
    // Prevent text selection while dragging
    document.body.style.userSelect = 'none';
    document.body.style.pointerEvents = 'none';
  };

  return (
    <>
      {/* Hide native scrollbar - more comprehensive approach */}
      <style jsx global>{`
        html {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        body {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          overflow-y: scroll !important;
        }
        ::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          background: transparent !important;
        }
      `}</style>
      
      {/* Custom scrollbar track */}
      <div className="hidden md:block fixed right-4 top-0 bottom-0 w-6 pointer-events-none z-50">
        {/* Track line */}
        <div className="absolute left-1/2 top-20 bottom-4 w-0.5 bg-gray-600 transform -translate-x-1/2" />
      </div>

      {/* Scroll thumb (elevator) */}
      <div
        className="hidden md:block fixed right-2 w-10 cursor-pointer transition-colors hover:brightness-110 z-50"
        style={{
          top: thumbPosition.top,
          height: thumbPosition.height
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Pixel art elevator */}
        <div className="relative w-full h-full">
          {/* Top cap */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#ffd700]" style={{
            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
          }} />
          
          {/* Main body */}
          <div className="absolute top-2 bottom-2 left-1 right-1 bg-[#ffd700]">
            {/* Pixel details */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-black" />
            <div className="absolute top-1 right-1 w-1 h-1 bg-black" />
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-black" />
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-black" />
          </div>
          
          {/* Bottom cap */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ffd700]" style={{
            clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)'
          }} />
        </div>
      </div>
    </>
  );
};

export default PixelElevatorScrollbar;