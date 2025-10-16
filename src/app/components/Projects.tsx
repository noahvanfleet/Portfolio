'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";

// Import React Simple Icons components
import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTensorflow,
  SiFlask,
  SiGithub,
  SiPostgresql,
  SiSupabase,
  SiGoogleplay,
  IconType
} from '@icons-pack/react-simple-icons'
import { IconType as IT} from 'react-icons';

const projects = [
  {
    id: 1,
    title: 'Sherlock: Local Investigator',
    description:
      'A mobile app that visualizes local crime data on an interactive map — empowering neighborhoods in Knoxville,TN with almost real-time awareness.',
    thumbnail: '/sherlock.png',
    tech: [
      { name: 'React Native', Icon: SiReact },
      { name: 'Expo', Icon: SiExpo },
      { name: 'TypeScript', Icon: SiTypescript },
    ],
    github: 'https://gitfront.io/r/noahvanfleet/Eap9idvXRTn6/Sherlock/',
    demo: '',
    youtube: 'https://www.youtube.com/embed/S6PiFBkSenE?si=wOvuRXcTQdNvR9b4',
    play:'https://play.google.com/store/apps/details?id=com.sherlockknox.app&hl=en_US',
  },
  {
    id: 2,
    title: 'Sherlock REST API',
    description:
      'A robust backend delivering locally scraped crime reports, machine-learning powered threat analysis and social features to empower community engagement.',
    thumbnail: '/sherlock-api.png',
    tech: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Python', Icon: SiPython },
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'Flask', Icon: SiFlask },
      { name: 'Supabase Auth', Icon: SiSupabase },
      { name: 'PostgreSQL', Icon: SiPostgresql },
    ],
    github: 'https://gitfront.io/r/noahvanfleet/CqaiYd1Kg8kf/Sherlock-backend/',
    demo: 'https://webmap.sherlock.noahvanfleet.com',
    youtube: '',
    play:'',
  },
]

// wrapper for icons
export const RenderIcon = ({ Icon, size = 16, className = '' }: { Icon: IconType|IT; size?: number; className?: string }) => (
  <div className={`inline-block ${className} ${Icon==SiExpo ? 'dark:invert':''}`}>
    <Icon size={size} color='default' />
  </div>
)

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section className="relative w-full mt-24 flex flex-col items-center z-10 pb-10">
      {/* Wave background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[url('/wave-pattern.svg')] bg-repeat bg-center animate-wave"></div>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-sky-900 dark:text-sky-100">
        🧭 Projects on Deck
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 w-[90%] max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10, rotateZ: -1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative rounded-3xl dark:border border-black/10 dark:border-white/10
                       bg-gradient-to-br from-white/80 to-sky-50/60 dark:from-[#12131a]/90 dark:to-[#1c1e25]/90 
                       backdrop-blur-md shadow-md hover:shadow-2xl cursor-pointer overflow-hidden"
            onClick={() => {
              setActiveProject(project.id)
              document.body.classList.add('overflow-hidden')
            }}
          >
            {/* Thumbnail */}
            <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
              <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Project info */}
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t.name}
                    className="flex items-center gap-2 text-xs bg-sky-100 dark:bg-sky-900/40
                               text-sky-800 dark:text-sky-300 rounded-full px-3 py-1 font-medium"
                  >
                    <RenderIcon Icon={t.Icon} size={14} />
                    {t.name}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors"
                  >
                    <RenderIcon className='dark:invert hover:text-sky-500' Icon={SiGithub} size={16} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors"
                  >
                    <RenderIcon Icon={FiExternalLink} size={16} />
                    Live Demo
                  </a>
                )}
                {project.play && (
                  <a
                    href={project.play}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors"
                  >
                    <RenderIcon className='dark:invert' Icon={SiGoogleplay} size={16} />
                    Play Store
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4"
            onClick={() => {
              document.body.classList.remove('overflow-hidden')
              setActiveProject(null)
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 w-full max-w-5xl relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {projects
                .filter((p) => p.id === activeProject)
                .map((p) => (
                  <div key={p.id} className="flex flex-col md:flex-row gap-6">
                    {/* Demo video if applicable */}
                    {p.youtube && (
                      <div className="flex-1 aspect-video w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          className="w-full h-full"
                          src={p.youtube}
                          title={p.title + ' video'}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {/* Details */}
                    <div className="flex-1 flex flex-col gap-4">
                      <h3 className="text-2xl md:text-3xl font-bold">{p.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{p.description}</p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {p.tech.map((t) => (
                          <span
                            key={t.name}
                            className="flex items-center gap-2 text-xs bg-sky-100 dark:bg-sky-900/40
                                       text-sky-800 dark:text-sky-300 rounded-full px-3 py-1 font-medium"
                          >
                            <RenderIcon Icon={t.Icon} size={14} />
                            {t.name}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 mt-4">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors"
                          >
                            <RenderIcon Icon={SiGithub} className='dark:invert' size={16} /> GitHub
                          </a>
                        )}
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors"
                          >
                            <RenderIcon Icon={FiExternalLink} size={16} /> Live Demo
                          </a>
                        )}
                        {p.play && (
                          <a
                            href={p.play}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors"
                          >
                            <RenderIcon className='dark:invert' Icon={SiGoogleplay} size={16} />
                            Play Store
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
