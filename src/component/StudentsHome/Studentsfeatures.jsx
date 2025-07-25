import FeaturesSection from "../FeaturesSection";
import { GraduationCap, Search, Star, MessageSquare } from "lucide-react";

const studentFeaturesList = [
  {
    icon: <Search size={28} />,
    title: "Personalized Job Matching",
    text: "Our platform suggests internships and jobs that align with your skills, interests, and career goals.",
  },
  {
    icon: <Star size={28} />,
    title: "Verified Company Listings",
    text: "Apply confidently to trusted companies that have been vetted for genuine opportunities and fair practices.",
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Skill-Based Learning & Mentorship",
    text: "Access curated resources, skill-building paths, and connect with mentors for career guidance.",
  },
];

const StudentFeatures = () => {
  return (
    <FeaturesSection
      title="Explore Opportunities with InternQuest"
      description="Built for students like you – find the right internships, gain real-world experience, and grow your career with smart tools and support."
      features={studentFeaturesList}
    />
  );
};

export default StudentFeatures;
