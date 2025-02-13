import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import ExeEvent from "./pages/ExeEvent";
//import PixelElevatorScrollbar from './components/scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Levelstair - Game Development Community in Sri Lanka</title>
        <meta
          name="description"
          content="Join Levelstair, the leading game development community in Sri Lanka. Connect with local talent, participate in game jams, and elevate your game development skills."
        />
        <meta
          name="keywords"
          content="game development Sri Lanka, game dev community, Levelstair, Sri Lankan indie game developers, Sri Lankan Unity Developers, Sri Lankan GoDot Developers, Sri Lankan Unreal Developers, Sri Lanka Game Jams"
        />
        <meta
          property="og:title"
          content="Levelstair - Game Development Community in Sri Lanka"
        />
        <meta
          property="og:description"
          content="Connect with the top game developers in Sri Lanka. Join Levelstair and be part of an innovative game development community."
        />
        <meta
          property="og:image"
          content="https://www.levelstair.com/assets/images/ShareImage.png"
        />
        <meta property="og:url" content="https://www.levelstair.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.levelstair.com/assets/images/ShareImage.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* New meta tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.levelstair.com" />

        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Levelstair",
            description: "Game Development Community in Sri Lanka",
            url: "https://www.levelstair.com",
          })}
        </script>
      </Helmet>

      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/exe" element={<ExeEvent />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          {/*<PixelElevatorScrollbar />*/}
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
