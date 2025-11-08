import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Ankit Kumar Panda. All rights reserved.</p>
          <nav className="flex gap-5 text-sm">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
