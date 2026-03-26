import { motion } from 'framer-motion'

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white/80">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

export default function ContentCard({ label }) {
  return (
    <motion.div
      className="rounded-xl flex flex-col items-center justify-center gap-3 h-full cursor-pointer overflow-hidden p-4"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.07)' }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
      >
        <PlayIcon />
      </div>
      <p className="text-xs md:text-sm text-white/60 text-center leading-snug font-medium px-2">{label}</p>
    </motion.div>
  )
}
