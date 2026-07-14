import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const profile = {
  instagram: 'https://www.instagram.com/regularpersonbtw/',
}

const testimonials = [
  '0702.mp4',
  '639533839_17956925013065699_318912915781539721_n.webp',
  'StorySaver.net-regularpersonbtw-Video-1782929442152.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929448525.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929451775.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929456587.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929461720.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929465100.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929467641.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929469755.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929472448.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929476193.mp4',
  'StorySaver.net-regularpersonbtw-Video-1782929485030.mp4',
]

const skills = [
  'JavaScript',
  'UI Design',
  'Android Modding',
  'Custom ROM',
  'Root Access',
  'ADB / Fastboot',
  'Firmware Flashing',
  'System Optimization',
]

const easeWarp = [0.65, 0, 0.15, 1]
const easeIn = [0.25, 0.46, 0.45, 0.94]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeIn } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: easeIn } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: easeIn } },
}

const BAR_COUNT = 48

function Equalizer() {
  const bars = useRef(null)
  if (!bars.current) {
    const center = BAR_COUNT / 2
    bars.current = Array.from({ length: BAR_COUNT }, (_, i) => {
      const dist = Math.abs(i - center + 0.5) / center
      const maxH = Math.round(200 - dist * 180)
      return { maxH, delay: (i * 0.025).toFixed(3) }
    })
  }
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[1] flex h-24 items-end gap-[1.5px] opacity-45 md:h-40 md:gap-[2px]">
      {bars.current.map((b, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm equalizer-bar"
          style={{
            boxShadow: '0 0 4px rgba(0,212,255,0.35)',
            animationDelay: b.delay + 's',
            '--bar-h1': b.maxH * 0.12 + 'px',
            '--bar-h2': b.maxH * 0.75 + 'px',
            '--bar-h3': b.maxH * 0.25 + 'px',
            '--bar-h4': b.maxH * 0.55 + 'px',
          }}
        />
      ))}
    </div>
  )
}

function WebCorner({ className = '' }) {
  return (
    <div
      className={`pointer-events-none fixed z-0 h-80 w-80 rounded-full opacity-20 web-lines animate-spin-60 ${className}`}
    />
  )
}

function Nav() {
  const labels = ['Home', 'About', 'Testimonials', 'Skills', 'Contact']
  const ids = ['home', 'about', 'testimonials', 'skills', 'contact']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeWarp }}
      className="sticky top-2 z-50 mx-auto mt-2 flex w-[calc(100%-24px)] max-w-6xl flex-col gap-1 border-4 border-black bg-[#e8f6ff] p-2 shadow-[8px_8px_0_#050505] md:top-4 md:mt-4 md:flex-row md:items-center md:justify-between md:gap-4 md:p-4"
    >
      <button onClick={() => scrollTo('home')} className="font-display text-xl tracking-wide text-black cursor-pointer md:text-3xl">
        Z
<span className="text-[#00d4ff] text-shadow-cyan">CX</span>
      </button>

      <nav className="flex flex-wrap gap-1 text-xs font-black uppercase tracking-wide md:gap-2 md:text-sm">
        {labels.map((label, i) => (
          <button
            key={label}
            onClick={() => scrollTo(ids[i])}
            className="border-2 border-transparent px-2 py-1.5 transition cursor-pointer hover:border-black hover:bg-[#00e5a0] md:px-3 md:py-2"
          >
            {label}
          </button>
        ))}
      </nav>
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="home">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto grid w-[calc(100%-24px)] max-w-6xl items-center gap-4 py-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8 lg:py-16">
        <div>
          <motion.h1 variants={fadeUp} className="mt-2 font-display text-[clamp(2.2rem,8vw,5rem)] uppercase leading-[0.86] tracking-wide text-black hero-title">
            Android
            <br />
            Modder<span className="text-[#00e5a0] stroke-black">!</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-3 max-w-2xl border-4 border-black bg-[#e8f6ff] p-3 text-xs font-extrabold leading-relaxed shadow-[7px_7px_0_#050505] md:mt-4 md:p-5 md:text-lg">
            Saya memiliki ketertarikan besar dalam dunia oprek Android, mulai dari root, custom ROM, Magisk module, flashing firmware, hingga optimasi performa perangkat. Saya terbiasa menggunakan tools seperti ADB, Fastboot, custom recovery, dan berbagai metode tweaking sistem untuk mengeksplorasi kemampuan penuh perangkat Android.
          </motion.p>

          <motion.div variants={container} className="mt-3 flex flex-wrap gap-4 md:mt-5">
            <motion.button variants={scaleIn} onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="comic-btn bg-[#00d4ff] text-[#050505] cursor-pointer">
              Testimonial
            </motion.button>
            <motion.button variants={scaleIn} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="comic-btn bg-[#00d4ff] text-[#050505] cursor-pointer">
              Hire Me
            </motion.button>
          </motion.div>
        </div>

        <motion.article
          variants={fadeIn}
          className="rotate-0 border-[5px] border-black bg-[#e8f6ff] p-4 shadow-[10px_10px_0_#050505] md:p-5 lg:rotate-2 lg:shadow-[14px_14px_0_#050505]"
        >
          <div className="mb-3 flex justify-between border-b-4 border-black pb-2 text-xs font-black uppercase md:mb-4 md:pb-3 md:text-sm">
            <span>Issue #01</span>
            <span>2026</span>
          </div>

          <div className="flex items-center justify-center py-2 md:py-4">
            <motion.div
              className="relative h-28 w-28 overflow-hidden rounded-full border-[6px] border-black bg-[#00d4ff] shadow-[8px_8px_0_#050505] md:h-48 md:w-48 md:shadow-[14px_14px_0_#050505]"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <video
                src={import.meta.env.BASE_URL + "hero.mp4"}
                className="absolute inset-0 h-full w-full scale-125 object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: easeIn }}
            className="speech-bubble relative -mt-5 ml-4 w-[88%] border-4 border-black bg-[#00e5a0] p-3 text-xs font-extrabold leading-snug shadow-[6px_6px_0_#050505] md:-mt-7 md:p-4 md:text-base md:shadow-[7px_7px_0_#050505]"
          >
            <strong>Yo!</strong> Aku siap bikin device anda kelihatan beda, bukan sekedar Tweaks biasa!.
          </motion.div>
        </motion.article>
      </motion.div>
    </section>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <motion.div variants={fadeUp} className="mb-2 md:mb-7">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-[#00d4ff]">{eyebrow}</p>
      <h2 className="font-display text-[clamp(2.2rem,6vw,4rem)] uppercase leading-none text-black text-shadow-aqua">{title}</h2>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto flex w-[calc(100%-24px)] max-w-6xl flex-col py-6 md:py-10 lg:py-16">
        <SectionTitle eyebrow="Origin Story" title="About Me" />

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <motion.article
             variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: easeIn } } }}
            className="comic-panel bg-[#e8f6ff] p-4 md:p-7"
          >
            <h3 className="font-display text-2xl uppercase md:text-4xl">Siapa Saya?</h3>
            <p className="mt-3 text-xs font-bold leading-relaxed md:mt-4 md:text-base">
              Saya adalah seseorang yang memiliki ketertarikan besar di dunia teknologi, khususnya pada pengembangan web dan eksplorasi sistem Android. Saya suka mempelajari hal-hal baru, membangun tampilan website yang menarik, serta melakukan oprek Android seperti custom ROM, root, flashing firmware, Magisk module, dan optimasi performa perangkat.

Bagi saya, teknologi bukan hanya alat, tetapi juga ruang untuk bereksperimen, memecahkan masalah, dan terus berkembang. Saya terus belajar untuk meningkatkan kemampuan dalam pemrograman, desain web, dan modifikasi sistem agar bisa menciptakan solusi yang kreatif, fungsional, dan bermanfaat.

            </p>
          </motion.article>

          <motion.article variants={fadeUp} className="comic-panel flex flex-col justify-center bg-[#00d4ff] p-4 text-[#e8f6ff] md:p-7">
            <h3 className="font-display text-5xl leading-none md:text-6xl text-shadow-black">10+</h3>
            <p className="mt-2 text-xs font-black uppercase md:mt-3 md:text-sm">Project Concept</p>
          </motion.article>

          <motion.article
             variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: easeIn } } }}
            className="comic-panel flex flex-col justify-center bg-[#00e5a0] p-4 md:p-7"
          >
            <h3 className="font-display text-5xl leading-none md:text-6xl text-shadow-black-cyan">100%</h3>
            <p className="mt-2 text-xs font-black uppercase md:mt-3 md:text-sm">Responsive</p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  )
}

function Testimonials() {
  const [idx, setIdx] = useState(0)
  const vidRef = useRef(null)
  const media = testimonials[idx]
  const isVideo = media.endsWith('.mp4')
  const src = import.meta.env.BASE_URL + "testimonials/" + media

  return (
    <section id="testimonials">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex w-[calc(100%-24px)] max-w-6xl flex-col items-center gap-3 py-6 md:gap-5 md:py-10 lg:py-16"
      >
        <div className="w-full max-w-2xl text-center md:text-left">
          <SectionTitle eyebrow="What They Say" title="Testimonials" />
        </div>

        <motion.div
          variants={scaleIn}
          className="relative flex w-full max-w-[min(92vw,620px)] flex-col overflow-hidden border-[5px] border-black bg-[#e8f6ff] shadow-[10px_10px_0_#050505]"
          style={{ height: 'min(70vh, 500px)' }}
        >
          <div className="flex shrink-0 items-center gap-2 border-b-4 border-black bg-[#e8f6ff] px-3 py-2 md:px-4">
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#00d4ff]" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#00e5a0]" />
            <span className="h-3 w-3 rounded-full border-2 border-black bg-[#00f5d4]" />

            <span className="ml-2 font-display text-xs uppercase tracking-widest text-black/60">
              {idx + 1} / {testimonials.length}
            </span>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
            <div className="relative h-full w-full max-h-full">
              {isVideo ? (
                <video
                  key={src}
                  ref={vidRef}
                  src={src}
                  className="absolute inset-0 h-full w-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              ) : (
                <img
                  key={src}
                  src={src}
                  className="absolute inset-0 h-full w-full object-contain"
                  alt="testimonial"
                />
              )}
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-3 border-t-4 border-black bg-[#e8f6ff] px-3 py-3 md:px-4">
            <button
              onClick={() =>
                setIdx((idx - 1 + testimonials.length) % testimonials.length)
              }
              className="comic-btn px-3 py-1 text-[10px] md:px-4 md:text-xs"
            >
              ◀ Prev
            </button>

            <div className="flex max-w-[190px] flex-wrap justify-center gap-1.5 md:max-w-[260px] md:gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 w-2.5 rounded-full border-2 border-black transition cursor-pointer ${
                    i === idx ? 'scale-125 bg-[#00d4ff]' : 'bg-[#e8f6ff]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="comic-btn px-3 py-1 text-[10px] md:px-4 md:text-xs"
            >
              Next ▶
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mx-auto flex w-[calc(100%-24px)] max-w-6xl flex-col py-6 md:py-10 lg:py-16">
        <SectionTitle eyebrow="Power Level" title="Skills" />

        <motion.div variants={scaleIn} className="border-[5px] border-black bg-[#0d1b2a] shadow-[10px_10px_0_#050505]">
          <div className="flex items-center gap-2 border-b-4 border-black bg-[#e8f6ff] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-black bg-[#00d4ff]" />
            <span className="h-2.5 w-2.5 rounded-full border-2 border-black bg-[#00e5a0]" />
            <span className="h-2.5 w-2.5 rounded-full border-2 border-black bg-[#00f5d4]" />
            <span className="ml-2 font-display text-xs uppercase tracking-widest text-black">zsh</span>
            <span className="ml-auto font-display text-[10px] uppercase tracking-wider text-black/50">─ □ ×</span>
          </div>

          <div className="p-3 md:p-4 font-mono text-xs leading-relaxed md:text-sm md:leading-relaxed">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                className="flex flex-wrap items-baseline gap-x-2"
              >
                <span className="text-[#00f5d4] select-none">›</span>
                <span className="text-[#e8f6ff]/70">install</span>
                <span className="text-[#00e5a0]">{skill}</span>
                <span className="text-[#00f5d4] select-none"> ✓</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: skills.length * 0.06 + 0.2, duration: 0.3 }}
              className="mt-0.5 flex items-center gap-2"
            >
              <span className="text-[#00f5d4] select-none">❯</span>
              <span className="inline-block h-3.5 w-2 bg-[#00f5d4] animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex w-[calc(100%-24px)] max-w-6xl flex-col py-6 md:py-10 lg:py-16"
      >
        <div className="relative overflow-visible border-[6px] border-black bg-[#e8f6ff] p-4 text-center shadow-[8px_8px_0_#050505] md:p-8 lg:p-12 md:shadow-[14px_14px_0_#050505] comic-contact">
          <motion.span variants={fadeIn} className="comic-sfx left-4 top-[-28px] bg-[#00d4ff] md:left-8">
            BAM!
          </motion.span>
          <motion.span variants={fadeIn} className="comic-sfx bottom-[-28px] right-4 bg-[#00d4ff] md:right-8">
            POW!
          </motion.span>

          <motion.h2 variants={fadeUp} className="mx-auto mt-5 max-w-4xl font-display text-[clamp(2.2rem,6vw,4rem)] uppercase leading-none md:mt-7">
            READY TO BUILD OR MOD SOMETHING?
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-xs font-bold leading-relaxed md:mt-5 md:text-lg">
            Saya terbuka untuk project website, portfolio, landing page, UI design, dan diskusi seputar oprek Android, custom ROM, root, firmware, serta tweaking sistem.

Kalau punya ide, masalah teknis, atau ingin kerja sama, langsung hubungi saya.
          </motion.p>

          <motion.div variants={container} className="mt-5 flex flex-wrap justify-center gap-4 md:mt-8">
            <motion.a variants={scaleIn} whileHover={{ scale: 1.05 }} href={profile.instagram} target="_blank" rel="noreferrer" className="comic-btn gap-2 bg-[#00d4ff] text-[#050505]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
              Instagram
            </motion.a>
            <motion.a variants={scaleIn} whileHover={{ scale: 1.05 }} href="https://wa.me/6287880310544" target="_blank" rel="noreferrer" className="comic-btn gap-2 bg-[#00d4ff] text-[#050505]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.97.57 3.8 1.55 5.35L2.3 21.7l4.42-1.3A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10m0 18.5c-1.79 0-3.46-.51-4.87-1.38l-.35-.21-2.62.77.7-2.56-.23-.37A8.46 8.46 0 0 1 3.54 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5M16.5 14.2c-.28-.14-1.65-.82-1.9-.91s-.44-.14-.62.14c-.18.28-.72.91-.88 1.1-.16.18-.32.2-.6.07-.28-.14-1.2-.44-2.28-1.41-.85-.77-1.42-1.71-1.58-2-.16-.28-.02-.43.12-.57s.28-.33.42-.49c.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.47-.07-.13-.62-1.5-.85-2.06-.23-.55-.46-.47-.62-.48s-.35-.01-.54-.01s-.5.07-.76.35c-.26.28-1 1-1 2.43s1.03 2.82 1.17 3.01c.14.18 2.01 3.07 4.87 4.3c.68.3 1.21.47 1.63.6c.68.22 1.3.19 1.78.12c.55-.08 1.65-.68 1.88-1.33c.24-.65.24-1.21.17-1.33c-.07-.12-.26-.18-.54-.32"/></svg>
              WhatsApp
            </motion.a>
            <motion.a variants={scaleIn} whileHover={{ scale: 1.05 }} href="https://discord.gg/vCbaazYBs" target="_blank" rel="noreferrer" className="comic-btn gap-2 bg-[#00d4ff] text-[#050505]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.1c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.08.22.17.34.25c.04.03.04.09-.01.11c-.52.3-1.07.56-1.64.78c-.04.01-.05.06-.04.1c.31.61.67 1.19 1.07 1.74c.01.02.04.03.07.02c1.71-.53 3.44-1.33 5.24-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
              Discord
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function StartScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#d4ecf7]"
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 halftone-bg opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,49,49,0.18),transparent_35%),linear-gradient(315deg,rgba(0,212,255,0.25),transparent_42%)]" />
      </div>
      <WebCorner className="-right-24 -top-28" />
      <WebCorner className="-bottom-36 -left-32" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0.15 }}
          className="border-[6px] border-black bg-[#e8f6ff] px-8 py-6 shadow-[14px_14px_0_#050505] md:px-16 md:py-10"
        >
          
          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.86] tracking-wide text-black hero-title">
            Z<span className="text-[#00d4ff]">CX</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm font-bold leading-relaxed md:text-base">
            TEKAN START, UNTUK MEMULAI!
          </p>
        </motion.div>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.06, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="comic-btn min-h-16 min-w-48 border-[6px] bg-[#00d4ff] text-xl tracking-widest text-[#050505] shadow-[8px_8px_0_#050505] hover:shadow-[4px_4px_0_#050505]"
        >
          START
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [started, setStarted] = useState(false)
  const audioRef = useRef(null)

  return (
    <>
      <AnimatePresence>
        {!started && <StartScreen onStart={() => { setStarted(true); if (audioRef.current) { audioRef.current.currentTime = 188; audioRef.current.play() } }} />}
      </AnimatePresence>

      <motion.main
        initial={false}
        animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.15, ease: easeIn }}
        className="relative min-h-screen w-screen bg-[#d4ecf7] text-black"
      >
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 halftone-bg opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,49,49,0.18),transparent_35%),linear-gradient(315deg,rgba(0,212,255,0.25),transparent_42%)]" />
      </div>
      <WebCorner className="-right-24 -top-28" />
      <WebCorner className="-bottom-36 -left-32" />
      <Equalizer />

      <Nav />

      <div className="relative z-10 flex flex-col gap-4 pb-32 md:gap-8 md:pb-48">
        <Hero />
        <About />
        <Testimonials />
        <Skills />
        <Contact />
      </div>

      <audio ref={audioRef} src={import.meta.env.BASE_URL + "toronto.mp3"} loop />
    </motion.main>
    </>
  )
}
