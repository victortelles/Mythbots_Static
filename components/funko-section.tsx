"use client"
import { MessageCircle, Star, Users } from "lucide-react"

export default function FunkoSection() {
  const whatsappNumber = "1234567890" // Reemplazar con el número real

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Quiero información sobre Funkos personalizados")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <section id="funkos" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Funkos Personalizados</h2>
            <p className="text-xl mb-8 text-gray-200">
              Diseña tu propio Funko o solicita una figura personalizada. Utilizamos tecnología de impresión 3D de alta
              precisión para crear figuras únicas que capturen tu personalidad o la de tus seres queridos.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Star className="h-8 w-8 text-tertiary mx-auto mb-2" />
                <p className="text-sm">Alta Calidad</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-tertiary mx-auto mb-2" />
                <p className="text-sm">100% Personalizado</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-tertiary mx-auto mb-2" />
                <p className="text-sm">Asesoría Completa</p>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Contactar por WhatsApp
            </button>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=500&text=Funkos+Personalizados+3D"
              alt="Funkos personalizados"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-tertiary text-white px-4 py-2 rounded-lg">
              <p className="font-semibold">Desde $25</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
