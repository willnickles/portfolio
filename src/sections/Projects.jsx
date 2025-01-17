import React from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import appScreenshot from "../assets/appScreenshot.png";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description:
        "Created a full-stack task management app with Angular and Django REST Framework, implementing JWT authentication for secure CRUD operations. Developed a dynamic UI for task creation and detailed views, and seamless frontend-backend integration using TypeScript and API endpoints.",
      image: appScreenshot,
      githubLink: "https://github.com/willnickles/task-manager-v1",
    },
    // Add more projects here
  ];

  return (
    <Section id="projects" title="My Projects" bgColor="bg-red-500">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
