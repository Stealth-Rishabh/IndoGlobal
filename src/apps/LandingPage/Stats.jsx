"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import bg from '../../assets/stats-bg.svg'
const stats = [
  { value: 70, label: "Acres of Campus" },
  { value: 22, label: "Years of Excellence", suffix: "+" },
  { value: 10000, label: "Alumni", suffix: "+" },
  { value: 20, label: "Coures", suffix: "+" },
]

const CountUp = ({ value, suffix = "" }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="text-6xl font-bold text-white"
    >
      {value}{suffix}
    </motion.div>
  )
}


export default function Stats() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src={bg}
        alt="College Building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center px-4">
          INDO GLOBAL GROUPS OF COLLEGES
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <CountUp value={stat.value} suffix={stat.suffix} className=""/>
              <div className="text-sm text-white mt-2 text-center border-b-4 border-red-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}