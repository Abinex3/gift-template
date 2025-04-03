import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import '../App.css';
import ImageTrail from '../ImageTrail';


const TextShow = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
      
        <div>
              <div className={`container ${isOpen ? 'open-bg' : 'close-bg'}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
  <div style={{ height: '500px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <ImageTrail
      items={[
        img4,
        img5,
        img6,
        img7,
        img8  
      ]}
      variant={1}
      speed={0.7} 
      easing="easeInOutQuad" 
    />

    <label className="heart-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <motion.div
        animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="heart"
        style={{ cursor: 'pointer' }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg" alt="Heart" style={{ width: '100px', height: '100px' }} />
      </motion.div>
      <input type="checkbox" className="hidden" onChange={() => setIsOpen(!isOpen)} />
    </label>
    
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`message ${isOpen ? 'open' : 'closed'}`}
      style={{ textAlign: 'center', marginTop: '20px' }}
    >
      <h1 class="romantic-text">💕 Happily Completed Three Years of Love & Togetherness! 💖</h1>
      <p className="handwriting-font">
      When I first met you, I had no idea I was gonna get this attached. As the days went by, I could feel myself slowly falling in love with you. 
       When I think about you, I realize that you are the one that holds the key to my heart. 
        i may not be the most perfect guy or the most amazing 
      but i'll put my all into our relationship. i'll treat you like a queen.
       i will give reassurance and loyalty and love and care and affection and attention and 
       i'll try to make you feel like you found home. i really want to do my best for youu!! That's my promise to you!! I love youuu Kowzzz
      </p>
    </motion.div>
  </div>
</div>
      </div>
    )
}


export default TextShow;