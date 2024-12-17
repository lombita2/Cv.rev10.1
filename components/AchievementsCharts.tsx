import React from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const achievementsData = [
  { name: "Eficiencia Operativa", value: 20 },
  { name: "Reducción de No Conformidades", value: 35 },
  { name: "Reducción de Costos", value: 15 },
  { name: "Reducción de Defectos", value: 25 },
  { name: "Incremento de Trazabilidad", value: 50 },
  { name: "Mejora en Satisfacción del Cliente", value: 30 }
]

const impactOverTimeData = [
  { year: 2018, impact: 20 },
  { year: 2019, impact: 40 },
  { year: 2020, impact: 60 },
  { year: 2021, impact: 80 },
  { year: 2022, impact: 100 }
]

const projectSuccessData = [
  { project: "Implementación ISO 9001", success: 95 },
  { project: "Optimización de Procesos", success: 88 },
  { project: "Reducción de Residuos", success: 75 },
  { project: "Mejora de Seguridad Laboral", success: 92 },
  { project: "Digitalización de Auditorías", success: 85 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d']

const keyAchievements = [
  {
    title: "Liderazgo en Implementación ISO",
    description: "Dirigí con éxito la implementación de ISO 9001:2015 en 3 plantas industriales, logrando la certificación en tiempo récord."
  },
  {
    title: "Optimización de Costos Operativos",
    description: "Reduje los costos operativos en un 15% a través de la implementación de metodologías Lean y Six Sigma."
  },
  {
    title: "Mejora en Seguridad Laboral",
    description: "Disminuí el índice de accidentes laborales en un 40% mediante la implementación de un programa integral de seguridad."
  },
  {
    title: "Innovación en Gestión de Calidad",
    description: "Desarrollé e implementé un sistema digital de auditorías que aumentó la eficiencia del proceso en un 30%."
  }
]

const AchievementsCharts: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Distribución de logros clave en diferentes áreas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={achievementsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {achievementsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Impact Over Time</CardTitle>
          <CardDescription>Evolución del impacto profesional a lo largo de los años</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={impactOverTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="impact" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Success Rates</CardTitle>
          <CardDescription>Porcentaje de éxito en proyectos clave</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectSuccessData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="project" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="success" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {keyAchievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsCharts

