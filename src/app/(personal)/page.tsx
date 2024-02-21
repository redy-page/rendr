import ContactSection from "@/components/personal/contact-section";
import EducationSection from "@/components/personal/education-section";
import ExperienceSection from "@/components/personal/experience-section";
import ProfileSection from "@/components/personal/profile-section";
import ProjectsSection from "@/components/personal/projects-section";
import SkillsSection from "@/components/personal/skills-section";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
