import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
// import { GithubStatsSection } from "@/components/sections/github-stats";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <GithubStatsSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
