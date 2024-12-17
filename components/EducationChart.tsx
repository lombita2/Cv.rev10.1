import React from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const educationData = [
  { subject: "Gestión de Proyectos", A: 95, fullMark: 100 },
  { subject: "Sistemas ISO", A: 90, fullMark: 100 },
  { subject: "Auditoría", A: 85, fullMark: 100 },
  { subject: "Seguridad Industrial", A: 88, fullMark: 100 },
  { subject: "Análisis de Datos", A: 82, fullMark: 100 },
  { subject: "Lean Six Sigma", A: 80, fullMark: 100 },
  { subject: "Gestión de Riesgos", A: 87, fullMark: 100 }
]

const educationExperiences = [
  {
    title: "Maestría en Gestión de Calidad y Excelencia Empresarial",
    institution: "Universidad de Buenos Aires",
    year: "2019 - 2021",
    description: "Especialización en implementación de sistemas de gestión integrados y mejora continua en entornos industriales."
  },
  {
    title: "Diplomatura en Dirección de Proyectos",
    institution: "Universidad Tecnológica Nacional",
    year: "2017",
    description: "Formación avanzada en metodologías ágiles y tradicionales de gestión de proyectos."
  },
  {
    title: "Ingeniería Industrial",
    institution: "Universidad Nacional de Córdoba",
    year: "2008 - 2013",
    description: "Formación integral en procesos industriales, optimización de recursos y gestión de la producción."
  },
  {
    title: "Certificación Lean Six Sigma Green Belt",
    institution: "American Society for Quality (ASQ)",
    year: "2016",
    description: "Especialización en metodologías de mejora de procesos y reducción de variabilidad."
  }
]

const EducationChart: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Education & Expertise</CardTitle>
          <CardDescription>Áreas de conocimiento y nivel de experiencia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={educationData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Nivel de Experiencia" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationExperiences.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{edu.title}</CardTitle>
                <CardDescription>{edu.institution} | {edu.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default EducationChart

