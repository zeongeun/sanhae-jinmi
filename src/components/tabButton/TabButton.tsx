"use client";

import { useEffect, useState } from "react";

interface Links {
  links: string[];
  activeSection: string;
}

function Nav({ links, activeSection }: Links) {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="w-full py-5 fixed flex flex-row items-center justify-center bg-gray-200">
      {links.map((link, index) => (
        <div
          onClick={() => scrolltoHash(link)}
          key={index}
          className={`px-5 cursor-pointer ${activeSection == link && "text-orange-500"}`}
        >
          {link}
        </div>
      ))}
    </div>
  );
}

export default function TabButton() {
  let [activeSection, setActiveSection] = useState("about");

  let links = ["about", "projects", "skills", "articles"];

  useEffect(() => {
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");
    let articles = document.getElementById("articles");

    let sections = [about, projects, skills, articles];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "about") {
            setActiveSection("about");
          }
          if (entry.target.id == "projects") {
            setActiveSection("projects");
          }
          if (entry.target.id == "skills") {
            setActiveSection("skills");
          }
          if (entry.target.id == "articles") {
            setActiveSection("articles");
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Nav links={links} activeSection={activeSection} />
      <div
        id="about"
        className="w-screen h-screen bg-blue-500 flex flex-col justify-center items-center"
      >
        <h1 className="text-white text-6xl">About</h1>
      </div>
      <div
        id="projects"
        className="w-screen h-screen bg-green-500 flex flex-col justify-center items-center"
      >
        <h1 className="text-white text-6xl">Projects</h1>
      </div>
      <div
        id="skills"
        className="w-screen h-screen bg-yellow-500 flex flex-col justify-center items-center"
      >
        <h1 className="text-white text-6xl">Skills</h1>
      </div>

      <div
        id="articles"
        className="w-screen h-screen bg-red-500 flex flex-col justify-center items-center"
      >
        <h1 className="text-white text-6xl">Articles</h1>
      </div>
    </div>
  );
}
