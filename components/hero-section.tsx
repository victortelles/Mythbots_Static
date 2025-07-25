"use client"

import { ArrowRight, Cpu, Printer, Bot } from "lucide-react"

//Array de servicios con iconos y etiquetas
const services = [
  {
    icon: Printer,
    label: "Impresión 3D"
  },
  {
    icon: Cpu,
    label: "Diseño PCB"
  },
  {
    icon: Bot,
    label: "Robótica"
  }
];

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gray-light min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Titulo*/}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
              Innovación <span className="text-tertiary">Tecnológica</span> a tu Alcance
            </h1>
            {/*Descripcion*/}
            <p className="text-xl mb-8 text-gray-700">
              Especialistas en impresión 3D, diseño PCB, robótica educativa y automatización. Transformamos tus ideas en
              realidad tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/** Botón para ver servicios */}
              <button
                onClick={() => scrollToSection("funkos")}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-sm hover:shadow-md focus:shadow-md active:scale-[0.98]"
              >
                Ver Servicios <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary hover:bg-gray-dark hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors shadow-sm hover:shadow-md focus:shadow-md active:scale-[0.98]"
              >
                Contactar
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="flex flex-col items-center bg-white/60 border border-gray-200 rounded-xl shadow-none py-6 px-2 hover:shadow-md transition-all"
                >
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm text-primary font-semibold">{service.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen del Hero */}
          <div className="relative">
            <img
              src="../../Assets/3d_print_logo.jpg"
              alt="Mythbots Technology Hub"
              className="rounded-2xl shadow-2xl bg-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold">+25 Proyectos</p>
              <p className="text-sm">Completados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
