import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import EducationCard from "../components/EducationCard";
import LinkedInLogo from "../assets/LinkedIn.png";
import FlareFSLogo from "../assets/FlareFS.jpg";
import FoodFightLogo from "../assets/FoodFight.avif";
import JaneStreetLogo from "../assets/JaneStreet.png";
import UChicagoLogo from "../assets/UChicago.png";
import RetrogradeImage from "../assets/Retrograde.png";
import ConfidoLogo from "../assets/Confido.png";

const Resume = () => {
  const experiences = [
    {
      company: "Confido",
      role: "Software Engineer",
      icon: ConfidoLogo,
      iconAlt: "Confido Logo",
      link: "https://www.confidotech.com/blogs/a-note-from-our-founders-raising-our-series-a-to-build-the-future-of-cpg-finance",
      linkText: "Read about our Series A here.",
    },
    {
      company: "Amyoli Internet Research (AIR) Lab",
      role: "Research Assistant",
      icon: UChicagoLogo,
      iconAlt: "UChicago Logo",
      description: "Researching AI content moderation policies.",
      link: "https://arxiv.org/abs/2506.14018",
      linkText: "Paper accepted into USENIX Security 2025.",
    },
    {
      company: "LinkedIn",
      role: "Software Engineer Intern",
      icon: LinkedInLogo,
      iconAlt: "LinkedIn Logo",
      description: "APIs for LinkedIn Premium",
    },
    {
      company: "Flare",
      role: "Software Engineer Intern",
      icon: FlareFSLogo,
      iconAlt: "Flare FS Logo",
      description: "Financial Ops for Nonprofits",
    },
    {
      company: "Jane Street",
      role: "INSIGHT Participant",
      icon: JaneStreetLogo,
      iconAlt: "JaneStreet Logo",
    },
    {
      company: "FoodFight",
      role: "Software Engineer Intern",
      icon: FoodFightLogo,
      iconAlt: "FoodFight Logo",
      description: "Bet on sports with food!",
    },
    {
      company: "University of Chicago",
      role: "Mathematics REU Participant",
      icon: UChicagoLogo,
      iconAlt: "UChicago Logo",
      link: "https://math.uchicago.edu/~may/REU2022/REUPapers/Lee,Rachel.pdf",
      linkText: "Paper on Shift Classification",
    },
  ];

  const projects = [
    {
      title: "Benchmarking LLMs in Functional Programming",
      date: "November-December 2024",
      description:
        "Introducing FuncyBench, a Racket code evaluation framework for LLMs. Presented results in a university poster session.",
      image: RetrogradeImage,
    },
    {
      title: "Retrograde",
      date: "April-May 2024",
      description: "AI chatbot on the Game Boy Advance :D",
      image: RetrogradeImage,
    },
  ];

  const education = [
    {
      title: "University of Chicago",
      date: "September 2021 - June 2025",
      description: "M.S. in Computer Science & B.S. in Mathematics",
      icon: UChicagoLogo,
      iconAlt: "UChicago Logo",
      notableCoursework:
        "Operating Systems, Distributed Systems, Parallel Programming, Deep Learning Systems, Generative AI, Intro to Blockchain, Algorithmic Game Theory, Computer Architecture, Computer Systems, Theory of Algorithms.",
      involvement:
        "Society of Women+ in Math (Co-President), Math Circles Volunteer, The Derivatives Group (Director of Outreach) ",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex justify-center flex-col">
      <div className="text-center">
        <h1 className="text-2xl italic font-bold">Resume</h1>
      </div>
      {/* Experiences Section */}
      <div>
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Experiences</h2>
          <div className="grid md:grid-cols-1 items-center">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                role={exp.role}
                description={exp.description}
                iconSrc={exp.icon}
                iconAlt={exp.iconAlt}
                link={exp.link}
                linkText={exp.linkText}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Projects</h2>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              image={project.image}
              imageRight={index % 2 === 1}
            />
          ))}
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-6">Education</h2>
          <div className="grid md:grid-cols-1 items-center">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                title={edu.title}
                date={edu.date}
                description={edu.description}
                notableCoursework={edu.notableCoursework}
                involvement={edu.involvement}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
