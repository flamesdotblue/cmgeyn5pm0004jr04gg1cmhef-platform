import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';

const projects = [
  {
    title: 'Orbital Commerce',
    subtitle: '3D e-commerce prototype',
    tech: ['Next.js', 'Three.js', 'Stripe'],
    cover: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    url: '#',
    about: 'A spatial shopping experience with 3D product inspection and smooth checkout.',
  },
  {
    title: 'Neon City Visualizer',
    subtitle: 'WebGL data art',
    tech: ['React', 'WebGL', 'GSAP'],
    cover: 'https://images.unsplash.com/photo-1549921296-3a6b3c0cd6c2?q=80&w=1200&auto=format&fit=crop',
    url: '#',
    about: 'Real-time city telemetry mapped to a neon cyberpunk skyline.',
  },
  {
    title: 'Holo Docs',
    subtitle: 'Knowledge portal',
    tech: ['Next.js', 'MDX', 'Vercel'],
    cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    url: '#',
    about: 'Documentation system with holographic UI and progressive disclosure.',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Projects</h2>
          <p className="mt-2 max-w-xl text-zinc-400">Scroll through interactive showcases. Click the info icon for details.</p>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} onOpen={() => setActive(p)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="relative h-52">
        <img src={project.cover} alt="cover" className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
        <div className="absolute right-3 top-3 flex items-center gap-2">
          <button onClick={onOpen} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70">
            <Info className="h-4 w-4" />
          </button>
          <a href={project.url} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70">
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="text-sm text-zinc-400">{project.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={onClose} />
      <motion.div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5"
        initial={{ scale: 0.92, y: 10, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      >
        <div className="relative h-56 w-full">
          <img src={project.cover} alt="cover" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-zinc-400">{project.about}</p>
            </div>
            <button onClick={onClose} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-zinc-200 hover:bg-white/20">Close</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
