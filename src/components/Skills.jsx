import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Programming Languages": ["TypeScript", "JavaScript", "Python"],
  Frameworks: [".NET", "Express.js", "NestJS", "FastAPI"],
  Frontend: ["React.js", "Next.js", "Angular", "Bootstrap", "Tailwind CSS"],
  Backend: ["Node.js", "NestJs", "FastAPI"],
  Tools: ["Jenkins", "GitHub", "Figma", "Adobe XD", "Cron", "OAuth", "Stripe", "Razorpay", "PhonePe"],
  Databases: ["PostgreSQL", "MS SQL", "MongoDB", "Pinecone", "MySQL"],
  Platforms: ["AWS", "AWS EC2", "Firebase"],
  Libraries: ["Ag-Grid", "JWT", "Multer", "NextAuth.js"],
  Others: ["ChatGPT API", "Gemini API", "CI/CD", "Vertex AI"],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950/95 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Technical Skills</h2>
          <p className="text-slate-400 mt-2">A snapshot of tools and technologies I work with.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={item}
              className="rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/30 via-fuchsia-500/20 to-transparent"
            >
              <div className="rounded-2xl h-full bg-slate-900/70 border border-slate-800 p-5 hover:bg-slate-900/80 transition-colors">
                <h3 className="text-lg font-semibold text-white">{category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span
                      key={it}
                      className="text-sm px-3 py-1 rounded-full bg-slate-800/70 text-slate-200 border border-slate-700"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
