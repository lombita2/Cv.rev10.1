import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    year: 2021,
    company: "GP Industrial Asesoría",
    role: "Asesor Industrial – Auditor Interno",
    achievements: [
      "Optimización de sistemas de gestión: +20% eficiencia",
      "Liderazgo en auditorías internacionales"
    ]
  },
  {
    year: 2018,
    company: "PLIMER S.A.",
    role: "Responsable de Sistema de Gestión",
    achievements: [
      "Transición exitosa ISO 9001:2015",
      "Reducción 35% en no conformidades"
    ]
  },
  {
    year: 2015,
    company: "PRAXAIR S.R.L.",
    role: "Analista de Productividad",
    achievements: [
      "Reducción 15% en costos operativos",
      "Implementación Lean Six Sigma"
    ]
  },
  {
    year: 2012,
    company: "PSA Peugeot Citroën",
    role: "Analista de Calidad",
    achievements: [
      "Supervisión de estándares europeos",
      "Reducción 25% en defectos críticos"
    ]
  }
]

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.year}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                <span className="text-lg font-semibold bg-primary text-primary-foreground px-2 py-1 rounded">{exp.year}</span>
              </div>
              <p className="text-lg mb-2">{exp.role}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default ExperienceTimeline

