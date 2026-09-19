import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { TerminalMantraSection } from "@/components/sections/terminal-mantra";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
// import { GithubStatsSection } from "@/components/sections/github-stats";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <HeroSection />
      <TerminalMantraSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* <GithubStatsSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
