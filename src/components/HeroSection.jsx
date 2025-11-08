import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, BadgeCheck, Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden rounded-b-3xl bg-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 flex items-end pb-10">
        <div className="backdrop-blur-sm bg-slate-900/40 border border-slate-800 rounded-2xl p-5 sm:p-7 w-full text-slate-100">
          <div className="flex items-center gap-3 text-sky-300">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30">
              <BadgeCheck className="w-4 h-4" />
            </div>
            <span className="uppercase tracking-wider text-xs font-semibold">Verified Portfolio</span>
          </div>

          <div className="mt-3 grid sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 items-end">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                ANKIT KUMAR PANDA
              </h1>
              <p className="mt-2 text-sky-200 text-lg sm:text-xl font-medium">
                Software Developer
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-200">
                <a href="tel:+917008407251" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> +91 7008407251
                </a>
                <span className="opacity-50">•</span>
                <a href="mailto:ankit.panda010.ap@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> ankit.panda010.ap@gmail.com
                </a>
                <span className="opacity-50">•</span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Bhubaneswar
                </span>
              </div>
            </div>
            <div className="flex gap-3 justify-start sm:justify-end">
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600/90 hover:bg-sky-600 text-white border border-sky-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
