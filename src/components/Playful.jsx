import React, { useState, useEffect } from "react";

const Playful = () => {
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Get Eye 1 Position
      let eye1 = document.getElementById("eye1").getBoundingClientRect();
      let eye1X = eye1.left + eye1.width / 2;
      let eye1Y = eye1.top + eye1.height / 2;
      let deltaX1 = mouseX - eye1X;
      let deltaY1 = mouseY - eye1Y;
      let angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
      setRotateLeft(angle1+180);

      // Get Eye 2 Position
      let eye2 = document.getElementById("eye2").getBoundingClientRect();
      let eye2X = eye2.left + eye2.width / 2;
      let eye2Y = eye2.top + eye2.height / 2;
      let deltaX2 = mouseX - eye2X;
      let deltaY2 = mouseY - eye2Y;
      let angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
      setRotateRight(angle2+180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Eye 1 */}
          <div id="eye1" className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center">
              <div
                style={{ transform: `rotate(${rotateLeft}deg)` }}
                className="line absolute w-full h-10 flex items-center"
              >
                <div className="w-7 h-7 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div id="eye2" className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center">
              <div
                style={{ transform: `rotate(${rotateRight}deg)` }}
                className="line absolute w-full h-10 flex items-center"
              >
                <div className="w-7 h-7 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playful;
