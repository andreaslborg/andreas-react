// Importing necessary modules and components
import { work } from "../constants"; // Importing 'features' data from constants
import styles, { layout } from "../style"; // Importing styles and layout from 'style'
import Button from "./Button"; // Importing the Button component

// FeatureCard component to display individual feature cards
// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title, content, index, link }) => {
  return (
    <a 
      href={link} target="_blank" rel="noreferrer"
    >
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== work.length - 1 ? "mb-6" : "mb-0"} feature-card cursor-pointer sm:w-[600px] w-[400px]`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain grayscale" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
      </div>
    </div>
    </a>
  );
};

// Projects component to display a section of projects
const Work = () => {
  return (
    <div id="#projects" className={layout.section}>
      <div className="absolute z-[0] w-[20%] h-[60%] -right-[0%] rounded-full blue__gradient"></div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Previous work <br className="sm:block hidden" />experience.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Beside my studies in software engineering, I&apos;ve multiple years of experience in Esport, retail, and one year at a software company as a student developer.</p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {/* Mapping through 'features' array and rendering FeatureCard for each feature */}
        {work.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Work; // Exporting the Projects component
