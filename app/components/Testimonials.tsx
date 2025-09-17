// components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Clock, Star, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ariana Chen",
      role: "CMO, SaaS Startup (US)",
      text: "WeTrain Marketing helped us clarify our positioning and scale paid social without wasting spend. Clear KPIs, fast iterations, real results.",
      avatar: "/avatars/ariana.jpg",
      achievement: "142% QoQ pipeline growth",
      rating: 5,
    },
    {
      name: "Mateo Silva",
      role: "Founder, DTC Brand (EU)",
      text: "Their creative testing framework finally gave us consistent winners. CPA dropped, AOV rose, and reporting is refreshingly transparent.",
      avatar: "/avatars/mateo.jpg",
      achievement: "38% lower CPA in 60 days",
      rating: 5,
    },
    {
      name: "Riya Kapoor",
      role: "Head of Growth, Fintech (APAC)",
      text: "From strategy to execution, the team is senior and proactive. Cross-channel orchestration was seamless across markets.",
      avatar: "/avatars/riya.jpg",
      achievement: "5-country rollout, on time",
      rating: 4,
    },
  ];

  const stats = [
    { value: "4.9/5", label: "Client Rating", icon: Star },
    { value: "98%", label: "Retention Rate", icon: TrendingUp },
    { value: "24–48 hrs", label: "Avg. Response Time", icon: Clock },
    { value: "1,000+", label: "Projects Delivered", icon: Users },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y-2 border-yellow-200/50 bg-[var(--tertiary-yellow)] py-24"
      aria-labelledby="testimonials-heading"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/wireframe.png')] opacity-10" />
        <div className="absolute left-1/4 top-1/4 h-60 w-60 rounded-full bg-[var(--primary-yellow)] opacity-10 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[var(--secondary-yellow)] opacity-10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-[var(--primary-yellow)]/10 px-4 py-2 text-sm font-medium text-[var(--primary-yellow)]">
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Trusted by{" "}
            <span className="text-[var(--primary-yellow)]">global brands</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Real outcomes from real partnerships—strategy, creative, and
            performance working together to drive growth.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < t.rating
                        ? "text-[var(--primary-yellow)] fill-[var(--primary-yellow)]"
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mb-6 flex-grow italic text-gray-600">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center">
                <Image
                  src={t.avatar}
                  alt={`${t.name} — ${t.role}`}
                  height={48}
                  width={48}
                  className="mr-4 h-12 w-12 rounded-full border-2 border-[var(--primary-yellow)] object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-[var(--tertiary-yellow)] p-3 text-center">
                <p className="text-sm text-gray-600">Result</p>
                <p className="text-xl font-bold text-[var(--primary-yellow)]">
                  {t.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-yellow)]/10 text-[var(--primary-yellow)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mb-1 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
