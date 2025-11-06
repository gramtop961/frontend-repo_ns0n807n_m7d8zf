import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/0k8VfPCkZp0iT3Ww/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Elevate your performance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-white/80 text-lg"
            >
              Premium supplements, smart equipment, and elite guidance — curated for high-achievers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] text-white font-medium shadow-lg shadow-blue-500/20">
                Shop best sellers
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-medium hover:bg-white/15 transition-colors">
                Explore content
              </button>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
    </section>
  );
}
