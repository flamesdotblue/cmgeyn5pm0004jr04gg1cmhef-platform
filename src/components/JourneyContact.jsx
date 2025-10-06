import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Mail, Github, Linkedin } from 'lucide-react';

const timeline = [
  {
    company: 'Nebula Studios',
    role: 'Senior Creative Developer',
    period: '2023 — Present',
    details: 'Led immersive 3D web projects, optimized shader pipelines, mentored team.',
  },
  {
    company: 'Quantum Labs',
    role: 'Full‑stack Engineer',
    period: '2021 — 2023',
    details: 'Built scalable APIs and real-time visualizations for IoT data streams.',
  },
  {
    company: 'Freelance',
    role: '3D Generalist & Frontend',
    period: '2019 — 2021',
    details: 'Delivered interactive brand sites with WebGL micro-interactions.',
  },
];

export default function JourneyContact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden py-28 sm:py-36">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: bgShift.to(v => `radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.12), transparent 60%), radial-gradient(50% 50% at 50% ${v}px, rgba(34,197,94,0.08), transparent 60%)`) }}
      />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Experience</h2>
          <p className="mt-2 max-w-xl text-zinc-400">A scroll-evolving timeline with hoverable details.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400/50 via-white/10 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        <ContactSection />
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      className={`relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ${isLeft ? '' : 'sm:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className={`order-2 sm:order-${isLeft ? '1' : '2'} ${isLeft ? 'sm:pr-10' : 'sm:pl-10'}`}>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="mb-2 inline-flex items-center gap-2 text-fuchsia-300"><Briefcase className="h-4 w-4" />{item.period}</div>
          <h3 className="text-xl font-medium">{item.role}</h3>
          <p className="text-zinc-300">{item.company}</p>
          <p className="mt-2 text-sm text-zinc-400">{item.details}</p>
        </div>
      </div>
      <div className={`order-1 sm:order-${isLeft ? '2' : '1'} flex items-center justify-center`}>
        <motion.div
          className="h-28 w-28 rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/40 to-cyan-400/40 p-[2px]"
          whileHover={{ rotateY: 10, rotateX: -10, scale: 1.05 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-black/40 text-white">
            <span className="text-sm opacity-80">Milestone</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ContactSection() {
  return (
    <div id="contact" className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold">Let’s build something together</h3>
        <p className="mt-2 max-w-md text-zinc-400">Reach out for collaborations, freelance opportunities, or just to say hi.</p>
        <div className="mt-6 flex gap-3">
          <a href="mailto:hello@alexnova.dev" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Mail className="h-4 w-4" />Email</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Github className="h-4 w-4" />GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"><Linkedin className="h-4 w-4" />LinkedIn</a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

function ContactForm() {
  return (
    <form className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-400/10" />
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Name</label>
          <input required type="text" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500 focus:border-fuchsia-400/50 focus:shadow-[0_0_0_3px_rgba(217,70,239,0.15)]" placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Email</label>
          <input required type="email" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none ring-0 placeholder:text-zinc-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" placeholder="you@domain.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-zinc-300">Message</label>
          <textarea required rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none placeholder:text-zinc-500 focus:border-violet-400/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]" placeholder="Tell me about your project..." />
        </div>
        <div className="sm:col-span-2">
          <button type="submit" className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-medium text-[#0a0a0f]">
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20" style={{ background: 'radial-gradient(120% 180% at 50% 50%, white, transparent 60%)' }} />
          </button>
        </div>
      </div>
    </form>
  );
}
