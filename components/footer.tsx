"use client"
import { Zap, Facebook, Instagram, Twitter, Youtube, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappNumber = "1234567890" // Reemplazar con el número real

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me gustaría obtener más información sobre Mythbots")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-tertiary" />
              <h3 className="text-2xl font-bold">Mythbots</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Innovación tecnológica a tu alcance. Especialistas en impresión 3D, diseño PCB, robótica educativa y
              automatización.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-tertiary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tertiary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tertiary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tertiary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#funkos" className="hover:text-tertiary transition-colors">
                  Funkos Personalizados
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tertiary transition-colors">
                  Impresión 3D
                </a>
              </li>
              <li>
                <a href="#pcb" className="hover:text-tertiary transition-colors">
                  Diseño PCB
                </a>
              </li>
              <li>
                <a href="#robotics" className="hover:text-tertiary transition-colors">
                  Robótica Educativa
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-tertiary transition-colors">
                  Cursos Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto rápido */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto Rápido</h4>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 text-gray-300 hover:text-tertiary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
              <a
                href="mailto:info@mythbots.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-tertiary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@mythbots.com</span>
              </a>
            </div>
          </div>

          {/* Información adicional */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-tertiary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tertiary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tertiary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tertiary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {currentYear} Mythbots. Todos los derechos reservados.</p>
            <p className="text-gray-300 text-sm mt-4 md:mt-0">Hecho con ❤️ en México</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
