// Importing necessary modules and components
import { features } from "../constants"; // Importing 'features' data from constants
import styles, { layout } from "../style"; // Importing styles and layout from 'style'
import Button from "./Button"; // Importing the Button component

// FeatureCard component to display individual feature cards
const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={``}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      {/* The rest of the feature card content can be added here */}
      <div>
        <p className={``}>{content}</p>
      </div>
    </div>
  );
};

// Projects component to display a section of projects
const Projects = () => {
  return (
    <section id="features" className={layout.section}>
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
    </section>
  );
};

export default Projects; // Exporting the Projects component
