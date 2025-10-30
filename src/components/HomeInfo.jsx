import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { SITE_NAME } from "../constants";

// info box
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    {/* info text */}
    <p className="font-medium sm:text-xl text-center">{text}</p>

    {/* info right arrow */}
    <Link to={link} className="neo-brutalism-white neo-btn" title={btnText}>
      {btnText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

// render content (based upon current user cursor location)
const renderContent = {
  1: (
    <div className="speech-bubble bg-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg max-w-md mx-auto relative">
      <p className="text-center font-medium">
        Hi, I am <span className="font-semibold">Mir Sadat</span>👋
        <br />
        AI Prompt Engineer, Full Stack Developer & Creative AI Founder from Canada.
      </p>
      {/* Speech bubble arrow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-blue-500"></div>
      </div>
    </div>
  ),
  2: (
    <InfoBox
      text="I have collaborated with leading technology firms and research institutions to deliver AI powered full stack solutions that improved research throughput by 15%, increased customer repeat visits by 70%, boosted conversion rates by 9%, reduced API response times by 35%, generated over $40K in incremental revenue, and architected platforms serving 1,500+ users with 99.8% uptime while handling 10K+ monthly interactions."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led AI driven projects across enterprise systems, ecommerce platforms, and edtech infrastructure that improved research throughput by 15%, increased customer repeat visits by 70%, boosted conversion rates by 9%, reduced API response times by 35%, and generated over $40K in incremental revenue. Architected scalable web applications serving 1,500+ users with 99.8% uptime, handling 10K+ monthly interactions, and contributed to securing $10M+ in investor commitments through rapid prototyping and product validation. Explore the projects to see the impact."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Driving 70% increase in customer engagement through AI powered, scalable solutions. Building the next generation of high impact products."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

// home info
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
