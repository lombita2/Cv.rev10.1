import React from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillsData = [
  { skill: "Liderazgo", level: 90 },
  { skill: "Gestión de Equipos", level: 85 },
  { skill: "Análisis de Riesgos", level: 88 },
  { skill: "Mejora Continua", level: 92 },
  { skill: "Comunicación", level: 87 },
  { skill: "Resolución de Problemas", level: 89 },
  { skill: "Pensamiento Estratégico", level: 86 }
]

const languagesData = [
  { lang: "Spanish", level: 100 },
  { lang: "English", level: 90 },
  { lang: "Portuguese", level: 60 },
  { lang: "French", level: 40 }
]

const technicalSkills = [
  { skill: "ISO 9001:2015", description: "Implementación y auditoría de sistemas de gestión de calidad" },
  { skill: "ISO 14001:2015", description: "Gestión ambiental y sostenibilidad empresarial" },
  { skill: "ISO 45001:2018", description: "Sistemas de gestión de seguridad y salud en el trabajo" },
  { skill: "Lean Six Sigma", description: "Metodologías de mejora de procesos y reducción de variabilidad" },
  { skill: "Gestión de Proyectos (PMI)", description: "Planificación, ejecución y control de proyectos complejos" },
  { skill: "Auditoría Interna", description: "Evaluación de conformidad y eficacia de sistemas de gestión" }
]

const SkillsChart: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Professional Skills</CardTitle>
          <CardDescription>Habilidades clave y niveles de competencia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Skill Level" dataKey="level" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Languages</h3>
              {languagesData.map((lang, index) => (
                <motion.div 
                  key={lang.lang}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{lang.lang}</span>
                    <span>{lang.level}%</span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technical Expertise</CardTitle>
          <CardDescription>Competencias técnicas especializadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{skill.skill}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillsChart

