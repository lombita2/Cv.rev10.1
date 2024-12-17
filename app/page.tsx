"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Moon, Sun, Twitter, Linkedin, Instagram, Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import EducationChart from "@/components/EducationChart"
import SkillsChart from "@/components/SkillsChart"
import AchievementsCharts from "@/components/AchievementsCharts"

export default function JulianLombardoCV() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="container mx-auto p-4 space-y-8">
        <header className="flex justify-between items-center">
          <motion.h1 
            className="text-4xl font-bold text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Julian Ezequiel Lombardo
          </motion.h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Professional Profile</CardTitle>
              <CardDescription>
                Auditor Líder SGI e Inspector de Seguridad e Higiene con experiencia en implementación de normativas ISO y gestión integral de sistemas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Profesional dinámico y metódico, especializado en la auditoría de Sistemas Integrados de Gestión (SGI) bajo estándares ISO 9001, 14001 y 45001. Mi enfoque combina una sólida experiencia técnica con habilidades interpersonales, facilitando la integración de procesos eficientes y sostenibles. Apasionado por liderar equipos hacia la mejora continua, mi prioridad es garantizar el cumplimiento normativo, la seguridad operativa y la excelencia en cada proyecto.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="experience" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <ExperienceTimeline />
          </TabsContent>
          <TabsContent value="education">
            <EducationChart />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsChart />
          </TabsContent>
          <TabsContent value="achievements">
            <AchievementsCharts />
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+54 9 11 1234-5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>julian.lombardo@email.com</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/julianlombardo" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/julianlombardo" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/julianlombardo" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

