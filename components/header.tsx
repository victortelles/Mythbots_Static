"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/*Colocar el logotipo*/}
            <img src="../Assets/logotipo.png" alt="Mythbots Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Mythbots</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection("funkos")} className="hover:text-secondary transition-colors">
              Funkos
            </button>
            <button onClick={() => scrollToSection("pcb")} className="hover:text-secondary transition-colors">
              PCB Design
            </button>
            <button onClick={() => scrollToSection("robotics")} className="hover:text-secondary transition-colors">
              Robótica
            </button>
            <button onClick={() => scrollToSection("courses")} className="hover:text-secondary transition-colors">
              Cursos
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-secondary transition-colors">
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-light pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("funkos")}
                className="text-left hover:text-secondary transition-colors"
              >
                Funkos Personalizados
              </button>
              <button
                onClick={() => scrollToSection("pcb")}
                className="text-left hover:text-secondary transition-colors"
              >
                PCB Design
              </button>
              <button
                onClick={() => scrollToSection("robotics")}
                className="text-left hover:text-secondary transition-colors"
              >
                Robótica Educativa
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left hover:text-secondary transition-colors"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-secondary transition-colors"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
