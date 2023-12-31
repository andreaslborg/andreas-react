// Importing necessary modules and components
import { features } from "../constants"; // Importing 'features' data from constants
import styles, { layout } from "../style"; // Importing styles and layout from 'style'
import Button from "./Button"; // Importing the Button component

// FeatureCard component to display individual feature cards
// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title, content, index, link }) => {
  return (
    <a 
      href={link} target="_blank" rel="noreferrer"
    >
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card cursor-pointer sm:w-[600px] w-[400px]`}>
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
const Projects = () => {
  return (
    <div id="#projects" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Projects that I have <br className="sm:block hidden" />worked on.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. But with hundreds of credit cards on the market.</p>
        <Button /> {/* Rendering the Button component */}
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {/* Mapping through 'features' array and rendering FeatureCard for each feature */}
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects; // Exporting the Projects component
