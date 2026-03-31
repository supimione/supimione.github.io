"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Sedin Technologies",
    type: "Full-time",
    period: "Jul 2022 – Present",
    duration: "3 yrs 9 mos",
    location: "Chennai, India · Remote",
    points: [
      "Directed the end-to-end development lifecycle of web applications, consistently delivering high-quality results that exceed client expectations.",
      "Cultivated a collaborative team environment, fostering effective communication and enhancing overall productivity.",
      "Managed team dynamics and project workflows, optimizing task allocation to ensure timely completion of project objectives.",
      "Led the development of a Finance web application from scratch using React, Redux, and Kendo components, successfully deploying it for Production.",
    ],
    skills: ["styled-components", "JavaScript", "React", "Redux", "Kendo UI", "TypeScript"],
    highlight: true,
  },
  {
    role: "Frontend Developer",
    company: "Applaunch.io",
    type: "Full-time",
    period: "Nov 2021 – Jul 2022",
    duration: "9 mos",
    location: "Bengaluru, India · On-site",
    points: [
      "Utilized React JS components, forms, events, keys, routing, and animations to build dynamic user interfaces.",
    ],
    skills: ["JavaScript", "Redux.js", "React", "CSS"],
  },
  {
    role: "Frontend Developer",
    company: "Laungstack Solutions Pvt. Ltd.",
    type: "Full-time",
    period: "Apr 2020 – Sep 2021",
    duration: "1 yr 6 mos",
    location: "Kolkata, India · Remote",
    points: [
      "Developed full-stack websites from Front End to Back End using HTML, CSS, Bootstrap, JavaScript, and PHP.",
    ],
    skills: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    role: "Web Developer → Junior Web Developer",
    company: "Task Venturers",
    type: "Full-time",
    period: "Apr 2019 – Mar 2020",
    duration: "1 yr",
    location: "Kolkata, India · On-site",
    points: [
      "Designed and optimized client websites using WordPress, enhancing performance and user experience.",
    ],
    skills: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-blue-400 text-sm uppercase tracking-wider mb-4 text-center"
        >
          {">"} Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mb-14 max-w-lg mx-auto"
        >
          My professional journey so far
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 top-1 w-3 h-3 rounded-full -translate-x-[6px] ${
                  exp.highlight
                    ? "bg-blue-500 shadow-glow-sm"
                    : "bg-gray-600 border border-gray-500"
                }`} />

                <div className={`glass rounded-xl p-6 transition-all duration-300 ${
                  exp.highlight ? "glass-hover border-blue-500/10" : ""
                } hover:border-blue-500/20`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="text-blue-400 text-sm font-medium">
                        {exp.company}
                        <span className="text-gray-600"> · {exp.type}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                      <p className="text-gray-600 text-xs">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs mb-3">{exp.location}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-blue-500/60 mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
