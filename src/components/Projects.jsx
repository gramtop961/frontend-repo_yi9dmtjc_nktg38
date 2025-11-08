import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Event Management Platform',
    org: 'I Am Coming (Australia)',
    link: 'https://iamcoming.io',
    points: [
      'End-to-end platform for event creation, invitations, RSVP tracking, automated campaigns, and analytics with Google Gemini 2.0 integration.',
      'Built multi-tenant RBAC and cross-domain authentication to ensure secure access control and simpler onboarding.',
      'Invitation designer using Fabric.js with a full event lifecycle for design, share, and track.'
    ],
  },
  {
    title: 'AI-Powered Chat Bot',
    org: 'I Am Coming (Australia)',
    points: [
      'Embeddable chatbot using Google Gemini 2.0 Flash and Pinecone with a FastAPI backend and Next.js frontend.',
      'Vector embeddings and semantic search to enhance content relevance.',
      'Widget and admin analytics for seamless website integration and monitoring.'
    ],
  },
  {
    title: 'Document Management System',
    org: 'Institute of Medical Sciences and Sum Hospital (India)',
    points: [
      'Secure DMS with JWT authentication, RBAC, React UI, Ag-Grid, and Multer-based uploads.',
      'Advanced data grids and search for efficient management and retrieval.',
      'Validated PDF/Image uploads with optimized storage.'
    ],
  },
  {
    title: 'Hospital Information Management Software (HIMS)',
    org: 'IMS & Sum Hospital',
    points: [
      'Modules for registration, billing, automated bed charge updates, and pharmacy.',
      'Automation reduced billing errors and streamlined workflows.'
    ],
  },
  {
    title: 'Text-to-Image Generator Integration',
    org: 'Family Friendly Technologies LLC (USA)',
    points: [
      'Integrated a client-provided LLM-based generator into Angular 17 and Node.js with Jenkins CI/CD.',
      'Automated visual generation and deployment pipelines.'
    ],
  },
  {
    title: 'Service-Based Company Website and Dashboard',
    org: 'Family Friendly Technologies LLC (USA)',
    points: [
      'Corporate website with admin dashboard for expenses, document management, and analytics.',
      'Custom analytics reduced dependency on third-party tools.'
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
        <p className="text-slate-600 mt-2">Highlighted work across AI, SaaS, and enterprise systems.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.org}</p>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sky-600 hover:underline">
                    Visit <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                {p.points.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
