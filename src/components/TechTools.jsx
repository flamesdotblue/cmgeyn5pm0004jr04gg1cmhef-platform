import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Settings, Cpu, Layers, Cloud, Rocket } from 'lucide-react';

const tools = [
  {
    name: 'React',
    color: 'from-cyan-400 to-blue-500',
    desc: 'Component-driven UI with hooks, suspense, and concurrent features.',
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: 'Node.js',
    color: 'from-emerald-400 to-teal-500',
    desc: 'Fast, scalable services with modern tooling and TypeScript.',
    icon: <Settings className="h-6 w-6" />,
  },
  {
    name: 'Three.js',
    color: 'from-fuchsia-400 to-violet-500',
    desc: 'Interactive WebGL scenes, shaders, and postprocessing.',
    icon: <Layers className="h-6 w-6" />,
  },
  {
    name: 'Blender',
    color: 'from-orange-400 to-pink-500',
    desc: '3D modeling, animation, and rendering for web-ready assets.',
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    name: 'Next.js',
    color: 'from-zinc-300 to-white',
    desc: 'Hybrid rendering, edge functions, and optimized DX.',
    icon: <Cloud className="h-6 w-6" />,
  },
];

export default function TechTools() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.8]);

  return (
    <section id="tech" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Tech Stack</h2>
            <p className="mt-2 max-w-xl text-zinc-400">Hover or tap a tool to reveal details. Subtle 3D tilt reacts to your cursor.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-zinc-400"><Rocket className="h-4 w-4" /><span className="text-sm">Scroll reactive</span></div>
        </div>

        <motion.div
          style={{ rotate }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 perspective-[1200px]"
        >
          {tools.map((t, idx) => (
            <TiltCard key={idx} tool={t} glow={glow} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TiltCard({ tool, glow }) {
  const cardRef = useRef(null);

  function onMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 10;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
  }

  function onLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg will-change-transform"
      style={{ transform: 'perspective(1000px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${tool.color} opacity-20 blur-xl`} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
          {tool.icon}
        </div>
        <h3 className="text-lg font-medium">{tool.name}</h3>
        <p className="mt-1 text-sm text-zinc-400">{tool.desc}</p>
      </div>
      <motion.div className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ boxShadow: glow.to(v => `0 0 0 0 rgba(0,0,0,0), 0 0 40px ${v * 50}px rgba(168,85,247,0.25)`) }}
      />
    </motion.div>
  );
}
