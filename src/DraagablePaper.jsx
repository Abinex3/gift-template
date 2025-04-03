import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import img19 from "./assets/img19.jpg";
import img20 from "./assets/img20.jpg";
import img21 from "./assets/img21.jpg";
import img22 from "./assets/img22.jpg";
import { Link } from "react-router-dom";

const DraggablePaper = ({ children, className }) => {
  const paperRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(Math.random() * 30 - 15);
  const [isDragging, setIsDragging] = useState(false);
  const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 });
  const highestZ = useRef(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY,
      }));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.stopPropagation(); // Stop the event from interfering with <Link>
    setIsDragging(true);
    setMouseStart({ x: e.clientX, y: e.clientY });
    paperRef.current.style.zIndex = highestZ.current++;
  };
  

  return (
    <div
      ref={paperRef}
      className={`paper ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

const LoveNotes = () => {
  return (
    <div className="love-container">
      <a href="/gift">
  <DraggablePaper className="heart"></DraggablePaper>
</a>

 

      <DraggablePaper className="image">
        <p className="p1">Last one time!!!</p>
        <p className="p1">Drag this! You will See your </p>
        <img src={img19} alt="Love" className="letter-image"/>
      </DraggablePaper>
     
      <DraggablePaper className="image">
      <p className="p1">Now You Will trust me</p>
        <img src={img22} alt="Cute" className="letter-image"/>
      </DraggablePaper>
      <DraggablePaper className="red">
        <p className="p1">Nee Avlo Azhagu!!😍</p>
        <p className="p2">But you don't Belive me <br/>(Just Drag thiss)</p>
      </DraggablePaper>
      <DraggablePaper>
        <p className="p1">Idha Naan Solliye</p>
        <p className="p1">Aganum <span style={{ color: "red" }}>❤️</span></p>
      </DraggablePaper>
      <DraggablePaper className="image">
        <p className="p1">Hey Doll! Our ghibli version ❤️</p>
        <p className="p1">You're my forever and always!!</p>
        <img src={img21} alt="Adorable" className="letter-image1"/>
      </DraggablePaper>


      <DraggablePaper>
        <p className="p1">2 Years of Love, laughter, <br></br> and Endless memories <br/>Till my last day, <br/>I'll be loving you.<br/>(Drag the papers to move Pattu!)</p>
      </DraggablePaper>
    </div>
  );
};

export default LoveNotes;
