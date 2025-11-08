import React from 'react';

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

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">Technical Skills</h2>
        <p className="text-slate-600 mt-2">A snapshot of tools and technologies I work with.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
