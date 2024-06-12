import React, { useRef, useEffect } from 'react';

const TeamSection = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const slider = scrollRef.current;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('touchmove', handleTouchMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);

      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const teamMembers = [
    { name: "Dhiraj Nagani", role: "CTO & Founder", image: "/Images/team1.png" },
    { name: "Jane Doe", role: "CEO & Founder", image: "/Images/team2.png" },
    { name: "John Smith", role: "COO & Founder", image: "/Images/team3.png" },
    { name: "Emily Clark", role: "CFO & Founder", image: "/Images/team4.png" },
    { name: "Michael Brown", role: "CMO & Founder", image: "/Images/team5.png" },
    { name: "Jessica White", role: "CIO & Founder", image: "/Images/team6.png" },
    { name: "Chris Johnson", role: "CSO & Founder", image: "/Images/team7.png" },
  ];

  return (
    <div className="overflow-hidden relative w-full pl-20 max-container">
      <div className="flex space-x-4 overflow-x-scroll no-scrollbar mt-10" ref={scrollRef}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative min-w-[294px] h-[352px] flex justify-center team-member"
          >
            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />
            <div className="info-box">
              <div className="">
                <p className="font-inter font-semibold text-[#000049] text-[20px]">
                  {member.name}
                </p>
                <p className="font-inter text-[#000049] text-[14px]">
                  {member.role}
                </p>
              </div>
              <div className="">
                <img src="/Images/linkdinBlue.png" alt="LinkedIn" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
