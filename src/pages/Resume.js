import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import LinkedInLogo from "../assets/LinkedIn.png";
import FlareFSLogo from "../assets/FlareFS.jpg";
import FoodFightLogo from "../assets/FoodFight.avif";
import JaneStreetLogo from "../assets/JaneStreet.png";
import UChicagoLogo from "../assets/UChicago.png";
import RetrogradeImage from "../assets/Retrograde.png";

const Resume = () => {
  const experiences = [
    {
      company: "Amyoli Internet Research (AIR) Lab",
      role: "Research Assistant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: UChicagoLogo,
      iconAlt: "UChicago Logo",
    },
    {
      company: "LinkedIn",
      role: "Software Engineer Intern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: LinkedInLogo,
      iconAlt: "LinkedIn Logo",
    },
    {
      company: "Flare",
      role: "Software Engineer Intern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: FlareFSLogo,
      iconAlt: "Flare FS Logo",
    },
    {
      company: "FoodFight",
      role: "Software Engineer Intern",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: FoodFightLogo,
      iconAlt: "FoodFight Logo",
    },
    {
      company: "Jane Street",
      role: "INSIGHT Participant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: JaneStreetLogo,
      iconAlt: "JaneStreet Logo",
    },
    {
      company: "University of Chicago",
      role: "Mathematics REU Participant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: UChicagoLogo,
      iconAlt: "UChicago Logo",
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
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex justify-center flex-col">
      <div className="text-center">
        <h1 className="text-2xl italic font-bold">Resume</h1>
      </div>
      {/* Experiences Section */}
      <div>
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Experiences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                role={exp.role}
                description={exp.description}
                iconSrc={exp.icon}
                iconAlt={exp.iconAlt}
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
      </div>
    </div>
  );
};

export default Resume;
