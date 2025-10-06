import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, MousePointerClick } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0a0f]" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <div className="max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <Rocket className="h-4 w-4 text-fuchsia-400" />
              <span className="text-xs tracking-widest text-zinc-300">FUTURISTIC 3D PORTFOLIO</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
              <span className="text-white">Alex Nova</span>
              <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">Creative Developer & 3D Generalist</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-zinc-300">
              Building immersive web experiences at the edge of design and technology.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-medium text-[#0a0a0f] shadow-[0_0_0_0_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.02]">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 backdrop-blur hover:bg-white/10">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center gap-2 text-zinc-400"
        >
          <MousePointerClick className="h-4 w-4" />
          <div className="h-10 w-px bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
