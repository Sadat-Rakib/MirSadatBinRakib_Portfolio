import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet-async";

// components
import { Loader, HomeInfo } from "../components";

// models
import { Island, Sky, Bird, Plane } from "../models";

// assets
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

// constants
import { SITE_NAME } from "../constants";

// home
const Home = () => {
  // refs
  const audioRef = useRef(new Audio(sakura));
  // update audio ref
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  // states
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // on music state change
  useEffect(() => {
    let audioRefValue = null;

    // if music is playing
    if (isPlayingMusic) {
      audioRef.current.play();
      audioRefValue = audioRef.current;
    }

    // pause music
    return () => {
      if (audioRefValue) audioRefValue?.pause();
    };
  }, [isPlayingMusic]);

  // Function to adjust island parameters based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null; // Island scale based on screen size
    let screenPosition = [0, -6.5, -43]; // Initial island position
    let rotation = [0.1, 4.7, 0]; // Initial island rotation

    // Adjust parameters for smaller screens
    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -5.5, -35];
    } else if (window.innerWidth < 1024) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6, -40];
    } else {
      // Use default parameters for larger screens
      screenScale = [1, 1, 1];
    }

    // Return adjusted island parameters
    return [screenScale, screenPosition, rotation];
  };

  // Function to adjust plane parameters based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    // Adjust parameters for smaller screens
    if (window.innerWidth < 768) {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, -1.5, 0];
    } else if (window.innerWidth < 1024) {
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -3.5, -3];
    } else {
      // Use default parameters for larger screens
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    // Return adjusted plane parameters
    return [screenScale, screenPosition];
  };

  // Destructuring assignment to get values from adjustIslandForScreenSize
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  // Destructuring assignment to get values from adjustPlaneForScreenSize
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Portfolio</title>
      </Helmet>

      {/* home section */}
      <section className="w-full h-screen relative">
        {/* Interactive info - positioned like a speech bubble */}
        <div className="absolute top-20 sm:top-24 left-0 right-0 z-10 flex items-center justify-center px-4">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        {/* Three.js Canvas Component - background */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          {/* Suspense for handling loading state */}
          <Suspense fallback={<Loader />}>
            {/* Directional light for realistic lighting */}
            <directionalLight position={[1, 1, 1]} intensity={2} />

            {/* Ambient light for overall scene illumination */}
            <ambientLight intensity={0.5} />

            {/* Hemisphere light for sky and ground color */}
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />

            {/* Bird component */}
            <Bird />

            {/* Sky component with rotation control */}
            <Sky isRotating={isRotating} />

            {/* Island component with dynamic position, scale, rotation, and interaction props */}
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />

            {/* Plane component with rotation control, scale, position, and initial rotation */}
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>

        {/* Sound On/Off toggle button */}
        <aside
          className="absolute bottom-4 left-4 z-20"
          title={isPlayingMusic ? "Sound On" : "Sound Off"}
        >
          <img
            src={isPlayingMusic ? soundon : soundoff}
            alt={isPlayingMusic ? "Sound On" : "Sound Off"}
            className="w-12 h-12 cursor-pointer object-contain hover:scale-110 transition-transform duration-200"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </aside>
      </section>
    </>
  );
};

export default Home;
