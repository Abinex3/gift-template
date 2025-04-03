import { useEffect, useRef, useState } from "react";
import "./App.css"; 
import giftCard from './assets/giftCard.png';

const countsNeeded = 20;

export default function ChristmasPinata() {
  const [counts, setCounts] = useState(1);
  const presentRef = useRef(null);
  const canvasRef = useRef(null);
  let snowflakes = [];
  let maxSnowflakes = 300;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let lastNow = performance.now();

  useEffect(() => {
    const present = presentRef.current;
    present.addEventListener("click", handlePresentClick);

    return () => {
      present.removeEventListener("click", handlePresentClick);
    };
  }, [counts]);

  const handlePresentClick = () => {
    setCounts((prev) => {
      const newCount = prev + 1;
      if (presentRef.current) {
        presentRef.current.style.setProperty("--count", Math.ceil(newCount / 2));
        presentRef.current.classList.add("animate");
        setTimeout(() => {
          presentRef.current.classList.remove("animate");
        }, 300);
      }
      if (newCount >= countsNeeded) {
        presentRef.current.classList.add("open");
      }
      return newCount;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function rand(min, max) {
      return min + Math.random() * (max - min);
    }

    class Snowflake {
      constructor() {
        this.spawn(true);
      }

      spawn(anyY = false) {
        this.x = rand(0, width);
        this.y = anyY ? rand(-50, height + 50) : rand(-50, -10);
        this.xVel = rand(-0.05, 0.05);
        this.yVel = rand(0.02, 0.1);
        this.size = rand(5, 15);
      }

      update(elapsed) {
        this.x += this.xVel * elapsed;
        this.y += this.yVel * elapsed;
        if (this.y - this.size > height || this.x + this.size < 0 || this.x - this.size > width) {
          this.spawn();
        }
        this.render(ctx);
      }

      render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(97, 22, 22, 0.5)";
        ctx.fill();
      }
    }

    function render(now) {
      requestAnimationFrame(render);
      const elapsed = now - lastNow;
      lastNow = now;
      ctx.clearRect(0, 0, width, height);
      if (snowflakes.length < maxSnowflakes) {
        snowflakes.push(new Snowflake());
      }
      snowflakes.forEach((snowflake) => snowflake.update(elapsed));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      maxSnowflakes = Math.max(width / 10, 100);
    }

    window.addEventListener("resize", resize);
    resize();
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="gift-container">
      <canvas ref={canvasRef} className="canvas"></canvas>
      <div className="headline">Happy Anniversary</div>
      <div className="instructions">Abhi & Kowzz</div>
      <div className="present" ref={presentRef}>
        <img className="gift" src={giftCard} alt="the gift" />
        <div className="wiggle-container">
          <div className="rotate-container">
            <div className="bottom"></div>
            <div className="front"></div>
            <div className="left"></div>
            <div className="back"></div>
            <div className="right"></div>
            <div className="lid">
              <div className="lid-top"></div>
              <div className="lid-front"></div>
              <div className="lid-left"></div>
              <div className="lid-back"></div>
              <div className="lid-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
