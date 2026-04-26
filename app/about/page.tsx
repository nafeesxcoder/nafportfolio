"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "../components/Stars";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const tools = [
    { name: "React.js", icon: "fab fa-react", color: "#61dafb", level: "95%" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68a063", level: "90%" },
    { name: "Next.js", icon: "fas fa-code", color: "#ffffff", level: "92%" },
    {
      name: "Express.js",
      icon: "fas fa-server",
      color: "#ffffff",
      level: "88%",
    },
    {
      name: "MongoDB",
      icon: "fas fa-database",
      color: "#47A248",
      level: "85%",
    },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1", level: "85%" },
    {
      name: "Tailwind CSS",
      icon: "fab fa-css3-alt",
      color: "#38bdf8",
      level: "90%",
    },
    { name: "TypeScript", icon: "fab fa-js", color: "#3178c6", level: "85%" },
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032", level: "88%" },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ed", level: "75%" },
    {
      name: "GraphQL",
      icon: "fas fa-chart-line",
      color: "#e535ab",
      level: "70%",
    },
    {
      name: "PostgreSQL",
      icon: "fas fa-database",
      color: "#336791",
      level: "80%",
    },
  ];

  const experience = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Freelance",
      description:
        "Building web applications for global clients. Specializing in MERN stack and modern web technologies.",
      achievements: [
        "Delivered 30+ successful projects",
        "Maintained 100% client satisfaction",
        "Reduced project delivery time by 40%",
      ],
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc",
      description:
        "Worked on enterprise-level web applications and mentored junior developers.",
      achievements: [
        "Developed 15+ enterprise applications",
        "Improved application performance by 50%",
        "Led team of 3 junior developers",
      ],
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      company: "Creative Agency",
      description:
        "Created responsive websites and web applications for various clients.",
      achievements: [
        "Built 20+ responsive websites",
        "Implemented SEO best practices",
        "Increased client conversion rates by 35%",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University of Lucknow",
      year: "2021 - 2024",
      description: "Specialized in Computer Science and Programming",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Self-taught & Online Courses",
      year: "2019 - 2021",
      description: "MERN Stack, JavaScript, Python, Data Structures",
    },
  ];

  const certifications = [
    { name: "MERN Stack Certification", issuer: "Coursera", year: "2023" },
    { name: "Advanced React & Redux", issuer: "Udemy", year: "2023" },
    { name: "Node.js Certification", issuer: "FreeCodeCamp", year: "2022" },
    { name: "AWS Cloud Practitioner", issuer: "AWS", year: "2023" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Black Background */}
      <div className="absolute inset-0 bg-black" />
      <Stars />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-user-astronaut text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              About Me
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Get to Know Me
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Bio Section */}
          <div
            className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-user text-purple-400 text-2xl"></i>
              <h2 className="text-2xl font-bold text-white">Who Am I?</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a{" "}
                <span className="text-purple-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                with over 4+ years of experience in building modern, scalable,
                and user-friendly web applications. My journey in web
                development started when I built my first website at age 16, and
                since then, I've been passionate about creating digital
                solutions that solve real-world problems.
              </p>
              <p>
                I specialize in the{" "}
                <span className="text-purple-400">
                  MERN stack (MongoDB, Express.js, React, Node.js)
                </span>
                and modern frontend frameworks like Next.js. I believe in
                writing clean, maintainable code and delivering projects that
                exceed client expectations. My goal is to help businesses
                establish a strong online presence and achieve their digital
                goals.
              </p>
              <p>
                When I'm not coding, I love exploring new technologies,
                contributing to open-source projects, and sharing my knowledge
                with the developer community. I'm always eager to learn and take
                on new challenges that help me grow as a developer.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                value: "50+",
                label: "Projects",
                icon: "fa-code",
                color: "#8b5cf6",
              },
              {
                value: "30+",
                label: "Clients",
                icon: "fa-users",
                color: "#ec4899",
              },
              {
                value: "4+",
                label: "Years",
                icon: "fa-calendar",
                color: "#06b6d4",
              },
              {
                value: "12+",
                label: "Technologies",
                icon: "fa-microchip",
                color: "#10b981",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <i
                  className={`fas ${stat.icon} text-2xl mb-2 block`}
                  style={{ color: stat.color }}
                ></i>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div
            className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-code text-purple-400 text-2xl"></i>
              <h2 className="text-2xl font-bold text-white">
                Technical Skills
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <i
                        className={`${tool.icon} text-sm`}
                        style={{ color: tool.color }}
                      ></i>
                      <span className="text-gray-300 text-sm">{tool.name}</span>
                    </div>
                    <span className="text-purple-400 text-sm font-medium">
                      {tool.level}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: isVisible ? tool.level : "0%",
                        background: `linear-gradient(90deg, ${tool.color}, ${tool.color}80)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Education Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <i className="fas fa-briefcase text-purple-400 text-2xl"></i>
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-purple-500 pl-4">
                    <div className="text-sm text-purple-400">{exp.year}</div>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                    <p className="text-gray-300 text-sm mt-2">
                      {exp.description}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-400 text-xs"
                        >
                          <i className="fas fa-check-circle text-purple-400 text-xs"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <i className="fas fa-graduation-cap text-purple-400 text-2xl"></i>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-purple-500 pl-4">
                    <div className="text-sm text-purple-400">{edu.year}</div>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-gray-300 text-sm mt-2">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <i className="fas fa-certificate text-purple-400"></i>
                  Certifications
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2 border-b border-white/10"
                    >
                      <span className="text-gray-300 text-sm">{cert.name}</span>
                      <span className="text-gray-500 text-xs">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div
            className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-cogs text-purple-400 text-2xl"></i>
              <h2 className="text-2xl font-bold text-white">What I Do</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
                <i className="fas fa-globe text-purple-400 text-3xl mb-3 block"></i>
                <h3 className="text-white font-semibold mb-2">
                  Web Development
                </h3>
                <p className="text-gray-400 text-sm">
                  Modern, responsive websites with optimal performance
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
                <i className="fas fa-mobile-alt text-purple-400 text-3xl mb-3 block"></i>
                <h3 className="text-white font-semibold mb-2">
                  Responsive Design
                </h3>
                <p className="text-gray-400 text-sm">
                  Perfect display on all devices and screen sizes
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
                <i className="fas fa-database text-purple-400 text-3xl mb-3 block"></i>
                <h3 className="text-white font-semibold mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-400 text-sm">
                  Scalable APIs and database management
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center pt-8 transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Hire Me
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 py-3 rounded-full border-2 border-purple-400/50 text-white font-semibold hover:border-purple-400 hover:bg-purple-600/10 hover:scale-105 transition-all duration-300">
                  <i className="fas fa-eye mr-2"></i>
                  View My Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .delay-400 {
          transition-delay: 0.4s;
        }
        .delay-500 {
          transition-delay: 0.5s;
        }
        .delay-600 {
          transition-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
