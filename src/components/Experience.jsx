import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Developer',
    org: 'I Am Coming | Australia',
    period: 'Jan 2025 – Present',
    points: [
      'Led full-stack delivery for a multi-tenant SaaS, improving development and release efficiency.',
      'Engineered role-based access control and secure authentication to enhance system reliability.',
      'Optimized UI and APIs (Next.js/TypeScript, Node/FastAPI) for smoother performance and faster response.',
      'Built automated CI/CD pipelines and quality gates to streamline deployments.'
    ],
    tech: 'Next.js 15, TypeScript, Firebase, NextAuth.js, Node.js, FastAPI, Pinecone, Fabric.js',
  },
  {
    role: 'Senior Software Developer & DevOps Engineer (Freelance)',
    org: 'Family Friendly Technologies LLC | USA',
    period: 'Jan 2024 – Jan 2025',
    points: [
      'Delivered complete web applications and admin tools, improving delivery timelines and quality.',
      'Established Jenkins pipelines with branch protections to ensure stable releases.',
      'Implemented monitoring and error handling to maintain high uptime and reliability.',
      'Defined API contracts and data models to simplify integrations with multiple partner teams.',
      'Coordinated with US stakeholders to ensure timely and consistent sprint delivery.'
    ],
    tech: 'Angular 17, Node.js, Jenkins, GitHub',
  },
  {
    role: 'SDE-1',
    org: 'Institute of Medical Sciences and Sum Hospital | India',
    period: 'Jan 2020 – Dec 2024',
    points: [
      'Shipped modules across registration, billing, inventory, and document systems.',
      'Implemented JWT-based RBAC and validation to enhance security and audit compliance.',
      'Built responsive React front-ends with Ag-Grid for improved usability and data handling.',
      'Automated nightly tariff updates to eliminate manual errors and streamline billing.'
    ],
    tech: 'React, Node.js, Express.js, JWT, Ag-Grid, Multer, MySQL, MS SQL, MongoDB, Cron',
  },
  {
    role: 'Digital Analyst',
    org: 'Institute of Medical Sciences and Sum Hospital | India',
    period: 'Jun 2019 – Dec 2019',
    points: [
      'Analyzed pricing and operational data to improve data accuracy and visibility.',
      'Built dashboards and SQL reports to replace manual analysis.'
    ],
    tech: 'MS SQL, MySQL, MongoDB',
  },
  {
    role: 'Back End Developer and UI/UX Designer Intern',
    org: 'SlinkUp | India',
    period: 'Jan 2019 – Jan 2020',
    points: [
      'Developed modular Node.js microservices to improve scalability and performance.',
      'Deployed services on AWS EC2 with PostgreSQL for better reliability and cost efficiency.',
      'Created UI/UX designs and prototypes in Figma/Adobe XD.',
      'Executed social media campaigns and designed marketing creatives.'
    ],
    tech: 'Node.js, AWS EC2, PostgreSQL, Figma, Adobe XD, Meta Ads',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
          <p className="text-slate-400 mt-2">6+ years building scalable, secure, and user‑centered software.</p>
        </div>

        <div className="mt-10 space-y-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-slate-300">{exp.org}</p>
                </div>
                <p className="text-sm text-slate-400">{exp.period}</p>
              </div>
              <ul className="mt-3 list-disc list-inside text-slate-200 space-y-1">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-400"><span className="font-medium text-slate-200">Technologies:</span> {exp.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
