"use client"
import { ArrowRight, Cpu, Printer, Bot } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-br from-primary via-primary-light to-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Innovación <span className="text-tertiary">Tecnológica</span> a tu Alcance
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Especialistas en impresión 3D, diseño PCB, robótica educativa y automatización. Transformamos tus ideas en
              realidad tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection("funkos")}
                className="bg-tertiary hover:bg-tertiary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Ver Servicios <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contactar
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Printer className="h-8 w-8 text-tertiary mb-2" />
                <span className="text-sm">Impresión 3D</span>
              </div>
              <div className="flex flex-col items-center">
                <Cpu className="h-8 w-8 text-tertiary mb-2" />
                <span className="text-sm">Diseño PCB</span>
              </div>
              <div className="flex flex-col items-center">
                <Bot className="h-8 w-8 text-tertiary mb-2" />
                <span className="text-sm">Robótica</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600&text=Mythbots+Technology+Hub"
              alt="Mythbots Technology Hub"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-tertiary text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">+100 Proyectos</p>
              <p className="text-sm">Completados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
