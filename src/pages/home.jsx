import React from "react";
import { useEffect } from "react";
import SplitText from '../SplitText';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import LoveBack from "../assets/loveBack.jpg";
import '../App.css';
import Ballpit from "../reactBits/Ballpit/Ballpit";

const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };


const Home = () => {
    
  useEffect(() => {
    // Dynamically load Google Font
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }, []);

    return(
      
        <div
        style={{
          position: "relative",
          minHeight: "700px",
          maxHeight: "1050px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* Background Love Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            zIndex: 0,
          }}
        ></div>

        {/* Dark Overlay */}
        <div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${LoveBack})`,  // Correct way
    backgroundSize: "cover",          // Ensures image covers the full div
    backgroundPosition: "center",      // Centers the image
    backgroundRepeat: "no-repeat",     // Prevents repeating
    zIndex: 1,
  }}
></div>


        {/* Styled Text */}
        <div
          style={{
            position: "absolute",
            zIndex: 3,
            textAlign: "center",
            fontSize: "3.5rem",
            fontFamily: '"Dancing Script", cursive',
            fontWeight: "700",
            color: "black",
            textShadow: "4px 4px 12px rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          <SplitText
            text="Happy 3rd Anniversary My Queen (forever)"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          
        </div>

        {/* Hanging Love Frames (Drop from Above) */}
        <div
          style={{
            position: "absolute",
            zIndex: 4,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            top: "5%",
          }}
        >
          {[img1, img2, img3].map((src, index) => (
            <div
              key={index}
              className="hanging-frame"
              style={{
                position: "absolute",
                width: "140px",
                height: "140px",
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                border: "5px solid white",
                boxShadow: "0px 4px 15px rgba(255, 0, 0, 0.8)",
                animation: `dropIn 1.5s ease-out ${index * 0.5}s forwards, swing 3s ease-in-out infinite`,
                top: "-20px", // Start slightly off-screen
                left: `${30 + index * 20}%`,
                opacity: 0, // Initially hidden
              }}
            >
              {/* Hanging Thread Effect */}
              <div
                style={{
                  position: "absolute",
                  index: '2',
                  top: "-40px",
                  left: "50%",
                  width: "2px",
                  height: "50px",
                  backgroundColor: "white",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Balloons Background */}
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Ballpit
            count={150}
            gravity={0.7}
            friction={0.9}
            wallBounce={0.95}
            followCursor={true}
            colors={["#FF5733", "#FF1493", "#FF4500", "#FFD700"]}
          />
        </div>
      </div>
    )
}


export default Home;