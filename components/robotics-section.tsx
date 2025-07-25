"use client"
import { Bot, MessageCircle, GraduationCap, Users, Clock } from "lucide-react"

export default function RoboticsSection() {
  const whatsappNumber = "+3329671436"

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Quisiera saber más información sobre los cursos de robótica.")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <section id="robotics" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Robótica Educativa</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Clases presenciales y talleres de robótica para todas las edades. Aprende programación, electrónica y
            mecánica de forma práctica y divertida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <GraduationCap className="h-12 w-12 text-tertiary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Nivel Básico</h3>
            <p className="text-gray-600 mb-4">
              Introducción a la robótica con kits educativos. Ideal para niños de 8-12 años.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Construcción de robots simples</li>
              <li>• Programación visual</li>
              <li>• Sensores básicos</li>
              <li>• 8 clases de 2 horas</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Users className="h-12 w-12 text-tertiary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Nivel Intermedio</h3>
            <p className="text-gray-600 mb-4">
              Robótica con Arduino y componentes electrónicos. Para jóvenes de 13-17 años.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Programación en C++</li>
              <li>• Circuitos electrónicos</li>
              <li>• Sensores avanzados</li>
              <li>• 12 clases de 2.5 horas</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Bot className="h-12 w-12 text-tertiary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-4">Nivel Avanzado</h3>
            <p className="text-gray-600 mb-4">
              Robótica profesional con ROS y visión artificial. Para adultos y estudiantes universitarios.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• ROS (Robot Operating System)</li>
              <li>• Visión por computadora</li>
              <li>• Machine Learning</li>
              <li>• 16 clases de 3 horas</li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="../../Assets/3d_print.jpg"
              alt="Taller de robótica educativa"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">¿Por qué elegir nuestros cursos?</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-tertiary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Clases Presenciales</h4>
                  <p className="text-white/80">Aprendizaje hands-on con instructores expertos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-tertiary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Grupos Reducidos</h4>
                  <p className="text-white/80">Máximo 8 estudiantes por clase para atención personalizada</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Bot className="h-6 w-6 text-tertiary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Proyectos Reales</h4>
                  <p className="text-white/80">Construye robots funcionales que puedes llevar a casa</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="mt-8 bg-tertiary hover:bg-tertiary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Consultar Horarios
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
