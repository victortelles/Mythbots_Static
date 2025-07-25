"use client"
import type React from "react"
import { useState } from "react"
import { MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const whatsappNumber = "3329671436" // Reemplazar con el número real

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de envío de email
    /*
    alert("Mensaje enviado correctamente. Te responderemos pronto!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    */
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me gustaría obtener más información sobre los servicios de Mythbots")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  // Enviar datos del formulario por WhatsApp
  const handleWhatsAppForm = () => {
    const subjectLabel: Record<string, string> = {
      funkos: "Funkos Personalizados",
      impresion: "Impresión 3D",
      pcb: "Diseño PCB",
      robotica: "Robótica Educativa",
      cursos: "Cursos Online",
      otro: "Otro"
    };
    const message = encodeURIComponent(
      `Hola! Quiero contactar a Mythbots desde el formulario de la web:\n` +
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Asunto: ${subjectLabel[formData.subject] || "No especificado"}\n` +
      `Mensaje: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Contacto</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MessageCircle className="h-6 w-6 text-tertiary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-tertiary">WhatsApp</h4>
                  <p className="text-gray-100">Respuesta inmediata para consultas rápidas</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-tertiary hover:text-tertiary-light transition-colors mt-2 font-semibold"
                  >
                    {whatsappNumber}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-tertiary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-tertiary">Email</h4>
                  <p className="text-gray-100">Para consultas detalladas y cotizaciones</p>
                  <a
                    href="mailto:info@mythbots.com"
                    className="text-tertiary hover:text-tertiary-light transition-colors mt-2 font-semibold"
                  >
                    themythbots@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-tertiary mt-1" />
                <div>
                  {/*sea un a href con link de google maps*/}
                  <a href="https://maps.app.goo.gl/GydYcuk5Aw8BaS3D6">
                    <h4 className="font-semibold mb-2 text-tertiary">Ubicación</h4>
                  </a>
                  <p className="text-gray-100">Av Niños Héroes 2267, int 208 44190 Guadalajara, Mexico</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-tertiary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-tertiary">Horarios de Atención</h4>
                  <p className="text-gray-100">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-100">Sábados: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/*Formulario de contacto*/}
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Envíanos un Mensaje</h3>

            {/*Formulario*/}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Asunto *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="funkos">Funkos Personalizados</option>
                  <option value="impresion">Impresión 3D</option>
                  <option value="pcb">Diseño PCB</option>
                  <option value="robotica">Robótica Educativa</option>
                  <option value="cursos">Cursos Online</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              {/*Botón de email (simulado)*/}
              {/*
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="mr-3 h-5 w-5" />
                Enviar Mensaje
              </button>
              */}
              {/*Botón de whatsapp*/}
              <button
                type="button"
                onClick={handleWhatsAppForm}
                className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-sm hover:shadow-md focus:shadow-md active:scale-[0.98]"
              >
                <Send className="mr-3 h-5 w-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
