"use client";

import { useState, useRef, useEffect } from "react";
import { Stars } from "../components/Stars";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Updated Skills based on your resume
  const skills = [
    {
      name: "JavaScript (ES6+)",
      icon: "fab fa-js",
      color: "#f7df1e",
      level: "90%",
    },
    { name: "TypeScript", icon: "fab fa-js", color: "#3178c6", level: "85%" },
    { name: "React.js", icon: "fab fa-react", color: "#61dafb", level: "92%" },
    { name: "Next.js", icon: "fas fa-code", color: "#ffffff", level: "90%" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68a063", level: "88%" },
    {
      name: "Express.js",
      icon: "fas fa-server",
      color: "#ffffff",
      level: "85%",
    },
    {
      name: "MongoDB",
      icon: "fas fa-database",
      color: "#47A248",
      level: "85%",
    },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1", level: "82%" },
    { name: "REST APIs", icon: "fas fa-plug", color: "#ffffff", level: "90%" },
    {
      name: "JWT Authentication",
      icon: "fas fa-shield-alt",
      color: "#ffffff",
      level: "88%",
    },
    {
      name: "Git & GitHub",
      icon: "fab fa-git-alt",
      color: "#f05032",
      level: "85%",
    },
    {
      name: "Tailwind CSS",
      icon: "fab fa-css3-alt",
      color: "#38bdf8",
      level: "90%",
    },
  ];

  const technicalSkills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "JWT Authentication",
    "Git & GitHub",
    "VPS Deployment",
    "Nginx",
    "Linux",
    "Tailwind CSS",
  ];

  // Updated Experience based on your resume
  const experience = [
    {
      year: "Jan 2025 – May 2025",
      title: "Web Development Intern",
      company: "Web Digitech IT Solution Pvt. Ltd.",
      description:
        "Developed and maintained client websites using React.js, Next.js, Node.js, and Express.js.",
      achievements: [
        "Developed and maintained 10+ client websites",
        "Built and integrated 15+ REST APIs with JWT-based authentication",
        "Managed MongoDB and MySQL databases for web applications",
        "Assisted in VPS deployment, domain configuration, and server maintenance",
        "Collaborated with teams to improve website performance and responsiveness",
      ],
    },
    {
      year: "2023 – Present",
      title: "Freelance Full Stack Developer",
      company: "Self-employed",
      description:
        "Building web applications for global clients. Specializing in MERN stack and modern web technologies.",
      achievements: [
        "Successfully developed and deployed 10+ client projects",
        "Experienced in full-stack development, VPS deployment, domain management",
        "Built responsive websites with Next.js, Node.js, MySQL",
        "Configured VPS hosting and domain setup for multiple clients",
      ],
    },
    {
      year: "2024",
      title: "Project Developer",
      company: "Timex Solution Inc",
      description:
        "Developed and deployed business website using Next.js, Node.js, and MySQL.",
      achievements: [
        "Developed and deployed a business website using Next.js",
        "Optimized SEO and performance for better user experience",
        "Built responsive logistics website with service management pages",
        "Configured VPS hosting and domain setup",
      ],
    },
  ];

  // Updated Education based on your resume
  const education = [
    {
      degree: "MCA (Pursuing)",
      institution: "Future University",
      year: "2025 – Present",
      description: "Master of Computer Applications",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "MJP Rohilkhand University",
      year: "2021 – 2024",
      description: "Specialized in Computer Science and Programming",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Self-taught & Online Courses",
      year: "2022 – 2023",
      description: "MERN Stack, JavaScript, Data Structures, Algorithms",
    },
  ];

  const languages = [
    { name: "English", level: "Professional Working", proficiency: 85 },
    { name: "Hindi", level: "Native", proficiency: 100 },
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
        {/* Header with Profile Info */}
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
            Nafees Ahmad
          </h1>
          <p className="text-purple-400 text-lg mt-2">
            MERN STACK & NEXT.JS DEVELOPER
          </p>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            MERN Stack Developer with hands-on experience building and deploying
            10+ web applications using Next.js, React.js, Node.js, Express.js,
            MongoDB, and MySQL. Skilled in REST API development, JWT
            authentication, VPS deployment, and responsive web design.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
            <i className="fas fa-phone text-purple-400 text-xl mb-2 block"></i>
            <p className="text-gray-300 text-sm">+91 7409233994</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
            <i className="fas fa-map-marker-alt text-purple-400 text-xl mb-2 block"></i>
            <p className="text-gray-300 text-sm">
              A-2/111 New Kondli, New Delhi, India
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
            <i className="fas fa-envelope text-purple-400 text-xl mb-2 block"></i>
            <p className="text-gray-300 text-sm">info@uniqueweblayer.com</p>
          </div>
        </div>

        {/* Bio Section */}
        <div
          className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <i className="fas fa-user text-purple-400 text-2xl"></i>
            <h2 className="text-2xl font-bold text-white">
              Professional Summary
            </h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm a{" "}
              <span className="text-purple-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              with hands-on experience building and deploying 10+ web
              applications using Next.js, React.js, Node.js, Express.js,
              MongoDB, and MySQL. Skilled in REST API development, JWT
              authentication, VPS deployment, and responsive web design.
            </p>
            <p>
              Experienced in delivering scalable solutions and maintaining
              production-ready applications. I have successfully developed and
              deployed multiple client projects across business, logistics,
              portfolio, and service-based domains.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            {
              value: "30+",
              label: "Projects",
              icon: "fa-code",
              color: "#8b5cf6",
            },
            {
              value: "20+",
              label: "Clients",
              icon: "fa-users",
              color: "#ec4899",
            },
            {
              value: "2+",
              label: "Years",
              icon: "fa-calendar",
              color: "#06b6d4",
            },
            {
              value: "15+",
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
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div
          className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-200 mt-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <i className="fas fa-code text-purple-400 text-2xl"></i>
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {technicalSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-gray-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <i
                      className={`${skill.icon} text-sm`}
                      style={{ color: skill.color }}
                    ></i>
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                  </div>
                  <span className="text-purple-400 text-sm font-medium">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: isVisible ? skill.level : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Experience */}
          <div
            className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-briefcase text-purple-400 text-2xl"></i>
              <h2 className="text-2xl font-bold text-white">Work Experience</h2>
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

          {/* Education & Languages */}
          <div className="space-y-8">
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
            </div>

            {/* Languages */}
            <div
              className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-450 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <i className="fas fa-language text-purple-400 text-2xl"></i>
                <h2 className="text-2xl font-bold text-white">Languages</h2>
              </div>
              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-purple-400 text-sm">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                        style={{
                          width: isVisible ? `${lang.proficiency}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Key Achievements Section (No Duplicate Projects) */}
        <div
          className={`bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 transition-all duration-700 delay-500 mt-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <i className="fas fa-trophy text-purple-400 text-2xl"></i>
            <h2 className="text-2xl font-bold text-white">Key Achievements</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <i className="fas fa-check-circle text-purple-400 text-lg mt-0.5"></i>
              <div>
                <h3 className="text-white font-semibold">
                  10+ Successful Projects
                </h3>
                <p className="text-gray-400 text-sm">
                  Delivered across business, logistics, portfolio, and
                  service-based domains
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <i className="fas fa-rocket text-purple-400 text-lg mt-0.5"></i>
              <div>
                <h3 className="text-white font-semibold">15+ REST APIs</h3>
                <p className="text-gray-400 text-sm">
                  Built and integrated with JWT-based authentication
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <i className="fas fa-server text-purple-400 text-lg mt-0.5"></i>
              <div>
                <h3 className="text-white font-semibold">
                  VPS Deployment Expert
                </h3>
                <p className="text-gray-400 text-sm">
                  Domain configuration, server maintenance, and hosting setup
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
              <i className="fas fa-clock text-purple-400 text-lg mt-0.5"></i>
              <div>
                <h3 className="text-white font-semibold">
                  24/7 Client Support
                </h3>
                <p className="text-gray-400 text-sm">
                  Round-the-clock availability for urgent fixes and updates
                </p>
              </div>
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
        .delay-450 {
          transition-delay: 0.45s;
        }
        .delay-500 {
          transition-delay: 0.5s;
        }
        .delay-550 {
          transition-delay: 0.55s;
        }
        .delay-600 {
          transition-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
