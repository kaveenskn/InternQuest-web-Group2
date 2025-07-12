import FeaturesSection from "../FeaturesSection";
import { Target, Zap, Shield, Users } from "lucide-react";

const featuresList = [
  {
    icon: <Target size={28} />,
    title: "Smart Matching Algorithm",
    text: "Our AI-powered system analyzes skills, experience, and cultural fit to present you with the most relevant candidates.",
  },
  {
    icon: <Zap size={28} />,
    title: "Lightning Fast Hiring",
    text: "Reduce your time-to-hire by 70% with streamlined workflows, automated screening, and instant candidate tools.",
  },
  {
    icon: <Shield size={28} />,
    title: "Verified Talent Pool",
    text: "Every candidate goes through our comprehensive verification process to ensure high-quality connections.",
  },
 
];

const EmpFeatures= () => {
  return (
    <>
     
      <FeaturesSection
        title="Why Choose InternQuest?"
        description="Revolutionary features designed to streamline your hiring process and connect you with exceptional talent."
        features={featuresList}
      />
    </>
  );
};

export default EmpFeatures;
