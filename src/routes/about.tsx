import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { FloralBackdrop } from "@/components/site/FloralBackdrop";
import { Particles } from "@/components/site/Particles";
import { EvolutionTimeline } from "@/components/site/EvolutionTimeline";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { AboutEvolutionSection } from "@/components/site/AboutEvolutionSection";

import qcLab from "@/assets/qc-lab.jpg";
import applicationLab from "@/assets/application-lab.jpg";
import rdLab from "@/assets/rd-lab.jpg";
import productionPlant from "@/assets/production-plant.jpg";
import certGmp from "@/assets/cert-gmp.png";
import certIso9001 from "@/assets/cert-iso9001.png";
import certIso22000 from "@/assets/cert-iso22000.png";
import certHaccp from "@/assets/cert-haccp.png";
import certHalal from "@/assets/cert-halal.png";
import certSme from "@/assets/cert-sme.png";

const certificates = [
  { name: "GMP – Good Manufacturing Practice", img: certGmp },
  { name: "ISO 9001:2015 Quality Management System", img: certIso9001 },
  { name: "ISO 22000:2018 Food Safety Management", img: certIso22000 },
  { name: "HACCP Certified", img: certHaccp },
  { name: "HALAL Certified", img: certHalal },
  { name: "SME Certified for Quality Excellence", img: certSme },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SKFF — Our Story, Vision & Values" },
      { name: "description", content: "SKFF is a family run pioneer in flavours and fragrances since 1922. Discover our vision, mission, values, state-of-the-art facilities, and international certifications." },
      { property: "og:title", content: "About SKFF — Our Story" },
      { property: "og:description", content: "A family run pioneer in flavours and fragrances since 1922." },
    ],
  }),
  component: About,
});

/* ------------------------------------------------------------------ */
/*  Facilities Data (Official Company Profile Images Only)            */
/* ------------------------------------------------------------------ */
const facilitiesList = [
  {
    title: "Quality Control Department",
    img: qcLab,
    category: "QUALITY ASSURANCE",
    desc: "Rigorous testing of raw materials and finished formulations using advanced quality assurance systems, gas chromatography, and analytical instrumentation to guarantee uncompromised international purity and consistency.",
  },
  {
    title: "Application Laboratory",
    img: applicationLab,
    category: "SENSORY EVALUATION",
    desc: "Modern sensory evaluation and product trial facilities dedicated to testing flavour performance across finished food, beverage, confectionery, dairy, and oral care applications.",
  },
  {
    title: "Research & Development Center",
    img: rdLab,
    category: "INNOVATION & CREATION",
    desc: "State-of-the-art analytical equipment, organic synthesis labs, and fragrance creation stations where our senior perfumers and flavorists create unique, nature-inspired aroma formulations.",
  },
  {
    title: "Production Plant",
    img: productionPlant,
    category: "MANUFACTURING EXCELLENCE",
    desc: "Hygienic, automated 75,000 sq. ft. manufacturing facilities in Boisar featuring strictly separated production units for flavours and fragrances to completely eliminate cross-contamination.",
  },
];

/* ------------------------------------------------------------------ */
/*  Commitments Data                                                  */
/* ------------------------------------------------------------------ */
const commitments = [
  {
    h: "Vision & Mission",
    p: "To be a global provider of high quality flavours and fragrances. We endeavour to work alongside our customers to create products that cater to the ever-evolving tastes of society, believing that business success is built on mutual growth, sustainability, and ethical values.",
  },
  {
    h: "Passion",
    p: "We are committed to delivering high-quality products that align perfectly with the sensory demands of our customers, driven continuously to exceed expectations by learning, adapting, and creating alongside industry developments.",
  },
  {
    h: "Integrity",
    p: "Our relationships within the organization, and with our customers and suppliers, are built entirely on trust and transparency — the twin pillars that have successfully carried our family-run house into its fourth generation.",
  },
  {
    h: "Innovation",
    p: "As modern consumers demand superior quality, health-conscious foods, and premium personal care products, we collaborate directly with leading brands to research and formulate next-generation flavours and fragrances.",
  },
];

/* ------------------------------------------------------------------ */
/*  About Page Component                                              */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <>
      <div id="overview">
        <WhoWeAre />
      </div>

      <div id="evolution">
        <AboutEvolutionSection />
        <EvolutionTimeline />
      </div>

      <section id="commitments" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFFDFB 0%, #FFF5F2 100%)" }}>
        <Particles count={10} />
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.span
                className="inline-block eyebrow tracking-[0.25em] text-[#E85D75] uppercase font-semibold text-xs"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >CORE PILLARS</motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-charcoal mt-2">
                Our Commitments
              </h2>
              <motion.div
                className="h-[2px] w-0 mx-auto rounded-full mt-4"
                style={{ background: "linear-gradient(to right, transparent, #F48CA7, transparent)" }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((c, i) => (
              <Reveal key={c.h} delay={i * 0.1}>
                <motion.div
                  className="rounded-[2rem] p-8 md:p-10 bg-white/70 backdrop-blur-xl border border-white/80 transition-all duration-400 h-full flex flex-col justify-between"
                  style={{ boxShadow: "0 8px 30px rgba(244,140,167,0.08)" }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 16px 40px rgba(244,140,167,0.18)",
                    borderColor: "rgba(244,140,167,0.4)",
                    transition: { duration: 0.35, ease: "easeOut" },
                  }}
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl md:text-2xl font-display font-medium text-charcoal mb-4 flex items-center gap-3">
                        {c.h}
                      </h3>
                    </div>
                    <p className="text-grey text-base md:text-[15px] leading-[1.85] font-sans">{c.p}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF0ED 0%, #FFF8F5 100%)" }}>
        <FloralBackdrop position="top-right" opacity={0.07} />
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.span
                className="inline-block eyebrow tracking-[0.25em] text-[#E85D75] uppercase font-semibold text-xs"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >INFRASTRUCTURE</motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-charcoal mt-2">
                State-of-the-Art Facilities
              </h2>
              <motion.div
                className="h-[2px] w-0 mx-auto rounded-full mt-4"
                style={{ background: "linear-gradient(to right, transparent, #F48CA7, transparent)" }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </Reveal>

          <div className="space-y-[80px]">
            {facilitiesList.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <motion.div
                    className="group grid gap-10 lg:grid-cols-12 items-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  >
                    <div
                      className={`lg:col-span-6 overflow-hidden rounded-[2rem] bg-white border border-white/80 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-5 left-5">
                          <span className="px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
                            style={{ background: "rgba(232,93,117,0.82)", backdropFilter: "blur(8px)" }}
                          >{item.category}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-6 flex flex-col justify-center ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-charcoal mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <motion.div
                        className="h-[2px] w-0 rounded-full mb-5"
                        style={{ background: "linear-gradient(to right, #F48CA7, transparent)" }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                      <p className="text-grey text-base md:text-[15px] leading-[1.85] font-sans">{item.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #FFF9F7 100%)" }}>
        <Particles count={8} />
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <motion.span
                className="inline-block eyebrow tracking-[0.25em] text-[#E85D75] uppercase font-semibold text-xs"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >CERTIFICATIONS</motion.span>
              <h2 className="text-3xl md:text-4xl font-display font-light text-charcoal mt-2">
                Globally Recognized Quality Standards
              </h2>
              <motion.div
                className="h-[2px] w-0 mx-auto rounded-full mt-4"
                style={{ background: "linear-gradient(to right, transparent, #F48CA7, transparent)" }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </Reveal>

          {/* 3x2 Responsive CSS Grid (3 per row on desktop, 2 per row on tablet, 1 per row on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
            {certificates.map((cert, index) => (
              <Reveal key={cert.name} delay={0.08 * index}>
                <motion.div
                  className="group relative flex items-center justify-center rounded-[1.5rem] bg-white p-6 sm:p-8 h-48 sm:h-52 overflow-hidden transition-all duration-400"
                  style={{
                    border: "1px solid rgba(244,140,167,0.18)",
                    boxShadow: "0 8px 30px rgba(244,140,167,0.08)",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 40px rgba(244,140,167,0.18)",
                    borderColor: "rgba(244,140,167,0.4)",
                    transition: { duration: 0.35, ease: "easeOut" },
                  }}
                >
                  <img
                    src={cert.img}
                    alt={cert.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
