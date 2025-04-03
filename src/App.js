import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import img12 from "./assets/img12.jpg";
import img13 from "./assets/img13.jpg";
import img14 from "./assets/img14.jpg";
import img15 from "./assets/img15.jpg";
import img16 from "./assets/img16.jpg";
import img17 from "./assets/img17.jpg";
import img18 from "./assets/img18.jpg";
import GridMotion from './GridMotion';
import DraagablePaper from "./DraagablePaper";
import '../src/App.css';
import Gift from "./gift";
import Home from "./pages/home";
import TextShow from "./pages/text";


// Preloader Component
const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Call parent function to remove loader
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="preloader">
      <div className="heart_pre"></div>
      <p className="loading-text">Loading with Love...</p>
    </div>
  );
};

// Function to check current URL and conditionally render components
function ConditionalComponents() {
  const location = useLocation();
  const isGiftPage = location.pathname === "/gift"; // Check if the route is '/gift'

  if (isGiftPage) {
    return <Gift />;
  }

  const items = [
  
    <img key="jsx-item-1" src={img5} alt="img1" style={{ width: '220px', height: '220px', borderRadius: '10px' }} />,
    
    <img key="jsx-item-3" src={img3} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-4" src={img1} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-5" src={img8} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-6" src={img4} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-7" src={img10} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-8" src={img2} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-9" src={img7} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    
    <img key="jsx-item-2" src={img11} alt="img2" style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px', border: '2px solid #000' }} />,
    <img key="jsx-item-11" src={img9} alt="img1" style={{ width: '210px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-12" src={img12} alt="img1" style={{ width: '160px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-13" src={img13} alt="img1" style={{ width: '150px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-14" src={img14} alt="img1" style={{ width: '150px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-15" src={img15} alt="img1" style={{ width: '150px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-16" src={img16} alt="img1" style={{ width: '300px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-17" src={img17} alt="img1" style={{ width: '290px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-18" src={img18} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-19" src={img15} alt="img1" style={{ width: '150px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-20" src={img14} alt="img1" style={{ width: '150px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-21" src={img10} alt="img1" style={{ width: '190px', height: '250px', borderRadius: '10px' }} />,
    <img key="jsx-item-22" src={img6} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-23" src={img8} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-24" src={img2} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-25" src={img7} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
    <img key="jsx-item-26" src={img6} alt="img1" style={{ width: '220px', height: '240px', borderRadius: '10px' }} />,
  ]

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <TextShow />
      <GridMotion items={items} />
      <DraagablePaper />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <ConditionalComponents />
        </Router>
      )}
    </div>
  );
}

export default App;
