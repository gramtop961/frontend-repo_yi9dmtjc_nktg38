import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[88vh] sm:h-[92vh] overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 flex items-end pb-10">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          <div className="backdrop-blur-md bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5 sm:p-7 text-slate-100 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 text-sky-300">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="uppercase tracking-wider text-xs font-semibold">Futuristic Portfolio</span>
            </div>

            <div className="mt-3 grid sm:grid-cols-[1fr_auto] gap-4 sm:gap-8 items-end">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
                >
                  ANKIT KUMAR PANDA
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mt-2 text-sky-200 text-lg sm:text-xl font-medium"
                >
                  Software Developer · Full‑Stack · DevOps
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-200"
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="mt-5 flex flex-wrap gap-3"
                >
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600/90 hover:bg-sky-600 text-white border border-sky-500 transition-colors"
                  >
                    Explore Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#skills"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    View Skills
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex gap-3 justify-start sm:justify-end"
              >
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/10 hover:bg-slate-100/20 text-white border border-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
